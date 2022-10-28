import React from "react";
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";
import { Fragment } from "react";
import ScrollButton from "../common/toTop/ScrollButton";


function Home() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <Body />
    </div>
    <div>
        <Footer />
    </div>
    <div className="scroll-container">
    <Fragment>
      <ScrollButton />
    </Fragment>
    </div>
  </div>
  );
}

export default Home;