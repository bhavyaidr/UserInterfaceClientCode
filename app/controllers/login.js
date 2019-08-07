import Controller from '@ember/controller';
import Ember from 'ember';

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
		const self = this;
		const dataRecord = {"email" :  this.get("email"),
							"userName" :  this.get("userName"),
							"password" :  this.get("password")
						   }
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
