var firebaseConfig = {
    apiKey: "AIzaSyAgpxPx4ztndRq_RSJAP8zqH1fAy_ZE9mI",
    authDomain: "genesysapi-3c7fc.firebaseapp.com",
    databaseURL: "https://genesysapi-3c7fc-default-rtdb.firebaseio.com",
    projectId: "genesysapi-3c7fc",
    storageBucket: "genesysapi-3c7fc.appspot.com",
    messagingSenderId: "117642374556",
    appId: "1:117642374556:web:29800eb1b793ebca50ec59",
    measurementId: "G-CQD3M622HF"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.firestore();
const usersCollection = database.collection('users');

window.addEventListener("load", function () {
    addInfoTest();
})

function addInfoTest(){
    var info;
    usersCollection.where("email", "==", "kevinbullock3@gmail.com").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            info = doc.data();
            var divElement = document.createElement('div');
            divElement.innerHTML = info.email+"\n"+info.phone+"\n"+info.firstName+"\n"+info.lastName;
            document.body.appendChild(divElement);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
}