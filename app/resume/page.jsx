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
    { fieldName: "Email", fieldValue: "henrymacsam01@gmail.com" },
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
    { company: "Vision Writers", position: "Freelance Developer & Technical Writer", duration: "Sep 2021 – Present" },
    { company: "Makomboki Tea Factory", position: "ICT Support", duration: "May 2023 – Aug 2023" },
    { company: "IEBC – Kenya", position: "Voting Clerk", duration: "Aug 2022" },
  ],
};

const education = {
  title: "My Education",
  description:
    "A strong academic foundation in technology and problem-solving, from secondary school through university.",
  items: [
    { institution: "Meru University of Science and Technology", degree: "BSc. Information Technology", duration: "2020 – 2024" },
    { institution: "Njiiri School", degree: "KCSE – B-", duration: "2016 – 2019" },
    { institution: "Makomboki Primary School", degree: "KCPE – 319 Marks", duration: "2015" },
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
  "bg-white/[0.03] border border-white/10 rounded-xl py-5 px-6 flex flex-col justify-center gap-2 hover:border-accent/30 transition-all duration-300";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12">

          {/* tab triggers */}
          <TabsList className="flex flex-col w-full max-w-[220px] mx-auto xl:mx-0 gap-3">
            {["experience", "education", "skills", "about"].map((tab) => (
              <TabsTrigger key={tab} value={tab} className="capitalize w-full">
                {tab === "about" ? "About Me" : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full">

            {/* experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Career</span>
                  <h3 className="text-3xl font-bold">{experience.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/50 text-sm mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[420px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Background</span>
                  <h3 className="text-3xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/50 text-sm mx-auto xl:mx-0">{education.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Toolkit</span>
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/50 text-sm mx-auto xl:mx-0">{skills.description}</p>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[90px] bg-white/[0.03] border border-white/10 rounded-xl flex flex-col justify-center items-center gap-2 group hover:border-accent/40 transition-all duration-300">
                            <div className="text-3xl text-white/50 group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-all duration-300">
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
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 block mb-1">Who I am</span>
                  <h3 className="text-3xl font-bold">{about.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/50 text-sm mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-[600px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-3 border border-white/10 rounded-lg px-4 py-3"
                    >
                      <span className="text-xs text-white/40 w-24 shrink-0">{item.fieldName}</span>
                      <span className="text-sm font-medium text-white">{item.fieldValue}</span>
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