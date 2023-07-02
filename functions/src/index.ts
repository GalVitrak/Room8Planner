import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { hash } from "./cyber";

admin.initializeApp();

const db = admin.firestore();

exports.addUser = functions.https.onCall(async (data, context) => {
  const { firstName, lastName, email } = data.user;
  const password: string = data.user.password;
  const hashedPass = hash(password);

  admin.auth().createUser({ email, password: hashedPass });
  await db.collection("users").add({
    firstName,
    lastName,
    email,
    password: hashedPass,
    role: "User",
  });
  // }
});
