export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Raja7 Game?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We continuously update our website with useful information to help users download the latest version, create an account, and access the platform safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* What We Offer */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 shadow-xl backdrop-blur-sm hover:border-amber-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">What We Offer</h3>
            <p className="text-slate-400 mb-6">Our website provides valuable resources, including:</p>
            <ul className="space-y-4">
              {[
                "Latest Raja7 APK Download",
                "Raja7 Login and Raja7 Register guidance",
                "Information about the Raja7 Android App",
                "Updates on the Raja7 Latest APK",
                "Mobile gaming resources & tutorials",
                "Platform news and VIP updates",
                "User-friendly navigation",
                "100% Secure browsing experience"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 shadow-xl backdrop-blur-sm hover:border-amber-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">Our Commitment</h3>
            <p className="text-slate-400 mb-6">We are committed to offering the best user experience:</p>
            <ul className="space-y-4">
              {[
                "Fast and responsive website performance",
                "Easy APK download information",
                "Simple login and registration guidance",
                "Mobile-friendly design for all screens",
                "Regular content updates & promotions",
                "Helpful gaming-related information",
                "Easy navigation for Android users"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-500 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-16 p-8 bg-slate-800/30 rounded-2xl border border-white/5 text-center">
          <p className="text-slate-400 leading-loose text-sm md:text-base">
            Whether you’re searching for <strong className="text-amber-500 font-semibold">Raja7 Game Download</strong>, <strong className="text-amber-500 font-semibold">Download Raja7 APK</strong>, <strong className="text-amber-500 font-semibold">Raja7 Login Online</strong>, <strong className="text-amber-500 font-semibold">Raja7 Register Account</strong>, or the latest <strong className="text-amber-500 font-semibold">Raja7 APK Latest Version</strong>, our website is designed to help you quickly find the exact information you need to start winning today.
          </p>
        </div>
      </div>
    </section>
  );
}
