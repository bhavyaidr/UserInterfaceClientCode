import Controller from '@ember/controller';
import Ember from 'ember';
import moment from 'moment';

export default Controller.extend({
	email:"",
	userName:"",
	password:"",


	actions:{
		doLogin() {
		// const userRecord=	this.store.createRecord('user', {
  // 			email: this.get("email"),
  // 			userName: this.get("userName"),
  // 			password: this.get("password"),


  // 			password: "test"
		// });
		const currentTime = moment.unix("1565856526").format('dddd, MMMM Do, YYYY h:mm:ss A');
		const selectedDatePickerTime = moment.utc(this.get("expiresAt"), "ddd MMMM Do YYYY h:mm:ss A").unix();
		const self = this;
		const dataRecord = {"email" :  this.get("email"),
							"userName" :  this.get("userName"),
							"password" :  this.get("password")
						   }

		var fileInput = document.getElementById('input');
var file = fileInput.files[0];
var formData = new FormData();
formData.append('file', file);
var xhr = new XMLHttpRequest();
  // Add any event handlers here...
  xhr.open('POST',"http://localhost:9092/image/upload", true);
  xhr.send(formData);
		Ember.$.ajax
      	({
	        type: "POST",
	        url: "http://localhost:9092/users/20",
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
		doSignUp() {
	this.transitionToRoute("register");	
	}

	}
	

});
