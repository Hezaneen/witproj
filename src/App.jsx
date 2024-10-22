import React from 'react';
import './styles.css';
import profileImg from './images/profile.jpg';
import projectImg from './images/project.jpg';
import discordLogo from './images/discord.png';
import instagramLogo from './images/instagram.png'; 
import facebookLogo from './images/facebook.png'; 
import waveLogo from './images/wave.png'; 
import htmlLogo from './images/html.png';
import cssLogo from './images/css.png';
import pythonLogo from './images/python.png';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <a href="#" className="logo">Tanya Pelobello.</a>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Proj">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </header>

     {/* Home Section */}
  <section id="home" className="home">
    <div className="home-text">
      <h2>
        Hello, I'm Tanya
        <img src={waveLogo} alt="Wave" className="wave-icon" /> 
      </h2>
      <h3>A Full-Stack Developer</h3>
    </div>
  </section>



{/* About Section */}
<section id="About" className="About">
  <div className="aboutme">
    <div className="aboutme-description">
      <h3>About Me</h3>
      <p>
        Hi, I’m Tanya, an IT student from Iloilo City, currently studying at Western Institute of Technology. I specialize in web development, focusing on building responsive, user-friendly websites. My passion is creating clean, efficient code that turns ideas into reality, whether for mobile or desktop.
        I’m always excited to learn new technologies and look forward to a future career in IT, where I can contribute to innovative solutions. Check out my projects and feel free to reach out!
      </p>
    </div>
    <div className="aboutme-img">
      <img src={profileImg} alt="Profile" />
    </div>
  </div>

  {/* Technologies I Use Section */}
  <div className="skills">
    <h3>Technologies I Use</h3>
    <div className="skills-images">
      <img src={htmlLogo} alt="HTML" />
      <img src={cssLogo} alt="CSS" />
      <img src={pythonLogo} alt="Python" />
    </div>
  </div>
</section>

      {/* Project Section */}
<section id="Proj" className="Proj">
  <div className="project-list">
    <div className="project">
      <div className="project-img">
        <a href="https://to-do-list-4xaz.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src={projectImg} alt="Project" />
        </a>
      </div>
      <div className="project-description">
        <h3>Project One</h3>
        <p>This To-Do List app is a simple and intuitive tool designed to help users organize their daily tasks efficiently. With its clean interface, you can easily add, edit, or delete tasks and mark them as complete once finished. Whether you're tracking personal goals or managing work assignments, this app ensures that your tasks are neatly categorized and always at your fingertips. It's built with responsive design, so it works seamlessly across devices—whether you're on a laptop or mobile. Perfect for staying on top of your schedule with ease!</p>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="Contact" className="Contact">
        <h3>Contact Me</h3>
        <div className="social-icons">
          <a href="http://discordapp.com/users/623567634885247020" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt="Discord" />
          </a>
          <a href="https://www.instagram.com/ohmynyann/profilecard/?igsh=MXB0N2hocnNxc2U2NQ==" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/callmenyan?mibextid=LQQJ4d/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tanya Pelobello. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default App;
