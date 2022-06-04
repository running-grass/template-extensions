import esbuild from 'esbuild';
import htmlPlugin from '@chialab/esbuild-plugin-html';

await esbuild.build({
    entryPoints: ['src/index.html'],
    outdir: 'dist',
    assetNames: 'assets/[name]-[hash]',
    chunkNames: '[ext]/[name]-[hash]',
    bundle: true,
    plugins: [
        htmlPlugin(),
    ],
});