const Funny = require('@idgen/famous-quotes/compiled/Funny');
const Motivational = require('@idgen/famous-quotes/compiled/Motivational');

function big() {
  return Funny.churchill() + '\n' + Motivational.hawking();
}

module.exports = big;
