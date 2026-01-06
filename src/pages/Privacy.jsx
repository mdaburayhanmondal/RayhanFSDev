import { useState } from 'react';

const Privacy = () => {
  const [copied, setCopied] = useState(false);
  const email = 'mdaburayhanmondal@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-5 py-20 max-w-4xl leading-relaxed text-white/80">
      <h1 className="text-3xl font-bold mb-8 uppercase tracking-widest bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
        Privacy Policy
      </h1>

      <section className="space-y-6">
        <p>Last Updated: January 2026</p>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            1. Information I Collect
          </h2>
          <p>
            I only collect information that you voluntarily provide via the
            contact form, such as your name and email address. This data is used
            solely to respond to your inquiries.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            2. Third-Party Services
          </h2>
          <p>
            My website is hosted on Netlify/Vercel and uses Formspree for
            contact form submissions. These services may collect technical data
            such as IP addresses. Please refer to their respective privacy
            policies for details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">3. Cookies</h2>
          <p>
            This portfolio is designed to be privacy-friendly and does not use
            tracking cookies or analytics software that identifies individual
            users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            4. Contact Me
          </h2>
          <p>
            If you have any questions about this policy, feel free to reach out
            at{' '}
            <span className="relative inline-block">
              {' '}
              {/* Added this wrapper */}
              <span
                onClick={handleCopy}
                className="text-orange-500 cursor-pointer font-medium hover:text-orange-400 blur hover:blur-none transition-all duration-200 ease-in"
                title="Click to copy email"
              >
                {email}
              </span>
              {/* Success Tooltip */}
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded font-bold animate-bounce whitespace-nowrap shadow-lg">
                  Copied!
                </span>
              )}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
