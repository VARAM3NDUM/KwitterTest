
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.databse().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}