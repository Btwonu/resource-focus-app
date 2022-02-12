import {
	firestore,
	collection,
	doc,
	addDoc,
	setDoc,
	getDoc,
	getDocs,
	deleteDoc,
	updateDoc,
} from '../config/firebase.config';

const topicCollection = collection(firestore, 'topics');

const addTopic = (topicData) => {
	addDoc(topicCollection, topicData)
		.then((docRef) => {
			console.log(`Your doc was created at ${docRef.path}`);
		})
		.catch((err) => {
			console.log('Error while adding doc:', err);
		});
};

const getTopics = () => {
	return getDocs(topicCollection);
};

const getTopic = (topicId) => {
	const docRef = doc(firestore, `topics/${topicId}`);
	return getDoc(docRef);
};

export { addTopic, getTopics, getTopic };
