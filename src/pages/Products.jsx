import React, { useEffect, useRef } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export const Products = () => {
  const refRibbon = useRef(null);
  const isInViewRibbon = useInView(refRibbon, { once: true });

  const [typingTextProductsH1] = useTypewriter({
    words: ["PRODUCTS"],
    typeSpeed: 40,
    delaySpeed: 4000,
    loop: 1,
  });

  const refP = useRef(null);
  const isInViewP = useInView(refP, { once: true });

  const refImgHeader = useRef(null);
  const isInViewImgHeader = useInView(refImgHeader, { once: true });

  const refH1ProductList = useRef(null);
  const isInViewH1ProductList = useInView(refH1ProductList, { once: true });

  const refH2ResidentialProducts = useRef(null);
  const isInViewH2ResidentialProducts = useInView(refH2ResidentialProducts, {
    once: true,
  });

  const [scopeImgResidentialProducts, animateImgResidentialProducts] =
    useAnimate();
  const isInViewImgResidentialProducts = useInView(
    scopeImgResidentialProducts,
    { once: true }
  );
  useEffect(() => {
    if (isInViewImgResidentialProducts) {
      animateImgResidentialProducts(
        scopeImgResidentialProducts.current,
        { opacity: [0, 1] },
        { duration: 1, delay: 0.5 }
      );
      animateImgResidentialProducts(
        "img",
        { scale: [0.1, 1] },
        { duration: 1.2, delay: 0.2 }
      );
      animateImgResidentialProducts(
        "h3",
        { rotateY: [360, 0] },
        { duration: 1.5, delay: 0.4, ease: "easeInOut" }
      );
    }
  }, [isInViewImgResidentialProducts]);

  const refH2CommercialProducts = useRef(null);
  const isInViewH2CommercialProducts = useInView(refH2CommercialProducts, {
    once: true,
  });

  const [scopeImgCommercialProducts, animateImgCommercialProducts] =
    useAnimate();
  const isInViewImgCommercialProducts = useInView(scopeImgCommercialProducts, {
    once: true,
  });

  useEffect(() => {
    if (isInViewImgCommercialProducts) {
      animateImgCommercialProducts(
        scopeImgCommercialProducts.current,
        { opacity: [0, 1] },
        { duration: 1, delay: 0.5 }
      );
      animateImgCommercialProducts(
        "img",
        { scale: [0.1, 1] },
        { duration: 1.2, delay: 0.2 }
      );
      animateImgCommercialProducts(
        "h3",
        { rotateY: [360, 0] },
        { duration: 1.5, delay: 0.4, ease: "easeInOut" }
      );
    }
  }, [isInViewImgCommercialProducts]);

  const refH2IndustrialProducts = useRef(null);
  const isInViewH2IndustrialProducts = useInView(refH2IndustrialProducts, {
    once: true,
  });

  const [scopeImgIndustrialProducts, animateImgIndustrialProducts] =
    useAnimate();
  const isInViewImgIndustrialProducts = useInView(scopeImgIndustrialProducts, {
    once: true,
  });

  useEffect(() => {
    if (isInViewImgIndustrialProducts) {
      animateImgIndustrialProducts(
        scopeImgIndustrialProducts.current,
        { opacity: [0, 1] },
        { duration: 1, delay: 0.5 }
      );
      animateImgIndustrialProducts(
        "img",
        { scale: [0.1, 1] },
        { duration: 1.2, delay: 0.2 }
      );
      animateImgIndustrialProducts(
        "h3",
        { rotateY: [360, 0] },
        { duration: 1.5, delay: 0.4, ease: "easeInOut" }
      );
    }
  }, [isInViewImgIndustrialProducts]);

  const refH1ProductBrands = useRef(null);
  const isInViewH1ProductBrands = useInView(refH1ProductBrands, { once: true });

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
      className="productsContent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="productsHeader">
        <div>
          <div
            className="ribbon"
            ref={refRibbon}
            style={{
              transform: isInViewRibbon ? "none" : "translateY(-20px)",
              opacity: isInViewRibbon ? 1 : 0,
              transition: "all 2s",
            }}
          ></div>
          <div>
            <h1>{typingTextProductsH1}</h1>
            <p
              ref={refImgHeader}
              style={{
                opacity: isInViewImgHeader ? 1 : 0,
                transition: "all 2s .5s",
              }}
            >
              We are an authorized dealer of leading Brands! Our selection of
              products are not only the highest quality, but are also available
              in a variety of options to ensure you find exactly what you’re
              looking for.
            </p>
          </div>
        </div>
        <img
          src="https://static.wixstatic.com/media/8b840c_ba10037b94a44734bd45dce2ce0efe7c~mv2.png/v1/fill/w_439,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/compile.png"
          alt="Image"
          ref={refP}
          style={{
            opacity: isInViewP ? 1 : 0,
            transition: "all 2s .5s",
          }}
        />
      </div>
      <div className="productsList">
        <h1
          ref={refH1ProductList}
          style={{
            transform: isInViewH1ProductList ? "none" : "translate(200px, 0px)",
            opacity: isInViewH1ProductList ? 1 : 0,
            transition: "all 2s",
          }}
        >
          OUR PRODUCT LINE UP
        </h1>
        <div className="residentialProducts">
          <h2
            ref={refH2ResidentialProducts}
            style={{
              transform: isInViewH2ResidentialProducts
                ? "none"
                : "translate(200px, 0px)",
              opacity: isInViewH2ResidentialProducts ? 1 : 0,
              transition: "all 2s",
            }}
          >
            Residential Products
          </h2>
          <div
            className="residentialProductsContainer"
            ref={scopeImgResidentialProducts}
          >
            <Link to="/contact">
              <img
                src="https://static.wixstatic.com/media/8b840c_beb4cc266841459eb40970bbd21bae27~mv2.png/v1/fill/w_359,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DW-2_5-1.png"
                alt="Image"
              />
              <h3>WALL MOUNTED TYPE</h3>
            </Link>
            <Link to="/contact">
              <img
                src="https://static.wixstatic.com/media/8b840c_a3bfe9e6fc394205a3038caee40a93cb~mv2.png/v1/crop/x_68,y_163,w_864,h_643/fill/w_254,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png"
                alt="Image"
              />
              <h3>WINDOW TYPE</h3>
            </Link>
          </div>
        </div>
        <div className="commercialProducts" ref={scopeImgCommercialProducts}>
          <h2
            ref={refH2CommercialProducts}
            style={{
              transform: isInViewH2CommercialProducts
                ? "none"
                : "translate(200px, 0px)",
              opacity: isInViewH2CommercialProducts ? 1 : 0,
              transition: "all 2s",
            }}
          >
            Light Commercial Products
          </h2>
          <div
            className="commercialProductsContainer"
            ref={scopeImgCommercialProducts}
          >
            <Link to="/contact">
              <img
                src="https://static.wixstatic.com/media/8b840c_42ed9a56481d4f0fa816a178ec0bac1f~mv2.png/v1/fill/w_317,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png"
                alt="Image"
              />
              <h3>CASSETTE TYPE</h3>
            </Link>
            <Link>
              <img
                src="https://static.wixstatic.com/media/8b840c_4024a2ebcfbb464786e19e826254b76e~mv2.png/v1/crop/x_61,y_106,w_646,h_334/fill/w_344,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3.png"
                alt="Image"
              />
              <h3>CEILING MOUNTED TYPE</h3>
            </Link>
            <Link to="/contact">
              <img
                src="https://static.wixstatic.com/media/8b840c_c610b7241ab44b919d98db6acb311c65~mv2.png/v1/fill/w_334,h_336,al_c,lg_1,q_85,enc_auto/5.png"
                alt="Image"
              />
              <h3>FLOOR MOUNTED TYPE</h3>
            </Link>
            <Link to="/contact">
              <img
                src="https://static.wixstatic.com/media/ce26cf_df67e3cb4ed1466cac0ceb74d274bdd8~mv2.png/v1/crop/x_253,y_99,w_506,h_741/fill/w_231,h_336,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Free%20match_edited.png"
                alt="Image"
              />
              <h3>FREE MATCH TYPE</h3>
            </Link>
            <Link to="/contact">
              <img
                src="https://static.wixstatic.com/media/8b840c_9d6b563d50bf499eb7bd95b5e6adda79~mv2.png/v1/crop/x_98,y_282,w_827,h_432/fill/w_351,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png"
                alt="Image"
              />
              <h3>CONCEALED TYPE</h3>
            </Link>
          </div>
          <div className="industrialProducts">
            <h2
              ref={refH2IndustrialProducts}
              style={{
                transform: isInViewH2IndustrialProducts
                  ? "none"
                  : "translate(200px, 0px)",
                opacity: isInViewH2IndustrialProducts ? 1 : 0,
                transition: "all 4s",
              }}
            >
              Industrial Products
            </h2>
            <div
              className="industrialProductsContainer"
              ref={scopeImgIndustrialProducts}
            >
              <Link to="/contact">
                <img
                  src="https://static.wixstatic.com/media/ce26cf_df94fcad83994ed3b0fbbafe3b094578~mv2.png/v1/crop/x_0,y_359,w_1500,h_782/fill/w_351,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Chilled%20water_edited.png"
                  alt="Image"
                />
                <h3>CHILLED WATER TYPE</h3>
              </Link>
              <Link to="/contact">
                <img
                  src="https://static.wixstatic.com/media/ce26cf_fb5783ed7f944728b682ef88f9644aa9~mv2.png/v1/crop/x_3,y_0,w_554,h_289/fill/w_351,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Big%20Duct%20Aircon_edited.png"
                  alt="Image"
                />
                <h3>BIG DUCT TYPE</h3>
              </Link>
              <Link to="/contact">
                <img
                  src="https://static.wixstatic.com/media/ce26cf_9845cdebc5f840da8777e07504f016b9~mv2.png/v1/crop/x_30,y_224,w_930,h_719/fill/w_340,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VRF_edited.png"
                  alt="Image"
                />
                <h3>VRF SYSTEM</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="productBrands">
        <h1
          ref={refH1ProductBrands}
          style={{
            transform: isInViewH1ProductBrands
              ? "none"
              : "translate(200px, 0px)",
            opacity: isInViewH1ProductBrands ? 1 : 0,
            transition: "all 2s",
          }}
        >
          PRODUCT BRANDS
        </h1>
        <div ref={scopeImg}>
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
    </motion.div>
  );
};
