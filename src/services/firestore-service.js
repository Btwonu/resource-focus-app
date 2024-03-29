import {
	db,
	collection,
	doc,
	addDoc,
	setDoc,
	getDoc,
	getDocs,
	deleteDoc,
	updateDoc,
	query,
	where,
	arrayUnion,
} from '../config/firebase.config';

/**
 * Save document data in specified collection
 *
 * @param  {String} col Firestore Collection path
 * @param  {Object} data
 *
 * @return  {Promise<DocumentReference>} Firestore Document Reference
 */
const save = (col, data) => {
	let collectionRef = collection(db, col);

	return addDoc(collectionRef, data);
};

/**
 * Update specified document with provided data
 *
 * @param  {String} path Firestore Document path
 * @param  {Object} data
 *
 * @return  {Promise<void>}
 */
const update = (path, data) => {
	let docReference = doc(db, path);

	return updateDoc(docReference, data);
};

const updateArray = (path, array, item) => {
	let docReference = doc(db, path);

	return updateDoc(docReference, { [array]: arrayUnion(item) });
};

/**
 * Delete a document at specified path
 *
 * @param  {String} path Firestore Document path
 *
 * @return  {Promise<void>}
 */
const destroy = (path) => {
	return deleteDoc(doc(db, path));
};

/**
 * Retrieve document at specified path
 *
 * @param  {String} path Firestore Document path
 *
 * @return  {Promise:<Object>} Document snapshot data fields
 */
const get = (path) => {
	return getDoc(doc(db, path)).then((docSnapshot) => {
		if (docSnapshot.exists()) {
			return docSnapshot.data();
		} else {
			throw new Error(
				'Firestore document doesnt exist at the specified path'
			);
		}
	});
};

/**
 * Get all documents from a specified collection
 *
 * @param  {String} col Firestore Collection path
 *
 * @return {Promise<Object[]>} Resolved promise array with queried documents
 */
const getAll = (col) => {
	return getDocs(collection(db, col))
		.then((querySnapshot) => {
			const promises = [];

			querySnapshot.forEach((doc) => {
				const docData = {
					...doc.data(),
					id: doc.id,
				};

				promises.push(docData);
			});

			return Promise.all(promises);
		})
		.catch((err) => console.log(err));
};

// Temporary get many method
const getMany = (col, docIdsArray) => {
	if (!docIdsArray) return;

	return getDocs(collection(db, col))
		.then((querySnapshot) => {
			const promises = [];

			querySnapshot.forEach((doc) => {
				if (docIdsArray.includes(doc.id)) {
					const docData = {
						...doc.data(),
						id: doc.id,
					};

					promises.push(docData);
				}
			});

			return Promise.all(promises);
		})
		.catch((err) => console.log(err));
};

export { save, update, updateArray, destroy, get, getAll, getMany };
