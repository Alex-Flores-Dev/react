import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const nombreColeccion = "Registros";

const itemsColeccion = collection(db, nombreColeccion);

export const saveData = (obj) => {
  return addDoc(itemsColeccion, obj).id;
};
