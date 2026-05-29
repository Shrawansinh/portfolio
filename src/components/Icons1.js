import { FaProjectDiagram } from "react-icons/fa";
import { FcAbout, FcBusinessContact, FcHome } from "react-icons/fc";
import { HiOutlineCode, HiOutlineViewGrid } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { Link } from "react-scroll";

const Icons = () => {
  const itemStyle =
    "group flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer " +
    "transition-all duration-300 ease-in-out " +
    "hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 " +
    "hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20";

  const iconStyle =
    "text-2xl transition-all duration-300 group-hover:scale-125";

  return (
    <div className="navbar flex flex-col space-y-6 mt-32 items-center">
      
      <div className={itemStyle} title="Home">
        <Link to="home"><FcHome className={iconStyle} /></Link>
      </div>

      <div className={itemStyle} title="About">
        <Link to="about"><FcAbout className={iconStyle} /></Link>
      </div>
      <div className={itemStyle} title="Education">
        <Link to="education"><MdSchool className={`${iconStyle} text-white`} /></Link>
      </div>

      <div className={itemStyle} title="Skills">
        <Link to="tech"><HiOutlineCode className={`${iconStyle} text-white`} /></Link>
      </div>

      <div className={itemStyle} title="Tech Stack">
        <Link to="tech"><HiOutlineViewGrid className={`${iconStyle} text-white`} /></Link>
      </div>
      <div className={itemStyle} title="Projects">
        <Link to="projects"><FaProjectDiagram className={`${iconStyle} text-white`} /></Link>
      </div>
      <div className={itemStyle} title="contact Us">
        <Link to="contactus"><FcBusinessContact className={`${iconStyle} text-white`} /></Link>
      </div>

    </div>
  );
};

export default Icons;
 