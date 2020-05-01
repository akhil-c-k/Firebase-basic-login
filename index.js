firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("login_div").style.display = "none";
        document.getElementById("user_div").style.display = "block";
      // User is signed in.
      var currentUserId = firebase.auth().currentUser;
      if(currentUserId != null)
       {
           var email_id = currentUserId.email
           document.getElementById('welcome_user').innerHTML = "welcome user :" + email_id
       }
    } else {
      // No user is signed in.
      document.getElementById("login_div").style.display = "block";
      document.getElementById("user_div").style.display = "none";
      
     }
  });

function login() 
 {
    
     var userEmail = document.getElementById('email_field').value;
     var userPassword = document.getElementById('password_field').value;

     firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert('error' +errorMessage )
      });
 }

 function logout()
  {
    firebase.auth().signOut();
  }