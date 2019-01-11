const Success = require('@idgen/famous-quotes/commonjs/Success');
const Universe = require('@idgen/famous-quotes/commonjs/Universe');

function small() {
  return Success.edison() + '\n' + Universe.hawking();
}

module.exports = small;
