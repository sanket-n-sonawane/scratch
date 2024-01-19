function editStudent(event) {
    event.preventDefault();
    var studentName = document.getElementById("studentName").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentID = document.getElementById("studentID").value;

    console.log("Updated Student Name:", studentName);
    console.log("Updated Student Email:", studentEmail);
    console.log("Updated Student ID:", studentID);

    alert("Changes saved successfully!");
}
