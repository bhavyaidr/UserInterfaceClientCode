import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
	userName:"",
	address:"",
	currentCity:"",
	hometown:"",
	landmark:"",
	pincode:"",
	educaton:"",
	highSchool:"",
	college:"",
	sociallink:"",
	language:"",
	about:"",
	other:"",
	hobbies:"",
	skills:"",
	music:"",
	programmes:"",
	team:"",
    people:"",
    quotes:"",
    event:"",
    relationship:"",

	actions:{
		doCreate() {
		// const userRecord=	this.store.createRecord('user', {
  // 			email: this.get("email"),
  // 			userName: this.get("userName"),
  // 			password: this.get("password"),


  // 			password: "test"
		// });
		const self = this;
		const dataRecord = {
							"userName" :  this.get("userName"),
							"address":this.get("address"),
	                        "currentCity":this.get("currentCity"),
	                        "hometown":this.get("hometown"),
                            "landmark":this.get("landmark"),
	                        "pincode":this.get("pincode"),
	                        "educaton":this.get("educaton"),
	                        "highSchool":this.get("highSchool"),
	                        "college":this.get("college"),
	                        "sociallink":this.get("sociallink"),
	                        "language":this.get("language"),
	                        "about":this.get("about"),
	                        "other":this.get("other"),
	                        "hobbies":this.get("hobbies"),
	                        "skills":this.get("skills"),
	                        "music":this.get("music"),
	                        "programmes":this.get("programmes"),
	                        "team":this.get("team"),
                            "people":this.get("people"),
                            "quotes":this.get("quotes"),
                            "event":this.get("event"),
                            "relationship":this.get("relationship"),
                            password: "test"
						   }
		Ember.$.ajax
      	({
	        type: "POST",
	        url: "http://localhost:9092/users/20",
	        contentType: "application/json;charset=utf-8",
	        data: JSON.stringify(dataRecord),
	        dataType: "json",
	        success: function(data) {
	         self.set("test", true);
	        },
	        error: function(xhr, error){
	            self.set("test", true);
	        } 
	        
    	}) 


		},
		

	}
	

});
