import React from "react";
import { Link } from "react-router-dom";

import "./Style.css";
function Home() {
  return (
    <div className="Main-page-list">
      Polling
      {/* <Link className="Link" to="/home">
        Home
      </Link> */}
      <Link className="Link" to="/login">
        Login
      </Link>
      <Link className="Link" to="/register">
        Register
      </Link>
    </div>
  );
}

export default Home;
