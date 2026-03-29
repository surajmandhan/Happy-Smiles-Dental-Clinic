"use client";

import Link from "next/link";

import { About } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { TextReveal } from "./ui/Typography";
import { ArrowUpRight } from "./ui/Icons";
import LoaderWrapper from "./LoaderWrapper";

interface HeroProps {
  about: About;
}

const Hero = ({ about }: HeroProps) => {
  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/dentistry-animation-hiro-bg.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <LoaderWrapper>
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <div className="py-6 flex items-center flex-col">
              <h3 className="text-lg md:text-2xl font-medium text-white/80 mb-4 text-center">
                <SlideIn>
                  Happy Smiles – Dental Clinic & Implant Centre
                </SlideIn>
              </h3>
              <h1 className="md:text-7xl text-3xl overflow-hidden">
                <SlideIn>{about.title}</SlideIn>
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                {about.subTitle.split(" ").map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
              <Link
                href={"#contact"}
                className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-2 group"
              >
              <TextReveal>Book Online</TextReveal>
                <ArrowUpRight />
              </Link>
            </Transition>
          </div>
        </div>
      </LoaderWrapper>
    </section>
  );
};

export default Hero;
