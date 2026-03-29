"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { About, Service, SocialHandle } from "../utils/interface";
import { cn } from "../utils/cn";
import Link from "next/link";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transitions";
import { Input, Textarea } from "./ui/Input";
import { useMediaQuery } from "../utils/useMediaQuery";

interface ContactProps {
  email: string;
  social_handle: SocialHandle[];
  about: About;
  services: Service[];
}
const Contact = ({ email, social_handle, about, services }: ContactProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const phoneNumbers = about.phoneNumber.split(",").map((num) => num.trim());

  const [status, setStatus] = useState<"SENDING" | "DONE" | "ERROR" | "IDLE">(
    "IDLE"
  );
  const [statusText, setStatusText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    reason: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwqQVw-plP3Gmhe1jR5aISoi4HOauknaPWXo7bK8nboLDHIPzc4e9NbQNxm91fZtz4rVQ/exec";
    const formEle = e.currentTarget;
    const data = new FormData(formEle);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setStatus("DONE");
      setFormData({
        name: "",
        phone: "",
        email: "",
        dateTime: "",
        reason: "",
        message: "",
        consent: false,
      });
      setStatusText("Appointment request sent! We'll be in touch soon.");
    } catch (error: any) {
      setStatus("ERROR");
      setStatusText("Error sending request. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (status === "DONE" || status === "ERROR") {
      const timer = setTimeout(() => {
        setStatus("IDLE");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <motion.section className="relative" id="contact">
      <AnimatePresence initial={false}>
        {status !== "IDLE" && (
          <motion.li
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={cn(
              "fixed top-4 right-4 p-2 px-4 w-[300px] z-50 h-16 rounded-xl bg-white flex items-center",
              status === "ERROR"
                ? "bg-red-500"
                : status === "DONE"
                ? "bg-green-400"
                : ""
            )}
          >
            <p className="text-black font-semibold">{statusText}</p>
          </motion.li>
        )}
      </AnimatePresence>
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px] -z-10" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading className="">
          <SlideIn className="text-white/40">Ready for a Healthier Smile?</SlideIn>{" "}
          <br /> <SlideIn>Book Your Appointment</SlideIn>
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4 max-md:flex-col">
              <Transition className="w-full">
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="border-0 border-b rounded-none"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Transition>
              <Transition className="w-full">
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  className="border-0 border-b rounded-none"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Transition>
            </div>
            <div className="flex gap-4 max-md:flex-col">
              <Transition className="w-full">
                <Input
                  id="email"
                  name="email"
                  placeholder="Email Address (Optional)"
                  type="email"
                  className="border-0 border-b rounded-none"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Transition>
              <Transition className="w-full">
                <Input
                  id="dateTime"
                  name="dateTime"
                  placeholder="Preferred Date and Time"
                  type="datetime-local"
                  className="border-0 border-b rounded-none datetime-picker"
                  required
                  value={formData.dateTime}
                  onChange={handleInputChange}
                />
              </Transition>
            </div>
            <div className="space-y-2">
              <Transition>
                <select
                  id="reason"
                  name="reason"
                  className="w-full bg-transparent border-0 border-b border-white/30 py-3 text-white/80 placeholder:text-white/50 focus:ring-0 focus:border-primary"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Reason for Visit
                  </option>
                  {services.map((service) => (
                    <option
                      key={service._id}
                      value={service.name}
                      className="bg-background text-white"
                    >
                      {service.name}
                    </option>
                  ))}
                  <option value="Other" className="bg-background text-white">
                    Other
                  </option>
                </select>
              </Transition>
            </div>
            <div className="space-y-2">
              <Transition>
                <Textarea
                  className="min-h-[100px] rounded-none border-0 border-b resize-none"
                  id="message"
                  name="message"
                  placeholder="Description / Notes (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Transition>
            </div>
            <div className="space-y-4">
              <Transition>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="size-4 bg-transparent border-white/50 rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-white/70">
                    I agree to the{" "}
                    <Link href="/terms" className="underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
              </Transition>
            </div>
            <div>
              <Transition>
                <motion.button
                  whileHover="whileHover"
                  initial="initial"
                  className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden"
                  type="submit"
                >
                  <TextReveal className="uppercase">
                    {status === "SENDING" ? "Sending..." : "Book Appointment"}
                  </TextReveal>
                </motion.button>
              </Transition>
            </div>
          </form>
          <div className="md:justify-self-end flex flex-col">
            <div className="pb-4">
              <Transition>
                <span className="text-white/90">Get in touch</span>
              </Transition>
              <div className="text-2xl md:text-4xl font-bold py-2">
                <Transition>
                  <a href={`mailto:${email}`} className="hover:underline">
                    <TextReveal>{email}</TextReveal>
                  </a>
                </Transition>
              </div>
              <Transition>
                <div className="pb-1 text-white/80">
                  {phoneNumbers.map((number, index) => {
                    const cleanedNumber = number.replace(/[\s-]/g, "");
                    const whatsappNumber = cleanedNumber.replace("+", "");
                    const callUrl = `tel:${cleanedNumber}`;
                    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

                    return (
                      <span key={index}>
                        <a
                          href={isMobile ? callUrl : whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {number}
                        </a>
                        {index < phoneNumbers.length - 1 && " , "}
                      </span>
                    );
                  })}
                </div>
              </Transition>
              <Transition>
                <div className="text-white/80">{about.address}</div>
              </Transition>
            </div>

            <div className="flex md:gap-8 gap-4 mt-auto md:pb-16">
              {social_handle.map((social, index) =>
                social.enabled ? (
                  <Transition
                    key={social._id}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {social.url !== "#" ? (
                      <Link
                        href={social.url}
                        target="_blank"
                        className="hover:underline"
                      >
                        <TextReveal>{social.platform}</TextReveal>
                      </Link>
                    ) : (
                      <div className="cursor-not-allowed text-white/50">
                        <TextReveal>{social.platform}</TextReveal>
                      </div>
                    )}
                  </Transition>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
