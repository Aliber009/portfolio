import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import node from "../assets/skills/nodejs.svg";
import post from "../assets/skills/post.png";
import flask from "../assets/skills/flsk.png";
import python from "../assets/skills/python.svg";
import nxt from "../assets/skills/Nextjs-logo.svg";
import nst from "../assets/skills/nest.svg";
import fastapi from "../assets/skills/fastapi.png";
import mongo from "../assets/skills/mongodb.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import unity from "../assets/skills/Unity_2021.svg.png";
import gcp from "../assets/skills/gcp.png";
import react from "../assets/skills/react.svg";
import docker from "../assets/skills/docker.svg";
import git from "../assets/skills/git.svg";
import express from "../assets/skills/express.svg";

import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="python" experience="3 years" img={python} />
          <SkillCard name="javascript" experience="3 years" img={javascript} />
          <SkillCard name="NodeJs" experience="3 years" img={node} />
          <SkillCard name="NestJs" experience="3 years" img={nst} />
          <SkillCard name="ReactJs" experience="2 years" img={react} />
          <SkillCard name="NextJs" experience="2 years" img={nxt} />
          <SkillCard name="unity" experience="2 years" img={unity} />
          <SkillCard name="Fast Api" experience="2 years" img={fastapi} />
          <SkillCard name="Flask" experience="2 years" img={flask} />
          <SkillCard name="kubernetes" experience="1 years" img={kubernetes} />
          <SkillCard name="docker" experience="1 years" img={docker} />
          <SkillCard name="git" experience="2 years" img={git} />
          <SkillCard name="google Cloud" experience="1 years" img={gcp} />
          <SkillCard name="MongoDB" experience="2 years" img={mongo} />
          <SkillCard name="Postgresql" experience="2 years" img={post} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
