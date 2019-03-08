import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgNsqPUD8KmqTJLK-pqaAJ10hf3C5nQGs",
  authDomain: "catch-of-the-day-wes-bos-4ee26.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos-4ee26.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
