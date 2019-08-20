import Controller from '@ember/controller';
import Ember from 'ember';
import moment from 'moment';

export default Controller.extend({
email:"",
userId:"",
password:"",
mobileNumber:"",

actions:{
	doLogin() {
	
	const self = this;
	const dataRecord = {"email" :  this.get("email"),
						"userId" :  this.get("userId"),
						"password" :  this.get("password"),
						"mobileNumber" : this.get("mobileNumber"),
					   }
					   Ember.$.ajax
  	({
        type: "POST",
        url: "http://localhost:9092/users/20",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(dataRecord),
        dataType: "json",
        success: function(data) {
         self.transitionToRoute("register");
        },
        error: function(xhr, error){
        self.transitionToRoute("register");
           
        } 
	}) 


	},
	doSignUp() {
this.transitionToRoute("register");	
}

}


});
