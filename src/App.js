import React, { useLayoutEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import Home from "./routes/Home";
import Aboutme from "./routes/Aboutme";
import Asyncstoragewarning from "./routes/Asyncstoragewarning";
import Drawertoapp from "./routes/Drawertoapp";
import Firebaseinstall from "./routes/Firebaseinstall";
import Search from "./routes/Search";
import Carousel from "./Carousel";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import TopBar from "./TopBar";
import { getAnalytics } from "firebase/analytics";
import Scrollbar from "./Scrollbar";
import { Link } from "react-router-dom";
import logo from "../src/logo.png";
import screenshot from "../src/Screenshot.jpg";
import screenshot3 from "../src/screenshot3.png";


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

  useLayoutEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    
  }, [])

  return (
    <div className="App">
      <TopBar />
      <div>
      <h1 >Welcome</h1>
      <h2>Find all businesses in Zambia in one place, no more asking around.</h2>
      <h2>It's time for next level</h2>
      <h2>Buy and sell products/services</h2>
      <h2>Promote your business</h2>
      <h2>Tell your customers about it.</h2>
      <h2>If you have a skill, don't feel shy to post and let employers find you easily.</h2>
      <a target="blank" href="https://play.google.com/store/apps/details?id=com.findmybusiness.app">Download the app</a>
      <h2>Go get that money! Just do it!</h2>
      <img width="100" height="100" src={logo} alt="" />
      <img width="300" height="600" src={screenshot} alt="" />
      <img width="800" height="400" src={screenshot3} alt="" />
        <Routes>
          <Route path="/" element={<Scrollbar />} />
          <Route path="about" element={<Aboutme />} />
          <Route path="Search" element={<Search />} />
          <Route path="Asyncstoragewarning" element={<Asyncstoragewarning />} />
          <Route path="Drawertoapp" element={<Drawertoapp />} />
          <Route path="Firebaseinstall" element={<Firebaseinstall />} />
        </Routes>
      </div>
      {/* <Carousel /> */}
    </div>
  );
}

export default App;

