"use client";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Full-stack web development using Next.js, React, Laravel, and Django to build dynamic, responsive web applications.",
    icon: "ti-world",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces using Figma, Canva, HTML, and CSS.",
    icon: "ti-palette",
    href: "",
  },
  {
    num: "03",
    title: "Custom Web Applications",
    description: "Developing tailored web apps for specific business needs — e-commerce platforms, CMS, CRM tools, and more.",
    icon: "ti-apps",
    href: "",
  },
  {
    num: "04",
    title: "Frontend Development",
    description: "Specializing in Next.js, React, and Vue.js to create fast, interactive, and responsive user interfaces.",
    icon: "ti-layout",
    href: "",
  },
  {
    num: "05",
    title: "Backend Development",
    description: "Building robust backend systems with Laravel, Django, and Node.js with solid database management.",
    icon: "ti-server",
    href: "",
  },
  {
    num: "06",
    title: "Linux Server Management",
    description: "Setting up, configuring, and managing Linux servers with Bash scripting for task automation.",
    icon: "ti-terminal",
    href: "",
  },
  {
    num: "07",
    title: "Prototyping & Wireframing",
    description: "Creating detailed wireframes and prototypes using Figma to visualize and validate ideas before development.",
    icon: "ti-vector",
    href: "",
  },
  {
    num: "08",
    title: "Technical Consulting",
    description: "Expert advice on technology stacks, system architecture, optimization, and troubleshooting.",
    icon: "ti-messages",
    href: "",
  },
  {
    num: "09",
    title: "Cloud Services (AWS)",
    description: "Developing, deploying, and maintaining cloud-based applications and services on Amazon Web Services.",
    icon: "ti-cloud",
    href: "",
  },
  {
    num: "10",
    title: "Network Support",
    description: "Configuring and supporting local networks, ensuring connectivity and stability using CompTIA-level knowledge.",
    icon: "ti-network",
    href: "",
  },
  {
    num: "11",
    title: "IT Support & Troubleshooting",
    description: "On-site and remote IT support including hardware/software installation, system troubleshooting, and user training.",
    icon: "ti-headset",
    href: "",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16">
      <div className="container mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="mb-12 text-center xl:text-left"
        >
          <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">
            What I offer
          </span>
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-accent">Services</span>
          </h2>
        </motion.div>

        {/* grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.num}
              variants={item}
              className="group relative flex flex-col gap-4 p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:border-accent/40 hover:bg-accent/[0.04] transition-all duration-300"
            >
              {/* number + arrow */}
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-accent/60">{service.num}</span>
                <Link
                  href={service.href}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:border-accent group-hover:text-accent group-hover:-rotate-45 transition-all duration-300"
                >
                  <BsArrowUpRight className="text-sm" />
                </Link>
              </div>

              {/* icon */}
              <i
                className={`ti ${service.icon} text-3xl text-accent/70 group-hover:text-accent transition-colors duration-300`}
                aria-hidden="true"
              />

              {/* title */}
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-sm text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;