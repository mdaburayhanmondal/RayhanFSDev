import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-5 flex flex-col items-center pt-10 pb-20 gap-y-6">
      {/* 🟢 Available for Hire Badge */}
      <div className="flex items-center gap-x-2 bg-green-500/10 border border-green-500/30 px-4 py-1.5 rounded-full text-green-400 text-xs font-medium mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Available for Internships & Projects
      </div>

      {/* Profile Image with subtle glow */}
      <div className="relative group">
        <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full group-hover:bg-orange-500/30 transition-all"></div>
        <img
          src="Rayhan.jpg"
          alt="Md. Abu Rayhan Mondal"
          className="relative object-cover size-38 sm:size-44 rounded-full border-4 border-[#161513] ring-1 ring-white/20"
        />
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I'm{' '}
          <span className="bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
            Rayhan
          </span>
        </h1>
        <p className="text-sm md:text-lg text-gray-400 text-center max-w-xl leading-relaxed">
          A wannabe Full-Stack Developer transitioning from Digital Marketing to
          building high-performance web applications with React and Node.js.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link
          to="/contact"
          className="bg-white text-[#161513] px-8 py-3 rounded-full font-bold hover:bg-transparent hover:text-white border border-white transition-all shadow-lg"
        >
          Let's Talk
        </Link>

        <a
          href="public/Md_Abu_Rayhan_Mondal_CV.pdf"
          download="Md_Abu_Rayhan_Mondal_CV.pdf"
          className="bg-transparent border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/5 transition-all text-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
