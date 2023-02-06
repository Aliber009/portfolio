import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg";
import mtcna from "../assets/certs/mtcna.jpg";
import adinusa from "../assets/certs/adinusa.png";
import dicodingAws from "../assets/certs/dicoding-aws.png";
import dicodingJs from "../assets/certs/dicoding-js.png";
import dicodingNetwork from "../assets/certs/dicoding-network.png";
import progateHtml from "../assets/certs/progate-htmlcss.png";
import progateJs from "../assets/certs/progate-js.png";
import fccResponsive from "../assets/certs/fcc-responsive.png";
import fleet from "../assets/certs/fleet.PNG";
import agri from "../assets/certs/agri.PNG";
import total from "../assets/certs/tota.PNG";
// import

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my Projects</p>

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="Fleet Management App"
          img={fleet}
          issued="Vehicle management ,live Tracking, Route replay, 
          user managament (hierarchical), Geofencing, 
          notifications et reporting managements"
          date="2021 - 2023"
        />
        <CertCard
          name="AI traffic App"
          img={total}
          issued="Developement of an image detection service with 
          TensorFlow by locally made sensors in order to : Estimate 
          the number of passengers having, stopped, utilized or
          passed through the station"
          date="2022"
        />
        <CertCard
          name="Agriculture Management App"
          img={agri}
          issued="Management of Agricultural Crops regarding characteristics such as:  CO2, UV, temperature, humidity..etc"
          date="2022"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2 " alt="hr" />
    </div>
  );
}
