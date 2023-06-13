import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import "./homepage.css";
import { FaBusinessTime, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HomePage1 } from "./HomePage1";
import { HomePage2 } from "./HomePage2";
import { HomePage3 } from "./HomePage3";
import { Link, useNavigate } from "react-router-dom";
import { stagger, useAnimate, useInView, motion } from "framer-motion";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const navigate = useNavigate();

  const [addMinusPage, setAddMinusPage] = useState("");

  const nextPage = () => {
    setCurrentPage((currentPage % totalPages) + 1);
    setAddMinusPage("true");
  };

  const prevPage = () => {
    setCurrentPage(((currentPage - 2 + totalPages) % totalPages) + 1);
    setAddMinusPage("false");
  };

  const handleNavigateAboutus = () => {
    navigate("/about-us");
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentPage((currentPage % totalPages) + 1),
      9000
    );

    return () => clearTimeout(timeout);
  }, [currentPage, totalPages]);

  const refH1Services = useRef(null);
  const isInViewH1Services = useInView(refH1Services, { once: true });
  const refP = useRef(null);
  const isInViewP = useInView(refP, { once: true });
  const refH1Products = useRef(null);
  const isInViewH1Products = useInView(refH1Products, { once: true });
  const refH1About = useRef(null);
  const isInViewH1About = useInView(refH1About, { once: true });
  const refImgAbout = useRef(null);
  const isInViewImgAbout = useInView(refImgAbout, { once: true });

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

  const [scopeImgBrands, animateImgBrands] = useAnimate();
  const isInViewImgBrands = useInView(scopeImgBrands, { once: true });

  useEffect(() => {
    if (isInViewImgBrands) {
      animateImgBrands(
        "img",
        { opacity: [0, 1] },
        { duration: 3, delay: stagger(0.2, { from: "center" }) }
      );
    }
  }, [isInViewImgBrands]);

  const [scopePAbout, animatePAbout] = useAnimate();
  const isInViewPAbout = useInView(scopePAbout, { once: true });

  useEffect(() => {
    if (isInViewPAbout) {
      animatePAbout(
        scopePAbout.current,
        { opacity: [0, 1] },
        { duration: 3, delay: 0.1 }
      );
      animatePAbout(
        "p",
        { x: [100, 0] },
        { duration: 1.5, delay: stagger(0.5, { from: "first" }) }
      );
      animatePAbout("button", { x: [100, 0] }, { duration: 1, delay: 1 });
    }
  }, [isInViewPAbout]);

  return (
    <motion.div
      className="homeContent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      {currentPage === 1 && <HomePage1 addMinusPage={addMinusPage} />}
      {currentPage === 2 && <HomePage2 addMinusPage={addMinusPage} />}
      {currentPage === 3 && <HomePage3 addMinusPage={addMinusPage} />}
      <div className="pageButton">
        <button onClick={prevPage}>
          <FaLessThan />
        </button>
        <button onClick={nextPage}>
          <FaGreaterThan />
        </button>
      </div>
      <div className="circle-container">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`circle ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          ></div>
        ))}
      </div>
      <div className="services">
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
          ref={refH1Services}
          style={{
            transform: isInViewH1Services ? "none" : "translate(200px, 0px)",
            opacity: isInViewH1Services ? 1 : 0,
            transition: "all 2s",
          }}
        >
          OUR SERVICES
        </h1>
        <p
          ref={refP}
          style={{
            transform: isInViewP ? "none" : "translate(-200px, 0px)",
            opacity: isInViewP ? 1 : 0,
            transition: "all 3s",
          }}
          className="servicesDescription"
        >
          We’re committed to customer satisfaction and know the importance of
          doing exceptional work. Our services have helped countless customers
          with their aircon needs. We cater to customers anywhere in Metro
          Manila.
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
      <div className="products">
        <h1
          ref={refH1Products}
          style={{
            transform: isInViewH1Products ? "none" : "translate(200px, 0px)",
            opacity: isInViewH1Products ? 1 : 0,
            transition: "all 2s",
          }}
        >
          OUR PRODUCTS
        </h1>
        <div ref={scopeImgBrands}>
          <Link to="https://greephilippines.com.ph/" target="_blank">
            <img src="https://i.ibb.co/zF3tRmN/gree.png" alt="Image" />
          </Link>
          <Link to="https://www.daikin.com.ph/products/" target="_blank">
            <img src="https://i.ibb.co/Q65Dnyy/daikin.png" alt="Image" />
          </Link>
          <Link
            to="https://www.panasonic.com/ph/air-solutions/air-conditioning.html"
            target="_blank"
          >
            <img src="https://i.ibb.co/FWHs5Kx/panasonic.png" alt="Image" />
          </Link>
          <Link to="https://koppel.ph/products/" target="_blank">
            <img src="https://i.ibb.co/dP1nvZ4/koppel.png" alt="Image" />
          </Link>
          <Link
            to="https://www.samsung.com/ph/air-conditioners/all-air-conditioners/"
            target="_blank"
          >
            <img src="https://i.ibb.co/bzGB611/samsung.png" alt="Image" />
          </Link>
          <Link
            to="https://carrier.com.ph/residential/products/"
            target="_blank"
          >
            <img src="https://i.ibb.co/gWBzyRv/carrier.png" alt="Image" />
          </Link>
          <Link to="https://www.lg.com/ph/air-conditioners" target="_blank">
            <img src="https://i.ibb.co/b7JkRMb/lg.png" alt="Image" />
          </Link>
          <Link
            to="https://www.haier.com/ph/air-conditioners/?spm=ph.ProductList_pc.header_101377_20190530.4"
            target="_blank"
          >
            <img src="https://i.ibb.co/ZStyTTy/haier.png" alt="Image" />
          </Link>
          <Link to="https://www.midea.com/ph/cooling-comfort" target="_blank">
            <img src="https://i.ibb.co/jH3z30j/midea.png" alt="Image" />
          </Link>
        </div>
      </div>
      <div className="aboutus">
        <h1
          ref={refH1About}
          style={{
            transform: isInViewH1About ? "none" : "scale(0.5)",
            opacity: isInViewH1About ? 1 : 0,
            transition: "all 3s",
          }}
        >
          ABOUT US
        </h1>
        <div>
          <img
            ref={refImgAbout}
            style={{
              opacity: isInViewImgAbout ? 1 : 0,
              transition: "all 4s",
            }}
            src="https://media.istockphoto.com/id/1208085169/photo/businessman-enjoying-the-cooling-of-air-conditioner.jpg?s=612x612&w=0&k=20&c=VAzbJt75neuSGCimxwqEIOjxg8Y7ZUSeLh0Q0reIhVM="
            alt="Image"
          />
          <div ref={scopePAbout}>
            <p>
              GJ Aircon & Refrigeration Services is primarily engaged in supply,
              installation, repair, and maintenance of air conditioning and
              ventilation systems.
            </p>
            <p>
              Our workers are highly competent and well trained, having acquired
              and honed their skills from their accumulated experience in both
              local and international companies. We are committed to our values
              of honesty, integrity, sincerity, and excellence
            </p>
            <button onClick={handleNavigateAboutus}>Read More...</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
