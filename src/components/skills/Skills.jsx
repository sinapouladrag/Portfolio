import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <h2 className="section__title">Skills</h2>
      <spna className="section__subtitle">My technical level</spna>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
