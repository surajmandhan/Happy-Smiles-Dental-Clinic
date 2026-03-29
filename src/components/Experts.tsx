"use client";

import { Expert } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

interface ExpertsProps {
  experts: Expert[];
}

const Experts = ({ experts }: ExpertsProps) => {
  return (
    <section className="py-20 px-4 md:px-8 relative" id="experts">
      <span className="blob absolute top-[10%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="text-center">
        <SlideIn>Our Experts</SlideIn>
      </SectionHeading>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
        {experts.map((expert, index) => (
          <Transition
            key={expert._id}
            transition={{ delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-full overflow-hidden border border-white/10">
              <img
                src={expert.image.url}
                alt={expert.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-6">
              <h4 className="text-2xl font-bold text-foreground">{expert.name}</h4>
              <p className="text-md text-foreground/80">{expert.degrees}</p>
            </div>
          </Transition>
        ))}
      </div>
    </section>
  );
};

export default Experts;