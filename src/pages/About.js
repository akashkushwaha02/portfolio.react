import React from "react";
import ImageSection from "../components/ImageSection";
import SkillSection from "../components/SkillSection";
import Title from "../components/Title";

function About() {
  return (
    <div className="About">
      <Title title={"About"} span={"About"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="about-skills-container">
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"ReactJS"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"HTML"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"CSS"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"SASS"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"JAVA"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"JDBC"} progress={"50%"} width={"50%"} />
      </div>
    </div>
  );
}

export default About;
