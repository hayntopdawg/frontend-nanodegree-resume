var bio = {
    "name": "Tony Stark",
    "role": "Ironman",
    "contacts": {
        "mobile": "555 123 1234",
        "email": "tony.stark@stark.com",
        "github": "tonystark",
        "twitter": "@tonystark",
        "location": "San Diego, CA"
    },
    "welcomeMessage": "I am Ironman!",
    "skills": ["Systems Engineering", "Computer Programming"],
    "bioPic": "http://vignette2.wikia.nocookie.net/epicrapbattlesofhistory/images/e/e8/Jarvis-iron-man-wallpaper-android-40.jpg/revision/latest?cb=20140831193205"
};

var work = {
    "jobs": [
        {
            "employer": "Self-Employed",
            "title": "Mastermind",
            "location": "San Diego, CA",
            "dates": "2014 - present",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
       Morbi rutrum id diam ut dapibus. Vivamus tristique, ante et commodo \
       auctor, risus felis gravida felis, sit amet bibendum lorem leo ac nibh. \
       Aliquam at turpis pretium, dignissim erat ut, consectetur orci. Aenean \
       blandit ipsum quam, eget cursus ex ullamcorper imperdiet. Cras ac nibh \
       lobortis, tincidunt elit a, convallis elit. Suspendisse lacinia diam \
       turpis, nec sollicitudin ipsum efficitur ac. Donec iaculis, ex id \
       ullamcorper varius, nibh enim maximus massa, sit amet auctor massa \
       sapien vel magna. Cras tincidunt convallis mauris nec posuere. Nulla \
       lacinia lacinia risus id dignissim. Pellentesque ex magna, ultrices id \
       sapien ut, rutrum maximus tellus. Vivamus feugiat nisi eu neque \
       malesuada, vitae dapibus leo faucibus."
        },
        {
            "employer": "Avengers",
            "title": "Ironman",
            "location": "New York, NY",
            "dates": "2013 - 2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
       Morbi rutrum id diam ut dapibus. Vivamus tristique, ante et commodo \
       auctor, risus felis gravida felis, sit amet bibendum lorem leo ac nibh. \
       Aliquam at turpis pretium, dignissim erat ut, consectetur orci. Aenean \
       blandit ipsum quam, eget cursus ex ullamcorper imperdiet. Cras ac nibh \
       lobortis, tincidunt elit a, convallis elit. Suspendisse lacinia diam \
       turpis, nec sollicitudin ipsum efficitur ac. Donec iaculis, ex id \
       ullamcorper varius, nibh enim maximus massa, sit amet auctor massa \
       sapien vel magna. Cras tincidunt convallis mauris nec posuere. Nulla \
       lacinia lacinia risus id dignissim. Pellentesque ex magna, ultrices id \
       sapien ut, rutrum maximus tellus. Vivamus feugiat nisi eu neque \
       malesuada, vitae dapibus leo faucibus."
        }
    ]
};

var projects = {
    "project": [
        {
            "title": "Jarvis",
            "dates": "2010",
            "description": "Not a toy robot",
            "images": ["http://thingiverse-production-new.s3.amazonaws.com/renders/c7/37/54/07/81/RAPIRO_photo_preview_featured.jpg",
                "http://thingiverse-production-new.s3.amazonaws.com/renders/c7/37/54/07/81/RAPIRO_photo_preview_featured.jpg"]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "U.S. Naval Academy",
            "location": "Annapolis, MD",
            "degree": "BS",
            "majors": ["Computer Science"],
            "dates": "2005 - 2009",
            "url": "http://www.usna.edu"
        },
        {
            "name": "Rennselaer Polytechninc Institute",
            "location": "Troy, NY",
            "degree": "MS",
            "majors": ["Infromation Technology Web Sciences"],
            "dates": "2015",
            "url": "http://www.rpi.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Intro to Machine Learning",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com"
        }
    ]
};

// Bio Section
bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var $header = $("#header");
    $header.prepend(formattedRole);
    $header.prepend(formattedName);
    $header.append(formattedPic);
    $header.append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $header.append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

// Work Section

work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var $workEntry = $(".work-entry:last");
        $workEntry.append(formattedEmployerTitle);
        $workEntry.append(formattedLocation);
        $workEntry.append(formattedDates);
        $workEntry.append(formattedDescription);
    }
};

work.display();

// Project Section

projects.display = function () {
    for (var p in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[p].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);

        var $projectEntry = $(".project-entry:last");
        $projectEntry.append(formattedProjectTitle);
        $projectEntry.append(formattedProjectDates);
        $projectEntry.append(formattedProjectDescription);

        if (projects.project[p].images.length > 0) {
            for (image in projects.project[p].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[p].images[image]);
                $projectEntry.append(formattedProjectImage);
            }
        }
    }
    ;
};

projects.display();

// Education Section

education.display = function () {
    // for (var p in projects.project) {
    //   $("#projects").append(HTMLprojectStart);
    //
    //   var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
    //   $(".project-entry:last").append(formattedProjectTitle);
    //
    //   var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[p].dates);
    //   $(".project-entry:last").append(formattedProjectDates);
    //
    //   var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
    //   $(".project-entry:last").append(formattedProjectDescription);
    //
    //   if (projects.project[p].images.length > 0) {
    //     for (image in projects.project[p].images) {
    //       var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[p].images[image]);
    //       $(".project-entry:last").append(formattedProjectImage);
    //     }
    //   }
    // };

    // var HTMLschoolStart = '<div class="education-entry"></div>';
    // var HTMLschoolName = '<a href="#">%data%';
    // var HTMLschoolDegree = ' -- %data%</a>';
    // var HTMLschoolDates = '<div class="date-text">%data%</div>';
    // var HTMLschoolLocation = '<div class="location-text">%data%</div>';
    // var HTMLschoolMajor = '<em><br>Major: %data%</em>';
    //
    // var HTMLonlineClasses = '<h3>Online Classes</h3>';
    // var HTMLonlineTitle = '<a href="#">%data%';
    // var HTMLonlineSchool = ' - %data%</a>';
    // var HTMLonlineDates = '<div class="date-text">%data%</div>';
    // var HTMLonlineURL = '<br><a href="#">%data%</a>';
};

// Fun Section

// you want to see a map?  here's a map.
$("#mapDiv").append(googleMap);

function inName() {
    var name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name.join(" ");
}

$("#main").append(internationalizeButton);

// Object creation
// Literal:
//   var bio = {
//     "name" : "Jamie"
//   }
// Dot-notation:
//   bio.name = "Jamie";
// Bracket-notation:
//   bio["name"] = "Jamie";
