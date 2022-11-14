import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/AppRouter';

import 'app/styles/index.scss';

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Suspense fallback="loading">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);

export default App;
