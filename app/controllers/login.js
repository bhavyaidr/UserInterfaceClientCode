import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
	email:"",
	phoneNumber:"",
	actions:{
		doLogin() {
		const userRecord=	this.store.createRecord('user', {
  			email: this.get("email"),
  			phoneNumber: this.get("phoneNumber"),
  			password: "test"
		});
		const self = this;
		Ember.$.ajax
      	({
	        type: "POST",
	        url: "http://localhost:9090/users/1",
	        contentType: "application/json;charset=utf-8",
	        data: JSON.stringify({'name': "amit"}),
	        dataType: "json",
	        success: function(data) {
	          self.set("test", true);
	        },
	        error: function(xhr, error){
	            self.set("test", true);
	        } 
    	}) 


		}
	}
});
