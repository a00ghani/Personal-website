import Image from "next/image";
import "../style/hero.css";


function Hero() {
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
              
              
             </div>
              {/*right*/}
              <div className="hero-right-div">
              
                <h1 className="title-hero"> I am Ayesha Abdul Ghani <br></br>
                   Front-end Developer</h1>
                <p className="des-hero">A Web Developer. </p>
                <button className="hero-btn">HIRE ME</button>
              </div>
           </div>
        </div>
    )
}

export default Hero