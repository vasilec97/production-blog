const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// Server delay
server.use(async (res, req, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });

  next();
});

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Login endpoint
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromDB = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromDB) {
      return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    return res.status(500).josn({ message: e.message });
  }
});

// Check user authorization
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// Run server
server.listen(8000, () => console.log('Server is running on port 8000'));
