var users = []
var pollsCount = 0

const firebaseConfig = {
    apiKey: "AIzaSyCGjxp0X4O3bhReLgNeMpauJfOheU9ugmc",
    authDomain: "the-world-of-polls.firebaseapp.com",
    projectId: "the-world-of-polls",
    storageBucket: "the-world-of-polls.appspot.com",
    messagingSenderId: "421676610239",
    appId: "1:421676610239:web:989112245dc95198840c0a",
    measurementId: "G-81KSLMFQ0J"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref("Users/").once('value', function(snapshot) {
    snapshot.forEach(
        function(ChildShapshot) {
            users.push(ChildShapshot.val().Name)
        }
    )
})

setInterval(function() {
    firebase.database().ref("PollCount/").on('value', function(snapshot) {
        pollsCount = snapshot.val().Count;
        document.getElementById("polls-Count").innerHTML = pollsCount;
    })
    document.getElementById("user-Count").innerHTML = users.length;
    // window.location.reload()
}, 500)