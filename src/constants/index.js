import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import html from "../assets/html.png";
import java from "../assets/java.png";
import css from "../assets/css.png";
import javaScript from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
export const HERO_CONTENT = `I am a passionate mern stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React,HTML,CSS as well as back-end technologies like Node.js, MySQL, and MongoDB.My core language is JAVA. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Mern stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const LANGUAGE = [
  {
    name: "Core JAVA",
    image: java,
    description:
      "Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built",
  },
  {
    name: "HTML",
    image: html,
    description: "HTML is the standard markup language for creating Web pages.",
  },
  {
    name: "CSS",
    image: css,
    description:
      "CSS stands for Cascading Style Sheets.CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
  },
  {
    name: "JavaScript",
    image: javaScript,
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages and dynamic features",
  },
  {
    name: "React",
    image: react,
    description:
      "React is a JavaScript library created by Facebook.React is a User Interface (UI) library.React is a tool for building UI components",
  },
  {
    name: "Node js",
    image: node,
    description:
      "Node. js provides a runtime environment outside of the browser. It's also built on the Chrome V8 JavaScript engine.",
  },
];

export const PROJECTS = [
  {
    title: "Hospital Management System",
    image: project1,
    description:
      "An application for managing patients ,appintment, laboratoies as well as the doctors and the other workers with features such as patients update recipts, lab testing, and progress recipts.",
    technologies: [
      "HTML",
      "CSS",
      "JAVA",
      "NetBeans",
      "bootstrap",
      "JavaScripts",
    ],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Dihrigarh,Harnaut,Bihar-803110",
  phoneNo: "+91 73688 40306",
  email: "hmhardik5021@gmail.com",
};
