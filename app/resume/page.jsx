"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaLinux,
    FaVuejs,
    FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque animi aliquid, dolorum veniam explicabo maxime assumenda adipisci unde voluptatum, nihil tempora obcaecati fugit autem ea. Laudantium nobis provident ipsa.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Henry Mwangi"
        },
        {
            fieldName: "Phone",
            fieldValue: "+254 112 034 613"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Skype",
            fieldValue: "Hencha Edits"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Kenyan"
        },
        {
            fieldName: "Email",
            fieldValue: "henrymacsam01@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Swahili"
        },
    ]
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam excepturi quo animi accusantium quidem, beatae dignissimos. In possimus debitis esse eum iure eos maxime, odio, at nobis dicta architecto sed!",
    items: [
        {
            company: "Makomboki Tea Factory",
            position: "ICT Support",
            duration: "May 2023 - August 2023"
        },
        {
            company: "IEBC - Kenya",
            position: "Voting Clerk",
            duration: "August 2022"
        },
        {
            company: "Vision Writers",
            position: "Freelance: Developer, Technical Writer",
            duration: "September 2023 - Current"
        },
        {
            company: "Caritas Nairobi",
            position: "ICT Intern",
            duration: "June 2024 - Current"
        },
        {
            company: "Write The Docs - Kenya",
            position: "Graphics Designer",
            duration: "December 2023 - May 2024"
        }
    ]
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam excepturi quo animi accusantium quidem, beatae dignissimos. In possimus debitis esse eum iure eos maxime, odio, at nobis dicta architecto sed!",
    items: [
        {
            institution: "Makomboki Primary School",
            degree: "KCPE - 319 Marks",
            duration: "2015"
        },
        {
            institution: "Njiiri School",
            degree: "KCSE - B- (minus)",
            duration: "2016 - 2019"
        },
        {
            institution: "Meru University of Science and Technology",
            degree: "BSc. Information Technology",
            duration: "2020 - 2024"
        },
    ]
};

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam iste odit exercitationem aperiam iure provident officia consequatur cupiditate error voluptatem recusandae vel cumque nulla dolorem ad laboriosam obcaecati, accusamus rerum.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <FaLinux />,
            name: "Linux Admin",
        },
        {
            icon: <FaVuejs />,
            name: "vue.js",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiDjango />,
            name: "Django",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return ( 
    <motion.div
        initial= {{ opacity: 0 }}
        animate = {{
            opacity: 1,
            transition: { delay:2.4, duration: 0.4, ease: "easeIn" },
        }}
        className = "min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/*experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/*education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                       <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => {
                                return <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            })}
                        </ul>
                       </div>
                    </TabsContent>
                    {/* About Me */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
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