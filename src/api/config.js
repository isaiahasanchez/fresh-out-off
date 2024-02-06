import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAjlbFosiftLODFZG40Mi_YiZdZfv_1Ck4',
	authDomain: 'fresh-d7437.firebaseapp.com',
	projectId: 'fresh-d7437',
	storageBucket: 'fresh-d7437.appspot.com',
	messagingSenderId: '206519563174',
	appId: '1:206519563174:web:5e5f01e1bc29b5f86ad567',
	measurementId: 'G-5EF1GR4QFS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
