if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var nextNum = start;
      var step = function() {
        console.log(nextNum++);
        if(nextNum > end) {
          clearInterval(interval);
        }
      };
      var interval = setInterval(step, 100);
      step();
      return {
        cancel: function() {
          clearInterval(interval);
        }
      };
    }
  };
});