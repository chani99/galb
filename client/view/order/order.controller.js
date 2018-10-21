 App.controller("OrderCtrl", function ($scope, UtilSrvc, modelService, validate, $location, $window) {
     $scope.spinner = true;
     $scope.checked = false;
     $scope.chek = [{
             name: "לעניין",
             nameH: "לעניין",
             selected: "",
             shows: ""
         },
         {
             name: "מידע לכל",
             nameH: "מידע-לכל",
             selected: "",
             shows: ""
         },
         {
             name: "אמצע השבוע",
             nameH: "אמצע השבוע",
             selected: "",
             shows: ""
         },
         {
             name: "שבוע טוב",
             nameH: "שבוע טוב",
             selected: "",
             shows: ""
         },

     ];

     $scope.size = [
         "עמוד שלם",
         "דבל",
         "חצי עמוד רוחב",
         "חצי עמוד גובה",
         "רבע עמוד גובה",
         "רבע עמוד רוחב",
         "שמינית עמוד",
         "1/16 (בלוח)",
         "1/32 (בלוח)",
         "קוביה בעמוד ראשון",
     ];


     $scope.place = [
         "מיקום רגיל (ללא תוספת תשלום)",
         "עמוד שער",
         "עמוד גב",
         "עמוד עדיף (חצי ראשון)",
         "שמאל לפני אמצע",
         "דבל אמצע",
     ];

     $scope.validate = {
         addContent: false,
         remarks: false,
         shows: false,
         size: false,
         location: false,
         files: false,
         fname: false,
         lname: false,
         email: false,
         phone: false
     };


     $scope.order = {
         addContent: "",
         remarks: "",
         shows: [],
         size: "",
         location: "",
         files: [],
         fname: "",
         lname: "",
         email: "",
         phone: ""
     };

     //when a papar is checked it ands a value of 1 show and when uncheked - clears shows
     $scope.addNum = function (num, index) {
         if (num) {
             $scope.chek[index].shows = "";
         } else {
             $scope.chek[index].shows = 1;

         }
     }


     $scope.orderSummary = function (chek) {
        $scope.order.shows=[];
         for (var i = 0; i < $scope.chek.length; i++) {
             if (chek[i].shows !== null & chek[i].shows > 0) $scope.order.shows.push({
                 type: chek[i].name,
                 shows: chek[i].shows
             });
         }

         let validate = orderValidate($scope.order); //check validation of all fields
         if (validate === false) {
             $scope.checked = true;
             $scope.order.shows = JSON.stringify($scope.order.shows);
             let order = new modelService.OrderModel($scope.order);
             $scope.spinner = false;
             UtilSrvc.uploadOrder(order, order.files, "order", sucsses, error);
         } else {
             //todo
         }

     }


     function sucsses(res) {

         $scope.order = {
             addContent: "",
             remarks: "",
             shows: [],
             size: "",
             location: "",
             files: [],
             fname: "",
             lname: "",
             email: "",
             phone: ""
         };
         $scope.spinner = true;
         $window.location.href = `#/home`;
         $window.scrollTo(0, 0);

         alert("ההודעה נקלטה במערכת בהצלחה, ותטופל בהקדם");

     }

     function error(res) {
        $scope.spinner = true;
        $scope.checked = false;
        alert(JSON.stringify(res));
     }


     $scope.getSize = function (size) {
         $scope.order.size = size;
     };

     $scope.getLocation = function (size) {
         $scope.order.location = location;
     };


     function orderValidate(order) {
         ///clear errors
         $scope.validate = {
             addContent: false,
             remarks: false,
             shows: false,
             size: false,
             location: false,
             files: false,
             fname: false,
             lname: false,
             email: false,
             phone: false
         };

         //check content
         $scope.validate.addContent = validate.validateForm({
             type: "textarea",
             content: order.addContent
         });

         //check remarks
         if (order.remarks) {
             $scope.validate.remarks = validate.validateForm({
                 type: "textarea",
                 content: order.remarks
             });

         }

         //check shows
         $scope.validate.shows = validate.validateForm({
             type: "shows",
             content: order.shows
         });

         //check files
         if (order.files.length>0) {
             $scope.validate.files = validate.validateForm({
                 type: "files",
                 content: order.files
             });
         }



         //check size
         if (!order.size) {
             $scope.validate.size = true;
         } else {
             $scope.validate.size = false;
         }

         //check locatoin
         if (!order.location) {
             $scope.validate.location = true;
         } else {
             $scope.validate.location = false;
         }


         //check first name
         if (!order.fname) {
             $scope.validate.fname = true
         } else {
             $scope.validate.fname = false;
         }

         //check last name
         if (!order.lname) {
             $scope.validate.lname = true
         } else {
             $scope.validate.lname = false;
         }



         //check phone
         if (!order.phone) {
             $scope.validate.phone = true
         } else {
             $scope.validate.phone = false;
         }

         //check email
         if (!order.email) {
             $scope.validate.email = true
         } else {
             $scope.validate.email = false;
         }


         let test = false;

         for (var key in $scope.validate) {
             if ($scope.validate.hasOwnProperty(key)) {
                 if ($scope.validate[key] === true) {
                     test = true;
                     break;
                 };
             }
         }

         return test;

     }


 });