var postcss = require('postcss');
var prefix = require('postcss-prefix-selector');

module.exports = function(source) {
    this.cacheable();
    var out = postcss().use(prefix({
        prefix: '.some-selector ',
        exclude: ['.c']
    })).process(source).css;
    return source;
};
