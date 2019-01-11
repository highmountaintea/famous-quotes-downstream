const Funny = require('@idgen/famous-quotes/commonjs/Funny');
const Motivational = require('@idgen/famous-quotes/commonjs/Motivational');

function big() {
  return Funny.churchill() + '\n' + Motivational.hawking();
}

module.exports = big;
