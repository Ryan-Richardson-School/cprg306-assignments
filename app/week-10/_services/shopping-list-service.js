import {db} from '../_utils/firebase.js';
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

export async function getItems(userId) {
    if (!userId) {
        throw new Error("User ID is required to get shopping list items.");
    }

    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(itemsRef);

    const items = [];
    snapshot.forEach(doc => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return items;
}

export async function addItem(userId, item) {
    if (!userId) {
        throw new Error("User ID is required to add item.");
    }

    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
}