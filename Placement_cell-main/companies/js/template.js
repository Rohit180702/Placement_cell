import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
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
const db = getDatabase(app);
const companyRef = ref(db, 'Company/');
get(companyRef).then((snapshot) => {
const companyData = snapshot.val();
for (const companyId in companyData) {
  if (companyData.hasOwnProperty(companyId)) {
    const company = companyData[companyId];
    const companyName = company.Name;
    const cgpa = company.CGPA;
    const dept = company.Dept;
    const standingArrears = company.Standing_arrears;
    const date = company.Expected_Date
  let temp=`
  <li>
  <a href="info.html?companyName=${companyName}" class="card">
    <img src="/Placement_cell-main/companies/assets/${companyName}.jpg" class="card__image" alt="" />
    <div class="card__overlay">
      <div class="card__header">
        <div class="card__header-text">
          <h3 class="card__title">${companyName}</h3>
          <span class="card__status">${date}</span>
      </div>
    </div>
      <p class="card__description">
        <br>
        Eligibility Criteria
        <br>
        CGPA: ${cgpa}
        <br>
        NO. of standing arrears : ${standingArrears}
        <br>
        Department: ${dept}
      </p>
    </div>
  </a>
</li>
      `;
      let v=document.getElementById("div2");
      let x= v.innerHTML;
      v.innerHTML=x+temp;
}
}  
});
// const dButton = document.getElementById("div1");
//   dButton.addEventListener("click", duplicateCard);

//   function duplicateCard() {
//     var cname = prompt("Enter the company name (in caps):");
//     var cardContent = prompt("Enter the content for the new card:");
//     var cardImage = prompt("Enter the image name for the new card:");
//     var newCard = {img:cardImage,name:cname,desc:cardContent};
//     companyNames.push(newCard);
//     var cardHtml = createCardHtml(newCard);
//     dButton.innerHTML += cardHtml; 
//   }
//   function createCardHtml(card) {
//   var cardHtml = '<li>';
//   var cardHtml = '<li> <a href="Company.html?id=12" class="card">';
//   cardHtml += '<img src="/companies/assets/'+ card.img + '" class="card__image" alt="" />';
//   cardHtml += '<div class="card__overlay"> <div class="card__header"> <div class="card__header-text">';
//   cardHtml += '<h3 class="card__title">'+card.name+'</h3>';
//   cardHtml += '</div></div><p class="card__description">Eligibility Criteria<br>CGPA : > 7.5<br>NO. of standing arrears : < 5 <br>Department: cse, ece</p></div></a></li></div>';

//   return cardHtml;
// }





//     function writeUserData(regno, name, dept, year, gender, email, phone,cgpa,arrears) {
//       const db = getDatabase();
//       set(ref(db, 'Students/' + regno), {
//     Regno: regno,
//     Name: name,
//     Dept: dept,
//     year: year,
//     Gender: gender,
//     email: email,
//     phone: phone,
//     CGPA: cgpa,
//     Standing_arrears: arrears
//       });
      
//     }
    
//     function addstudent()
//     {
//             // Retrieve the values of the fields
//             const regNo = parseInt(document.getElementById('regno').value);
//             const name = document.getElementById('name').value;
//             const department = document.getElementById('dept').value;
//             const yearOfStudy = parseInt(document.getElementById('year').value);
//             const gender = document.getElementById('gender').value;
//             const email = document.getElementById('email').value;
//             const phone = parseInt(document.getElementById('phone').value);
//             const cgpa = parseFloat(document.getElementById('cgpa').value);
//             const arrear = document.getElementById('arrear').value;
          
//             writeUserData(regNo, name, department, yearOfStudy, gender, email, phone,cgpa,arrear);
//             alert('Added successfully!');
//             location.reload();
//     }

//     function deleteData() {
//       const registerNo = prompt("Enter the Register No:");
    
//       if (registerNo) {
//         const db = getDatabase();
    
//         const dataRef = ref(db, "Students/" + registerNo);
    
//         // Remove the data
//         remove(dataRef)
//           .then(() => {
//             alert("Data deleted successfully");
//           })
//           .catch((error) => {
//             console.error("Error deleting data:", error);
//           });
//       }
//       location.reload();
//     }

//     function updateData() {

//       const registerNo = prompt("Enter the Register Number");
    
//       const db = getDatabase();
  
//       const dataRef = ref(db, "Students/" + registerNo);
    
//       const fieldsToUpdate = prompt("Fields to update: (Name,Dept,CGPA,year,phone,email,Gender) Separate with commas");
    
//       if (fieldsToUpdate) {
//         const fieldsArray = fieldsToUpdate.split(",");
//         const updatedData = {};
//         fieldsArray.forEach((field) => {
//           let updatedValue = prompt("Enter the updated value for " + field);
//           if (field === 'year' || field === 'phone') {
//             updatedValue = parseInt(updatedValue);
//           } else if (field === 'CGPA') {
//             updatedValue = parseFloat(updatedValue);
//           }
          
//           if (updatedValue) {
//             updatedData[field.trim()] = updatedValue;
//           }
//         });
//         update(dataRef, updatedData)
//           .then(() => {
//             alert("Data updated successfully");
//           })
//           .catch((error) => {
//             console.error("Error updating data:", error);
//           });
//       }
//       location.reload();
//     }
// // Check if deleteButton and updateButton exist before attaching event listeners
// const deleteButton = document.getElementById("deleteButton");
// const updateButton = document.getElementById("updateButton");

// if (deleteButton && updateButton) {
//   deleteButton.addEventListener("click", deleteData);
//   updateButton.addEventListener("click", updateData);
// }

// // Attach event listener to store button only if it exists
// const storeButton = document.getElementById("store");

// if (storeButton) {
//   storeButton.addEventListener("click", addstudent);
// }

    


