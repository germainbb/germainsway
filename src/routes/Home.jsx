import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/Asyncstoragewarning">Asyncstoragewarning</Link>
        <Link to="/Drawertoapp">Drawertoapp</Link>
        <Link to="/Firebaseinstall">Firebaseinstall</Link>
      </nav>
    </>
  )
}
