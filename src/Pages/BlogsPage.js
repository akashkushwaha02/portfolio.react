import React from "react";
import Tittle from "../Components/Tittle";
import { Helmet } from "react-helmet";

function BlogsPage() {
  return (
    <div>
      <Helmet>
        <title>Akash's Portfolio | Blogs</title>
      </Helmet>
      <div className="b-title">
        <Tittle title={"Blogs"} span={"Blogs"} />
      </div>
      <div className="BlogsPage">Under Construction</div>
    </div>
  );
}

export default BlogsPage;
