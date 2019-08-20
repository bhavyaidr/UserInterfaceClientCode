import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
firstName:"",
lastName:"",
mobileNumber:"",
password:"",
emailId:"",
userId :"",



actions:{
doRegister() {
const dataRecord = {"firstName" :  this.get("firstName"),
					"lastName" :  this.get("lastName"),
					"mobileNumber" :  parseInt(this.get("mobileNumber"), 10),
					"password" : this.get("password"),
					"emailId" : this.get("emailId"),
					}

const url = "http://localhost:9092";
const self=this;

Ember.$.ajax
	({
    type: "POST",
    url: url + "/users",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(dataRecord),
    dataType: "json",
    success: function(data) {
     self.transitionToRoute("profile");
    },
    error: function(xhr, error){
    	self.transitionToRoute("profile");
       
    } 
}) 


},


}


});
