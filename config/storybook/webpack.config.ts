import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import buildCssLoaders from '../build/loaders/buildCssLoaders';
import buildSvgLoader from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default (
  { config }: {config: webpack.Configuration},
) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  if (config && config.module && config.module.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map(
      (rule: RuleSetRule | '...') => {
        if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
          return {
            ...rule,
            exclude: /\.svg$/i,
          };
        }

        return rule;
      },
    );
    config.module.rules.push(buildSvgLoader());

    config.module.rules.push(buildCssLoaders(true));
  }

  return config;
};
