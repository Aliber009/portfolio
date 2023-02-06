/* eslint-disable react/jsx-no-comment-textnodes */
import "./about.css";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const About = () => {
  const [showReact, setShowReact] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={"about"}>
      <div className={"left"}>
        <motion.div
          className={"left_number"}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={"text_fade_01"}>20</span>
          <span className={"text_fade_01"}>21</span>
          <span className={"text_fade_01"}>22</span>
          <span className={"text_fade_01"}>23</span>
          <span className={"text_fade_01"}>24</span>
          <span className={"text_fade_01"}>25</span>
          <span className={"text_fade_01"}>26</span>
          <span className={"text_fade_01"}>27</span>
          <span className={"text_fade_01"}>28</span>
          <span className={"text_fade_01"}>29</span>
          <span className={"text_fade_01"}>30</span>
          <span className={"text_fade_01"}>31</span>
          <span className={"text_fade_01"}>32</span>
          <span className={"text_fade_01"}>33</span>
          <span className={"text_fade_01"}>34</span>
          <span className={"text_fade_01"}>35</span>
          <span className={"text_fade_02"}>36</span>
          <span className={"text_fade_03"}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={"text_fade_03"}>53</span>
          <span className={"text_fade_02"}>54</span>
          <span className={"text_fade_01"}>55</span>
        </motion.div>
        <div className={"left_line"}></div>
        <div className={"left_line2"}></div>
      </div>
      <div style={{ paddingTop: 50, width: "100%" }}>
        <div className="flex flex-col w-full mt-8">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(
                  "<h1 class='text-xl text-gray-400' >Hello, my name is </h1> <h1><strong class='text-2xl font-bold' >Ali Ber</strong></h1> <span style='display:flex;align-items:end;gap:0.3rem;min-height:2rem'><h1 class='text-xl text-gray-400'>I am a <h1/> <h1><strong class='text-2xl'>software engineer</strong></h1></span> <span style='display:flex;align-items:end;gap:0.3rem;min-height:2rem'><h1 class='text-xl text-gray-400'> A top rated </h1><h1> <strong class='text-2xl'>freelancer</strong> on Upwork.</h1> </span>  <span style='display:flex;align-items:end;gap:0.3rem;min-height:2rem'> <h1 class='text-xl text-gray-400'>A </h1> <h1><strong class='text-2xl'>Game dev</strong> </h1> hobbyist (unity and c#) </span><br/> <p class='text-md font-light text-gray-400'>Enthusiastic and Tech Passionate, I enjoy playing video games, piano and exploring new things </p> <p>&#128151;</p>    "
                )
                .pauseFor(8000)
                //.deleteAll()
                .start();
            }}
            options={{
              //loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
