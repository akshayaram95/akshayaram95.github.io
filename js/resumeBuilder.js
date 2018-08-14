/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio={

	"name":"Akshaya Ramaswamy",
	"role":"Software Developer",
	
	"welcomemsg":"Pursuing Masters in Computer Science at The University of Texas at Dallas. This site is home to my projects in Data Science,\
				 Machine Learning and Software Development.",
	"skills":["Javascript", "HTML", "CSS", "jQuery","Python", "Spark"],
	"profile":"images/profile.JPG",
	"contacts":
	{"mobile":"(469)-929-4565",
	"email":"akshayaram95@gmail.com",
	"github":"akshayaram95",
	"location":"Dallas, Texas",
	"linkedin":"akshayar"
}
}

var work={

	"jobs":[
	{
		"employer":"iLink Systems",
		"title":"Data Analyst Intern",
		"location":"Redmond, Washington",
		"dates":"June 2018-August 2018",
		"description":"Performed linear regression analysis in Azure Machine Learning Studio using data extracted from Cloudera.\
					   Developed a scheduler for clusters and also handled data present in Cosmos DB.<br>\
					   Worked on a an application for a veterinary medicine company involving Natural Language Processing concepts,\
					   where the objective of the project was text-to-speech processing and then generating reports for the patients<br>\
						Technologies: PySpark, LUIS, Microsoft Azure, Cloudera, Azure Databricks, Power BI, Speech Recognition."
	},
	{
		"employer":"Persistent Systems",
		"title":"Project Intern",
		"location":"Pune, India",
		"dates":"June 2016-May 2017",
		"description":"Developed an Intrusion Detection System(IDS), a client-server architecture based application.\
					   IDS detects SQL Injection and Cross-Site Scripting over a database, using Naive Bayes Classifier. \
					   Upon intrusion, the server is alerted based on Signature Based Detection.<br>\
					   Technologies: CSS, HTML, Java, JavaScript, MySQL, Tomcat Server."
	}
	]
}

var projects={
	"projects":[
	{
		"title":"Near Real Time Road Traffic Event Detection",
		"dates":"March 2018 – May 2018",
		"description":"Gathered tweets using twitter search API and labelled instances manually. Pre-processed gathered tweets and extracted important\
					   features to build a model using Spark MLlib. Used twitter stream API to stream live tweets into Kafka for reliability and \
					   classified tweets with the trained model. Tweets classified as traffic were indexed to Elasticsearch for querying.\
					   Constructed a traffic heat map for New York City by querying Elasticsearch for traffic data.<br>\
					   Technologies: Tweepy, Kafka, Elasticsearch, Spark Framework, NLTK, Google Maps API",
		"images":["images/traffic_pic_1.png"],
		"link":"https://github.com/akshayaram95/Near-Real-Time-Road-Traffic-Event-Detection-Using-Twitter-and-Spark."
	},
	{
		"title":"TalkingData AdTracking Fraud Detection",
		"dates":"March 2018 – April 2018",
		"description":"Detection of fraudulent click traffic for mobile app ads using machine learning algorithms.\
					   Performed exploratory data analysis over the dataset(10GB) to analyze different characteristics.\
					   Preprocessed the data by generating new features by aggregating the provided features and observed \
					   that LightGBM yielded better results when compared with other models using performance metrics such\
					   as area under ROC curve and confusion matrix.<br>\
					  Technologies: Pandas, Scikit-Learn, XGBoost, LightGBM, Matplot, NumPy",
		"images":["images/talkin_pic_1.jpeg"],
		"link":"https://github.com/akshayaram95/TalkinData-Ad-fraudulent-detection-"

	},
		{
		"title":"E-commerce Mobile Store",
		"dates":"March 2017 – April 2018 ",
		"description":"Developed an online mobile store using MEAN Stack implementing functionalities such as user\
					   authentication & authorization, product listing, search capabilities, inventory management, \
					   audit purchases, add items to cart, update items and checkout.<br>\
					   Technologies: MongoDB, Node JS, Angular JS. ",
		 "images":["images/mob_pic_1.png","images/mob_pic_2.png","images/mob_pic_3.png"],
		 "link":"https://github.com/akshayaram95/Online-Mobile-Store-using-MEAN-Stack-implementation"
	},

		{
		"title":"DBMS Indexing using B+ Trees",
		"dates":"Oct 2017 – Nov 2017",
		"description":"Constructed a multilevel Index using B+ Tree for the given dataset on the key attribute.\
					 Using the constructed B+ Tree, implmented features such as insertion of new records, search \
					 records, get position of a record with respect to the B+ Tree and list n records after a \
					 particular record.<br> Technologies: Eclipse, Java.",
		 "images":["images/Bplustree.png"],
		 "link":"https://github.com/akshayaram95/DBMS-indexing-using-B-trees"
	},
		{
		"title":"Stream Predictor for Engineering students using Regression Analysis",
		"dates":"Dec 2016- Feb 2017 ",
		"description":"Designed an Android Application which implemented Regression analysis (Data Mining)\
		 			   to predict a student's eligibility for a course within a specific college.\
		 			   Prediction was based on the dataset which consisted of the marks of the \
		 			   previously admitted students, classified according to their streams over \
		 			   the last 3 years.<br>\
		 			   Technologies: Android Studio, Java.",
		 "images":["images/android_pic_2.png","images/android_pic_3.png","images/android_pic_4.png"],
		 "link":"https://github.com/akshayaram95/Stream-Predictor-for-Engineering-Colleges-Based-on-Entrance-Test-Marks--Android"
	},
	,
	{
		"title":"Android Application",
		"dates":"January 2018 – March 2018",
		"description":"Developed several android applications on Android Studio. A few of those applications were:<br>\
						1)Music Player<br>\
						2)A calculator with store and recall option <br>\
						3)An application for making calls and sending sms<br>\
						4)An appliction for turning on hotspot and bluetooth.<br>\
						Technologies: Android Studio, Java",
		"images":["images/android.png"],
		"link":"https://github.com/akshayaram95/Android-Projects"

	},

	{
		"title":"Automating sales for a construction company",
		"dates":"May2016-June2016",
		"description":"Developed an application which enlisted ongoing Projects of a construction \
					   company, providing customers with information about the floor plans, locality,\
					   amenities and cost per sqft. <br>Technologies: NetBeans, Java, MySQL.",
		 "images":["images/house_pic_1.png","images/house_pic_2.png"],
		 "link":"https://github.com/akshayaram95/Automating-sales-for-a-construction-company"
	}
	
	
	]
}

