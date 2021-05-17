import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />

        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"HTML"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"CSS"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"SASS"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"Bootstrap"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"Java"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"} />
      </div>
    </div>
  );
}

export default AboutPage;
