// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const emailInput = studentForm["email"];
const PhonenoInput = studentForm["Phone no"];

// Load students from local storage or initialize an empty array
const students = JSON.parse(localStorage.getItem("students")) || [];

// Function to add a new student
const addStudent = (name, email, Phoneno) => {
  const newStudent = {
    name,
    email,
    Phoneno,
  };

  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));

  return newStudent;
};

// Function to create a student element
const createStudentElement = (student, index) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentEmail = document.createElement("p");
  const studentPhoneno = document.createElement("p");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  // Fill the content
  studentName.innerText = "Student name: " + student.name;
  studentEmail.innerText = "Student email: " + student.email;
  studentPhoneno.innerText = "Student Phone no: " + student.Phoneno;
  deleteButton.innerText = "Delete";
  editButton.innerText = "Edit";

  // Add a click event listener to the Delete button
  deleteButton.addEventListener("click", () => {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    studentsContainer.removeChild(studentDiv);
  });

  // Add a click event listener to the Edit button
  editButton.addEventListener("click", () => {
    // Load the student's details into the input fields
    nameInput.value = student.name;
    emailInput.value = student.email;
    PhonenoInput.value = student.Phoneno;

    // Handle form submission for editing
    studentForm.onsubmit = (e) => {
      e.preventDefault();

      // Update the student's details in the students array
      students[index] = {
        name: nameInput.value,
        email: emailInput.value,
        Phoneno: PhonenoInput.value,
      };

      // Update local storage
      localStorage.setItem("students", JSON.stringify(students));

      // Clear the input fields
      nameInput.value = "";
      emailInput.value = "";
      PhonenoInput.value = "";

      // Remove the event listener to prevent further submissions
      studentForm.onsubmit = (e) => {
        e.preventDefault();
      };
    };
  });

  // Add elements to the studentDiv
  studentDiv.append(studentName, studentEmail, studentPhoneno, deleteButton, editButton);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "block";
};

// Display existing students on page load
studentsContainer.style.display = students.length === 0 ? "none" : "block";
students.forEach(createStudentElement);

// Handle form submission for adding new students
studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(nameInput.value, emailInput.value, PhonenoInput.value);
  createStudentElement(newStudent);

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  PhonenoInput.value = "";
};
