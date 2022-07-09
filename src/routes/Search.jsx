import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <>
      <main>
        <h2>This is the search page</h2>
        <p>search anything</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
