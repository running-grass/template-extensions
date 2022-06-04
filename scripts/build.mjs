import esbuild from 'esbuild';
import htmlPlugin from '@chialab/esbuild-plugin-html';
import copy from 'esbuild-plugin-copy-watch'
import { cleanPlugin } from 'esbuild-clean-plugin';


await esbuild.build({
    entryPoints: {
        'content_script': "src/contentScript.tsx",
        'injects/download': 'src/injects/download.tsx',
    },
    outdir: 'dist',
    bundle: true,
    metafile: true,
    watch: true,
    plugins: [
        cleanPlugin(),
        htmlPlugin(),
        copy([
            { from: 'public', to: '' }, // will copy into dest/static
        ]),
    ],
});