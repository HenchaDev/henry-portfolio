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
        description: "henrychegedev@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Juja, Kiambu County, Kenya"
    }
];

const emptyForm = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
};

const Contact = () => {
    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (value) => {
        setFormData((prev) => ({ ...prev, service: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot: if a bot filled this hidden field, pretend success and stop
        if (e.target.botcheck?.checked) return;

        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: process.env.WEB3FORMS_KEY,
                    subject: `New Portfolio Message - ${formData.service || "General"}`,
                    from_name: `${formData.firstname} ${formData.lastname}`,
                    name: `${formData.firstname} ${formData.lastname}`,
                    email: formData.email, // becomes the Reply-To
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setFormData(emptyForm);
            } else {
                console.error("Web3Forms error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6 sm:py-8 xl:py-6"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col xl:flex-row gap-8 xl:gap-[30px]">

                    {/* form */}
                    <div className="w-full xl:w-[54%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 sm:gap-6 p-5 sm:p-8 xl:p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-2xl sm:text-3xl xl:text-4xl text-accent">
                                Let&apos;s Work Together
                            </h3>
                            <p className="text-sm sm:text-base text-white/60">
                                I&apos;m always excited to collaborate on innovative projects, whether it&apos;s developing cutting-edge solutions, designing unique experiences, or solving complex problems. Let&apos;s bring ideas to life together!
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <Input
                                    type="text"
                                    name="firstname"
                                    placeholder="Firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
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
                                    required
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
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Custom Web App">Custom Web App</SelectItem>
                                        <SelectItem value="Server Management">Server Management</SelectItem>
                                        <SelectItem value="Cloud Services">Cloud Services</SelectItem>
                                        <SelectItem value="Networking Support">Networking Support</SelectItem>
                                        <SelectItem value="Technical Consulting">Technical Consulting</SelectItem>
                                        <SelectItem value="Prototyping & Wireframing">Prototyping &amp; Wireframing</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                name="message"
                                className="h-[160px] sm:h-[200px]"
                                placeholder="Type your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            {/* Honeypot: hidden from humans, bots tick it */}
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <Button
                                type="submit"
                                className="w-full sm:w-auto sm:min-w-40 sm:self-start"
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </Button>

                            {status === "success" && (
                                <p className="text-sm sm:text-base text-accent">
                                    Message sent successfully. I&apos;ll get back to you soon!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-sm sm:text-base text-red-400">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* contact info */}
                    <div className="flex-1 min-w-0 flex items-center xl:justify-end order-1 xl:order-none xl:mb-0">
                        <ul className="flex flex-col gap-5 sm:gap-8 xl:gap-10 w-full xl:w-auto">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] shrink-0 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[22px] sm:text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm sm:text-base text-white/60">{item.title}</p>
                                        <h3 className="text-base sm:text-xl break-words">
                                            {item.description}
                                        </h3>
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