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

const bookCollection = collection(firestore, 'books');

const getBook = (bookId) => {
	const docRef = doc(firestore, `books/${bookId}`);
	return getDoc(docRef);
};

const getBooks = (bookIds) => {};

const getAllBooks = () => {
	getDocs(bookCollection)
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		})
		.catch((err) => console.log('Error:', err));
};

const addBook = (bookData) => {
	addDoc(bookCollection, bookData)
		.then((docRef) => {
			console.log(`Your doc was created at ${docRef.path}`);
		})
		.catch((err) => {
			console.log('Error while adding doc:', err);
		});
};

const updateBook = (bookId, bookData) => {
	const docRef = doc(firestore, `books/${bookId}`);

	updateDoc(docRef, bookData)
		.then(() => {
			console.log('Your doc was updated');
		})
		.catch((err) => {
			console.log('Error while updating doc:', err);
		});
};

const replaceBook = (bookId, bookData) => {
	const docRef = doc(firestore, `books/${bookId}`);

	setDoc(docRef, bookData)
		.then(() => {
			console.log('Your doc was replaced');
		})
		.catch((err) => {
			console.log('Error while updating doc:', err);
		});
};

const removeBook = (bookId) => {
	const docRef = doc(firestore, `books/${bookId}`);

	deleteDoc(docRef)
		.then((docRef) => {
			console.log(`Your document was deleted at ${docRef.path}`);
		})
		.catch((err) => console.log('Error:', err));
};

export {
	getBook,
	getBooks,
	getAllBooks,
	addBook,
	removeBook,
	updateBook,
	replaceBook,
};

// addDoc(collectionRef, data) - Writes to a collection
// setDoc(documentRef, data) - Writes to a document
