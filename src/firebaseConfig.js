import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdvumlap8P8sSNL_mQHTHnak8D945VmQY",
  authDomain:"fir-coder-reactt.firebaseapp.com" ,
  projectId: "fir-coder-reactt" ,
  storageBucket: "fir-coder-reactt.appspot.com" ,
  messagingSenderId:"579381252505" ,
  appId: "1:579381252505:web:a75f388df67256b652c308",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
/*
VITE_API_KEY=AIzaSyAdvumlap8P8sSNL_mQHTHnak8D945VmQY
VITE_AUTH_DOMAIN= fir-coder-reactt.firebaseapp.com
VITE_PROJECT_ID= fir-coder-reactt,
VITE_STORAGE_BUCKET= fir-coder-reactt.appspot.com,
VITE_MESSAGING_SENDER_ID= 579381252505,
VITE_APP_ID= 1:579381252505:web:a75f388df67256b652c308
apiKey: import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN ,
  projectId: import.meta.env.VITE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID ,
  appId: import.meta.env.VITE_APP_ID,
*/