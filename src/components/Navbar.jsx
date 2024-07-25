import logo from "../assets/Hm.png";

import { FaLinkedin } from "react-icons/fa";
 import {FaGithub} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
 import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <img className="mx-6 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/hardik-mehta-87a5b4227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a>
         <a href="https://www.instagram.com/hanshu_hardik?utm_source=qr&igsh=N3p3d2YxMDEyMzk2" target="_blank"><FaInstagram /></a>
         <a href="https://github.com/hanshuhardik/portfolio_hardik.git" target="_blank"><FaGithub /></a>
         <a href="https://leetcode.com/u/hmhardik5021/" target="_blank"><SiLeetcode/></a>
         
         
         
          
        </div>
    </nav>
  )
}

export default Navbar;