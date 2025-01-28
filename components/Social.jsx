import Link from "next/link";

import { FaGithub, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://www.github.com/HenchaDev" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/henchadev/" },
    { icon: <FaWhatsapp />, path: "https://www.whatsapp.com" },
    { icon: <FaTwitter />, path: "https://www.x.com/mac_henry_03" },
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}

    </div>;
}

export default Social;