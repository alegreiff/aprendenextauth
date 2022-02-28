import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth";
//import { FirebaseAdapter } from "@next-auth/firebase-adapter";
//import { initializeApp, getApp, getApps } from "firebase/app";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
/* import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  runTransaction,
} from "firebase/firestore"; */

/* const firebaseConfig = {
  apiKey: "AIzaSyDj9ZK1Ii9Oqewi_AVnW2LmFLRcWsBvtGk",
  authDomain: "reactappscursos.firebaseapp.com",
  projectId: "reactappscursos",
  storageBucket: "reactappscursos.appspot.com",
  messagingSenderId: "431154747627",
  appId: "1:431154747627:web:a7c1a4650779de0de306ae",
}; */

// Initialize Firebase
//const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const db = getFirestore();

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  /* adapter: FirebaseAdapter({
    db,
    collection,
    query,
    getDocs,
    where,
    limit,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    runTransaction,
  }), */
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: "secret",
});
