import SkillCard from '../components/SkillCard';

const Projects = () => {
  const projectCards = [
    {
      id: 7,
      projectTitle: 'CryptoDash',
      imageSrc: 'CryptoDash.png',
      liveLink: 'https://cryptodashrayhan.netlify.app/',
      firstPill: 'React',
      secondPill: 'Tailwind',
    },
    {
      id: 6,
      projectTitle: 'TeknoMart',
      imageSrc: 'TeknoMart.png',
      liveLink: 'https://teknomart.netlify.app/',
      secondPill: 'Tailwind',
    },
    {
      id: 5,
      projectTitle: 'BookMark',
      imageSrc: 'BookMark.png',
      liveLink: 'https://bookmarktool.netlify.app/',
      secondPill: 'Tailwind',
    },
    {
      id: 4,
      projectTitle: 'Shortly',
      imageSrc: 'Shortly.png',
      liveLink: 'https://shortlylinkshorener.netlify.app/',
      secondPill: 'Tailwind',
    },
    {
      id: 3,
      projectTitle: 'Clipboard',
      imageSrc: 'Clipboard.png',
      liveLink: 'https://clipboardhomepage.netlify.app/',
      secondPill: 'Tailwind',
    },
    {
      id: 2,
      projectTitle: 'Business',
      imageSrc: 'Corporate-Business-Homepage.png',
      liveLink: 'https://corporatebusinesslandingpage.netlify.app/',
      secondPill: 'Tailwind',
    },
    {
      id: 1,
      projectTitle: 'The Uk News',
      imageSrc: 'The-UK-News.png',
      liveLink: 'https://theuknews.netlify.app/',
      secondPill: 'CSS',
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl flex flex-col items-center gap-y-4 p-5 my-20">
      <h1 className="text-2xl lg:text-3xl text-center uppercase font-bold tracking-widest bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
        Projects
      </h1>
      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 items-center justify-center">
        {projectCards.map((card) => (
          <SkillCard
            key={card.id}
            projectTitle={card.projectTitle}
            imageSrc={card.imageSrc}
            imageAlt={card.projectTitle}
            firstPill={card.firstPill}
            secondPill={card.secondPill}
            liveLink={card.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
