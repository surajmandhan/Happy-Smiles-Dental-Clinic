"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { OpacityTransition, Transition } from "./ui/Transitions";

interface PageLoadProps {
  setHideLoader: (value: boolean) => void;
}

const Loader = ({ setHideLoader }: PageLoadProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2);
      } else {
        clearInterval(count);
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 1, type: "tween" }}
      onAnimationComplete={() => setHideLoader(false)}
      className="fixed top-0 left-0 z-[9999] w-full h-full bg-background"
    >
      <div className="p-4 md:p-10 flex flex-col md:justify-between max-md:gap-8 w-full h-full">
        <Transition transition={{ delay: 0.2 }}>
          <img
            src="/Dental Logo.png"
            alt="Happy Smiles Logo"
            className="h-12 w-auto opacity-40"
          />
        </Transition>
        <Transition className="grid place-items-center">
          <img
            src="/LOADING-IMAGE.svg"
            alt="Dental Loading Illustration"
            className="w-full max-w-[1440px] px-8"
          />
        </Transition>
        <div className="flex flex-col max-md:justify-between max-md:h-full">
          <Transition transition={{ delay: 0.4 }}>
            <div className="text-2xl md:text-4xl w-full md:w-3/5 whitespace-pre-wrap">
              <OpacityTransition>
                At Happy Smile, we blend artistry and science, offering premium
                dental care products that make your daily routine a masterpiece
                of oral health and beauty.
              </OpacityTransition>
            </div>
          </Transition>
          <div className="flex justify-between items-end">
            <span className="text-white/30">Loading...</span>
            <motion.span className="md:text-9xl text-7xl font-semibold md:font-bold">
              {counter}%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
