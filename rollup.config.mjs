import terser from '@rollup/plugin-terser';

const config = (file, plugins) => ({
    input: 'src/index.js',
    output: {
        name: 'geotile',
        format: 'umd',
        indent: false,
        file
    },
    plugins
});

export default [
    config('geo-tile-dev.js', []),
    config('geo-tile.js', [terser()])
];
