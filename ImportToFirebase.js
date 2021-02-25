const firebase = require("firebase/app");
require("firebase/auth")
require("firebase/firestore");
require("./ImportUser.js");
const os = require('os');
const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');

var firebaseConfig = {
    apiKey: "AIzaSyAbX3uI2St7-AWYld9Mjdd7SCOATFxC0ZQ",
    authDomain: "foodegy-4357d.firebaseapp.com",
    projectId: "foodegy-4357d",
    storageBucket: "foodegy-4357d.appspot.com",
    messagingSenderId: "1081555609994",
    appId: "1:1081555609994:web:22eafd0b31327d45010073",
    measurementId: "G-433CEVDKN5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

firebase.auth().signInWithEmailAndPassword(import_email, import_pass)
    .then((userCredential) => {
        console.log("User Auth Success: " + userCredential.user.email);
        BeginImport(userCredential.user);
    })
    .catch((error) => {
        console.log("User Auth Failed: " + error.code + " - " + error.message);
    });

async function BeginImport(user)
{
    const content = await fs.readFile('./assets/Restaurants_near_CSUN.csv');
    const records = parse(content);

    let restaurants = db.collection('restaurants');

    for (let [index, val] of records.entries()) {
        if (index == 0) continue;
        if (val[0].length == 0) continue;

        await restaurants.doc(val[0]).set({
            cuisine: val[1],
            cost: val[2].length,
            rating: val[3]
        }, { merge: true })
        .then(() => console.log("Created or Updated Restaurant: " + val[0]))
        .catch((error) => {
            console.log(error.code + " - " + error.message);
        });
    }
    process.exit();
}