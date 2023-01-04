import React from "react";
import styles from "./about.module.scss";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import Home from "./Home";

function About() {
  return (
    <div styleName="about__container">
      <h1>About Page</h1>
      <p>This is homepage where you can find all info about our company</p>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      {/* <Link exact to="/">
        HomeEE
      </Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default CSSModules(About, styles);
