import HonorCard from "./HonorCard.js";

import hr from "../assets/curve-hr.svg";

export default function Honors() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Experience</h1>
      <p className="font-light text-gray-400">
        Here are some of my professional Experiences
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <HonorCard
          name="Head of Development Team"
          issued="ABA technology"
          desc="Developement of IT solutions (full-stack), Digitalisation of clients systems,Maintenance and monitoring of projects."
        />
        <HonorCard
          name="FullStack Engineer"
          issued="DigiEye"
          desc="Developement of IOT platforms, Data streaming pipelines & Data analysis  ."
        />
        <HonorCard
          name="Gameplay Developer "
          issued="Freelance"
          desc="3D & 2D game devlopment for mobile and Desktop using Unity and Blender."
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
