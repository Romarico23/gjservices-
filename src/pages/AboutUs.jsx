import React, { useEffect, useRef } from "react";
import "./aboutus.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigateProducts = () => {
    navigate("/products");
  };
  const handleNavigateContact = () => {
    navigate("/contact");
  };

  const [typingTextAboutUsH1] = useTypewriter({
    words: ["ABOUT US"],
    typeSpeed: 44,
    delaySpeed: 1000,
    loop: 1,
  });

  const refImgAboutBackground = useRef(null);
  const isInViewImgAboutBackground = useInView(refImgAboutBackground, {
    once: true,
  });

  const refH2Mission = useRef(null);
  const isInViewH2Mission = useInView(refH2Mission, { once: true });

  const refPMission = useRef(null);
  const isInViewPMission = useInView(refPMission, { once: true });

  const refImgMission = useRef(null);
  const isInViewImgMission = useInView(refImgMission, {
    once: true,
  });

  const refH2Vision = useRef(null);
  const isInViewH2Vision = useInView(refH2Vision, { once: true });

  const refPVision = useRef(null);
  const isInViewPVision = useInView(refPVision, { once: true });

  const [scopeUlVision, animateUlVision] = useAnimate();
  const isInViewUlVision = useInView(scopeUlVision, { once: true });

  useEffect(() => {
    if (isInViewUlVision) {
      animateUlVision(
        "li",
        { opacity: [0, 1] },
        { duration: 1.5, delay: stagger(0.2, { from: "first" }) }
      );
      animateUlVision(
        scopeUlVision.current,
        { opacity: [0, 1] },
        { duration: 1 }
      );
    }
  }, [isInViewUlVision]);

  const refImgVision = useRef(null);
  const isInViewImgVision = useInView(refImgVision, {
    once: true,
  });

  const [typingTextLooking] = useTypewriter({
    words: [" a New Air Conditioner?", " Air Conditioning Expert?"],
    typeSpeed: 40,
    delaySpeed: 5000,
    deleteSpeed: 0,
    loop: {},
  });

  const refH3Looking = useRef(null);
  const isInViewH3Looking = useInView(refH3Looking, { once: true });

  // const refBtnLooking = useRef(null);
  // const isInViewBtnLooking = useInView(refBtnLooking, { once: true });

  const [scopeBtnLooking, animateBtnLooking] = useAnimate();
  const isInViewBtnLooking = useInView(scopeBtnLooking, { once: true });

  useEffect(() => {
    if (isInViewBtnLooking) {
      animateBtnLooking(
        scopeBtnLooking.current,
        { opacity: [0, 1] },
        { duration: 1 }
      );
      animateBtnLooking(
        "button",
        { y: [-30, 0], x: [50, 0] },
        { duration: 1, delay: stagger(0.2, { from: "first" }) }
      );
    }
  }, [isInViewBtnLooking]);

  const refImgLookingBackground = useRef(null);
  const isInViewImgLookingBackground = useInView(refImgLookingBackground, {
    once: true,
  });

  return (
    <motion.div
      className="aboutusContent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div
        className="aboutusHeader"
        ref={refImgAboutBackground}
        style={{
          transform: isInViewImgAboutBackground
            ? "none"
            : "translate(-200px, 0px)",
          opacity: isInViewImgAboutBackground ? 1 : 0,
          transition: "all .5s",
          zIndex: 50,
        }}
      >
        <h1>{typingTextAboutUsH1}</h1>
      </div>
      <div className="missionContainer">
        <div>
          <h2
            ref={refH2Mission}
            style={{
              transform: isInViewH2Mission ? "none" : "translate(-200px, 0px)",
              opacity: isInViewH2Mission ? 1 : 0,
              transition: "all 2s",
            }}
          >
            MISSION
          </h2>
          <p
            ref={refPMission}
            style={{
              opacity: isInViewPMission ? 1 : 0,
              transition: "all 2s",
            }}
          >
            <Link>GJ Aircon & Refrigeration Services</Link> is committed to
            serve and satisfy the needs of our clients and meet or even exceed
            their expectations in terms of quality, reliability and efficiency.
          </p>
        </div>
        <div
          ref={refImgMission}
          style={{
            transform: isInViewImgMission ? "none" : "translate(0px, -200px)",
            opacity: isInViewImgMission ? 1 : 0,
            transition: "all 2s",
            zIndex: 0,
          }}
        ></div>
      </div>
      <div className="visionContainer">
        <div
          ref={refImgVision}
          style={{
            transform: isInViewImgVision ? "none" : "translate(0px, -200px)",
            opacity: isInViewImgVision ? 1 : 0,
            transition: "all 2s",
            zIndex: 0,
          }}
        ></div>
        <div>
          <h2
            ref={refH2Vision}
            style={{
              transform: isInViewH2Vision ? "none" : "translate(200px, 0px)",
              opacity: isInViewH2Vision ? 1 : 0,
              transition: "all 2s",
            }}
          >
            VISION
          </h2>
          <p
            ref={refPVision}
            style={{
              opacity: isInViewPVision ? 1 : 0,
              transition: "all 2s",
            }}
          >
            The company was established for the purpose of providing the
            following:
          </p>
          <ul ref={scopeUlVision}>
            <li>
              To provide clients with the most viable solutions under an
              environment of real trust.
            </li>
            <li>
              To provide the best service and give the maximum result in terms
              of efficiency, reliability and economy.
            </li>
            <li>
              To provide highly trained and respected group of individuals that
              will support the products in terms of after sales services, repair
              and maintenance, and customer’s orientation.
            </li>
            <li>
              To provide highly skilled personnel in the areas of project
              management, technical support, sales, and maintenance to be able
              to cater the primary requirements of the clients.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="lookingForContainer"
        ref={refImgLookingBackground}
        style={{
          transform: isInViewImgLookingBackground
            ? "none"
            : "translate(200px, 0px)",
          opacity: isInViewImgLookingBackground ? 1 : 0,
          transition: "all 1s",
          zIndex: 50,
        }}
      >
        <div>
          <h1>
            <span>
              Looking for
              {typingTextLooking}
              <Cursor />
            </span>
          </h1>
          <h3
            ref={refH3Looking}
            style={{
              opacity: isInViewH3Looking ? 1 : 0,
              transition: "all 2s .2s",
            }}
          >
            <span>
              Call <Link>GJ Aircon & Refrigeration Services</Link> today for a
              quote on your new comfort system.
            </span>
          </h3>
          <div ref={scopeBtnLooking}>
            <button
              className="lookingForContainerBtn"
              onClick={handleNavigateProducts}
            >
              Shop Now
            </button>
            <button
              className="lookingForContainerBtn"
              onClick={handleNavigateContact}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
