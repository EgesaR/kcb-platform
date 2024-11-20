// components/SplashScreen.js
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setPhase(2), 3000), // "Kiira College Bitiki" to "KCB"
      setTimeout(() => setPhase(3), 6000), // Show pipe and "Proud Butician"
      setTimeout(() => setPhase(4), 13000), // Hide "Proud Butician"
      setTimeout(() => setPhase(5), 15000), // "KCB" only
      setTimeout(() => onFinish(), 18000), // Finish splash screen
    ];
    return () => timeouts.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Kiira College Bitiki
          </motion.div>
        )}
        {phase === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            KCB
          </motion.div>
        )}
        {phase === 3 && (
          <motion.div style={{ display: "flex", alignItems: "center" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1 }}
              style={{
                height: "10px",
                backgroundColor: "#000",
                marginRight: "10px",
              }}
            />
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Proud Butician
            </motion.div>
          </motion.div>
        )}
        {phase === 4 && (
          <motion.div style={{ display: "flex", alignItems: "center" }}>
            <motion.div
              initial={{ width: "100px" }}
              animate={{ width: 0 }}
              transition={{ duration: 1 }}
              style={{
                height: "10px",
                backgroundColor: "#000",
                marginRight: "10px",
              }}
            />
          </motion.div>
        )}
        {phase === 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            KCB
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
