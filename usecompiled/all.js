const quotes = require('@idgen/famous-quotes/compiled');

function all() {
  return quotes.edison() + '\n' + quotes.hawking();
}

module.exports = all;
