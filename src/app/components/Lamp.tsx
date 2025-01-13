"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Link from "next/link";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        My Team <br/>
      </motion.h1>
      <div className="flex gap-5 text-white">
        <Link className="animate__animated animate__zoomIn animate__delay-50s mt-20 p-4 px-4" href="#team">Learn More</Link>
        <Link className="animate__animated animate__zoomIn animate__delay-50s mt-20 p-4 px-4 " href="/belanja">Back</Link>
        </div>
    </LampContainer>
  );
}
