const quotes = require('@idgen/famous-quotes/commonjs');

function all() {
  return quotes.edison() + '\n' + quotes.hawking();
}

module.exports = all;
