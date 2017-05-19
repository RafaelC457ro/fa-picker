import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import cssnext from 'postcss-cssnext';

export default {
  entry: 'src/fa-picker.js',
  format: 'umd',
  moduleName:'faPicker',
  plugins: [
    resolve(),
    postcss({
      plugins:[
        cssnext()
      ],
      extensions: ['.css'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: 'dist/fa-picker.js'
};
