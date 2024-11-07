var _a;
// Adding submit event listener to the form
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    addSkill();
    generateResume();
});
// Function to add skills dynamically
function addSkill() {
    var skillInput = document.getElementById("skills");
    if (skillInput) {
        var skillValue = skillInput.value.trim();
        if (skillValue) {
            var skillsList = document.getElementById("skillsList");
            var listItem = document.createElement("li");
            listItem.textContent = skillValue;
            if (skillsList) {
                skillsList.appendChild(listItem);
            }
            skillInput.value = ""; // Clear the input after adding skill 
            skillInput.focus(); // Focus back to the skill input field for smooth user experience 
        }
    }
    else {
        console.error("Skill input element not found");
    }
}
// Generate Resume Function
function generateResume() {
    var _a;
    var nameElement = document.getElementById('Name');
    var contactElement = document.getElementById('Contact');
    var emailElement = document.getElementById('Emails');
    var institutionElement = document.getElementById('institution');
    var qualificationElement = document.getElementById('Qualification');
    var fieldOfStudyElement = document.getElementById('field-of-study');
    var startDateElement = document.getElementById('start-date');
    var endDateElement = document.getElementById('end-date');
    var descriptionElement = document.getElementById('text');
    var experienceElement = document.getElementById('experience-text');
    var skillsListContainer = document.getElementById("skillsList");
    var skillsListHTML = "";
    // Check if skillsListContainer is not null 
    if (skillsListContainer) {
        // Loop through the list items and create a new list with individual li tags 
        for (var i = 0; i < skillsListContainer.children.length; i++) {
            var skillText = (_a = skillsListContainer.children[i].textContent) === null || _a === void 0 ? void 0 : _a.trim();
            if (skillText) {
                skillsListHTML += "<li>".concat(skillText, "</li>");
            }
        }
    }
    else {
        console.error("Skills list container not found!");
    }
    if (nameElement && contactElement && emailElement && institutionElement &&
        qualificationElement && fieldOfStudyElement && startDateElement &&
        endDateElement && descriptionElement && experienceElement) {
        var name_1 = nameElement.value;
        var contact = contactElement.value;
        var email = emailElement.value;
        var institution = institutionElement.value;
        var qualification = qualificationElement.value;
        var fieldOfStudy = fieldOfStudyElement.value;
        var startDate = startDateElement.value;
        var endDate = endDateElement.value;
        var description = descriptionElement.value;
        var experience = experienceElement.value;
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = " \n                <header class=\"header\" style=\"background-color: #393939; color: #FFFFFF; padding: 20px; font-family: 'Poppins', sans-serif; margin-top:30px; border: 2px solid #FFA200 ;  \">\n                    <h1 style=\"margin: 10px; color: #FFFFFF;\">".concat(name_1, "</h1> \n                </header>\n                 <hr>\n            <legend style=\" color: #393939; background-color: #cecbcb; padding: 10px; font-size: 1.5em;\">Personal Information</legend>\n                <hr>\n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\">\n                \n                <strong>Contact </strong> </br>").concat(contact, "</p> \n\n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\"><strong>Email</strong> </br> ").concat(email, "</p> \n                <hr> \n                \n                 <legend style=\"color:#393939; background-color: #cecbcb; padding: 10px; font-size: 1.5rem;\">Education</legend>\n\n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\" ><strong>Institution</strong></br> ").concat(institution, "</p> \n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\" ><strong>Qualification</strong></br> ").concat(qualification, "</p> \n\n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\"><strong>Field of Study</strong></br> ").concat(fieldOfStudy, "</p> \n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\" ><strong>Start Date</strong> </br> ").concat(startDate, "</p> \n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\"><strong>End Date </strong> </br> ").concat(endDate, "</p> \n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\" ><strong>Description</strong> </br> ").concat(description, "</p> \n                <hr> \n                 <legend style=\"color:#393939; background-color: #cecbcb; padding: 10px; font-size: 1.5em;\">Skills</legend>\n                <ul>").concat(skillsListHTML, "</ul> \n                <hr> \n                <legend style=\"color:#393939; background-color: #cecbcb; padding: 10px; font-size: 1.5em;\">Work Experience</legend>\n                <p style=\"font-size:14px; font:family: 'Poppins', sans-serif\" ><strong>Experience </strong> </br> ").concat(experience, "</p> \n            ");
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
}
// Listen for changes in individual form fields instead of entire form
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    // Update resume on individual input field changes (avoiding full form event)
    var formElements = form.querySelectorAll('input, textarea');
    formElements.forEach(function (element) {
        element.addEventListener('input', generateResume);
    });
});
