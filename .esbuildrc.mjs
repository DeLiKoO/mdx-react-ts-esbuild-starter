import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import mdxPlugin from '@mdx-js/esbuild';

export default {
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    outdir: 'public',
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
    plugins: [
        mdxPlugin(),
        pnpPlugin(),
    ],
}