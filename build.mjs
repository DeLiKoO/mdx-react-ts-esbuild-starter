import esbuild from 'esbuild';
import config from './.esbuildrc.mjs';

esbuild.build(Object.assign(
  config,
  {
    minify: true,
  }
)).catch(() => process.exit(1))

