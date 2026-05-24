"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[340px] h-[340px] flex items-center justify-center">
      {/* outer dashed ring */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-accent/20" />
      {/* inner solid ring */}
      <div className="absolute w-[310px] h-[310px] rounded-full border border-accent/30" />

      {/* animated circle */}
      <motion.svg
        className="absolute w-[340px] h-[340px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6, ease: "easeIn" } }}
        className="w-[280px] h-[280px] rounded-full overflow-hidden relative"
      >
        <Image
          src="/assets/photo.png"
          priority
          quality={100}
          fill
          alt="Henry Mwangi"
          className="object-cover object-top brightness-90 contrast-105 saturate-90"
        />
      </motion.div>
    </div>
  );
};

export default Photo;