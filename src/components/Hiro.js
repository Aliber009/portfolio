import { useState } from "react";

import profile from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";
import About from "./About";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";
import code from "./coding.json";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);
  const AnimaOpts = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {!loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <Lottie options={AnimaOpts} height={400} width={400} />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div
            className="flex flex-col w-full mt-8 "
            style={{ position: "relative" }}
          >
            <About />
            <div style={{ position: "absolute", bottom: 0, right: "40px" }}>
              <ul className="flex mt-2 gap-4 items-center">
                <li>
                  <a
                    href="https://github.com/aliber009"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon size="2xl" icon={faGithub} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/ali-beroro-8a215716a/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
      </div>
    </>
  );
}
