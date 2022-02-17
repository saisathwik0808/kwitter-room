
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCvOc3gYsNUqmY1a0Xln_lhseF2EsQkSHY",
      authDomain: "kwitter-2b861.firebaseapp.com",
      databaseURL: "https://kwitter-2b861-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b861",
      storageBucket: "kwitter-2b861.appspot.com",
      messagingSenderId: "449060420708",
      appId: "1:449060420708:web:0feebfdf328c362750f371",
      measurementId: "G-RGL4BS4Y0D"
    };

    firebase.initializeApp(firebaseConfig);
    

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name+ "!";

function addRoom()
{
      room_name= document.getElementById("room_namee").ariaValueMax;

      firebaseConfig.database().ref("/").child(room_name).upsate({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location= "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;

      Room_Names = childKey;
      
      console.log("Room Name - "+Room_Names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });
 });
}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}