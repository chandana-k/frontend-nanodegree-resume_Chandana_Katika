var bio = {
	"name": "Chandana Katika",
//	"role": "Software Developer",
	"contacts": {
		"email": "chandanakatika@gmail.com",
		"github": "ck-2016",
		"twitter": "@chandanakatika",
		"location": "Cary, North Carolina, USA"
	},
//	"picture": "images/me.png",
	"welcomeMessage": "Hi, Welcome and Thanks for stopping by!",
	"skills": ["Python", "HTML", "CSS3", "Javascript"]
};

var work = {
	"jobs": [
		{
			
			
			"location": "Cambridge, Boston, MA",
			"datesWorked": "Jan 2012 - July 2013",
			"description": "Worked on Smartphone and Tablet applications for Blackberry. The Apps were published in the Blackberry App world. The App won a Blackberry Playbook Tablet and Z10 Smartphone."
		},
		{
			
			"location": "NYC, USA",
			"datesWorked": "June 2012",
			"description": "Attended couple of developer conferences at NYC and Boston. Blackberry Jam Tour at NYC"
		},
		{
			
			"location": "Walpole, Boston, MA",
			"datesWorked": "Jan 2012 - July 2012",
			"description": "Dental Observership under Dr. Bachar Saba, DDS"
		},
		
		{
			
			"location": "Bangalore, Karnataka, India",
			"datesWorked": "Nov 2008 - nov 2010",
			"description": "Worked as Associate Dentist in a couple of dental clinics"
		}

		{
			
			"location": "M.R. Ambedkar Dental College and Hospital, Bangalore, Karnataka, India",
			"datesWorked": "Jan 2007 - Oct 2008",
			"description": "As part of One year Internship, Conducted Dental Camps in rural parts of the state, schools and treated children with physical disability at spastic societies."
		}	
	]
};

var education = {
	"schools": [
		{ "name": "Rajiv Gandhi University of Health Sciences",
			"yearsAttended": "2003 - 2008",
			"location": "Bangalore, Karnataka, India",
			"degree": "BDS, Bachelor of Dental Sciences",
			"GPA": "3.25/4.0"
		}		
	],
	"onlineCourses": [
	    { "school": "Udacity",
			"title": "Introduction to Programming Nanodegree",
			"completed": "December 2016",
			
		},
		{ "school": "Code Academy",
			"title": "Javascript",
			"completed": "September 2015",
			
		},
		{ "school": "Code Academy",
			"title": "HTML, CSS3",
			"completed": "July 2015",
			
		},
		{ "school": "Coursera, Code School",
			"title": "Python Programming",
			"completed": "March 2015",
			
		},
		{ "school": "Udacity",
			"title": "Basics in Computer Sciences",
			"completed": "August 2014",
			
		},	
		
	]
};

var projects = {
	"projects": [
		{
			"title": "Created an online movie website using HTML5 and CSS3",
			"datesWorked": "August 2016",
			"description": "Created an online movie website using HTML5 and CSS3 as part of Udacity's Intro to Programming Nanodegree " 
//            "images": ["images/frogger.jpg"],
//		},
		{
			"title": "Online Portfolio",
			"datesWorked": "December 2016",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
//			"images": ["images/portfolio.jpg"],
//			"url": "http://www.cherylcourt.ca/"
		},
		
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

$("#mapDiv").append(googleMap);

