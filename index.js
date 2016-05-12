var postcss = require('postcss');
var prefix = require('postcss-prefix-selector');
var loaderUtils = require("loader-utils");

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var query = loaderUtils.parseQuery(this.query);
    return postcss().use(prefix(query)).process(source).css;
};
