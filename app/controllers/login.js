import Controller from '@ember/controller';
import Ember from 'ember';
import moment from 'moment';
import config from '../config/environment';


export default Controller.extend({
emailId:"",
userId:"",
password:"",
mobileNumber:"",

actions:{
	doLogin() {
	const env = config.host;
	const self = this;
	const dataRecord = {"emailId" :  this.get("emailId"),
						"userId" :  this.get("userId"),
						"password" :  this.get("password"),
						"mobileNumber" : this.get("mobileNumber"),
					   }
	//let url = "http://localhost:9092/users/auth/password/blrdream?emailId=bhavya.gupta12@gmail.com";
	let url = config.host;
    url = url + "/users/auth/password/" + this.get("password") + "?emailId=" + this.get("emailId") + "&mobileNumber=" + this.get("mobileNumber");
	//url = url + this.get("password") + "?emailId=" + this.get("emailId")+ "&mobileNumber=" + this.get("mobileNumber");
  	//let url = http//localhost:9092/users/auth/password/blrdream?emailId=bhavya.gupta12@gmail.com
  	Ember.$.ajax
  	({
        type: "GET",
        url: url,
        success: function(data) {
         if(data.statusCode == 200) {
         	alert("Login suceessful. Please fill your profile details");
         	self.transitionToRoute("profile");
         }else {
         	alert("Login unsuccessfull. Please register yourself");
         	self.transitionToRoute("register");
         }
         
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
