import React from "react";
import Links from "./Links";

function About(props) {

  const {bio} = props;
  let bioContent;
  if (bio && bio.trim() !== '') {
    bioContent = <p>{bio}</p>;
  } else {
    bioContent = null;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioContent}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
    </div>
  );
}

export default About;
