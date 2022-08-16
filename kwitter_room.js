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
user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "Add a room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val();
if (childKey != "purpose")
     {
        firebase_message_id = childKey;
        message_data = childData;
     
      //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];

        name_with_tag = "<h4> "+ name+"<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id="+firebase_message_id+" vlaue="+like+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>";

        row = name_with_tag+message_with_tag+like_button+span_with_tag;
        document.getElementById("output").innerHTML += row;
     }
      
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function updateLike(message_id){
  console.log("clicked on like button -"+ message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}