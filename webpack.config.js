const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
    context: src,
    entry: {
        app: './js/index.js'
    },
    output: {
        path: dist,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: ['babel-loader'],
            }
        ]
    }
};
