import React, { useEffect, useRef } from "react";
import "./services.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export const Services = () => {
  const [typingTextAirconTechH1] = useTypewriter({
    words: ["Professional Aircon Technicians"],
    typeSpeed: 20,
    delaySpeed: 1000,
    loop: 1,
  });

  const [scopePromises, animatePromises] = useAnimate();
  const isInViewPromises = useInView(scopePromises, { once: true });

  useEffect(() => {
    if (isInViewPromises) {
      animatePromises(
        "span",
        { opacity: [0, 1] },
        { duration: 2, delay: stagger(0.2, { from: "first" }) }
      );
    }
  }, [isInViewPromises]);

  const refH1ServicesTypes = useRef(null);
  const isInViewH1ServicesTypes = useInView(refH1ServicesTypes, { once: true });

  const refP = useRef(null);
  const isInViewP = useInView(refP, { once: true });

  const [scopeServicesList, animateServicesList] = useAnimate();
  const isInViewServicesList = useInView(scopeServicesList, { once: true });

  useEffect(() => {
    if (isInViewServicesList) {
      animateServicesList(
        "a",
        { y: [-100, 0] },
        { duration: 1.5, delay: stagger(0.2, { from: "first" }) }
      );
      animateServicesList(
        scopeServicesList.current,
        { opacity: [0, 1] },
        { duration: 1.5, delay: 0.5 }
      );
    }
  }, [isInViewServicesList]);

  return (
    <motion.div
      className="servicesContent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="servicesHeader">
        <h1>{typingTextAirconTechH1}</h1>
      </div>
      <div className="servicesContainer">
        <div ref={scopePromises}>
          <span>
            <h3>
              <AiFillSafetyCertificate />
              100%
            </h3>
            <p>Guaranteed Satisfaction</p>
          </span>
          <span>
            <h3>
              <BiTime />
              30
              <p>Minutes Response</p>
            </h3>
            <p>Get Quick Responses by Email</p>
          </span>
          <span>
            <h3>
              <FaBusinessTime />1<p>Year Guarantee</p>
            </h3>
            <p>On All Installations completed by Us.</p>
          </span>
        </div>
        <h1
          ref={refH1ServicesTypes}
          style={{
            transform: isInViewH1ServicesTypes
              ? "none"
              : "translate(200px, 0px)",
            opacity: isInViewH1ServicesTypes ? 1 : 0,
            transition: "all 2s",
          }}
        >
          Servicing All Aircon Brands and Types
        </h1>
        <p
          className="servicesContainerDescription"
          ref={refP}
          style={{
            transform: isInViewP ? "none" : "translate(-200px, 0px)",
            opacity: isInViewP ? 1 : 0,
            transition: "all 2s",
          }}
        >
          Our aircon technicians are expert in handling residential and light
          commercial types of all major brands including Carrier, Panasonic,
          Condura, Kolin, Samsung, and LG.
        </p>
        <div ref={scopeServicesList}>
          <Link to="/contact">
            <img
              src="https://i.ibb.co/pZNSH1R/acinstallation.png"
              alt="Image"
            />
            <h3>AC Installation</h3>
            <p>Request Now</p>
          </Link>
          <Link to="/contact">
            <img src="https://i.ibb.co/KLMcsDv/accleaning.png" alt="Image" />
            <h3>AC Cleaning</h3>
            <p>Request Now</p>
          </Link>
          <Link to="/contact">
            <img src="https://i.ibb.co/qymXTnB/acrepair.png" alt="Image" />
            <h3>AC Repair</h3>
            <p>Request Now</p>
          </Link>
          <Link to="/contact">
            <img src="https://i.ibb.co/64NKV74/acdismantle.png" alt="Image" />
            <h3>AC Dismantle</h3>
            <p>Request Now</p>
          </Link>
          <Link to="/contact">
            <img src="https://i.ibb.co/0BnjMV1/pcbrepair.png" alt="Image" />
            <h3>PCB Repair</h3>
            <p>Request Now</p>
          </Link>
          <Link to="/contact">
            <img src="https://i.ibb.co/CtBYS85/accheckup.png" alt="Image" />
            <h3>AC Check Up</h3>
            <p>Request Now</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
