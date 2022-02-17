
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCtJzwsa2O5Wx11G_-RvBEBdLYVorfiOdU",
    authDomain: "kwitter-2-b9368.firebaseapp.com",
    databaseURL: "https://kwitter-2-b9368-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-b9368",
    storageBucket: "kwitter-2-b9368.appspot.com",
    messagingSenderId: "495485129993",
    appId: "1:495485129993:web:279154113d7130f8676fd8",
    measurementId: "G-1KGFB78392"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function addUser()
  {
      user_name = document.getElementById("user_name").ariaValueMax;
      firebase.database().ref("/").child(user_name).update({
          purpase : "adding user"
      });
  }