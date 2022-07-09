import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Aboutme from "./routes/Aboutme";
import Asyncstoragewarning from "./routes/Asyncstoragewarning";
import Drawertoapp from "./routes/Drawertoapp";
import Firebaseinstall from "./routes/Firebaseinstall";
import Search from "./routes/Search" 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import TopBar from "./TopBar";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADQVf475mveigWuft1vnAxK_sRmGk4TaM",
  authDomain: "germainsways.firebaseapp.com",
  projectId: "germainsways",
  storageBucket: "germainsways.appspot.com",
  messagingSenderId: "690269639498",
  appId: "1:690269639498:web:a26d6b64a6c70d9388e7b3",
  measurementId: "G-FS64CMPFRL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <TopBar />

      <h1>Welcome to React Router!</h1>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<Aboutme />} />
        <Route path="Search" element={<Search />} />
        <Route path="Asyncstoragewarning" element={<Asyncstoragewarning />} />
        <Route path="Drawertoapp" element={<Drawertoapp />} />
        <Route path="Firebaseinstall" element={<Firebaseinstall />} />

      </Routes>

    </div>
  );
}

export default App;
