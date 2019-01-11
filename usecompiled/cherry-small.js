const Success = require('@idgen/famous-quotes/compiled/Success');
const Universe = require('@idgen/famous-quotes/compiled/Universe');

function small() {
  return Success.edison() + '\n' + Universe.hawking();
}

module.exports = small;
