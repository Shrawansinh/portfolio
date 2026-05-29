import { FaGithubSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import co from "../images/co.jpeg";

const Contactus = () => {
  const wpnum = "918200176364";
  const message = "i can talk with you !";
  const wplink = `https://wa.me/${wpnum}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Wrapper */}
      <div className="container mx-auto min-h-screen bg-[#020617] py-12 pb-20" id="contactus">

        {/* Heading (CENTER FIXED) */}
        <div className="card-header mb-10 text-center">
          <h1 className="text-[#38BDF8] font-bold text-5xl tracking-wide">
            Contact Us
          </h1>
        </div>

        {/* Main Card */}
        <div
          className="mb-3 border-2 border-[#1E293B]
          rounded-xl p-6 flex flex-col md:flex-row gap-6
          transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          {/* Left Image */}
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src={co}
              alt="Contact Illustration"
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex flex-col justify-center">

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-[#E5E7EB] mb-4">
              <h4 className="font-medium text-lg">
                📧 Email: shrawansinhpprankada@gmail.com
              </h4>
              <h4 className="font-medium text-lg">
                📞 Phone: +91 8200176364
              </h4>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row gap-4 text-[#38BDF8] mb-6 justify-center">
              <a
                href="https://www.linkedin.com/in/shrawansinh-prankada-aa65772b6"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-[#7DD3FC] transition"
              >
                <FaLinkedin size={34} />
              </a>

              <a
                href="https://github.com/shrawansinh"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-[#7DD3FC] transition"
              >
                <FaGithubSquare size={34} />
              </a>

              <a
                href="https://www.instagram.com/shrawansinh_p_prankada"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-[#7DD3FC] transition"
              >
                <FaInstagram size={34} />
              </a>

              <a
                href={wplink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-[#7DD3FC] transition"
              >
                <FaWhatsapp size={34} />
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-[#1E293B]" />
              <span className="px-3 text-[#94A3B8] text-sm">OR</span>
              <div className="flex-grow h-px bg-[#1E293B]" />
            </div>

            {/* Form */}
            <form className="p-4 rounded-lg space-y-3 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-[#020617] border-2 border-[#1E293B]
                rounded-md p-2 text-center text-[#E5E7EB]
                focus:outline-none focus:border-[#38BDF8]"
                required
              />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-[#020617] border-2 border-[#1E293B]
                rounded-md p-2 text-center text-[#E5E7EB]
                focus:outline-none focus:border-[#38BDF8]"
                required
              />

              <textarea
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full bg-[#020617] border-2 border-[#1E293B]
                rounded-md p-2 text-center text-[#E5E7EB]
                focus:outline-none focus:border-[#38BDF8] resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#38BDF8] hover:bg-[#7DD3FC]
                text-[#020617] font-semibold py-2 rounded-md transition"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;



