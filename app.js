let fullName = document.querySelector(".fullName");
let cnic = document.querySelector(".cnic");
let course = document.querySelector(".course");
let campus = document.querySelector(".campus");
let image = document.querySelector(".image");

let output = document.querySelector("#outputCard");

function generateCard() {

  if (!fullName.value || !cnic.value) {
    return showAlert("error", "Missing Data", "Please fill all fields");
  }

  if (!course.value) {
    return showAlert("error", "Course Required", "Please select course");
  }

  if (!campus.value) {
    return showAlert("error", "Campus Required", "Please select campus");
  }

  if (!image.files[0]) {
    return showAlert("error", "Image Missing", "Please upload image");
  }

  let student = {
    name: fullName.value,
    cnic: cnic.value,
    course: course.value,
    campus: campus.value,
    image: URL.createObjectURL(image.files[0]),
    roll: generateRoll()
  };

  renderCard(student);
  resetForm();
}

function renderCard(data) {
  output.innerHTML = `
    <div id="id-card">

      <div class="card-header">
        <h4>Student ID</h4>
      </div>

      <div class="profile">
        <img src="${data.image}">
      </div>

      <div class="info">
        <div><span class="label">Name:</span> ${data.name}</div>
        <div><span class="label">CNIC:</span> ${data.cnic}</div>
        <div><span class="label">Course:</span> ${data.course}</div>
        <div><span class="label">Campus:</span> ${data.campus}</div>
        <div><span class="label">Roll:</span> WMA-${data.roll}</div>
      </div>

    </div>
  `;
}

function generateRoll() {
  return Math.floor(10000 + Math.random() * 90000);
}

function resetForm() {
  fullName.value = "";
  cnic.value = "";
  course.selectedIndex = 0;
  campus.selectedIndex = 0;
  image.value = "";
}

function showAlert(icon, title, text) {
  Swal.fire({ icon, title, text });
}




function renderCard(data) {
  output.innerHTML = `
    <div id="id-card">

      <div class="left">
        <img src="${data.image}" />
        <h3>${data.name}</h3>
        <p class="role">Student</p>
      </div>

      <div class="right">

        <div class="row">
          <span>CNIC</span>
          <p>${data.cnic}</p>
        </div>

        <div class="row">
          <span>Course</span>
          <p>${data.course}</p>
        </div>

        <div class="row">
          <span>Campus</span>
          <p>${data.campus}</p>
        </div>

        <div class="row">
          <span>Roll No</span>
          <p>WMA-${data.roll}</p>
        </div>

      </div>

    </div>
  `;
}