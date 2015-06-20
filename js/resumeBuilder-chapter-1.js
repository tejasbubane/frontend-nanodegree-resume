// APPEND #1
// var awesomeThoughts = "My name is Tejas and I am AWESOME!"
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

// APPEND #2
// var formattedName = HTMLheaderName.replace("%data%", "Tejas Bubane");
// var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// APPEND #3 - Objects!
var bio = {
  "name" : "Tejas Bubane",
  "role" : "Software Engineer",
  "contactInfo" : {
    "mobile" : "9595240353",
    "email": "tejasbubane@gmail.com",
    "twitter" : "@tejasbubane",
    "github": "tejasbubane",
    "blog" : "http://www.foss-geek.blogspot.com",
    "location" : "Mumbai (India)"
  },
  "pictureUrl" : "https://avatars2.githubusercontent.com/u/980783",
  "welcome_message" : "Welcome to my website!",
  "skills" : ["Ruby on Rails", "Javascript", "Elixir", "Emacs"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedMobile);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedTwitter);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedBlog);
$("#header").prepend(formattedLocation);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedPicture);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// APPEND #4 object syntax
var work = {
  "position" : "Software Engineer",
  "employer" : "Infibeam",
  "years" : 2,
  "cityOfBusiness" : "Mumbai"
}

var education = {
  "nameOfLastSchool" : "VIT",
  "years" : 4,
  "schoolCity" : "Pune"
}

var formattedWorkPosition = HTMLworkTitle.replace("%data%", work["position"]);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.nameOfLastSchool);
$("#header").append(formattedWorkPosition);
$("#header").append(formattedSchoolName);

// JSON
var education = {
  "schools": [
    {
      "name": "BCA",
      "city": "Walchandnagar"
    },
    {
      "name": "TC College",
      "city": "Baramati"
    },
    {
      "name": "VIT",
      "city": "Pune"
    }
  ]
}
