import Section from "@/features/global/container/Section";
import TopSection from "@/features/global/container/TopSection";
import React from "react";
import AboutContent from "../components/AboutContent";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <AboutContent />
      <Section>
        <Team />
      </Section>
    </>
  );
};

export default About;
