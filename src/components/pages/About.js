import React from "react";
import profilePic from "../../images/picture-of-me.jpg";

function About() {
  return (
    <div id="about" className="container mb-5">
      <div className="card">
        <div className="card-header">
          <h1>ABOUT ME</h1>
        </div>
        <div id="bio" className="card-body">
          <img
            src={profilePic}
            className="img-thumbnail profile-pic"
            alt="James Calingo (aka me)"
          />

          <h1>Hi!</h1>
          <p>My name is James Calingo and I am a web/software developer.</p>

          <p>
            For as long as I can remember, I've been working with computers.
            Whether it was writing stories and papers in Word, playing with
            sounds in Garageband, or even just surfing the internet, I spent
            countless hours each day at the computer.
          </p>
          <p>
            One day, while browsing around the internet in search of a new
            career path, I found web development through a coding bootcamp. I
            quickly fell in love with the problem solving nature of it and the
            feeling of making code work.
          </p>
          <p>
            Now, I'm working on dynamic applications, learning new things every
            day, and trying to keep up with the busy world of software
            development/engineering.
          </p>
          <p>
            In addition, I have a background in Psychology (with a Bachelors Degree) and have been involved in a church band for over ten years - including four as one of its coordinators.
          </p>
          <p>
            And that's basically me in a nutshell. If you want to know more, you can use the links in the sidebar to the left (or above if you're on mobile) to check out my <a href="https://linkedin.com/in/james-calingo">LinkedIn</a> and <a href="https://github.com/JamesCalingo">GitHub</a>. You can also check out my blog by using the "Blog" link.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
