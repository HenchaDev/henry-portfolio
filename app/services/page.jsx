"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Full-stack web development using Python, Django, JavaScript, Next.js, and Vue.js to build dynamic and responsive websites and web applications.',
        href: ""
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Designing user-friendly and visually appealing interfaces using Figma, Canva, HTML, CSS, and JavaScript.',
        href: ""
    },
    {
        num: '03',
        title: 'Custom Web Applications',
        description: 'Developing custom web applications tailored to specific business needs, such as e-commerce platforms, CMS, or CRM tools.',
        href: ""
    },
    {
        num: '04',
        title: 'Frontend Development',
        description: 'Specializing in frontend development with JavaScript, Next.js, and Vue.js to create interactive and responsive user interfaces.',
        href: ""
    },
    {
        num: '05',
        title: 'Backend Development',
        description: 'Building robust backend systems with Python, Django, and managing servers with Linux and Bash scripting.',
        href: ""
    },
    {
        num: '06',
        title: 'Linux Server Management',
        description: 'Setting up, configuring, and managing Linux servers, and automating tasks with Bash scripting.',
        href: ""
    },
    {
        num: '07',
        title: 'Prototyping & Wireframing',
        description: 'Creating detailed wireframes and prototypes using Figma and Canva to help visualize the final product.',
        href: ""
    },
    {
        num: '08',
        title: 'Technical Consulting',
        description: 'Providing expert advice on technology stacks, system optimization, and troubleshooting technical issues.',
        href: ""
    },
    {
        num: '09',
        title: 'Cloud Services (AWS)',
        description: 'Working with Amazon Web Services (AWS) to develop, deploy, or maintain cloud-based applications and services.',
        href: ""
    },
    {
        num: '10',
        title: 'Network Support & Configuration',
        description: 'Supporting and configuring local networks, ensuring connectivity and stability, and applying foundational networking knowledge (CompTIA A+ and Networking Essentials).',
        href: ""
    },
    {
        num: '11',
        title: 'IT Support & Troubleshooting',
        description: 'Providing on-site and remote IT support including hardware/software installation, system troubleshooting, and user training for efficient business operations.',
        href: ""
    },
];

import { motion } from "framer-motion";



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity:1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return <div key={index}
                                    className="flex-1 flex flex-col justify-center gap-6 group"
                                >
                            {/* top */}
                            <div className="w-full flex justify-between item-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                <Link 
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight  className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            {/*description */}
                            <p>{service.description}</p>
                            {/*border */}
                            <div className="border-b border-white/20 w-full"></div>                            
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
