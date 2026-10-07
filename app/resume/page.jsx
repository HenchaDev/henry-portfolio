"use client";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaLinux, FaVuejs, FaPython, FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I'm Henry Mwangi, a tech enthusiast with over 2 years of experience in IT, design, and development. I thrive on solving problems, creating innovative solutions, and continually expanding my skills.",
  info: [
    { fieldName: "Name", fieldValue: "Henry Mwangi" },
    { fieldName: "Phone", fieldValue: "+254 112 034 613" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Kenyan" },
    { fieldName: "Email", fieldValue: "henrychegedev@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Swahili" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "A blend of technical expertise, creativity, and problem-solving across IT, design, and full-stack development.",
  items: [
    { company: "Caritas Nairobi", position: "Full-Stack Developer & Database Admin", duration: "Jun 2025 – Current" },
    { company: "Caritas Nairobi", position: "ICT Officer", duration: "Jan 2025 – Jun 2025" },
    { company: "Caritas Nairobi", position: "ICT Intern", duration: "Jun 2024 – Dec 2024" },
    { company: "Write The Docs – Kenya", position: "Graphics Designer", duration: "Dec 2023 – May 2024" },
    { company: "HenchaDev", position: "Freelance Developer & Technical Writer", duration: "Sep 2021 – Present" },
    { company: "Makomboki Tea Factory", position: "ICT Support", duration: "May 2023 – Aug 2023" },
  ],
};

const education = {
  title: "My Education",
  description:
    "A strong academic foundation in technology and problem-solving, complemented by practical experience in IT and development.",
  items: [
    { institution: "Meru University of Science and Technology", degree: "BSc. Information Technology", duration: "2020 – 2024" },
    { institution: "Njiiri School", degree: "Secondary Education", duration: "2016 – 2019" },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "From responsive frontends with React and Next.js to robust backends with Laravel and Django — plus Linux, Figma, and more.",
  skillList: [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaLinux />, name: "Linux Admin" },
  ],
};

const cardClass =
  "bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 sm:py-5 sm:px-6 flex flex-col justify-center gap-2 hover:border-accent/30 transition-all duration-300 text-left";

const headingClass = "text-2xl sm:text-3xl font-bold";
const descClass = "max-w-[600px] text-white/50 text-sm mx-auto xl:mx-0";
const sectionClass = "flex flex-col gap-5 sm:gap-6 text-center xl:text-left";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-12"
        >
          {/* tab triggers: 2x2 grid on phones, one row on tablets, vertical list on desktop */}
          <TabsList className="h-auto grid grid-cols-2 sm:grid-cols-4 xl:flex xl:flex-col w-full max-w-[420px] sm:max-w-[640px] xl:max-w-[220px] mx-auto xl:mx-0 gap-2 sm:gap-3 xl:shrink-0">
            {["experience", "education", "skills", "about"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="capitalize w-full text-sm sm:text-base py-2.5"
              >
                {tab === "about" ? "About Me" : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full min-w-0">

            {/* experience */}
            <TabsContent value="experience">
              <div className={sectionClass}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Career</span>
                  <h3 className={headingClass}>{experience.title}</h3>
                </div>
                <p className={descClass}>{experience.description}</p>
                {/* fixed height only on desktop; on mobile the page itself scrolls */}
                <ScrollArea className="xl:h-[480px] xl:pr-2">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {experience.items.map((item, index) => (
                      <li key={index} className={cardClass}>
                        <span className="text-xs font-mono text-accent/70">{item.duration}</span>
                        <h4 className="text-base font-semibold text-white leading-snug">{item.position}</h4>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <p className="text-sm text-white/50">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
              <div className={sectionClass}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Background</span>
                  <h3 className={headingClass}>{education.title}</h3>
                </div>
                <p className={descClass}>{education.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {education.items.map((item, index) => (
                    <li key={index} className={cardClass}>
                      <span className="text-xs font-mono text-accent/70">{item.duration}</span>
                      <h4 className="text-base font-semibold text-white leading-snug">{item.degree}</h4>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <p className="text-sm text-white/50">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills">
              <div className={sectionClass}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Toolkit</span>
                  <h3 className={headingClass}>{skills.title}</h3>
                </div>
                <p className={descClass}>{skills.description}</p>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[80px] sm:h-[90px] bg-white/[0.03] border border-white/10 rounded-xl flex flex-col justify-center items-center gap-1.5 sm:gap-2 group hover:border-accent/40 transition-all duration-300">
                            <div className="text-2xl sm:text-3xl text-white/50 group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-[10px] text-white/40 group-hover:text-white/60 transition-all duration-300 px-1 text-center leading-tight">
                              {skill.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about">
              <div className={sectionClass}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Who I am</span>
                  <h3 className={headingClass}>{about.title}</h3>
                </div>
                <p className={descClass}>{about.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-[640px] mx-auto xl:mx-0 w-full">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-start gap-3 border border-white/10 rounded-lg px-4 py-3 text-left"
                    >
                      <span className="text-xs text-white/40 w-20 sm:w-24 shrink-0">{item.fieldName}</span>
                      <span className="text-sm font-medium text-white min-w-0 break-words">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;