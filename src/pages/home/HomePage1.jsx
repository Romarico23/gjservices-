import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
  usePresence,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage1 = ({ addMinusPage }) => {
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

  const refH1 = useRef(null);
  const isInViewH1 = useInView(refH1, { once: true });
  const refH2 = useRef(null);
  const isInViewH2 = useInView(refH2, { once: true });
  const refBtn = useRef(null);
  const isInViewBtn = useInView(refBtn, { once: true });
  const refBackgroundImg = useRef(null);
  const isInViewBackgroundImg = useInView(refBackgroundImg, { once: true });

  const [scopeImg, animateImg] = useAnimate();
  const isInViewImg = useInView(scopeImg, { once: true });
  useEffect(() => {
    if (isInViewImg) {
      animateImg(
        scopeImg.current,
        { opacity: [0, 1] },
        { duration: 1, delay: 1 }
      );
      animateImg(
        "img",
        { opacity: [0, 1] },
        { duration: 3, delay: stagger(1.5, { from: "first" }) }
      );
    }
  }, [isInViewImg]);

  return (
    <motion.div
      className="homePage-1"
      animate={loadPageAnimation}
      exit={{ x: 0 }}
    >
      <h1
        ref={refH1}
        style={{
          opacity: isInViewH1 ? 1 : 0,
          transition: "3s",
        }}
      >
        GJ AIRCON & REFRIGERATION SERVICES
      </h1>
      <h2
        ref={refH2}
        style={{
          opacity: isInViewH2 ? 1 : 0,
          transition: "all 2s 0.5s",
        }}
      >
        HEATING, VENTILATING, & AIR CONDITIONING CONTRACTOR
      </h2>
      <div
        ref={refBtn}
        style={{
          transform: isInViewBtn ? "none" : "translateX(200px)",
          opacity: isInViewBtn ? 1 : 0,
          transition: "all 2s",
        }}
      >
        <button onClick={handleNavigateContact}>INQUIRE NOW</button>
      </div>
      <div ref={scopeImg}>
        <img src="./src/assets/image-1.png" alt="Image" />
        <img src="./src/assets/image-2.png" alt="Image" />
      </div>
      <div>
        <img
          ref={refBackgroundImg}
          style={{
            transform: isInViewBackgroundImg ? "none" : "scale(0.8)",
            opacity: isInViewBackgroundImg ? 0.5 : 0,
            transition: "all 3s",
          }}
          src="./src/assets/image-3.png"
          alt="Image"
        />
      </div>
    </motion.div>
  );
};
