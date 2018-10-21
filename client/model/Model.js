
	"use strict";

	App.service('modelService', function () {

		this.ContactModel = function (data) {
			if (data.fname) this.fname = (data.fname);
			if (data.lname) this.lname = (data.lname);
			if (data.email) this.email = (data.email);
			if (data.phone) this.phone = (data.phone);
			if (data.content) this.content = (data.content);
		}


		
		this.OrderModel = function(order){
			if(order.addContent) this.addContent = order.addContent;
			if(order.remarks) this.remarks = order.remarks;
			if(order.type) this.type = order.type;
			if(order.shows) this.shows = order.shows;
			if(order.size) this.size = order.size;
			if(order.location) this.location = order.location;
			if(order.files) this.files = order.files;
			if(order.fname) this.fname = order.fname;
			if(order.lname) this.lname = order.lname;
			if(order.email) this.email = order.email;
			if(order.phone) this.phone = order.phone;
		 };
		 
	
	});



