import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
    plugins: [
        resolve(),
	commonjs({
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**'
            ],
            namedExports: {
                'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
//        terser()               
    ]
};
