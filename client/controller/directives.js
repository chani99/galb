(function() {

  "use strict";

  var App = angular.module("App.directives",[]);

  App.directive('inputtext', function ($timeout) {
    return {
      restrict:'E',
      replace:true,
      template:'<input type="text"/>',
      scope: {
      	//if there were attributes it would be shown here
      },
      link:function (scope, element, attrs, ctrl) {
      	// DOM manipulation may happen here.
      }
    }
  });



  App.directive('version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });

  
  App.directive('ngFileModel', ['$parse', function ($parse) {
  return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          var model = $parse(attrs.ngFileModel);
          var isMultiple = attrs.multiple;
          var modelSetter = model.assign;
          element.bind('change', function () {
              var values = [];
              angular.forEach(element[0].files, function (item) {
                  var value = {
                     // File Name 
                      name: item.name,
                      //File Size 
                      size: item.size,
                      //File URL to view 
                      url: URL.createObjectURL(item),
                      // File Input Value 
                      _file: item
                  };
                  values.push(value);
              });
              scope.$apply(function () {
                  if (isMultiple) {
                      modelSetter(scope, values);
                  } else {
                      modelSetter(scope, values[0]);
                  }
              });
          });
      }
  };
}]);

// you may add as much directives as you want below
}());