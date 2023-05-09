const firebaseConfig = {
    apiKey: "AIzaSyASJjR_I5yBw2BRcb2BofFo3yCTLzGgpFE",
    authDomain: "signin-edf64.firebaseapp.com",
    projectId: "signin-edf64",
    storageBucket: "signin-edf64.appspot.com",
    messagingSenderId: "457157733295",
    appId: "1:457157733295:web:f5f938215c36147bd4dd5a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>



/*// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables

  */

  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    Name = document.getElementById('name').value
    reg = document.getElementById('reg').value
    course = document.getElementById('course').value
    year= document.getElementById('year').value
    dob= document.getElementById('dob').value
    dept=document.getElementById('dept').value
    email = document.getElementById('email').value
    password=document.getElementById('password').value
    phone = document.getElementById('phone').value
    address= document.getElementById('address').value
    pincode= document.getElementById('pincode').value
    
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        name:Name,
        reg:reg,
        course:course,
        year:year,
        dob:dob,
        dept:dept,
        email:email,
        password:password,
        phone:phone,
        address:address,
        pincode:pincode,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
// Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }