import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();


firestore.collection("users").doc("VLpjRb3fkJsx6CjiTaPl").collection("cartitems").doc("J5hN9awEqKl3jpVoRIr9")
//second way of query same as above
firestore.doc("/users/VLpjRb3fkJsx6CjiTaPl/cartitems/J5hN9awEqKl3jpVoRIr9")
//for collection of cartitem
firestore.collection("/users/VLpjRb3fkJsx6CjiTaPl/cartitems")