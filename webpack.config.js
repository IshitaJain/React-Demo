/**
 * @author  jaini on 16-02-10
 */
var path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    entry: path.resolve(__dirname, 'app/main.js'),
};
