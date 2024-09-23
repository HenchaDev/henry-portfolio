import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}


const reverseIndex = (index) => {
    const totalSteps = 10;
    return totalSteps - index -1;
}

// render the 10 motions in a row
const Stairs = () => {
    return (
    <>
        {[...Array(10)].map((_, index) => {
            return (
             <motion.div 
                key={index}
                variants={stairAnimation} 
                initial="intial" 
                animate="animate" 
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
            
                />
            );
        })}
    </>
    );
}

export default Stairs;