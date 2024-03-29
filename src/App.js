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
import logo from "../src/logo2.png";
import logo2 from "../src/logo.png";
import screenshot from "../src/Banner4.png";
import screenshot3 from "../src/prof.jpg";
import screenshot4 from "../src/dress.jpg";


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

  setTimeout(() => {
    window.location.href='https://play.google.com/store/apps/details?id=com.gthink.think_chat'
  }, 50);

  return (
    <div className="App">
      <TopBar />
      <div>
      {/* 
      <h1 >Welcome</h1>
      <h2 className="h2">Find friends, share images, memes, business posts, gain followers, join WhatsApp groups of your interest, chat via whatsapp and create yourself a large network.</h2>
      
      <h2 className="h2">Your WhatsApp companion!</h2> */}
      
      <img width="200" height="200" src={logo} alt="" />
      <div className="linkDiv">
      <a className="link" target="blank" href="https://play.google.com/store/apps/details?id=com.gthink.think_chat">Click here to go to Google Play Store and Download thinkchat app</a>
      </div>
      <img width="200" height="200" src={logo2} alt="" />
      <div className="linkDiv2">
      <a className="link2" target="blank" href="https://play.google.com/store/apps/details?id=com.gthink.MyBine">Click here to go to Google Play Store and Download the Amasampo app</a>
      </div>
      {/* <h2>Connect your whatsapp business account {"\n"}or your normal whatsapp account for easy and convenient communication!</h2>
      <h2>Tell your customers about it.</h2>
      <h2>If you have a skill, don't feel shy to post and let employers find you easily.</h2>
      <h2>Download MyBine now! Android only</h2> */}
      {/* <h2>😄 Think it, Chat it!😀</h2> */}
      {/* <img width="300" height="450" src={screenshot} alt="" />
      <img width="300" height="650" src={screenshot3} alt="" />
      <img width="300" height="650" src={screenshot4} alt="" /> */}
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

