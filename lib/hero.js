'use strict';

// let wonderWoman = {
//   name: 'Diana Prince',
//   alias: 'Wonder Woman',
//
//   usePower: function() {
//     return 'Deflects bullets with bracelets';
//   }
// }

const Hero = function Hero( name, alias, power ) {
  this.name = name;
  this.alias = alias;
  this._power = power;
};

Hero.prototype.usePower = function() {
  return this.alias + ' aka ' + this.name + ' ' + this._power + '!';
};
//alias + ' aka ' + name + usePower + '!'
module.exports = Hero;
