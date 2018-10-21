 App.controller("luachCtrl", function ($scope, validate, UtilSrvc) {

     //luach model
     var Luach = function (luach) {
         if (luach.content) this.content = luach.content;
         if (luach.remarks) this.remarks = luach.remarks;
         if (luach.type) this.type = luach.type;
         if (luach.shows) this.shows = luach.shows;
         if (luach.section) this.section = luach.section;
         if (luach.fname) this.fname = luach.fname;
         if (luach.lname) this.lname = luach.lname;
         if (luach.email) this.email = luach.email;
         if (luach.phone) this.phone = luach.phone;
     };

     $scope.price = {};

     $scope.luach = {
         content: "",
         remarks: "",
         type: [],
         shows: [],
         section: "",
         fname: "",
         lname: "",
         email: "",
         phone: "",
         heShows: ""
     };


     $scope.validate = {
         content: false,
         remarks: false,
         type: false,
         shows: false,
         section: false,
         fname: false,
         lname: false,
         email: false,
         phone: false
     };




     $scope.section = [];
     let madorim = [
         "דירות למכירה",
         "דירות להשכרה",
         "דירות קייט ותקופה קצרה",
         "חנויות ומחסנים",
         "משרדים",
         "דרושים",
         "מכירות",
         "הסעות",
         "הובלות ושליחויות",
         "תיקונים ושיפוצים",
         "ביגוד לאירועים",
         "חשמלאי מוסמך",
         "הגברות ואביזרים",
         "מתנפחים",
         "קורסים ושיעורים",
         "תפירה",
         "מחשבים",
         "שונות",
         "רכבים השכרה/מכירה",
         "איפור ותסרוקות",
         "שירותים וביקוש עבודה",
         "אבידות",
         "מציאות",
         "למסירה"
     ];
     let chinam = [
         "אבידות",
         "מציאות",
         "למסירה"
     ];

     //if selected free kind of advert - so shows only free sections
     $scope.selectedType = function () {
         if ($scope.luach.type !== false) {
             if ($scope.luach.type === "מדור חינמי (אבידות/מציאות/למסירה-חינם)") {
                 $scope.section = chinam;

             } else {
                 $scope.section = madorim;
             }

         }
     }

     //when a papar is checked it ands a value of 1 show and when uncheked - clears shows
     $scope.addNum = function (num, index) {
         if (num) {
             $scope.chek[index].shows = "";
         } else {
             $scope.chek[index].shows = 1;

         }
     }

     $scope.chek = [{
             name: "lainyan",
             nameH: " לעניין ירושלים",
             selected: "",
             shows: ""
         },
         {
             name: "meida",
             nameH: "מידע-לכל",
             selected: "",
             shows: ""
         },
         {
             name: "emtza",
             nameH: "אמצע השבוע",
             selected: "",
             shows: ""
         },
         {
             name: "shavua",
             nameH: "שבוע טוב",
             selected: "",
             shows: ""
         }, {
             name: "lainyanBB",
             nameH: "לעניין בני ברק",
             selected: "",
             shows: ""
         }


     ];


     $scope.type = [
         " רגיל (ללא תוספת תשלום)",
         "מודגש",
         "נגטיב",
         "מדור חינמי (אבידות/מציאות/למסירה-חינם)"

     ];



     $scope.orderSummary = function (chek) {
         $scope.luach.shows = [];
         $scope.luach.heShows = "";
         $scope.price.wordCount = wordCount($scope.luach.content);
         //  if ($scope.chek.length > 0) $scope.luach.heShows = "<div>";
         for (var i = 0; i < $scope.chek.length; i++) {
             //  if (!!chek[i].selected) $scope.luach.shows.push(chek[i].name);
             if (chek[i].shows !== null & chek[i].shows > 0) {
                 $scope.luach.shows.push({
                     type: chek[i].name,
                     shows: chek[i].shows
                 });
                 $scope.luach.heShows += "<b>שם עיתון: </b>'" + chek[i].nameH + "',  <b> מספר מופעים: </b>" + chek[i].shows + ".\n";
                 console.log($scope.luach.heShows);
             }
         }
         let calcPrice = coculatePrice($scope.luach.shows, $scope.price.wordCount, $scope.luach.type);
         if (calcPrice) {
             $scope.price.total = calcPrice[0];
             $scope.price.discount = calcPrice[1];
             $scope.price.extra = calcPrice[2];
         }





         let validate = orderValidate($scope.luach); //check validation of all fields
         if (validate === false) {
             let luachOrder = new Luach($scope.luach);
             if ($scope.luach.type === "מדור חינמי (אבידות/מציאות/למסירה-חינם)") {
                 UtilSrvc.sendData(luachOrder, 'freeLuach', freesuccess, freeerror);
                 console.log(luachOrder);
             } else {
                 //payment screen
                 $scope.payment = true;
             }
         } else {
             alert("error"); //todo
         }

     }

     function freesuccess(res){
         alert("הודעתך נקלטה במערכת ותפורסם בעיתון המבוקש במידת האפשר");
     }
     
     function freesuccess(freeerror){
        alert("תקלה");
    }

     //count words in a string
     function wordCount(str) {
         let tooShort = 0;
         let count = str.split(" ").length;
         let words = str.split(" ");
         for (i = 0; i < words.length; i++) {
             if (words[i].length <= 1) tooShort += 1;
         }
         return (count - tooShort);
     }



     //coculate price
     function coculatePrice(shows, length, style) {
         let price = 0;
         let extraWords = 0;
         let emtza = false;
         let shavua = false;
         let discount = 0;
         let extraMoney = 0;

         if (length > 10) { //check if lenght is larger then 10 
             extraWords = length - 10;
         }


         for (i = 0; i < shows.length; i++) { //run over all views
             let isBold = 0;
             let isBoldDis = 0;

             switch (shows[i].type) {
                 case "lainyanBB":
                 case "lainyan":

                     let laExtraWords = 0;
                     if (length > 12) { //check if lenght is larger then 12 
                         laExtraWords = (length - 12) * 2;
                     }
                     switch (shows[i].shows) {
                         case 4: //check for discounted pac
                             if (style === "מודגש" || style === "נגטיב") {
                                 isBold = 20;
                                 isBoldDis = 20;
                             }
                             price += 100 + isBold + (4 * laExtraWords);
                             extraMoney += isBold + (4 * laExtraWords);
                             discount += 20 + isBoldDis + (4 * laExtraWords);
                             break;

                         case 10:
                             if (style === "מודגש" || style === "נגטיב") {
                                 isBold = 50;
                                 isBoldDis = 50;
                             };
                             price += 200 + isBold + (10 * laExtraWords);
                             extraMoney += isBold + (10 * laExtraWords);
                             discount += 100 + isBoldDis + (10 * laExtraWords);
                             break;

                         case 50:
                             if (style === "מודגש" || style === "נגטיב") {
                                 isBold = 200;
                                 isBoldDis = 300;
                             };
                             price += 900 + isBold + (50 * laExtraWords);
                             extraMoney += isBold + (50 * laExtraWords);
                             discount += 600 + isBoldDis + (50 * laExtraWords);
                             break;

                         case 100:
                             if (style === "מודגש" || style === "נגטיב") {
                                 isBold = 200;
                                 isBoldDis = 800;
                             };
                             price += 1500 + isBold + (100 * laExtraWords);
                             extraMoney += isBold + (100 * laExtraWords);
                             discount += 1500 + isBoldDis + (100 * laExtraWords);
                             break;

                         default:
                             if (style === "מודגש" || style === "נגטיב") isBold = 10;
                             price += (30 + isBold + laExtraWords) * (shows[i].shows);
                             extraMoney += (isBold + laExtraWords) * (shows[i].shows);
                     }

                     break;

                 case "shavua":
                 case "meida":
                 case "emtza":

                     let extraWords = 0;
                     let tempPrice = 0;


                     //check if lenght is larger then 10 
                     if (length > 10) {
                         extraWords = (length - 10);
                     }
                     //check what style was choosen
                     if (style === "מודגש") isBold = 5;
                     if (style === "נגטיב") isBold = 10;

                     //chek for 10% discount packege
                     if (shows[i].length >= 4) {
                         tempPrice = ((20 + extraWords + isBold) * shows[i].shows) / 100 * 90;
                         price += tempPrice;
                         extraMoney += (isBold + extraWords) * (shows[i].shows);
                         discount += ((20 + extraWords + isBold) * shows[i].shows) / 100 * 10;

                     } else {
                         //normal price package
                         tempPrice = (20 + extraWords + isBold) * shows[i].shows;
                         price += tempPrice;
                         extraMoney += (isBold + extraWords) * (shows[i].shows);
                     }

                     // check for 50% package
                     if (shows[i].type === "emtza") emtza = {
                         num: i,
                         prc: tempPrice
                     };

                     if (shows[i].type === "shavua") shavua = {
                         num: i,
                         prc: tempPrice
                     };

                     break;


             }


         }


         //check if order in emtaz and shavua tov for 50% discount package

         if (emtza !== false && shavua !== false) {
             if (style === "מודגש") isBold = 5;
             if (style === "נגטיב") isBold = 10;

             if (shows[emtza.num].shows === shows[shavua.num].shows) { //all shows
                 price -= (emtza.prc + shavua.prc);
                 let tempPrice = ((20 + extraWords + isBold) * (shows[emtza.num].shows * 2)) / 100 * 75;
                 extraMoney += (isBold + extraWords) * (shows[emtza.num].shows);
                 discount += ((20 + extraWords + isBold) * (shows[emtza.num].shows * 2)) / 100 * 25;

                 price += tempPrice;
             } else { //part of shows
                 price -= (emtza.prc + shavua.prc);
                 let difference = Math.abs(shows[emtza.num].shows - shows[shavua.num].shows);
                 let length = Math.min(shows[emtza.num].shows, shows[shavua.num].shows);
                 let tempPrice = ((20 + extraWords + isBold) * (length * 2)) / 100 * 75;
                 tempPrice += (20 + extraWords + isBold) * difference;
                 price += tempPrice;
                 extraMoney += (isBold + extraWords) * (shows[emtza.num].shows);
                 discount += ((20 + extraWords + isBold) * (length * 2)) / 100 * 25;


             }
         }
         return [price, discount, extraMoney];


     }





     function freesuccess(res) {
         alert('המודעה התקבלה במערכת ותפוסם בעז"ה בעיתון הקרוב')
     }


     function freeerror(res) {
         alert("ישנה בעיה במודעה ששלחתם:" + res);
     }


     function orderValidate(luach) {
         $scope.validate.content = validate.validateForm({
             type: "textarea",
             content: luach.content
         });

         if (luach.remarks) {
             $scope.validate.remarks = validate.validateForm({
                 type: "textarea",
                 content: luach.remarks
             });

         }
         $scope.validate.shows = validate.validateForm({
             type: "shows",
             content: luach.shows
         });

         if (!luach.type) {
             $scope.validate.type = true;
         } else {
             $scope.validate.type = false;
         }

         if (!luach.section) {
             $scope.validate.section = true;
         } else {
             $scope.validate.section = false;
         }

         if (!luach.fname) {
             $scope.validate.fname = true
         } else {
             $scope.validate.fname = false;
         }
         if (!luach.lname) {
             $scope.validate.lname = true
         } else {
             $scope.validate.lname = false;
         }
         if (!luach.phone) {
             $scope.validate.phone = true
         } else {
             $scope.validate.phone = false;
         }
         if (!luach.email) {
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

         //check for not free adverts
         if (test !== true && luach.type === "מדור חינמי (אבידות/מציאות/למסירה-חינם)") {
             let freeLuach = validate.validateForm({
                 type: "free",
                 content: luach.content
             });
             if (freeLuach === false) {
                 alert("התוכן של המודעה אינו מתאים למדור חינמי");
                 test = true;
             }
         }
         return test;

     }


     $scope.backToLuach = function () {
         $scope.payment = false;
     }

     $scope.orderButton = function(){
         alert("עכשיו צריך לחייב את האשראי ולשלוח אישור ומודעה לשרת");
     }

 });