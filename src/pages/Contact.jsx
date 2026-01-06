import React, { useState } from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'mdaburayhanmondal@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/md-abu-rayhan-mondal-820264379/',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/mdaburayhanmondal',
      color: 'hover:text-white',
    },
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/mdaburayhanmondalofficial',
      color: 'hover:text-blue-600',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/mdaburayhanmondalofficial/',
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <div className="container mx-auto px-5 py-20 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Text & Socials */}
        <div className="flex flex-col gap-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent uppercase tracking-tight">
              Let's Connect
            </h1>
            <p className="text-white/60 mt-4 max-w-md leading-relaxed">
              Whether you have a question, a project idea, or just want to say
              hi, my inbox is always open. I'll get back to you as soon as
              possible!
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            {/* Email Copy Section */}
            <div
              onClick={handleCopy}
              className="relative flex items-center gap-x-4 text-white/80 group cursor-pointer w-fit"
            >
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 group-hover:border-orange-500 transition-colors">
                <MdEmail size={20} className="text-orange-500" />
              </div>
              <span className="font-medium text-sm group-hover:text-white blur hover:blur-none transition-all duration-200 ease-in">
                {emailAddress}
              </span>

              {/* Tooltip */}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded font-bold animate-bounce whitespace-nowrap shadow-xl z-10">
                  Copied!
                </span>
              )}
            </div>

            <div className="flex items-center gap-x-4 text-white/80 group">
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 group-hover:border-orange-500 transition-colors">
                <MdLocationOn size={20} className="text-orange-500" />
              </div>
              <span className="font-medium text-sm">
                Mohakhali, Dhaka, Bangladesh
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 pt-4">
            <span className="text-xs uppercase tracking-widest text-white/30 font-bold">
              Follow my journey
            </span>
            <div className="flex gap-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-white/50 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <form
          action={import.meta.env.VITE_END_POINT}
          method="POST"
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col gap-y-6 shadow-2xl"
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-all text-white"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-all text-white"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="How can I help you?"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition-all text-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white text-[#161513] font-bold py-4 rounded-xl hover:bg-transparent hover:text-white border border-white transition-all duration-300 mt-2 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
