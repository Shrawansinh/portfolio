import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import profile from "../images/profile.jpeg";
import Icons from "./Icons";
import Icons1 from "./Icons1";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
      const { scrollYProgress } = useScroll()

  return (
 <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

    <div
      className={`sidebar-section 
      bg-gradient-to-b from-zinc-800 to-zinc-900 
      h-screen hidden md:flex md:flex-col 
      transition-all duration-300 ease-in-out sticky top-0
      ${toggle ? "md:w-60" : "w-24"} `}
    >
      {/* Profile Section */}
      {toggle && (
        <div className="mt-6 ml-6 mb-6 transition-all duration-300">
          <img
            src={profile}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover 
            border-4 border-zinc-600 
            hover:border-emerald-500 
            hover:scale-105 
            transition-all duration-300"
          />

          <div className="mt-4 ml-1 space-y-3 justify-start align-items-lg-start">
            <p className="text-emerald-500 text-sm 
            hover:text-emerald-400 
            transition-all duration-300 hover:shadow-lg shadow-emerald-700">
              Open To Work
            </p>
            <h2 className="text-white font-semibold text-lg">
              ShrawanSinh Prankada
            </h2>
            <p className="text-zinc-400 text-sm">
              FullStack Developer
            </p>
          </div>
        </div>
      )}

      {/* Navigation + Toggle */}
      <div className="flex-1 flex flex-col items-center justify-between py-6">
        
        {/* Icons */}
        <div className="w-full flex justify-center">
          {toggle ? <Icons /> : <Icons1 />}
        </div>

        {/* Toggle Button */}
        <div
          onClick={() => setToggle(!toggle)}
          className="bg-zinc-800 hover:bg-zinc-700 
          rounded-full p-2 cursor-pointer 
          transition-all duration-300 
          shadow-md hover:shadow-lg"
        >
          {toggle ? (
            <MdKeyboardDoubleArrowLeft className="text-emerald-400 text-2xl" />
          ) : (
            <MdKeyboardDoubleArrowRight className="text-emerald-400 text-2xl" />
          )}
        </div>

      </div>
    </div>
    </>
  );
};

export default Layout;

