for (let i = 0; i < 12; i++){
    let temp=`
    <div class="card">
    <div class="left">
      <p>Name: John Doe</p>
      <p>Department:CSE</p>
      <p>Year: 3rd</p>
    </div>
    <div class="right">
      <p>CGPA: 3.8</p>
      <p>Date of Birth: 01/01/2000</p>
      <p>Phone Number: 123-456-7890</p>
    </div>
  </div>

  
  
    `;
    let v=document.getElementById("zardz");
    let x= v.innerHTML;
    v.innerHTML=x+temp;
}

{/* <div class="cardz">
<img src="https://via.placeholder.com/200x150" alt="Student Photo">
<h2>rohit</h2>
<p>CGPA: 3.5</p>
<div class="details">
  <p><span>Date of Birth:</span> 01/01/2000</p>
  <p><span>Contact:</span> john.doe@example.com</p>
</div>
</div> */}