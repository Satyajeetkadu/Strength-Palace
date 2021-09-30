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
  
  var messagesRef = firebase.database().ref('booksession');
  
  $('#contactForm').submit(function(e) {
    e.preventDefault();
  
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.name').val(),
        age: $('.age').val(),
        time: $('.time').val(),
        date: $('.date').val(),
        email: $('.email').val(),
        // message: $('.message').val()
    });
  
    $('.success-message').show();
  
    $('#contactForm')[0].reset();
  
    alert('Session Booked!')
  });