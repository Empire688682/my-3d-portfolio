import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "axios"

const Contact = () => {
  const url = "https://emailsocket-1.onrender.com/"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post(url + "submit", formData);
      if (response.data.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setMessage(response.data.message)
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }
    } catch (error) {
      console.log("ERROR:", error);
      window.alert("An error occured")
    }
    finally {
      setLoading(false);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 px-3'>Your Name</span>
            <input
            required
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 px-3'>Your Subject</span>
            <input
            required
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's your good subject?"
              className='bg-tertiary py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 px-3'>Your email</span>
            <input
            required
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 px-3'>Your Message</span>
            <textarea
            required
              rows={7}
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {
            message ? <p>{message}</p> : null
          }

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
