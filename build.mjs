import esbuild from 'esbuild';
import config from './.esbuildrc.mjs';

esbuild.build(config).catch(() => process.exit(1))

