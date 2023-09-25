// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["email"];
const rollInput = studentForm["Phone no"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, email, Phoneno) => {
  students.push({
    name,
    email,
    Phoneno,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, email, Phoneno };
};

const createStudentElement = ({ name, email, Phoneno }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentemail = document.createElement("p");
  const studentPhoneno = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentemail.innerText = "Student age: " + email;
  studentPhoneno.innerText = "Student roll: " + Phoneno;

  // Add to the DOM
  studentDiv.append(studentName, studentemail, studentPhoneno);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  emailInput.value = "";
  PhonenoInput.value = "";
};