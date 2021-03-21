import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAbX3uI2St7-AWYld9Mjdd7SCOATFxC0ZQ",
    authDomain: "foodegy-4357d.firebaseapp.com",
    projectId: "foodegy-4357d",
    storageBucket: "foodegy-4357d.appspot.com",
    messagingSenderId: "1081555609994",
    appId: "1:1081555609994:web:22eafd0b31327d45010073",
    measurementId: "G-433CEVDKN5"
};

export var FirebaseUtils = {
    db: null,
    user: null,
    /**
     * Initialize Firebase and Firestore API
     * Must be called before any of the FirebaseUtil functions
     */
    Init: function() {
        if (!firebase.apps.length) {
            console.log("Initializing Firebase...");
            firebase.initializeApp(firebaseConfig);
            this.db = firebase.firestore();
        }
    },
    /**
     * Sign-in user using email+password.
     * Initializes user object 
     * @param {string} email 
     * @param {string} password 
     */
    SignIn: async function(email, password)
    {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCred) => {
                this.user = userCred;
            })
            .catch((error) => {
                console.log("User Auth Failed: " + error.code + " - " + error.message);
            });
    },
    /**
     * Retrieve the entire collection of Restaurants 
     * @returns {QueryDocumentSnapshot} Array
     */
    AllRestaurants: async function()
    {
        let r = await this.db.collection('restaurants').get();
        return r;
    }
};
export default FirebaseUtils;




