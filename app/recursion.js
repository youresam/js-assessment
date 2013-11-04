if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var list = [];
      if(data.dir === dirName) {
        dirName = undefined;
      }
      for(var i in data.files) {
        var file = data.files[i];
        if(typeof file === 'object') {
          list = list.concat(this.listFiles(file, dirName));
        } else if(dirName === undefined) {
          list.push(file);
        }
      }
      return list;
    },

    permute: function(arr) {
      if(arr.length === 1) {
        return arr;
      }
      var perms = [];
      for(var i in arr) {
        var remainingNums = arr.slice();
        remainingNums.splice(i, 1);
        var innerPerms = this.permute(remainingNums);
        for(var j in innerPerms) {
          perms.push([arr[i]].concat(innerPerms[j]));
        }
      }
      return perms;
    }
  };
});
