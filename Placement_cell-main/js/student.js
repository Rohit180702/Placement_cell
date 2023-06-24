const urlParams = new URLSearchParams(window.location.search);
const companyname = urlParams.get('companyName');
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
    const company = companyData[companyname];
    const companyName = company.Name;
    const about = company.About;
    const cgpa = company.CGPA;
    const dept = company.Dept;
    const standingArrears = company.Standing_arrears;
    const rounds = company.Rounds;
    const pack = company.Package_Role;

    // const date = company.Expected_Date
  let temp=`
  <div class="comp_card" id="det">
  <div class="comp_container">
    <div class="comp_logo">
        <img src="/Placement_cell-main/companies/assets/${companyName}.jpg" alt="hello" width="250px" height="150px">
    </div>
    <div class="comp_detail">
        <h4>${companyName}</h4>
        <p>${about}</p>
    </div>
  </div> 
</div>
<div class="card2">
  <div class="block1">
    <h3>Eligibility Criteria:</h3>
    <ul>
      <li>CGPA : ${cgpa}</li>
      <li>No of Standing arrears : ${standingArrears} </li>
          <!-- <li>History of arrears : nil</li> -->
      <li>Department : ${dept} </li>
    </ul>
  </div>
  <div class="block1">
    <h3>Package-Role:</h3>
    <ul>
    ${pack.P1 ? `<li> ${pack.P1}</li>` : ''}
    ${pack.P2 ? `<li> ${pack.P2}</li>` : ''}
    ${pack.P3 ? `<li> ${pack.P3}</li>` : ''}
    ${pack.P4 ? `<li> ${pack.P4}</li>` : ''}
    ${pack.P5 ? `<li> ${pack.P5}</li>` : ''}
    </ul>
  </div>
  <div class="block1">
    <h3>Rounds:</h3>
    <ul>
    ${rounds.R1 ? `<li>R1: ${rounds.R1}</li>` : ''}
    ${rounds.R2 ? `<li>R2: ${rounds.R2}</li>` : ''}
    ${rounds.R3 ? `<li>R3: ${rounds.R3}</li>` : ''}
    ${rounds.R4 ? `<li>R4: ${rounds.R4}</li>` : ''}
    ${rounds.R5 ? `<li>R5: ${rounds.R5}</li>` : ''}
    </ul>
  </div>
</div>
      `;
      let v=document.getElementById("template");
      let x= v.innerHTML;
      v.innerHTML=x+temp;
// }
// }  
});