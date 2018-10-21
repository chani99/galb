(function () {

    "use strict";

    var App = angular.module("App.controllers", [
        'ui.bootstrap'
    ]);

    //home controller
    App.controller("home", function ($scope, $modal, UtilSrvc) {

        let num = UtilSrvc.getValuesFromServer('getlastpapers', "/book", onSuccsess, onError);

        function onSuccsess(res) {
            console.log('this is me ' + JSON.stringify(res));
            $scope.lastLaintan = res.data[0]['id'];
            $scope.lastMaida = res.data[4]['id'];
            $scope.lastSt = res.data[8]['id'];
            $scope.lastEmtza = res.data[12]['id'];
            $scope.lastBB = res.data[16]['id'];

            $scope.lastLaintanPages = res.data[0]['number_of_pages'];
            $scope.lastMeidaPages = res.data[4]['number_of_pages'];
            $scope.lastSTPages = res.data[8]['number_of_pages'];
            $scope.lastEmtzaPages = res.data[12]['number_of_pages'];
            $scope.lastBBPages = res.data[16]['number_of_pages'];


        }

        function onError(res) {
            console.log(res);

        }
        //modal product popup function
        $scope.choosePaper = function (paper) {
            var dialogInst = $modal.open({
                templateUrl: "./public/view/popups/popup" + paper + ".html",
                controller: "DialogInstCtrl",
                size: "lg",
                resolve: {
                    selectedUsr: function () {
                        return paper;
                    }
                }
            });
        };



    });


    //dialog popup controller
    App.controller("DialogInstCtrl", function ($scope, $modalInstance, $log) {
        $scope.submitUser = function () {
            $modalInstance.close();
        };
        $scope.cancel = function () {
            $modalInstance.dismiss("cancel");
        };
    });


    // flipbook controller
    App.controller("flipbook", function ($scope, UtilSrvc, $routeParams, $location, $sce) {
        let type = $routeParams.k;
        let num = $routeParams.n;
        let pages = $routeParams.p;

        // $scope.source = 'http://localhost:8081/public/pdf-flipbook-master/?num=' + num + "&folder=" + type;
        $scope.source = 'http://localhost:8081/public/turnjs4/samples/magazine/?num=' + num + "&folder=" + type + "&pages=" + pages;


    });


    // papers controller
    App.controller("papers", function ($scope, $window, $timeout, UtilSrvc, $routeParams, $location, $sce) {
        // $scope.data = [];
        let respond = [];
        $scope.getSelectedPaper = function (folderName, selectedPaper, pages) {
            console.log(selectedPaper);
            if (selectedPaper) {
                let pages = getPagesForPaper(selectedPaper);
                $window.location.href = `#/book?k=${folderName}&n=${selectedPaper}&p=${pages}`;
            }

        }

        //find the pages sum for selected paper from res
        function getPagesForPaper(selectedPaper) {
            let pages = 1;
            for (let i = 0; i < respond.length; i++) {
                let id =respond[i].id;
                if (id == selectedPaper) {
                    pages = respond[i].number_of_pages;
                    break;
                }

            }
            return (pages);
        }

        let num = UtilSrvc.getValuesFromServer('getlastpapers', "/book", onSuccsess, onError);

        function onSuccsess(res) {
            respond = res.data;
            // console.log(res);
            $scope.data = [{
                    lastpaper: res.data[0]['id'],
                    date: res.data[0]['date'],
                    hewd: res.data[0]['hebrew_date'],
                    name: "lainyan",
                    nameHe: "לעניין",
                    lastpapers: [
                        res.data[0]['id'] - 1,
                        res.data[0]['id'] - 2,
                        res.data[0]['id'] - 3
                    ],
                    pages: res.data[0].number_of_pages
                },
                {
                    lastpaper: res.data[4]['id'],
                    date: res.data[4]['date'],
                    hewd: res.data[4]['hebrew_date'],
                    name: "meida",
                    nameHe: "מידע לכל",
                    lastpapers: [
                        res.data[4]['id'] - 1,
                        res.data[4]['id'] - 2,
                        res.data[4]['id'] - 3
                    ],
                    pages: res.data[1].number_of_pages

                },
                {
                    lastpaper: res.data[8]['id'],
                    date: res.data[8]['date'],
                    hewd: res.data[8]['hebrew_date'],
                    name: "shavua",
                    nameHe: "שבוע טוב",
                    lastpapers: [
                        res.data[8]['id'] - 1,
                        res.data[8]['id'] - 2,
                        res.data[8]['id'] - 3
                    ],
                    pages: res.data[8].number_of_pages

                },
                {
                    lastpaper: res.data[12]['id'],
                    date: res.data[12]['date'],
                    hewd: res.data[12]['hebrew_date'],
                    name: "emtza",
                    nameHe: "אמצע השבוע",
                    lastpapers: [
                        res.data[12]['id'] - 1,
                        res.data[12]['id'] - 2,
                        res.data[12]['id'] - 3
                    ],
                    pages: res.data[12].number_of_pages

                },
                {
                    lastpaper: res.data[16]['id'],
                    date: res.data[16]['date'],
                    hewd: res.data[16]['hebrew_date'],
                    name: "lainyanBB",
                    nameHe: "לעניין בני ברק",
                    lastpapers: [
                        res.data[16]['id'] - 1,
                        res.data[16]['id'] - 2,
                        res.data[16]['id'] - 3
                    ],
                    pages: res.data[16].number_of_pages

                },

            ];


        }




        function onError(res) {
            console.log(res);

        }


    });




    App.controller("contactform", function ($scope, UtilSrvc, modelService, $location, $window) {


        $scope.contact = {
            fname: "",
            lname: "",
            phone: "",
            email: "",
            content: ""
        }


        $scope.contactSubmit = function () {
            let content = new modelService.ContactModel($scope.contact);
            console.log(content);
            UtilSrvc.sendData(content, "contact", sucsses, error);

        }

        function sucsses(res) {
            $window.location.href = `#/home`;
            alert("ההודעה נקלטה במערכת בהצלחה, ותטופל בהקדם");

        }

        function error(res) {
            alert(res);
        }



    });







}());