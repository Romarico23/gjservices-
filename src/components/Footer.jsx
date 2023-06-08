import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImPhoneHangUp } from "react-icons/im";
import { MdPhonelinkRing } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import emailjs from "@emailjs/browser";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID_SUBSCRIPTION,
        "#email-Form",
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footerDetails">
        <div className="footerDetailsContainer">
          <Link to="/" onClick={windowScrollToTop}>
            <img src="https://i.ibb.co/KrwTDHz/gj-logo-2.png" alt="GJ-LOGO" />
          </Link>
          <h3>CONTACT US</h3>
          <span>
            <FaHome />
            <p>
              475 Blk 27, Welf. Comp., Mandaluyong City, 1550 Metro Manila,
              Philippines
            </p>
          </span>
          <span>
            <HiOutlineMailOpen />
            <a href="mailto:gjservices15@gmail.com">gjservices15@gmail.com</a>
          </span>
          <span>
            <ImPhoneHangUp />
            <p>(02) 8671-4382</p>
          </span>
          <span>
            <MdPhonelinkRing />
            <p>09058846618 / 09993291431</p>
          </span>
        </div>
        <form id="email-Form" onSubmit={onSubmit}>
          <h3>INQUIRE NOW</h3>
          <input
            type="email"
            placeholder="Enter your email"
            name="email_address_subcription"
            value={email}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Join" />
          <div>
            <Link to="https://www.facebook.com/Gjaircon/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <BiWorld />
            </Link>
          </div>
        </form>
      </div>
      <div className="footerCopyright">
        <p>
          Copyright © 2023 by GJ Aircon & Refrigeration Services | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};
