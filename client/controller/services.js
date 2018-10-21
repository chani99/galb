(function () {

    "use strict";

    var App = angular.module("App.services", []);

    App.value('version', '0.1');

    // here is a declaration of simple utility function to know if an given param is a String.
    App.service('UtilSrvc', function ($http) {
        //build form data function
        function buildFormData(product, productImage) {
            var formData = new FormData();

            for (var key in product) {
                if (product.hasOwnProperty(key)) {
                    formData.append(key, product[key] === undefined ? "value-from-client-is-undefined" : product[key]);
                }
            }
            if ($.isEmptyObject(productImage) == false) {
                for (var i = 0; i < productImage.length; i++) {
                    formData.append('files[]', productImage[i]._file, productImage[i].name, );
                }
            }
            return formData;


        }



        // formData.append("userName", userName)
        // if ($.isEmptyObject(productImage) == false) {
        //     let images = [];
        //     for (var i = 0; i < productImage.length; i++) {
        //         images.push(productImage[i]._file);
        //     }
        //     formData.append("uploads", images);
        //     return formData;
        // }



        this.getValuesFromServer = function (params, path, onSuccess, onError) {
            $http({
                url: 'http://localhost:8081' + path,
                method: 'GET',
                params: {
                    params: params
                }
            }).then(onSuccess, onError);
        }


        this.setNorthwind = function (data, onSuccess, onError) {
            $http({
                url: 'http://localhost:8081',
                method: 'POST',
                params: {
                    tableName: data.tableName,
                    data: data
                }
            }).then(onSuccess, onError);
        }

        //send costumers contant mesege to server
        //http POST
        this.sendData = function (data, path, onSuccess, onError) {
            $http({
                url: "http://localhost:8081/" + path,
                method: "POST",
                data: data


            }).then(onSuccess, onError);
        }

        //http POST for inserting data and uploading files
        this.uploadOrder = function (order, orderImage, path, success, error) { //
            var formData = buildFormData(order, orderImage);
            $http.post("http://localhost:8081/" + path, formData, {
                transformRequest: angular.identity,
                headers: {
                    "Content-Type": undefined
                }

            }).then(success, error);

        }


    });



    App.service("validate", function () {

        this.validateForm = function (data) {
            switch (data.type) {
                case "textarea":
                    if (data.content) {
                        
                        if (/\}|\{|;|<|>/.test(data.content)) {
                                return (true);
                        } else {
                            return (false);
                        }
                    } else {
                        return (true);
                    }

                    break;
                case "shows":
                    {
                        if (data.content.length > 0) {
                            for (var i = 0; i < data.content.length; i++) {
                                let show = data.content[i];
                                if (show.shows < 1) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        } else {
                            return true;

                        }

                    }
                    break;
                case "files":
                    {

                        //validate for invalid files
                        var fillesArr = data.content;
                        var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png", ".pdf", ".doc", ".docx", ".ai", ".eps", ".psd", ".xls"];
                        let validFile = false;
                        for (var i = 0; i < fillesArr.length; i++) {
                            var oneFile = fillesArr[i];
                            var sFileName = oneFile.name;
                            let validSFile = false;
                            if (sFileName.length > 0) {
                                for (var j = 0; j < _validFileExtensions.length; j++) {
                                    var sCurExtension = _validFileExtensions[j];
                                    let fileEnding = sFileName.substr(sFileName.length - sCurExtension.length);
                                    if (fileEnding.toLowerCase() === sCurExtension.toLowerCase()) {
                                        validSFile = true;
                                        break;
                                    }
                                }

                            }
                            if (validSFile !== true){
                                validFile = true;
                                break;
                            }

                        }
                        return validFile;
                    }


                    break;

                case "free":
                    let searchWords = ["למכירה", "להשכרה", "מחיר", "במחיר סמלי", "בתשלום סמלי", "sale", "מכירה"];
                    let test = false;
                    for (i = 0; i < searchWords.length; i++) {
                        let word = searchWords[i];
                        var n = data.content.search(word);
                        if (n > -1) {
                            test = true;
                            break;
                        }
                    }
                    if (test) {
                        return false;
                    } else {
                        return true;
                    }
                    break;
            }

        }

    });
    //   App.service("UtilSrvc", function () {

    //     return {
    //       isAString: function(o) {
    //           return typeof o == "string" || (typeof o == "object" && o.constructor === String);
    //       },
    //       helloWorld : function(name) {
    //       	var result = "Hum, Hello you, but your name is too weird...";
    //       	if (this.isAString(name)) {
    //       		result = "Hello, " + name;
    //       	}
    //       	return result;
    //       }
    //     }
    //   });

}());