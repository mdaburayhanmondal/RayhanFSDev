import { MdArrowOutward } from 'react-icons/md';
import { memo } from 'react';

const SkillCard = memo(
  ({ projectTitle, imageSrc, imageAlt, firstPill, secondPill, liveLink }) => {
    return (
      <div className="w-full group transition-all duration-300">
        <div className="relative overflow-hidden rounded-t-xl border-x border-t border-black/10 dark:border-white/10">
          <img
            src={imageSrc}
            loading="lazy"
            alt={imageAlt}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
          />
          {/* Tech Pills */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {firstPill && (
              <span className="bg-[#161513]/80 backdrop-blur-md text-[10px] px-2 py-1 rounded border border-black/10 dark:border-white/10 text-gray-900 dark:text-white/90">
                {firstPill}
              </span>
            )}
            <span className="bg-[#161513]/80 backdrop-blur-md text-[10px] px-2 py-1 rounded border border-black/10 dark:border-white/10 text-gray-900 dark:text-white/90">
              {secondPill}
            </span>
          </div>
        </div>
        <a
          href={liveLink}
          target="blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-white/10 rounded-b-xl px-5 py-4 transition-all"
        >
          <h3 className="text-md md:text-lg font-semibold tracking-wide">
            {projectTitle}
          </h3>
          <MdArrowOutward className="text-orange-500" />
        </a>
      </div>
    );
  }
);

export default SkillCard;
