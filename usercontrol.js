function login(event) {
    event.preventDefault();

    var role = document.querySelector('input[name="role"]:checked').value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here
    // For demonstration purposes, check for fixed credentials
    if (role === "admin" && username === "admin" && password === "12345") {
        // Prompt the admin to choose between All Students or Edit Students
        var choice = prompt("Welcome, Admin!\nPlease choose:\n1. View All Students\n2. Edit Students");

        if (choice === "1") {
            // Redirect to All Students page for the admin
            window.location.href = "all-students-admin.html";
        } else if (choice === "2") {
            // Redirect to Edit Students page for the admin
            window.location.href = "edit-students.html";
        } else {
            alert("Invalid choice. Please try again.");
        }
    } else if (role === "user" && username === "user" && password === "user") {
        // Redirect to User Dashboard for the user
        window.location.href = "all-students-user.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
