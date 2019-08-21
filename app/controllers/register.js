import Controller from '@ember/controller';
import Ember from 'ember';
import config from '../config/environment';

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
                    "userId": this.get("userId")
					}

const url = config.host;
const self=this;

Ember.$.ajax
	({
    type: "POST",
    url: url + "/users",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(dataRecord),
    dataType: "json",
    success: function(data) {
     if(data.statusCode == 200) {
        self.transitionToRoute("profile");
     }
    },
    error: function(xhr, error){
    } 
}) 
},


}


});
