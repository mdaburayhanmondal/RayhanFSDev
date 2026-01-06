import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/md-abu-rayhan-mondal-820264379/',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/mdaburayhanmondal',
      // Update: Dark text on light mode, White text on dark mode
      color: 'hover:text-black dark:hover:text-white',
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
    <footer className="mt-20 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#161513] transition-colors duration-300">
      <div className="container mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8">
          {/* Left: Branding & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-y-2">
            <h2 className="text-2xl font-bold bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent tracking-tighter">
              RayhanFSDev
            </h2>
            <p className="text-gray-600 dark:text-white/50 text-sm max-w-xs text-center md:text-left">
              CSE Student at Southeast University. Building the future of the
              web, one component at a time.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex flex-col items-center gap-y-4">
            <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/30 font-semibold">
              Connect with me
            </span>
            <div className="flex gap-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl text-gray-500 dark:text-white/60 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Quick Credits */}
          <div className="text-center md:text-right">
            <p className="text-gray-900 dark:text-white/80 font-medium">
              Based in Mohakhali, Dhaka, Bangladesh
            </p>
            <p className="text-gray-500 dark:text-white/40 text-xs mt-1 italic">
              Southeast University • Dept. of CSE
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-y-4 text-gray-400 dark:text-white/30 text-[10px] uppercase tracking-widest">
          <p className="text-center">
            © {currentYear} Md. Abu Rayhan Mondal. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <Link
              to="/privacy"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
