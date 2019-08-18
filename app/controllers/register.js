import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
	firstName:"",
	surName:"",
	mobileNo:"",
	password:"",


	actions:{
		doRegister() {
		// const userRecord=	this.store.createRecord('user', {
  // 			email: this.get("email"),
  // 			userName: this.get("userName"),
  // 			password: this.get("password"),


  // 			password: "test"
		// });
		

		const self = this;
		let gender="";
		if(document.getElementById('rd1').checked) {
			gender="male";
		} else if(document.getElementById('rd2').checked) {
			gender="female";
		} else if(document.getElementById('rd3').checked) {
			gender="others";
		}


        var e = document.getElementById("monthList");
var strUser = e.options[e.selectedIndex].value;
 var t = document.getElementById("yearList");
var ptrUser = t.options[t.selectedIndex].value;
 var q = document.getElementById("dateList");
var ftrUser = q.options[q.selectedIndex].value;

		
		
		const dataRecord = {"firstName" :  this.get("firstName"),
							"lastName" :  this.get("surName"),
							"mobileNumber" :  parseInt(this.get("mobileNo"), 10),
							"password" : this.get("password"),
							// "gender" : gender,
							// "month": strUser,
							// "year": ptrUser,
							// "date": ftrUser
						   }

const url = "http://35.154.7.11:9092"
		Ember.$.ajax
      	({
	        type: "POST",
	        url: url + "/users",
	        contentType: "application/json;charset=utf-8",
	        data: JSON.stringify(dataRecord),
	        dataType: "json",
	        success: function(data) {
	         self.transitionTo("register");
	        },
	        error: function(xhr, error){
	        	self.transitionToRoute("profile");
	           
	        } 
    	}) 


		},
		

	}
	

});
