import { Link } from 'react-router';
import { MdHome } from 'react-icons/md';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center bg-[#161513]">
      <h1 className="text-9xl font-black bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent opacity-20 absolute z-10 select-none">
        404
      </h1>

      <div className="z-10 flex flex-col items-center gap-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase tracking-tighter">
          Lost in Space?
        </h2>
        <p className="text-gray-900 dark:text-white/60 max-w-md text-sm md:text-base leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Don't
          worry, you can find your way back home below.
        </p>

        <Link
          to="/"
          className="flex items-center gap-x-2 bg-white text-[#161513] px-8 py-3 rounded-full font-bold hover:bg-transparent hover:text-gray-900 dark:text-white border border-white transition-all duration-300 shadow-lg shadow-orange-500/10"
        >
          <MdHome size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
