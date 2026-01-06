const Terms = () => {
  return (
    <div className="container mx-auto px-5 pt-20 max-w-4xl leading-relaxed text-gray-900 dark:text-white/80">
      <h1 className="text-3xl font-bold mb-8 uppercase tracking-widest bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
        Terms & Conditions
      </h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            1. Intellectual Property
          </h2>
          <p>
            Unless otherwise stated, all content on this website, including
            text, code snippets, and design elements, is the property of Md. Abu
            Rayhan Mondal.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            2. Use License
          </h2>
          <p>
            You may view and download my CV and project links for personal,
            non-commercial use. You may not claim my projects as your own or
            redistribute them without proper attribution.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            3. Disclaimer
          </h2>
          <p>
            The projects and information on this site are provided "as is."
            While I strive for accuracy, I make no warranties regarding the
            completeness or reliability of the information provided.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            4. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of Bangladesh. Any disputes
            relating to these terms will be subject to the exclusive
            jurisdiction of the courts in Dhaka.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;
