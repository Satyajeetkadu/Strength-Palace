var config = {
    apiKey: "AIzaSyDbeZtbOqSg_brZQskWeadJ-VLwdAxwN-c",
    authDomain: "gymwebsite-c4fd8.firebaseapp.com",
    databaseURL: "https://gymwebsite-c4fd8-default-rtdb.firebaseio.com",
    projectId: "gymwebsite-c4fd8",
    storageBucket: "gymwebsite-c4fd8.appspot.com",
    messagingSenderId: "264765439499",
    appId: "1:264765439499:web:971d6db3aad880c710510e"
  };
  firebase.initializeApp(config);
  
  var messagesRef = firebase.database().ref('members');

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
      e.preventDefault();  
      //get input values
      var name = getInputVal('name');
      var age = getInputVal('age');
      var email = getInputVal('email');

      
      var x  = document.getElementById('plan');
      var plan = x.options[x.selectedIndex].text;
     saveMessage(name,age,email,plan);
    //   document.getElementById('contactForm').reset(); 
  }
  
   function getInputVal(id){
       return document.getElementById(id).value;
  }
  
  function saveMessage(name, age, email,plan){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        age: age,
        email: email,
        plan: plan
      });


      $('.success-message').show();

      $('#contactForm')[0].reset();
    
      alert('You are a member now! Kindly pay the amount at the reception')
    }