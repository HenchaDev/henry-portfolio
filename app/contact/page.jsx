"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+254 112 034 613"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "henrymacsam01@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Juja, Kiambu County, Kenya"
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceChange = (value) => {
        setFormData(prev => ({
            ...prev,
            service: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message');
        }
    };

    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">
                            I'm always excited to collaborate on innovative projects, whether it's developing cutting-edge solutions, designing unique experiences, or solving complex problems. Let's bring ideas to life together!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input 
                                    type="text" 
                                    name="firstname"
                                    placeholder="Firstname" 
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                                <Input 
                                    type="text" 
                                    name="lastname"
                                    placeholder="Lastname" 
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                                <Input 
                                    type="email" 
                                    name="email"
                                    placeholder="Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Phone Number" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Select 
                                name="service"
                                value={formData.service}
                                onValueChange={handleServiceChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea 
                                name="message"
                                className="h-[200px]" 
                                placeholder="Type your message here..." 
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <Button type="submit" className="max-w-40">Send Message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;