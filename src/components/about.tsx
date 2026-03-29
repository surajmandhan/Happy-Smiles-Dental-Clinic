"use client";

import { About as IAbout } from "../utils/interface";
import { OpacityTextReveal, SlideIn, Transition } from "./ui/Transitions";

interface AboutProps {
  about: IAbout;
}

const About = ({ about }: AboutProps) => {
  return (
    <section
      className="grid md:grid-cols-[1.1fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative"
      id="about"
    >
      <div>
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>
            <OpacityTextReveal>{about.quote}</OpacityTextReveal>
          </SlideIn>
        </h3>
        <Transition
          viewport={{ once: true }}
          className="md:text-4xl tracking-tighter whitespace-pre-wrap"
        >
          <OpacityTextReveal>{about.description}</OpacityTextReveal>
        </Transition>
      </div>
      <div className="relative">
        <div className="sticky top-6">
          <Transition>
            <img
              src={about.avatar.url}
              width={670}
              height={525}
              alt={about.name}
              className="rounded-xl max-md:aspect-square object-cover"
            />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;
