import React from "react";
import ImageSection from "../components/ImageSection";
import SkillSection from "../components/SkillSection";
import Title from "../components/Title";

function About() {
  return (
    <div className="About">
      <Title title={"About me"} span={"About me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="about-skills-container">
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"Javascript"} progress={"50%"} width={"50%"} />
      </div>
    </div>
  );
}

export default About;
