import { BuildPaths } from './types/config';
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export default function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ]
}