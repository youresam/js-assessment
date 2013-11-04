if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return {
        then: function(callback) {
          callback(value);
        }
      };
    },

    manipulateRemoteData : function(url) {
      var callback = null;
      $.getJSON(url, function(data) {
        var res = [];
        for(var i in data.people) {
          res.push(data.people[i].name);
        }
        res.sort();
        if(callback !== null) {
          callback(res);
        }
      });
      return {
        then: function(cb) {
          callback = cb;
        }
      };
    }
  };
});
