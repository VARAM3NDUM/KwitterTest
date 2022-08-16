//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBz8R58oRsg0r0zmhGeNGItfXKgqAdETQ8",
      authDomain: "kwitter-1dec1.firebaseapp.com",
      databaseURL: "https://kwitter-1dec1-default-rtdb.firebaseio.com",
      projectId: "kwitter-1dec1",
      storageBucket: "kwitter-1dec1.appspot.com",
      messagingSenderId: "499623364090",
      appId: "1:499623364090:web:143d3b588cac204cf49043"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
