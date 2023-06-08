import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";

export const HomePage3 = ({ addMinusPage }) => {
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
  const refBtn = useRef(null);
  const isInViewBtn = useInView(refBtn, { once: true });
  const refBackgroundImg = useRef(null);
  const isInViewBackgroundImg = useInView(refBackgroundImg, { once: true });

  const [scopeImg, animateImg] = useAnimate();
  const isInViewImg = useInView(scopeImg, { once: true });

  useEffect(() => {
    if (isInViewImg) {
      animateImg(
        "img",
        { opacity: [0, 1] },
        { duration: 3, delay: stagger(0.2, { from: "center" }) }
      );
    }
  }, [isInViewImg]);

  return (
    <motion.div
      className="homePage-3"
      animate={loadPageAnimation}
      exit={{ x: 0 }}
    >
      <h1
        ref={refH1}
        style={{
          opacity: isInViewH1 ? 1 : 0,
          transition: "all 2.5s",
        }}
      >
        ACCREDITED BY LEADING BRANDS!
      </h1>
      <div ref={scopeImg}>
        <Link to="https://greephilippines.com.ph/" target="_blank">
          <img src="./src/assets/gree.png" alt="Image" />
        </Link>
        <Link to="https://www.daikin.com.ph/products/" target="_blank">
          <img src="./src/assets/daikin.png" alt="Image" />
        </Link>
        <Link
          to="https://www.panasonic.com/ph/air-solutions/air-conditioning.html"
          target="_blank"
        >
          <img src="./src/assets/panasonic.png" alt="Image" />
        </Link>
        <Link to="https://koppel.ph/products/" target="_blank">
          <img src="./src/assets/koppel.png" alt="Image" />
        </Link>
        <Link
          to="https://www.samsung.com/ph/air-conditioners/all-air-conditioners/"
          target="_blank"
        >
          <img src="./src/assets/samsung.png" alt="Image" />
        </Link>
        <Link to="https://carrier.com.ph/residential/products/" target="_blank">
          <img src="./src/assets/carrier.png" alt="Image" />
        </Link>
        <Link to="https://www.lg.com/ph/air-conditioners" target="_blank">
          <img src="./src/assets/lg.png" alt="Image" />
        </Link>
        <Link
          to="https://www.haier.com/ph/air-conditioners/?spm=ph.ProductList_pc.header_101377_20190530.4"
          target="_blank"
        >
          <img src="./src/assets/haier.png" alt="Image" />
        </Link>
        <Link to="https://www.midea.com/ph/cooling-comfort" target="_blank">
          <img src="./src/assets/midea.png" alt="Image" />
        </Link>
      </div>
      <div
        ref={refBtn}
        style={{
          transform: isInViewBtn ? "none" : "translate(200px, 0px)",
          opacity: isInViewBtn ? 1 : 0,
          transition: "all 2s",
        }}
      >
        <button onClick={handleNavigateContact}>INQUIRE NOW</button>
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
