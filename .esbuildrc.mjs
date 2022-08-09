import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import mdxPlugin from '@mdx-js/esbuild';
import postCssPlugin from 'esbuild-plugin-postcss2';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
    entryPoints: ['./src/index.tsx', './src/index.css'],
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
        postCssPlugin({
            plugins: [tailwindcss, autoprefixer],
        })
    ],
}