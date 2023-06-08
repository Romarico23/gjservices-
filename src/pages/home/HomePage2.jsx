import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

export const HomePage2 = ({ addMinusPage }) => {
  const navigate = useNavigate();

  const handleNavigateContact = () => {
    navigate("/contact");
  };

  const loadPageAnimation = useAnimation();
  useEffect(() => {
    loadPageAnimation.start({
      x: [addMinusPage === "true" ? -1000 : 1000, 0],
      transition: { duration: 0.4 },
    });
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [typingTextProvides] = useTypewriter({
    words: ["GJ Services Provides:"],
    typeSpeed: 30,
    loop: 1,
  });

  const [typingTextBrands] = useTypewriter({
    words: ["AC Dealer of Leading Brands"],
    typeSpeed: 30,
    loop: 1,
  });

  const [typingTextSolutions] = useTypewriter({
    words: ["AC Residential and Commercial Solutions"],
    typeSpeed: 30,
    loop: 1,
  });

  const [typingTextInstallation] = useTypewriter({
    words: ["AC Installation and Dismantling"],
    typeSpeed: 30,
    loop: 1,
  });
  const [typingTextMaintenance] = useTypewriter({
    words: ["AC Preventive Maintenance"],
    typeSpeed: 30,
    loop: 1,
  });

  return (
    <motion.div
      className="homePage-2"
      animate={loadPageAnimation}
      exit={{ x: 0 }}
    >
      <div>
        <h1
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 2s",
          }}
        >
          Professional Aircon Technicians
        </h1>
        <h2
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 3s",
          }}
        >
          {typingTextProvides}
        </h2>
        <ul
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 3s",
          }}
        >
          <li>
            <p>AC Dealer of Leading Brands</p>
            <p>{typingTextBrands}</p>
          </li>
          <li>
            <p>AC Residential and Commercial Solutions</p>
            <p>{typingTextSolutions}</p>
          </li>
          <li>
            <p>AC Installation and Dismantling</p>
            <p>{typingTextInstallation}</p>
          </li>
          <li>
            <p>AC Preventive Maintenance</p>
            <p>{typingTextMaintenance}</p>
          </li>
        </ul>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translate(-200px, 0px)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s",
          }}
        >
          <button onClick={handleNavigateContact}>INQUIRE NOW</button>
        </div>
      </div>
      <div>
        <img
          ref={ref}
          style={{
            transform: isInView ? "none" : "translate(100px, -20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 3s",
          }}
          src="https://static.wixstatic.com/media/8b840c_4277dc1292b94a99a34e4a1c06048aca~mv2.png/v1/crop/x_363,y_0,w_3061,h_2160/fill/w_428,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(14).png"
          alt="Image"
        />
      </div>
    </motion.div>
  );
};
