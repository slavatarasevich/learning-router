import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";
import CSSModules from "react-css-modules";
import About from "./About";

function Home() {
  return (
    <div styleName="home__container">
      <h1>HOMEPAGE</h1>
      <div>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
}

export default CSSModules(Home, styles);
