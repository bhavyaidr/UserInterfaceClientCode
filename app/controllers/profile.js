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
aboutYou:"",
otherNames:"",
hobbies:"",
professionalSkills:"",
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
					"userId" :  this.get("userId"),
					"address":this.get("address"),
                    "currentCity":this.get("currentCity"),
                    "hometown":this.get("hometown"),
                    "landmark":this.get("landmark"),
                    "pincode":this.get("pincode"),
                    "education":this.get("education"),
                    "highSchool":this.get("highSchool"),
                    "college":this.get("college"),
                    "socialLink":this.get("socialLink"),
                    "language":this.get("language"),
                    "aboutYou":this.get("aboutYou"),
                    "otherNames":this.get("otherNames"),
                    "hobbies":this.get("hobbies"),
                    "professionalSkills":this.get("professionalSkills"),
                    "musicArtist":this.get("musicArtist"),
                    "programmes":this.get("programmes"),
                    "sportsTeam":this.get("sportsTeam"),
                    "sportsPeople":this.get("sportsPeople"),
                    "favouriteQuotes":this.get("favouriteQuotes"),
                    "lifeEvents":this.get("lifeEvents"),
                    "bookAuthor":this.get("bookAuthor"),
				   }

var fileInput = document.getElementById('input');
var file = fileInput.files[0];
var formData = new FormData();
formData.append('file', file);
formData.append('type', file.type.substring(6,file.type.length));
///formData.append('filetype',file.type)
var xhr = new XMLHttpRequest();
const url = "http://localhost:9092/" 
// Add any event handlers here...
const imageUploadURL = url + "image/upload/" + this.get("userId")
xhr.open('POST',imageUploadURL, true);
xhr.send(formData);
Ember.$.ajax
	({
    type: "POST",
    url: url + "usersprofile",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(dataRecord),
    dataType: "json",
    success: function(data) {
     if(data.statusCode == 200) {
        alert("Profile created successfully");
     } else {
         alert("Error occured");
     }
    },
    error: function(xhr, error){
        alert("Error occured");
    } 
    
}) 


},


}


});
