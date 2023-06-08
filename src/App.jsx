import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Chatbox } from "./components/Chatbox";
import { useEffect, useState } from "react";
import { ScrollToTop } from "./animations/ScrollToTop";
import { SpinningLogo } from "./animations/SpinningLogo";
import { motion } from "framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading === false ? (
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          <Router duration={0}>
            <ScrollToTop />
            <Navbar />
            <AnimatedRoutes />
            <Chatbox />
            <Footer />
          </Router>
        </motion.div>
      ) : (
        <SpinningLogo />
      )}
    </>
  );
}

export default App;
