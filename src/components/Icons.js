import { FaProjectDiagram } from "react-icons/fa";
import { FcAbout, FcBusinessContact, FcHome } from "react-icons/fc";
import { HiOutlineCode, HiOutlineViewGrid } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { Link } from "react-scroll";

const Icons = () => {

  const item =
    "group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer " +
    "transition-all duration-300 ease-in-out " +
    "hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 " +
    "hover:translate-x-2 hover:shadow-lg hover:shadow-emerald-500/20";

  const text =
    "text-white transition-all duration-300 group-hover:text-emerald-400";

  const icon =
    "text-xl transition-all duration-300 group-hover:scale-125";

  return (
    <div className="navbar mr-14 mt-1 space-y-4 ml-4">

      <div className={item}>
        <FcHome className={icon} />
        <Link to="home"><span className={text}>Home</span></Link>
      </div>

      <div className={item}>
        <FcAbout className={icon} />
        <Link to="about"><span className={text}>About</span></Link>
      </div>
      <div className={item}>
        <MdSchool className={`${icon} text-white`} />
        <Link to="education"><span className={text}>Education</span></Link>
      </div>
      <div className={item}>
        <HiOutlineCode className={`${icon} text-white`} />
        <Link to="tech"><span className={text}>Skills</span></Link>
      </div>

      <div className={item}>
        <HiOutlineViewGrid className={`${icon} text-white`} />
        <Link to="tech"><span className={text}>Tech</span></Link>
      </div>
      <div className={item}>
        <FaProjectDiagram className={`${icon} text-white`} />
        <Link to="projects"><span className={text}>Projects</span></Link>
      </div>
      <div className={item}>
        <FcBusinessContact className={`${icon} text-white`} />
        <Link to="contactus"><span className={text}>Contact Us</span></Link>
      </div>


    </div>
  );
};

export default Icons;
