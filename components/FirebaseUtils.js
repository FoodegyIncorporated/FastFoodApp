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
    restaurants: [],
    /**
     * Initialize Firebase and Firestore API
     * Must be called before any of the FirebaseUtil functions
     */
    init: function() {
        if (!firebase.apps.length) {
            console.log("Initializing Firebase...");
            firebase.initializeApp(firebaseConfig);
            this.db = firebase.firestore();
            try {
                this.db.collection('restaurants')
                    .onSnapshot((querySnapshot) => {
                        this.restaurants = [];
                        querySnapshot.forEach((doc) => {
                            this.restaurants.push(doc.data());
                        });
                    });
            } catch (error) {
                console.log("Failed to retrieved restaurants snapshot.");
            }
        }
    },
    /**
     * Sign-in user using email+password.
     * Initializes user object 
     * @param {string} email 
     * @param {string} password 
     */
    signIn: async function(email, password)
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
     * @returns {Promise}
     */
    allRestaurants: async function()
    {
        if (this.restaurants.length > 0) {
            return new Promise.resolve(this.restaurants);
        }
        return new Promise(function (resolve, reject) {
            (function waitForList() {
                if (FirebaseUtils.restaurants.length > 0)
                    return resolve(FirebaseUtils.restaurants);
                
                setTimeout(waitForList, 10);
            })();
        });
    },

    /**
     * Retrive one random restaurant
     * @returns {QueryDocumentSnapshot}
     */
    randomRestaurant: async function()
    {
        if (this.restaurants.length > 0) {
            let rand_restaurant = 
                this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
            return new Promise.resolve(rand_restaurant);
        }
        return new Promise(function (resolve, reject) {
            (function waitForList() {
                if (FirebaseUtils.restaurants.length > 0) {
                    let rand_restaurant = 
                        FirebaseUtils.restaurants[Math.floor(Math.random() * FirebaseUtils.restaurants.length)];
                    return resolve(rand_restaurant);
                }
                
                setTimeout(waitForList, 10);
            })();
        });
    }
};
export default FirebaseUtils;




