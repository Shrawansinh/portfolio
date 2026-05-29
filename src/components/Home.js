
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import resume from "../assets/shrawan1_main.pdf";
const Home = () => {
  const wpnum="918200176364";
  const wpmessage="Hi, I saw your portfolio and would like to discuss a project.";
  const wplink=`https://wa.me/${wpnum}?text=${encodeURIComponent(wpmessage)}`;
  return (
<motion.div
  initial={{
    opacity: 0,
    x: -40,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>
    <div className="h-full flex items-center md:ml-12 p-6 md:p-10 gap-6" id="home">
      <div className="w-full">

        <h1 className="text-white text-5xl font-bold">
          Hello, I&apos;m{" "}
          <span className="text-emerald-400">
            ShrawanSinh
          </span>{" "}
          👋
        </h1>

        <h2 className="mt-6 text-3xl font-semibold">
          <span className="text-zinc-400 mr-2">I am a</span>
          <span className="text-orange-400">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "React Native Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
          Passionate about building scalable web applications,
          clean UI, and modern full-stack solutions using
          React, Node.js, and MongoDB.
        </p>
        <div className="btn mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href={wplink} rel="nofollow noreferrer noopener" target="_blank" className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-blue-500 rounded-lg px-4 py-2.5 transition-all duration-300 ease-in-out hover:bg-blue-600  sm:hover:translate-x-2   hover:shadow-lg hover:shadow-blue-500/30 active:scale-95">
                Hire me!
            </a>
            <a
  className="w-full sm:w-auto inline-flex items-center justify-center
    text-white bg-blue-500 
    px-4 py-2.5 rounded-lg 
    transition-all duration-300 ease-in-out
    hover:bg-blue-600 sm:hover:translate-x-2
    hover:shadow-lg hover:shadow-blue-500/30 active:scale-95
  " href={resume} download="shrawan1_main.pdf"
>
    Resume !
</a>

            <button>

            </button>
        </div>
        
      </div>
      
    </div>
    </motion.div>
  );
};

export default Home;
