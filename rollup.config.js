import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const config = {
    input: 'src/index.ts',
    output: {
        file: 'dist/umd/3D-Engine.js',
        format: 'umd',
        name: '3D Engine'
    },
    plugins: [
        typescript()
    ]
}

if (process.env.BUILD === 'minify') {
    config.output.file = 'dist/umd/3D-Engine.min.js'
    config.plugins.push(terser())
}

export default config