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
} from '../config/firebase.config';

/**
 * Save document data in specified collection
 *
 * @param   {String}  col   [Firestore Collection path]
 * @param   {Object}  data
 *
 * @return  {Promise<DocumentReference>}  [Firestore Document Reference]
 */
const save = (col, data) => {
  let collectionRef = collection(db, col);

  return addDoc(collectionRef, data);
};

/**
 * Update specified document with provided data
 *
 * @param   {String}  path   [Firestore Document path]
 * @param   {Object}  data
 *
 * @return  {Promise<void>}
 */
const update = (path, data) => {
  let docReference = doc(db, path);

  return updateDoc(docReference, data);
};

/**
 * Delete a document at specified path
 *
 * @param   {String}  path  [Firestore Document path]
 *
 * @return  {Promise<void>}
 */
const destroy = (path) => {
  return deleteDoc(doc(db, path));
};

/**
 * Retrieve document at specified path
 *
 * @param   {String}  path  [Firestore Document path]
 *
 * @return  {Promise:<Object>}  [Document snapshot data fields]
 */
const get = (path) => {
  return getDoc(doc(db, path)).then((docSnapshot) => {
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      throw new Error('Firestore document doesnt exist at the specified path');
    }
  });
};

export { save, update, destroy, get };
