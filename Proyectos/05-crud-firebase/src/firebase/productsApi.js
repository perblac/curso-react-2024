import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {GoogleAuthProvider, browserSessionPersistence, getAuth, setPersistence, signInWithPopup, signOut} from 'firebase/auth';
import { db } from "./firebase";

const productosCollection = collection(db, "crud-productos");

// cargar productos
export const getProductos = async () => {
  try {
    const data = await getDocs(productosCollection);
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Error getting products", error);
    throw error;
  }
};

// cargar un producto
export const getProductById = async (productId) => {
  try {
    const productDocRef = doc(productosCollection, productId);
    const productDoc = await getDoc(productDocRef);
    if (productDoc.exists()) {
      return {
        ...productDoc.data(),
        id: productDoc.id,
      };
    } else {
      console.error("Producto no encontrado");
      return null;
      // o un throw error
    }
  } catch (error) {
    console.error("Error al obtener product", error);
    throw error;
  }
};

// crear (ADD) entrada de productos
export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(productosCollection, productoData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding product", error);
    throw error;
  }
};

// actualizar un producto
export const editProduct = async (id, newData) => {
  try {
    // referencia al doc donde esta el id
    const productDocRef = doc(productosCollection, id);
    // actualizamos
    await updateDoc(productDocRef, newData);
  } catch (error) {
    console.error("Error editing product", error);
    throw error;
  }
};

// eliminar entrada de productos
export const deleteProducto = async (id) => {
  try {
    const productDocRef = doc(productosCollection, id);
    await deleteDoc(productDocRef);
  } catch (error) {
    console.log("Error deleting product", error);
    throw error;
  }
};

// validar la entrada con Google
export const signInWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    // tipo de persistencia que tenemos con la sesion de google
    // a nivel local -> browserLocalPersistence
    // a nivel de sesion
    // y sin persistencia.
    // A nivel de sesion:
    await setPersistence(auth,browserSessionPersistence);
    const result = await signInWithPopup(auth,provider);
    const user = result.user;
    // setear mi estado con el usuario
    signInFirebase(user);
    navigate("/");
  } catch (error) {
    setError("Error al iniciar sesion con Google");
  }
};

// cerrar sesion
export const cerrarSesion = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log("Error al iniciar sesion con Google", error);
    return false;
  }
}