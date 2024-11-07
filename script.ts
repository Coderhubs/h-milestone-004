// Adding submit event listener to the form
document.getElementById('resume-form')?.addEventListener('submit', function (event: Event) { 
    event.preventDefault(); 
    addSkill(); 
    generateResume(); 
});  

// Function to add skills dynamically
function addSkill() { 
    const skillInput = document.getElementById("skills") as HTMLInputElement | null; 
    if (skillInput) { 
        const skillValue = skillInput.value.trim(); 
        if (skillValue) { 
            const skillsList = document.getElementById("skillsList") as HTMLUListElement | null; 
            const listItem = document.createElement("li"); 
            listItem.textContent = skillValue; 
            
            if (skillsList) { 
                skillsList.appendChild(listItem); 
            } 
            
            skillInput.value = ""; // Clear the input after adding skill 
            skillInput.focus();  // Focus back to the skill input field for smooth user experience 
        } 
    } else { 
        console.error("Skill input element not found"); 
    } 
}

// Generate Resume Function
function generateResume(): void { 
    const nameElement = document.getElementById('Name') as HTMLInputElement | null; 
    const contactElement = document.getElementById('Contact') as HTMLInputElement | null; 
    const emailElement = document.getElementById('Emails') as HTMLInputElement | null; 
    const institutionElement = document.getElementById('institution') as HTMLInputElement | null; 
    const qualificationElement = document.getElementById('Qualification') as HTMLInputElement | null; 
    const fieldOfStudyElement = document.getElementById('field-of-study') as HTMLInputElement | null; 
    const startDateElement = document.getElementById('start-date') as HTMLInputElement | null; 
    const endDateElement = document.getElementById('end-date') as HTMLInputElement | null; 
    const descriptionElement = document.getElementById('text') as HTMLTextAreaElement | null; 
    const experienceElement = document.getElementById('experience-text') as HTMLTextAreaElement | null; 
    
    const skillsListContainer = document.getElementById("skillsList") as HTMLUListElement | null;  
    
    let skillsListHTML = ""; 
    // Check if skillsListContainer is not null 
    if (skillsListContainer) { 
        // Loop through the list items and create a new list with individual li tags 
        for (let i = 0; i < skillsListContainer.children.length; i++) { 
            const skillText = skillsListContainer.children[i].textContent?.trim(); 
            if (skillText) { 
                skillsListHTML += `<li>${skillText}</li>`; 
            } 
        } 
    } else { 
        console.error("Skills list container not found!"); 
    }  
    
    if (nameElement && contactElement && emailElement && institutionElement && 
        qualificationElement && fieldOfStudyElement && startDateElement && 
        endDateElement && descriptionElement && experienceElement) { 
    
        const name = nameElement.value; 
        const contact = contactElement.value; 
        const email = emailElement.value; 
        const institution = institutionElement.value; 
        const qualification = qualificationElement.value; 
        const fieldOfStudy = fieldOfStudyElement.value; 
        const startDate = startDateElement.value; 
        const endDate = endDateElement.value; 
        const description = descriptionElement.value; 
        const experience = experienceElement.value; 
    
        const resumeOutputElement = document.getElementById('resume-output') as HTMLElement | null; 
        if (resumeOutputElement) { 
            resumeOutputElement.innerHTML = ` 
                <header class="header" style="background-color: #393939; color: #FFFFFF; padding: 20px; font-family: 'Poppins', sans-serif; margin-top:30px; border: 2px solid #FFA200 ;  ">
                    <h1 style="margin: 10px; color: #FFFFFF;">${name}</h1> 
                </header>
                 <hr>
            <legend style=" color: #393939; background-color: #cecbcb; padding: 10px; font-size: 1.5em;">Personal Information</legend>
                <hr>
                <p style="font-size:14px; font:family: 'Poppins', sans-serif">
                
                <strong>Contact </strong> </br>${contact}</p> 

                <p style="font-size:14px; font:family: 'Poppins', sans-serif"><strong>Email</strong> </br> ${email}</p> 
                <hr> 
                
                 <legend style="color:#393939; background-color: #cecbcb; padding: 10px; font-size: 1.5rem;">Education</legend>

                <p style="font-size:14px; font:family: 'Poppins', sans-serif" ><strong>Institution</strong></br> ${institution}</p> 
                <p style="font-size:14px; font:family: 'Poppins', sans-serif" ><strong>Qualification</strong></br> ${qualification}</p> 

                <p style="font-size:14px; font:family: 'Poppins', sans-serif"><strong>Field of Study</strong></br> ${fieldOfStudy}</p> 
                <p style="font-size:14px; font:family: 'Poppins', sans-serif" ><strong>Start Date</strong> </br> ${startDate}</p> 
                <p style="font-size:14px; font:family: 'Poppins', sans-serif"><strong>End Date </strong> </br> ${endDate}</p> 
                <p style="font-size:14px; font:family: 'Poppins', sans-serif" ><strong>Description</strong> </br> ${description}</p> 
                <hr> 
                 <legend style="color:#393939; background-color: #cecbcb; padding: 10px; font-size: 1.5em;">Skills</legend>
                <ul>${skillsListHTML}</ul> 
                <hr> 
                <legend style="color:#393939; background-color: #cecbcb; padding: 10px; font-size: 1.5em;">Work Experience</legend>
                <p style="font-size:14px; font:family: 'Poppins', sans-serif" ><strong>Experience </strong> </br> ${experience}</p> 
            `; 
        } else { 
            console.error('The resume output element is missing'); 
        } 
    } else { 
        console.error('One or more form elements are missing'); 
    } 
}  

// Listen for changes in individual form fields instead of entire form
window.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('resume-form') as HTMLFormElement; 
    
    // Update resume on individual input field changes (avoiding full form event)
    const formElements = form.querySelectorAll('input, textarea');
    formElements.forEach((element) => {
        element.addEventListener('input', generateResume);
    });
});
