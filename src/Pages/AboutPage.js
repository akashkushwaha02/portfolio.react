import React from "react";
import { Helmet } from "react-helmet";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Helmet>
        <title>About Akash</title>
      </Helmet>
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"65%"} width={"65%"} />

        <SkillsSection skill={"React Js"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"HTML"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"CSS"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"SASS"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Bootstrap"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Java"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"} />
      </div>
    </div>
  );
}

export default AboutPage;
