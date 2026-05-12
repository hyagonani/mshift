'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const logos = [
  "https://lh3.googleusercontent.com/d/1l6WfiMIerwyJ3qKARifnyGXMnBHUMcLD=w500",
  "https://lh3.googleusercontent.com/d/1PSTs8KZEjq-beNIfTh5EOFcajO05S-k_=w500",
  "https://lh3.googleusercontent.com/d/11pUw2KkYpQDuMZ9uGiNmpbagMjbwZpy1=w500",
  "https://lh3.googleusercontent.com/d/1O96WlQrMH_uXgfXPqJHnr7iaqOazOweq=w500",
  "https://lh3.googleusercontent.com/u/0/d/1A-JFQ5mvlZ2nWHzn2OZcqGhZMDOlNQdN=w500",
  "https://lh3.googleusercontent.com/u/0/d/1tgwTboFVA79GGet0EKcL-KJ2BoDN-UHx=w500",
  "https://lh3.googleusercontent.com/u/0/d/1vvvDrqp50viC1j5nnN-SYins7jop-iaN=w500",
  "https://lh3.googleusercontent.com/u/0/d/1VMLVYFhmqzFoII74qwj2ocmwlxcEU8p7=w500",
  "https://lh3.googleusercontent.com/u/0/d/1fW7wZwwS0YM3NhbBucgbjmbrT8EfDTPG=w500",
  "https://lh3.googleusercontent.com/u/0/d/1eTFiEHeMe8T-Fjb9K0_xASW1fP28h97_=w500",
  "https://lh3.googleusercontent.com/u/0/d/1U_4opoi0--ZCtYdLqsyCs9nBcj0Zy8tb=w500",
  "https://lh3.googleusercontent.com/u/0/d/1LNMm5qEtalulyZpB2HZFgf33bM1RcyFU=w500",
  "https://lh3.googleusercontent.com/u/0/d/1G8pVse53FRM4WWeHYrj41OwZ9LKJrbaO=w500",
  "https://lh3.googleusercontent.com/d/1oR08MdgzTtas4-klij4l2gdzcNygx1EQ=w500",
  "https://drive.google.com/thumbnail?id=1unC_VqypJmO0F1mZGKSVVn6XHtku38uV&sz=w500",
];

export function LogoCarousel() {
  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-10 bg-background-dark/50 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider">
          Empresas que confiam na MShift
        </p>
      </div>
      
      <div className="relative flex items-center w-full">
        <motion.div
          className="flex gap-12 md:gap-24 items-center min-w-max pr-12 md:pr-24"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 relative grayscale brightness-[2] opacity-40 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo}
                alt={`Company logo ${index % logos.length}`}
                fill
                sizes="128px"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
