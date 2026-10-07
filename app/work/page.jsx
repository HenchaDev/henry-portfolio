"use client";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Fullstack",
        title: "Caritas Nairobi Website",
        description:
            "The official website for Caritas Nairobi, the social development arm of the Archdiocese of Nairobi.",
        stack: [
            { name: "Next.js" },
            { name: "React" },
            { name: "GSAP" },
            { name: "Tailwind.css" },
            { name: "TypeScript" },
            { name: "DjangoRest" }
        ],
        preview: "",
        image: "/assets/image.png",
        fit: "contain",
        live: "https://new.caritasnairobi.org",
        github: ""
    },
    {
        num: "02",
        category: "Data Engineering",
        title: "Core Banking System Migration",
        description:
            "Led a legacy-to-modern core banking migration for 250,000+ accounts. Built ETL pipelines and SQL migration scripts to clean, validate and move records with 100% data integrity and zero downtime.",
        stack: [{ name: "SQL" }, { name: "MySQL" }, { name: "Python" }, { name: "ETL" }],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        fit: "cover",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "Backend",
        title: "Secure APIs & Client Portals",
        description:
            "Scalable REST and GraphQL APIs with Django and Laravel, secured with OAuth 2.0 and JWT authentication, powering web portals built with Next.js, React and Vue.js.",
        stack: [
            { name: "Django" },
            { name: "Laravel" },
            { name: "GraphQL" },
            { name: "OAuth 2.0" },
            { name: "JWT" }
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
        fit: "cover",
        live: "",
        github: ""
    },
    {
        num: "04",
        category: "DevOps",
        title: "Cloud Infrastructure & CI/CD",
        description:
            "Containerized microservices deployed on AWS and Azure with Docker and Kubernetes, plus automated CI/CD pipelines that speed up deployments and improve uptime.",
        stack: [
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "AWS" },
            { name: "Azure" },
            { name: "GitHub Actions" },
            { name: "GitLab CI" }
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
        fit: "cover",
        live: "",
        github: ""
    }
];

/**
 * Renders a live website inside the slide, scaled down so it looks
 * like a desktop screen instead of a cramped mobile layout.
 */
const SitePreview = ({ url, title }) => {
    const DESKTOP_WIDTH = 1280; // width the site is rendered at
    const wrapRef = useRef(null);
    const [size, setSize] = useState({ scale: 0.4, height: 1000 });

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const update = () => {
            const scale = el.clientWidth / DESKTOP_WIDTH;
            setSize({ scale, height: el.clientHeight / scale });
        };

        update();
        const observer = new ResizeObserver(update);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={wrapRef} className="relative w-full h-full overflow-hidden bg-white">
            <iframe
                src={url}
                title={title}
                loading="lazy"
                style={{
                    width: DESKTOP_WIDTH,
                    height: size.height,
                    transform: `scale(${size.scale})`,
                    transformOrigin: "top left",
                    border: 0
                }}
            />
        </div>
    );
};

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-12 xl:px-0"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col xl:flex-row gap-8 xl:gap-[30px]">

                    {/* text */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none text-center xl:text-left">
                        <div className="flex flex-col gap-5 sm:gap-[30px]">
                            {/* outline num */}
                            <div className="text-6xl sm:text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-3xl sm:text-4xl xl:text-[42px] font-bold leading-tight xl:leading-none text-white transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-sm sm:text-base text-white/60 max-w-[600px] mx-auto xl:mx-0">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex flex-wrap justify-center xl:justify-start gap-x-3 gap-y-1 sm:gap-x-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-base sm:text-xl text-accent">
                                        {item.name}
                                        {/* remove last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center justify-center xl:justify-start gap-4">
                                {project.live && (
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-white/30 rounded-md">
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                                {project.github && (
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* slider */}
                    <div className="w-full min-w-0 xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-8 xl:mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    {({ isActive }) => (
                                        // 16:10 frame on small screens, fixed height on desktop
                                        <div className="relative w-full aspect-[16/10] xl:aspect-auto xl:h-[460px] overflow-hidden rounded-lg bg-white/5">
                                            {item.preview ? (
                                                // only load the live site while its slide is active
                                                isActive && <SitePreview url={item.preview} title={item.title} />
                                            ) : (
                                               <Image
                                                    src={item.image}
                                                    fill
                                                    sizes="(min-width: 1280px) 50vw, 100vw"
                                                    className={item.fit === "cover" ? "object-cover" : "object-contain"}
                                                    alt={item.title}
                                                />
                                            )}
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-start"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;