import { FaGithubSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import image from "../images/profile.jpeg";
const About = () => {
        const wpnum="918200176364";
  const message="i can talk with you !";
  const wplink=`https://wa.me/${wpnum}?text=${encodeURIComponent(
  message
)}`;

  return (
    <>
      <div className="conatiner flex flex-col md:flex-row min-h-screen bg-[#020617]" id="about">
        
        {/* left content */}
        <div className="About-image flex justify-center md:ml-5">
          <img
            src={image}
            alt="Jay Mataji"
            className="    w-48 h-60
    sm:w-64 sm:h-80
    md:w-80 md:h-96
    rounded-xl mt-4 md:mt-11
    transition duration-300
    sm:hover:scale-105
    sm:hover:shadow-lg sm:hover:shadow-cyan-500/30"
          />
        </div>

        {/* right */}
        <div className="right flex flex-1 flex-col justify-start gap-6 pb-16">
          
          <div className="About-content p-6 flex justify-center">
            <h1 className="font-extrabold text-[#38BDF8] text-3xl p-4 underline decoration-[#38BDF8]">
              About Me
            </h1>
          </div>

          <div
            className="About-text p-6 
    w-full max-w-2xl
    mx-auto
    bg-[#0F172A] border border-[#1E293B] rounded-xl
    shadow-lg shadow-cyan-500/20
    transition-all duration-700 ease-out
    sm:hover:shadow-cyan-500/40 sm:hover:-translate-y-1"
          >
            <p className="text-[#E5E7EB] break-words leading-relaxed">
              <Typewriter
                options={{
                  strings: [
                    "I am a passionate and dedicated Computer Science student with a strong interest in web development and problem-solving. I enjoy building full-stack applications using modern technologies like React, Node.js, and MongoDB. I am constantly learning new skills and improving my coding abilities to create efficient, user-friendly solutions. My goal is to grow as a software developer and contribute to impactful real-world projects.",
                  ],
                  autoStart: true,
                  loop: false,
                  delay: 35,
                  deleteSpeed: Infinity,
                }}
              />
            </p>
          </div>

          <div className="social link mt-8 flex justify-center text-[#a5a27a] gap-6">
            <a href="https://www.linkedin.com/in/shrawansinh-prankada-aa65772b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="nofollow noopener noreferrer" target="_blank" ><FaLinkedin  size={34} className="hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"/> </a>
            <a href="https://github.com/shrawansinh" rel="nofollow noopener noreferrer" target="_blank" ><FaGithubSquare  size={34}className="hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20" /> </a>
             <a href="https://www.instagram.com/shrawansinh_p_prankada?igsh=NTdiMTY3cWxwd3F1" rel="nofollow noopener noreferrer" target="_blank" ><FaInstagram  size={34} className="hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20" /> </a>
            <a href={wplink} rel="nofollow noopener noreferrer" target="_blank" ><FaWhatsapp  size={34}/> </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;

