import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
userId:"",
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


actions:{
doCreate() {
const self = this;
const dataRecord = {
					"userName" :  this.get("userId"),
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
                    "event":this.get("event")
				   }

var fileInput = document.getElementById('input');
var file = fileInput.files[0];
var formData = new FormData();
formData.append('file', file);
///formData.append('filetype',file.type)
var xhr = new XMLHttpRequest();
const url = "http://localhost:9092"
// Add any event handlers here...
xhr.open('POST',url + "/image/upload", true);
xhr.send(formData);
Ember.$.ajax
	({
    type: "POST",
    url: url + "/users/20",
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
