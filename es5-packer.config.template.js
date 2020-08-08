const path = require('path');

module.exports = {
    basePath: path.resolve('.'),
    js: {
        srcDir: 'src/js',
        files: [
            'index.js',
            'foo.js',
            'bar.js'
        ],
        dist: 'dist/bundle.min.js'
    }
}