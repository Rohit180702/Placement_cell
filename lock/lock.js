//var Regno=[];
//Regno.push(window.regno);
//const arrray = require('./arrayFile');

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import {initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase,set,ref,child,get,update ,remove} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

//console.log("this is string"+str);

const firebaseConfig = {
    apiKey: "AIzaSyASJjR_I5yBw2BRcb2BofFo3yCTLzGgpFE",
    authDomain: "signin-edf64.firebaseapp.com",
    databaseURL:"https://signin-edf64-default-rtdb.firebaseio.com/",
    projectId: "signin-edf64",
    storageBucket: "signin-edf64.appspot.com",
    messagingSenderId: "457157733295",
    appId: "1:457157733295:web:f5f938215c36147bd4dd5a"
    };
    // firebase.initializeApp(firebaseConfig);
    // const database=firebase.database();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // const database = firebase.database(app);

    const database = getDatabase(app);
    var button1= document.getElementById("click");
  
    
    function handleClick(){
        const email=document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const reg=document.getElementById("reg").value;
        const Name = document.getElementById("name").value;
        // writeUserData(reg);
        const course = document.getElementById("course").value;
        const year= document.getElementById("year").value;
        const dob= document.getElementById("dob").value;
        const dept=document.getElementById("dept").value;
        const phone = document.getElementById("phone").value;
        const address= document.getElementById("address").value;
        const pincode= document.getElementById("pincode").value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        });
       
     let x= localStorage.getItem("reg");
        if(x==null)
        {
            localStorage.setItem("reg",JSON.stringify([reg]));
        }
        else
        {
            x=JSON.parse(x);
            x.push(reg);
            localStorage.setItem("reg",JSON.stringify(x));
            
        }
      //  let regno=[];
        //regno.push(document.getElementById("reg").value);
        //export default regno;
       
       // module. exports  = regno;

       // const password=document.getElementById("password").value;
    //     var dataRef = database.ref('/users').child(reg);
    // function writeUserData(reg) {    
    const db = getDatabase(); 
    set(ref(db, 'users/' + reg), {
        
            RegisterNumber:reg,
            Email:email,
            //Password:password,
            name:Name,
            course:course,
            year:year,
            dob:dob,
            dept:dept,
            phone:phone,
            address:address,
            pincode:pincode,
            password:password
        
    });
        alert("user added successfully");
       
        
        }
    button1.onclick = handleClick;
    
    
        var button2 = document.getElementById("click2");
    button2.onclick = handleClick2;
    function handleClick2(){
      
        const reg=document.getElementById("reg").value;
      
        // var dataRef = database.ref('/users').child(reg);
        const db = getDatabase(); 
        remove(ref(db, 'users/' + reg))
       
        alert("user removed successfully");
        }
        var button3= document.getElementById("click3");
    button3.onclick = handleClick3;
    function handleClick3(){
        const email=document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const reg=document.getElementById("reg").value;
        const Name = document.getElementById("name").value;
        const course = document.getElementById("course").value;
        const year= document.getElementById("year").value;
        const dob= document.getElementById("dob").value;
        const dept=document.getElementById("dept").value;
        const phone = document.getElementById("phone").value;
        const address= document.getElementById("address").value;
        const pincode= document.getElementById("pincode").value;
        // var dataRef = database.ref('/users').child(reg);
        
        const db = getDatabase(); 
        update(ref(db, 'users/' + reg), {
            
                RegisterNumber:reg,
                Email:email,
                //Password:password,
                name:Name,
                course:course,
                year:year,
                dob:dob,
                dept:dept,
                phone:phone,
                address:address,
                pincode:pincode,
                password:password
            
        });
      
        alert("user updated successfully");
        
        }
        
    //console.log(array[3]);
    var array=JSON.parse(localStorage.getItem("reg"));
   for (let i =0; i<array.length; i++) {
    
   
    // var dataRef = database.ref("users/"+array[i]);
    //  console.log(array[i]);
  
    const dbRef = ref(database,'users/'+array[i]);

    get(dbRef).then((snapshot) => {
        
     

    
        if (snapshot.exists()) {
            const userData=snapshot.val();
            // console.log(userData);
            // console.log(userData.Email);
            
            document.getElementById("table").innerHTML +="<tr>"+"<td>"+userData.RegisterNumber+"</td>"+"<td>"+userData.name+"</td>"+"<td>"+userData.course+"</td>"+"<td>"+userData.dept+"</td>"+"<td>"+userData.year+"</td>"+"<td>"+userData.dob+"</td>"+"<td>"+userData.Email+"</td>"+"<td>"+userData.phone+"</td>"+"<td>"+userData.address+"</td>"+"<td>"+userData.pincode+"</td>"+"</tr>";
            
            
           
                
          //console.log(snapshot.val());
        //   var data=element.val();
        // console.log(typeof(data));
        //   var key=element.key;
        //   console.log(key);
        //   console.log(key[i][6]+data[key[i][6]]);
        //   let ans=key[6];
    
        

        
        // document.getElementById("table1").innerHTML +=data;
         
          
        
        
          
        }
        
        
      
        
       
        
    //   else {
    //       console.log("No data available");
    //     }
  

    }).catch((error) => {
        console.error(error);
      });
    // const starCountRef = ref(db, 'users/' +array[i]);
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   updateStarCount(postElement, data);
    // });
    
    // dataRef.once("value",function(snapshot){
    //     snapshot.forEach(function(element){
    //          var data=element.val();
    //           var key=element.key;
          
        //   /*document.querySelector('#root').innerHTML +=
        //   <div>${element.val()}</div>*/
        //   var row="<h5>"+key+":"+data+"</h5>"
        //   document.getElementById("root").innerHTML +=row;
      
    //     });
      
    // }) 

}