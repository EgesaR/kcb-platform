"use client"

import { motion } from "framer-motion"
import { slideInFromTop } from "@/utils/motion"

const HeroContent = ({children}) => {
    return(
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full h-full z-[20]">
            <div className="h-full w-full flex flex-row gap-5 justify-center m-auto text-start">
                {children}
            </div>
        </motion.div>
    )
}

export default HeroContent