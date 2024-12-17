import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";


function About() {
    return(
        <div className="header-container">
           <div className="header-boxes-con">
             {/*left*/}

             <div>
              <Image src={"/images/banner_bg.jpg" }
             width={200}
             height={200}
             className="header-image"
             alt="Profile"/>
             <div className="social-Icon">
            <Link href={""}>< BsYoutube className="s-icon1" /></Link>
              <Link href={""}><FaFacebook className="s-icon2"/></Link>
              <Link href={""}><FaInstagram className="s-icon3"/></Link>
              </div>

             </div>
              {/*right*/}a00ghani/Personal-website
              <div className="hero-right-div">
              
                <h1 className="title-hero">About Us</h1>
                <p className="des-hero">I am pursing in web development with the passion of learning 
                  new technologies and have interest in innovations.  </p>
                
              </div>
           </div>
        </div>
    )
}

export default About