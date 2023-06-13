import React, { useEffect, useRef } from "react";
import "./contact.css";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import {
  motion,
  stagger,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";

export const Contact = () => {
  const schema = yup.object().shape({
    full_name: yup.string().required(),
    full_address: yup.string(),
    email_address: yup.string().email().required(),
    mobile_number: yup
      .number()
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    aircon_types: yup.string().required(),
    aircon_service: yup.string().required(),
    message: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID_CONTACT,
        "#contact-Form",
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const refH2Contact = useRef(null);
  const isInViewH2Contact = useInView(refH2Contact, { once: true });

  const [scopeContactDetails, animateContactDetails] = useAnimate();
  const isInViewContactDetails = useInView(scopeContactDetails, { once: true });

  useEffect(() => {
    if (isInViewContactDetails) {
      animateContactDetails(
        scopeContactDetails.current,
        { opacity: [0, 1] },
        { duration: 1 }
      );
      animateContactDetails(
        "p",
        { x: [50, 0], opacity: [0, 1] },
        { duration: 1, delay: stagger(0.2, { from: "first" }) }
      );
    }
  }, [isInViewContactDetails]);

  const refH2ServiceForm = useRef(null);
  const isInViewH2ServiceForm = useInView(refH2ServiceForm, { once: true });

  const refPServiceForm = useRef(null);
  const isInViewPServiceForm = useInView(refPServiceForm, { once: true });

  const [scopeInputServiceForm, animateInputServiceForm] = useAnimate();
  const isInViewInputServiceForm = useInView(scopeInputServiceForm, {
    once: true,
  });

  useEffect(() => {
    if (isInViewInputServiceForm) {
      animateInputServiceForm(
        scopeInputServiceForm.current,
        { opacity: [0, 1] },
        { duration: 1 }
      );
      animateInputServiceForm(
        "div",
        { y: [100, 0], opacity: [0, 1] },
        { duration: 1, delay: stagger(0.2, { from: "first" }) }
      );
      animateInputServiceForm(
        `input[type='submit']`,
        { x: [1000, 0], opacity: [0, 1] },
        { duration: 1, delay: 0.2 }
      );
    }
  }, [isInViewInputServiceForm]);

  const refMap = useRef(null);
  const isInViewMap = useInView(refMap, { once: true });

  return (
    <motion.div
      className="contactContent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="contactContentHeader">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <MdOutlinePermPhoneMsg />
          <p>GET IN TOUCH</p>
        </motion.h1>
      </div>
      <div className="contactContentDetails">
        <div className="contactus">
          <h2
            ref={refH2Contact}
            style={{
              transform: isInViewH2Contact ? "none" : "translate(200px, 0px)",
              opacity: isInViewH2Contact ? 1 : 0,
              transition: "all 2s",
            }}
          >
            CONTACT US
          </h2>
          <address ref={scopeContactDetails}>
            <p>
              <b>Email:</b>
              <a href="mailto:gjservices15@gmail.com">
                {" "}
                gjservices15@gmail.com
              </a>
            </p>
            <p>
              <b>Mobile #:</b> 09058846618 / 09993291431
            </p>
            <p>
              <b>Tel #:</b> (02) 8671-4382
            </p>
            <p>
              <b>Address:</b> 475 Blk 27, Welf. Comp., Mandaluyong City, 1550
              Metro Manila, Philippines
            </p>
          </address>
        </div>
        <div className="bookService">
          <h2
            ref={refH2ServiceForm}
            style={{
              transform: isInViewH2ServiceForm
                ? "none"
                : "translate(200px, 0px)",
              opacity: isInViewH2ServiceForm ? 1 : 0,
              transition: "all 2s",
            }}
          >
            BOOK A SERVICE
          </h2>
          <p
            ref={refPServiceForm}
            style={{
              transform: isInViewPServiceForm
                ? "none"
                : "translate(200px, 0px)",
              opacity: isInViewPServiceForm ? 1 : 0,
              transition: "all 2s .5s",
            }}
          >
            We look forward to providing you with the highest quality services
            as possible!
          </p>
          <form
            id="contact-Form"
            onSubmit={handleSubmit(onSubmit)}
            ref={scopeInputServiceForm}
          >
            <div className="input-1 inputsContainer">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                style={
                  errors.full_name && { borderBottom: "4px solid #F75D59" }
                }
                {...register("full_name")}
              />
              <input
                type="text"
                name="full_address"
                placeholder="Full Address"
                style={
                  errors.full_address && { borderBottom: "4px solid #F75D59" }
                }
                {...register("full_address")}
              />
            </div>
            <div className="input-2 inputsContainer">
              <input
                type="text"
                name="email_address"
                placeholder="Email Address"
                style={
                  errors.email_address && { borderBottom: "4px solid #F75D59" }
                }
                {...register("email_address")}
              />
              <input
                type="number"
                name="mobile_number"
                placeholder="Mobile Number"
                {...register("mobile_number")}
              />
            </div>
            <div className="input-3 inputsContainer">
              <select
                name="aircon_types"
                title="Aircon Types"
                selected
                defaultValue={""}
                required
                style={
                  errors.aircon_types && { borderBottom: "4px solid #F75D59" }
                }
                {...register("aircon_types")}
              >
                <option value="" disabled hidden>
                  Choose Aircon Type
                </option>
                <option value="Window Type">Window Type</option>
                <option value="Split Type Wall Mounted">
                  Split Type Wall Mounted
                </option>
                <option value="Split Type Floor Mounted">
                  Split Type Floor Mounted
                </option>
                <option value="Split Type Ceiling Mounted">
                  Split Type Ceiling Mounted
                </option>
                <option value="Multi-Split Type Free Match">
                  Multi-Split Type Free Match
                </option>
                <option value="Ceiling Cassette">Ceiling Cassette</option>
                <option value="Ceiling Concealed Ducted Type">
                  Ceiling Concealed Ducted Type
                </option>
                <option value="Chilled Water Type">Chilled Water Type</option>
                <option value="Big Ducted Type">Big Ducted Type</option>
                <option value="VRF/VRV System">VRF/VRV System</option>
              </select>
              <select
                name="aircon_service"
                title="Aircon Service"
                selected
                defaultValue={""}
                style={
                  errors.aircon_service && { borderBottom: "4px solid #F75D59" }
                }
                {...register("aircon_service")}
                required
              >
                <option value="" disabled hidden>
                  Choose Service
                </option>
                <option value="Aircon Unit">Aircon Unit</option>
                <option value="Aircon Installation">Aircon Installation</option>
                <option value="Aircon Dismantle">Aircon Dismantle</option>
                <option value="Aircon Repair">Aircon Repair</option>
                <option value="Aircon Cleaning">Aircon Cleaning</option>
                <option value="Aircon Check Up">Aircon Check Up</option>
              </select>
            </div>
            <div className="input-4 inputsContainer">
              <textarea
                name="message"
                placeholder="Leave us a Message"
                rows="8"
                cols="30"
                style={errors.message && { borderBottom: "4px solid #F75D59" }}
                {...register("message")}
              ></textarea>
            </div>
            <div className="bookServiceBtnContainer">
              <input type="submit" value="Submit" className="bookServiceBtn" />
            </div>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.304958666448!2d121.03844067202994!3d14.586545638589618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83406a3e389%3A0xaadebf4a9c9f0b17!2sBlock%2027%20Multipurpose%20Hall%20%26%20Chapel!5e0!3m2!1sen!2sph!4v1684943730915!5m2!1sen!2sph"
        height="100%"
        width="100%"
        loading="lazy"
        ref={refMap}
        style={{
          opacity: isInViewMap ? 1 : 0,
          transition: "all .5s ",
        }}
      ></iframe>
    </motion.div>
  );
};
