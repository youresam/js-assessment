if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
      var summation = 0;
      for(var i in arr) {
        summation += arr[i];
      }
      return summation;
    },

    remove : function(arr, item) {
      return this.removeWithoutCopy(arr.slice(), item);
    },

    removeWithoutCopy : function(arr, item) {
      for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === item) {
          arr.splice(i, 1);
        }
      }
      return arr;
    },

    append : function(arr, item) {
      return arr.concat(item);
    },

    truncate : function(arr) {
      return arr.slice(0, arr.length - 1);
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      return arr.slice(1);
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var occurrences = 0;
      for(var i in arr) {
        if(arr[i] === item) {
          occurrences++;
        }
      }
      return occurrences;
    },

    duplicates : function(arr) {
      var dupes = [];
      for(var i in arr) {
        if(arr.indexOf(arr[i]) < i && dupes.indexOf(arr[i]) === -1) {
          dupes.push(arr[i]);
        }
      }
      return dupes;
    },

    square : function(arr) {
      for(var i in arr) {
        arr[i] *= arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var occurrences = [];
      for(var i in arr) {
        if(arr[i] === target) {
          occurrences.push(i);
        }
      }
      return occurrences;
    }
  };
});
