import HeroSection from '../components/HeroSection';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import { RiJavascriptFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const Home = () => {
  const iconClasses =
    'dark:text-white transition-all duration-300 hover:text-[#FF8660] hover:drop-shadow-[0_0_10px_#FF8660]';
  const prevSkillClasses =
    'border border-black/10 dark:border-white/10 px-3 py-1 rounded hover:border-[#FF8660] transition-all duration-200 ease-in select-none';

  return (
    <>
      <HeroSection />
      {/* Skills Section */}
      <section className="mx-auto mt-10 mb-20 p-5 max-w-4xl">
        <div className="flex flex-col items-center gap-y-8 border rounded-xl p-5">
          <h2 className="uppercase text-sm tracking-[0.3em] font-semibold text-gray-900 dark:text-white/50 underline underline-offset-4">
            Technical Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* Dev Stack */}
            <div className="flex flex-col items-center gap-y-6">
              <h3 className="text-orange-400 font-mono text-sm uppercase">
                Development
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-2 sm:gap-x-6 text-gray-900 dark:text-white/80">
                <FaHtml5 size={40} className={iconClasses} title="HTML5" />
                <FaCss3Alt size={40} className={iconClasses} title="CSS3" />
                <RiJavascriptFill
                  size={40}
                  className={iconClasses}
                  title="JavaScript"
                />
                <RiTailwindCssFill
                  size={40}
                  className={iconClasses}
                  title="Tailwind"
                />
                <FaReact size={40} className={iconClasses} title="React" />
              </div>
            </div>

            {/* Marketing/CMS Stack */}
            <div className="flex flex-col items-center gap-y-6">
              <h3 className="text-purple-400 font-mono text-sm uppercase">
                Marketing & CMS
              </h3>
              <div className="flex flex-wrap justify-center md:justify-center gap-6 text-gray-900 dark:text-white/50 italic font-medium">
                <span className={prevSkillClasses}>WordPress</span>
                <span className={prevSkillClasses}>SEO</span>
                <span className={prevSkillClasses}>Digital Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <div className="mx-auto p-5 my-20 w-full container">
        {/* Main Container: 3-column Grid on md+ */}
        <div className="flex flex-col items-center gap-y-10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 md:items-center">
          {/* 1. Center Column: Heading & Desktop Link */}
          <div className="order-1 md:order-2 flex flex-col items-center gap-y-6 md:gap-y-8">
            <h1 className="text-lg lg:text-xl font-bold bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent uppercase text-center tracking-wider">
              Featured Projects
            </h1>

            <Link
              to="/projects"
              className="
    hidden md:flex items-center gap-x-2 px-6 py-2 rounded-full border shadow-xl whitespace-nowrap group transition-all duration-300 bg-transparent text-gray-900 border-[#161513] dark:text-white dark:border-white/20 hover:bg-[#161513] hover:text-white hover:border-[#161513] dark:hover:bg-white dark:hover:text-[#161513] dark:hover:border-white
  "
            >
              <span className="font-medium italic">See All Work</span>
              <MdArrowOutward className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* 2. Left Card (Project 1) */}
          <div className="order-2 md:order-1 w-full group transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-xl border-x border-t border-black/10 dark:border-white/10">
              <img
                src="CryptoDash.png"
                loading="lazy"
                alt="CryptoDash"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
              {/* Tech Pills */}
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="bg-[#161513]/80 backdrop-blur-md text-[10px] px-2 py-1 rounded border border-black/10 dark:border-white/10 text-gray-900 dark:text-white/90">
                  React
                </span>
                <span className="bg-[#161513]/80 backdrop-blur-md text-[10px] px-2 py-1 rounded border border-black/10 dark:border-white/10 text-gray-900 dark:text-white/90">
                  Tailwind
                </span>
              </div>
            </div>
            <a
              href="https://cryptodashrayhan.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-white/10 rounded-b-xl px-5 py-4 transition-all"
            >
              <h3 className="text-md md:text-lg font-semibold tracking-wide">
                CryptoDash
              </h3>
              <MdArrowOutward className="text-orange-500" />
            </a>
          </div>

          {/* 3. Right Card (Project 2) */}
          <div className="order-3 md:order-3 w-full group transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-xl border-x border-t border-black/10 dark:border-white/10">
              <img
                src="TeknoMart.png"
                loading="lazy"
                alt="TeknoMart"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
              {/* Tech Pills */}
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="bg-[#161513]/80 backdrop-blur-md text-[10px] px-2 py-1 rounded border border-black/10 dark:border-white/10 text-gray-900 dark:text-white/90">
                  Tailwind
                </span>
              </div>
            </div>
            <a
              href="https://teknomart.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-white/10 rounded-b-xl px-5 py-4 transition-all"
            >
              <h3 className="text-md md:text-lg font-semibold tracking-wide">
                TeknoMart
              </h3>
              <MdArrowOutward className="text-orange-500" />
            </a>
          </div>

          {/* 4. Mobile See All Button */}
          <div className="order-4 md:hidden flex justify-center w-full pt-4">
            <Link
              to="/projects"
              className="bg-transparent text-gray-900 dark:text-white px-8 py-3 rounded-full border border-white/20 hover:border-white transition-all duration-300 flex items-center gap-x-2"
            >
              <span className="font-medium italic">See All Work</span>
              <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
