document.addEventListener("DOMContentLoaded", function () {
    showAllStudents();
});

function showAllStudents() {
    const studentList = document.getElementById("studentList");

   
    const registeredStudents = JSON.parse(localStorage.getItem("registeredStudents")) || [];

    registeredStudents.forEach(student => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="single-student.html?id=${student.id}">${student.name}</a>`;
        studentList.appendChild(listItem);
    });
}
