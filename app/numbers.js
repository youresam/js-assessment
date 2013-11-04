if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (num >> (bit - 1)) & 1;
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var bin = (num & 0xff).toString(2);
      while(bin.length < 8) {
        bin = '0' + bin;
      }
      return bin;
    },

    multiply: function(a, b) {
      var numDecimals = function(n) {
        var str = n + '';
        var i = str.indexOf('.');
        return (i === -1) ? 0 : str.length - i;
      };
      var wantedDecimals = numDecimals(a) + numDecimals(b);
      return parseFloat((a * b).toFixed(wantedDecimals));
    }
  };
});

