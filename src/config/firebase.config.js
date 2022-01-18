import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	doc,
	setDoc,
	collection,
	addDoc,
} from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyBvbs1bc4SmlpndOEW3v117PW8kmZj-zYQ',
	authDomain: 'focus-app-bea1a.firebaseapp.com',
	projectId: 'focus-app-bea1a',
	storageBucket: 'focus-app-bea1a.appspot.com',
	messagingSenderId: '880899777834',
	appId: '1:880899777834:web:408bf55598f590ca1eea53',
	measurementId: 'G-NEFQCJFXBJ',
};

const app = initializeApp(config);
const db = getFirestore();

export { db, doc, collection, addDoc };
