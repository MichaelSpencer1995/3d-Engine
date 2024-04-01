import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const config = {
    input: 'src/index.ts',
    output: {
        file: 'dist/umd/3d-engine.js',
        format: 'umd',
        name: '_3dEngine'
    },
    plugins: [
        typescript()
    ]
}

if (process.env.BUILD === 'minify') {
    config.output.file = 'dist/umd/3d-engine.min.js'
    config.plugins.push(terser())
}

export default config