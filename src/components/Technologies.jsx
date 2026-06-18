import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

import {motion} from "framer-motion"
import { BiRepeat } from "react-icons/bi";

const iconvariants =(duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-500 pb-20">
        <motion.h1
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0 , y:-50}}
            transition={{duration:1}} 
            className="bg-gradient-to-r text-center from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight  text-transparent pb-6 pt-6">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            
            <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-xl border-4 border-neutral-800 p-4">
                <SiDotnet className="text-5xl text-cyan-400"/>
            </motion.div>

            <motion.div
                variants={iconvariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl " />
            </motion.div>

            <motion.div 
                variants={iconvariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-xl border-4 border-neutral-800 p-4">
                <FaDatabase className="text-5xl text-green-400"/>
            </motion.div>

            <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-xl border-4 border-neutral-800 p-4">
                <FaPython className="text-5xl text-yellow-400"/>
            </motion.div>

            <motion.div
                variants={iconvariants(4)}
                initial="initial"
                animate="animate" 
                className="rounded-xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-5xl text-blue-700"/>
            </motion.div>

            <motion.div 
                variants={iconvariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl text-green-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies