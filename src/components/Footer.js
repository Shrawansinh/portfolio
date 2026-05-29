import { FaGithubSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
      const wpnum="918200176364";
  const message="i can talk with you !";
  const wplink=`https://wa.me/${wpnum}?text=${encodeURIComponent(
  message
)}`;

  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">

        {/* Left */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Shrawansinh. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-gray-500">
          Made with ❤️ shrawan and his creativity
        </p>

         <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/shrawansinh-prankada-aa65772b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="nofollow noopener noreferrer" target="_blank" ><FaLinkedin  size={34} className="hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"/> </a>
            <a href="https://github.com/shrawansinh" rel="nofollow noopener noreferrer" target="_blank" ><FaGithubSquare  size={34}className="hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20" /> </a>
             <a href="https://www.instagram.com/shrawansinh_p_prankada?igsh=NTdiMTY3cWxwd3F1" rel="nofollow noopener noreferrer" target="_blank" ><FaInstagram  size={34} className="hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20" /> </a>
            <a href={wplink} rel="nofollow noopener noreferrer" target="_blank" ><FaWhatsapp  size={34}/> </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
