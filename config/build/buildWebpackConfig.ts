import webpack from 'webpack';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPLugins';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';
import { BuildOptions } from './types/config';

export default function buildWebpaclConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}