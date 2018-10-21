(function () {

  "use strict";

  var App = angular.module("App.filters", []);

  App.filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  });

  //filter for credit card validation
  App.filter("yesNo", function () {
    return function (boolean) {
      return boolean ? "Yes" : "No";
    }
  })
  // just copy paste the example above to add more filters


  App.filter('nl2p', function () {
    return function(text){
        text = String(text).trim();
        return (text.length > 0 ? '<p class="line-height-50">' + text.replace(/[\r\n]+/g, '</p><p class="line-height-50">') + '</p>' : null);
    }
});

}());