var education={
	"schools":[
	{
		"name":"The University of Texas at Dallas",
		"location":"Dallas, Texas",
		"degree":"Masters",
		"dates":"Aug 2017- May 2019",
		"major":"Computer Science"
	},

	{
		"name":"Pune University",
		"location":"Pune, India",
		"degree":"Bachelors",
		"dates":"June 2013- May 2017",
		"major":"Computer Engineering"
	}

	]
}


bio.display=function(){
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

	$("#header").append(HTMLbioPic.replace("%data%",bio.profile));
	var formattedWelcomemsg=HTMLwelcomeMsg.replace("%data%",bio.welcomemsg);

	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGit=HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedlinkedin=HTMLlinkedin.replace("%data%",bio.contacts.linkedin);



	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);



	$("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedEmail);
	$("#topContacts, #footerContacts").append(formattedGit);
	$("#topContacts, #footerContacts").append(formattedlinkedin);

	$("#header").append(formattedWelcomemsg);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);

	}



	$("#navigation").append(HTMLheadWork.replace("%data%","Work"));
	$("#navigation").append(HTMLheadProject.replace("%data%","Projects"));
	$("#navigation").append(HTMLheadEducation.replace("%data%","Education"));
}

work.display=function(){
	for (job in work.jobs){

	$("#workExperience").append(HTMLworkStart);

	var formattedworkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedworkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedworkEmployer+formattedworkTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedworkDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedworkDates);

	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


	}
}

projects.display=function(){

	for (project in projects.projects){

		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);


		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length>0){

			for(image in projects.projects[project].images){
				var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				console.log(formattedImage);


			}
		}

		var formattedLink=HTMLprojectLink.replace("%data%",projects.projects[project].link);
		formattedLink=formattedLink.replace("%url%",projects.projects[project].link);
		$(".project-entry:last").append(formattedLink);
		
	}
}

education.display=function(){

	for (educations in education.schools){

		$("#education").append(HTMLschoolStart);
		var formattedName=HTMLschoolName.replace("%data%",education.schools[educations].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates=HTMLschoolDates.replace("%data%",education.schools[educations].dates);
		$(".education-entry:last").append(formattedDates);


		var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[educations].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[educations].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[educations].major);
		$(".education-entry:last").append(formattedMajor);
		
		
	}
}


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("title");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);