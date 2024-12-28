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
            feildName: "Name",
            feildValue: "Henry Mwangi"
        },
        {
            feildName: "Phone",
            feildValue: "+254 112 034 613"
        },
        {
            feildName: "Experience",
            feildValue: "2+ Years"
        },
        {
            feildName: "Skype",
            feildValue: "Hencha Edits"
        },
        {
            feildName: "Nationality",
            feildValue: "Kenyan"
        },
        {
            feildName: "Email",
            feildValue: "henrymacsam01@gmail.com"
        },
        {
            feildName: "Freelance",
            feildValue: "Available"
        },
        {
            feildName: "Languages",
            feildValue: "English, Swahili"
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
            position: "Freelance - Developer, Technical Writer",
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
            <Tabs>
                <TabsList>
                    <TabsTrigger>Experience</TabsTrigger>
                    <TabsTrigger>Education</TabsTrigger>
                    <TabsTrigger>Skills</TabsTrigger>
                    <TabsTrigger>About Me</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </motion.div>
    );
};

export default Resume;