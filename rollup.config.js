import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import cssnext from 'postcss-cssnext'
import postcssModules from 'postcss-modules'
import cssnano from 'cssnano'
import json from 'rollup-plugin-json'

const cssExportMap = {}

export default {
  entry: 'src/fa-picker.js',
  format: 'umd',
  moduleName: 'faPicker',
  plugins: [
    resolve(),
    postcss({
      plugins: [
        cssnext({
          warnForDuplicates: false
        }),
        postcssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        }),
        cssnano()
      ],
      extensions: ['.css'],
      getExport(id) {
        return cssExportMap[id]
      }
    }),
    json(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'latest',
          {
            es2015: {
              modules: false
            }
          }
        ]
      ],
      plugins: ['external-helpers']
    })
  ],
  dest: 'dist/fa-picker.js'
}
