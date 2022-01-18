import { db, collection, doc, addDoc, setDoc } from '../config/firebase.config';

const taskCollection = collection(db, 'tasks');

const addTask = (taskData) => {
	addDoc(taskCollection, taskData)
		.then((docRef) => {
			console.log(`Your doc was created at ${docRef.path}`);
		})
		.catch((err) => {
			console.log('Error while adding doc:', err);
		});
};

export { addTask };
