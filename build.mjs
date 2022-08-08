import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import esbuild from 'esbuild';
import mdxPlugin from '@mdx-js/esbuild';

  esbuild.build({
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    outfile: 'public/index.js',
    loader: {
      '.png': 'dataurl',
      '.svg': 'text',
    },
    format: 'esm',
    target: [
      'chrome60',
      'edge18',
      'firefox60',
      'safari11',
    ],
    plugins: [mdxPlugin(), pnpPlugin()],
  }).catch(() => process.exit(1))

