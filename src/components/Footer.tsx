"use client";

import Link from "next/link";
import { Transition } from "./ui/Transitions";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
      <Transition>
        <div>&copy; {new Date().getFullYear()} Happy Smiles</div>
      </Transition>
      <Transition>
        <p>
          Developed with ❤ by{" "}
          <Link
            href={"https://portfolio-2026-suraj.vercel.app/"}
            className="hover:underline"
            target="_blank"
          >
            Suraj Parkash
          </Link>
        </p>
      </Transition>
    </footer>
  );
};

export default Footer;