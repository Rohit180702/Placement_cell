import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
      import { getDatabase, ref, get, set, remove, update } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
      const firebaseConfig = {
        apiKey: "AIzaSyDfjtCim0jTRtgIShY1WAtwt1BTWNXo9eM",
        authDomain: "pcell-f6f1b.firebaseapp.com",
        databaseURL: "https://pcell-f6f1b-default-rtdb.firebaseio.com",
        projectId: "pcell-f6f1b",
        storageBucket: "pcell-f6f1b.appspot.com",
        messagingSenderId: "1003035349585",
        appId: "1:1003035349585:web:26cbcea3b1b56a63b85e70",
        measurementId: "G-0MSMZ4X244"
      };
      const app = initializeApp(firebaseConfig);
      for (let i = 2017101; i < 2017138; i++) {
      const db = getDatabase(app);
      const studentRef = ref(db, 'Students/' + i);
      get(studentRef).then((snapshot) => {
        const studentData = snapshot.val();
        if (studentData) {
          let temp = `
            <div class="card">
              <div class="left">
                <span>Name: ${studentData.Name}</span>
                <span>Regno: ${studentData.Regno}</span>
                <span>Dept: ${studentData.Dept}</span>
                <span>Year: ${studentData.year}</span>
              </div>
              <div class="right">
                <span>CGPA: ${studentData.CGPA}</span>
                <span>Email: ${studentData.email}</span>
                <span>Phone Number: ${studentData.phone}</span>
                <span>Gender: ${studentData.Gender}</span>
                <span>Standing Arrears: ${studentData.Standing_arrears}</span>
              </div>
            </div>
          `;
          let v = document.getElementById("zardz");
          let x = v.innerHTML;
          v.innerHTML = x + temp;
        }
      }).catch((error) => {
        console.error('Error fetching student data:', error);
      });
    }
    function writeUserData(regno, name, dept, year, gender, email, phone,cgpa,arrears) {
      const db = getDatabase();
      set(ref(db, 'Students/' + regno), {
    Regno: regno,
    Name: name,
    Dept: dept,
    year: year,
    Gender: gender,
    email: email,
    phone: phone,
    CGPA: cgpa,
    Standing_arrears: arrears
      }); 
    }
    function addstudent()
    {
            const regNo = parseInt(document.getElementById('regno').value);
            const name = document.getElementById('name').value;
            const department = document.getElementById('dept').value;
            const yearOfStudy = parseInt(document.getElementById('year').value);
            const gender = document.getElementById('gender').value;
            const email = document.getElementById('email').value;
            const phone = parseInt(document.getElementById('phone').value);
            const cgpa = parseFloat(document.getElementById('cgpa').value);
            const arrear = document.getElementById('arrear').value;
            writeUserData(regNo, name, department, yearOfStudy, gender, email, phone,cgpa,arrear);
            alert('Added successfully!');
            location.reload();
    }
    function deleteData() {
      const registerNo = prompt("Enter the Register No:");
      if (registerNo) {
        const db = getDatabase();
        const dataRef = ref(db, "Students/" + registerNo);
        remove(dataRef)
          .then(() => {
            alert("Data deleted successfully");
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
          });
      }
      location.reload();
    }
    function updateData() {
      const registerNo = prompt("Enter the Register Number");
      const db = getDatabase();
      const dataRef = ref(db, "Students/" + registerNo);
      const fieldsToUpdate = prompt("Fields to update: (Name,Dept,CGPA,year,phone,email,Gender) Separate with commas");
      if (fieldsToUpdate) {
        const fieldsArray = fieldsToUpdate.split(",");
        const updatedData = {};
        fieldsArray.forEach((field) => {
          let updatedValue = prompt("Enter the updated value for " + field);
          if (field === 'year' || field === 'phone') {
            updatedValue = parseInt(updatedValue);
          } else if (field === 'CGPA') {
            updatedValue = parseFloat(updatedValue);
          }
          if (updatedValue) {
            updatedData[field.trim()] = updatedValue;
          }
        });
        update(dataRef, updatedData)
          .then(() => {
            alert("Data updated successfully");
          })
          .catch((error) => {
            console.error("Error updating data:", error);
          });
      }
      location.reload();
    }
const deleteButton = document.getElementById("deleteButton");
const updateButton = document.getElementById("updateButton");
if (deleteButton && updateButton) {
  deleteButton.addEventListener("click", deleteData);
  updateButton.addEventListener("click", updateData);
}
const storeButton = document.getElementById("store");
if (storeButton) {
  storeButton.addEventListener("click", addstudent);
}

    


