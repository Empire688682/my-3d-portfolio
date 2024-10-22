import { FaFacebookF } from "react-icons/fa6";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#100d25] py-24 px-[5%] flex flex-wrap justify-center gap-5">
      <div className="flex-1 mb-8 min-w-[300px]">
        <h1 className="text-white text-2xl font-bold mb-5">About Me</h1>
        <p className="text-white">
        I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.
        </p>
      </div>
      <div className="flex-1 mb-8 min-w-[250px]" >
        <h1 className="text-white text-2xl font-bold mb-5">Newsletter</h1>
        <div className="w-full">
          <p className="text-white">Stay updated with our latest trends</p>
          <form className="flex items-center mt-2">
            <input type="text" placeholder='Enter Email Address' className="flex-1 border-none p-4 text-base outline-none" />
            <button type="submit" className="p-4 bg-[#6cafe9] text-white text-base">Send</button>
          </form>
        </div>
      </div>
      <div className="flex-1 mb-8">
        <h1 className="text-white text-2xl font-bold mb-5">Let us be social</h1>
        <div className="flex min-w-[300px]">
          <NavLink to='https://www.facebook.com/juwon.asehinde.7' className="text-white w-12 h-12 flex items-center justify-center"><FaFacebookF style={{ width: "25px", height: "25px" }} /></NavLink>
          <NavLink to='https://github.com/Empire688682' className="text-white w-12 h-12 flex items-center justify-center"><BsGithub style={{ width: "25px", height: "25px" }} /></NavLink>
          <NavLink to='https://www.instagram.com/jahwonempire/' className="text-white w-12 h-12 flex items-center justify-center"><BsInstagram style={{ width: "25px", height: "25px" }} /></NavLink>
          <NavLink to='https://x.com/AsehindeJwon' className="text-white w-12 h-12 flex items-center justify-center"><SlSocialTwitter style={{ width: "25px", height: "25px" }} /></NavLink>
          <NavLink to='https://www.linkedin.com/in/asehinde-juwon-73b04b268' className="text-white w-12 h-12 flex items-center justify-center"><CiLinkedin style={{ width: "25px", height: "25px" }} /></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;