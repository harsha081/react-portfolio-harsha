import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/profile1.PNG";
import { motion } from "framer-motion";

const container=(delay) => ({
  hidden:{x:-100,opacity:0 },
  visible:{
    x:0,
    opacity:1,
    transition:{duration :0.5,delay: delay},
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-wrap">{/*if screen becomes half up and down ,if full screen side by side*/}
        <div className="w-full lg:w-1/2">{/*small screen 100% width, large screen-50%width*/}
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             variants={container(0.5)}
             initial="hidden"
             animate='visible'
             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Harsha vardhan
            </motion.h1>
            <motion.span
              variants={container(1)}
             initial="hidden"
             animate='visible' 
             className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight  text-transparent">
              AI Enthusiast | Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate='visible'  
              className="my-2 max-w-xl  py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                  initial={{x:100,opacity:0}}
                  animate={{x:0,opacity:1}}
                  transition={{duration:1,delay:1.3}}
                  src={profilePic} alt="Harsha vardhan">
                </motion.img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero