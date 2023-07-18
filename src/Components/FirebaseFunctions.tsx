import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
export const getAllMovies = async () => {
  const movies = await getDocs(query(collection(firestore, "Movies")));

  return movies.docs.map((doc) => doc.data());
};
