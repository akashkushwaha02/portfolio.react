import React from "react";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div className="HomePage">
      <Helmet>
        <title>Akash's Portfolio</title>
      </Helmet>
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Akash Singh Kushwaha</span>.
        </h1>
        <p className="h-sub-text">
          " Because the people who are crazy enough to think they can change the
          world are the ones who do. "<p>- Steve Jobs</p>
        </p>

        <div className="icons"></div>
      </header>
    </div>
  );
}

export default HomePage;
