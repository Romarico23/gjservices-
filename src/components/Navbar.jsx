import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  stagger,
  useAnimate,
  useMotionValueEvent,
  usePresence,
  useScroll,
  motion,
} from "framer-motion";

export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const navigate = useNavigate();
  const [isLinkDisabled, setIsLinkDisabled] = useState(false);

  const handleClick = () => {
    setMenuIcon(!menuIcon);
    onClickMenuIcon();
    setIsLinkDisabled(true);
    setTimeout(() => {
      setIsLinkDisabled(false);
    }, 300);
  };

  const handleNavigateContact = () => {
    {
      !menuIcon ? navigate("/contact") : navigate("/contact");
    }
  };

  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isPresent, safeToRemove] = usePresence();
  const [scopeNav, animateNav] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      animateNav(
        "a",
        { opacity: [0, 1] },
        { duration: 0.8, delay: stagger(0.3, { from: "last" }) }
      );
    }
  }, [isPresent]);

  const [scopeLogo, animateLogo] = useAnimate();
  const [scopeMenu, animateMenu] = useAnimate();
  const [scopeCallBtn, animateCallBtn] = useAnimate();
  useEffect(() => {
    if (isPresent) {
      const enterAnimationLogo = async () => {
        await animateLogo(
          "a",
          { opacity: [0, 1] },
          { duration: 0.3, delay: 0.2 }
        );
      };
      enterAnimationLogo();
      const enterAnimationMenu = async () => {
        await animateMenu(
          "svg",
          { opacity: [0, 1] },
          { duration: 0.5, delay: 0.4 }
        );
      };
      enterAnimationMenu();
      const enterAnimationCallBtn = async () => {
        await animateCallBtn(
          "button",
          { opacity: [0, 1] },
          { duration: 0.7, delay: 0.6 }
        );
      };
      enterAnimationCallBtn();
    }
  }, [isPresent]);

  const [show, setShow] = useState(true);
  const { scrollY } = useScroll();

  const [scopeHeader, animateHeader] = useAnimate();
  useEffect(() => {
    if (isPresent) {
      animateHeader(
        scopeHeader.current,
        { transform: ["translateY(-200px)", "translateY(0px)"] },
        { opacity: [0, 1] },
        { duration: 0.5 }
      );
    }
  }, [isPresent]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
  };

  const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
  };

  const [animation, setAnimation] = useState("closed");
  const onClickMenuIcon = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
  };

  return (
    <div className="headerWrapper">
      <div
        className="scrollToTop"
        style={{
          opacity: !show ? 1 : 0,
          transition: "all .5s ",
        }}
      >
        <Link onClick={windowScrollToTop}>
          <FaArrowAltCircleUp />
        </Link>
      </div>
      <header
        ref={scopeHeader}
        style={{
          transform: show ? "none" : "translateY(-200px)",
          opacity: show ? 1 : 0,
          transition: "all .7s ",
        }}
      >
        <div ref={scopeLogo} className="headerLogo">
          <Link
            to="/"
            onClick={() => {
              menuIcon ? handleClick : "";
              windowScrollToTop();
            }}
          >
            <img src="https://i.ibb.co/KrwTDHz/gj-logo-2.png" alt="GJ-LOGO" />
          </Link>
        </div>
        <div
          ref={scopeMenu}
          className="menuIcon"
          onClick={() => {
            handleClick();
          }}
        >
          <svg viewBox="0 0 24 24">
            <motion.path animate={animation} variants={path01Variants} />
            <motion.path animate={animation} variants={path02Variants} />
          </svg>
        </div>
        <nav
          ref={scopeNav}
          className={menuIcon ? "nav-active" : "nav"}
          style={{
            display: !show && "none",
          }}
        >
          <NavLink
            to="/"
            className="navlink navlink--underline"
            onClick={() => {
              handleClick();
            }}
            style={{ pointerEvents: isLinkDisabled ? "none" : "" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => {
              handleClick();
            }}
            style={{ pointerEvents: isLinkDisabled ? "none" : "" }}
          >
            Products
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => {
              handleClick();
            }}
            style={{ pointerEvents: isLinkDisabled ? "none" : "" }}
          >
            Services
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={() => {
              handleClick();
            }}
            style={{ pointerEvents: isLinkDisabled ? "none" : "" }}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              handleClick();
            }}
            style={{ pointerEvents: isLinkDisabled ? "none" : "" }}
          >
            Contact Us
          </NavLink>
        </nav>
        <div ref={scopeCallBtn} className="callNowBtn">
          <button
            onClick={() => {
              handleNavigateContact();
            }}
          >
            CALL NOW
          </button>
        </div>
      </header>
    </div>
  );
};
