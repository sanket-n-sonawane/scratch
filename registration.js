function validateForm(event) {
    event.preventDefault();

    
    document.getElementById("errorMessages").innerHTML = "";

    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    
    if (!name || !email || !username || !password || !confirmPassword) {
        displayError("All fields are required");
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Invalid email format");
        return;
    }

    
    if (password !== confirmPassword) {
        displayError("Passwords do not match");
        return;
    }

    
    alert("Registration successful!");
}

function displayError(message) {
    const errorMessagesDiv = document.getElementById("errorMessages");
    errorMessagesDiv.innerHTML = `<p class="error">${message}</p>`;
}
function validateForm(event) {
    event.preventDefault();

    

    
    const studentData = {
        name,
        email,
        username,
        password,
        
    };

    
    saveStudentData(studentData);

    alert("Registration successful!");
}

function saveStudentData(studentData) {
    
    const existingData = JSON.parse(localStorage.getItem("registeredStudents")) || [];
    existingData.push(studentData);
    localStorage.setItem("registeredStudents", JSON.stringify(existingData));
}
