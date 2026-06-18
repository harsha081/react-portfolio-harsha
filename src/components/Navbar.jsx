import{FaLinkedin,FaGithub,FaInstagram,FaWhatsapp} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import logo from "../assets/harshalogo1.jpg"
const navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className=" mx-10 w-8">
        <img src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/harsha-vardhan-devineni-019b6837a/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin/></a>
            <a href="https://github.com/harsha081" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub/></a>
            <a href="https://leetcode.com/u/harsha212313/" target="_blank" rel="noopener noreferrer" title="LeetCode"><SiLeetcode/></a>
            <a href="https://wa.me/919642710719" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/harshavardhan0810/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default navbar