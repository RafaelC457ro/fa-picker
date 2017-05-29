import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano'
import json from 'rollup-plugin-json'

export default {
  entry: 'src/fa-picker.js',
  format: 'cjs',
  plugins: [
    resolve(),
    postcss({
      plugins:[
        cssnext({
          warnForDuplicates: false
        }),
        cssnano()
      ],
      extensions: ['.css'],
    }),
    json(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: 'dist/fa-picker.js'
};
