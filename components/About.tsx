export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">About Raja7</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              The Ultimate Destination for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Real Money Gamers</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                Raja7 is rapidly becoming the most trusted name in the mobile gaming industry in 2026. We provide a legal, secure, and highly entertaining platform where your gaming skills translate directly into real cash rewards.
              </p>
              <p>
                Unlike games based purely on luck, Raja7 hosts skill-based tournaments that reward strategy and expertise. Whether you're a casual player looking to make some extra pocket money or a competitive gamer aiming for the mega jackpots, Raja7 has a table for you.
              </p>
              
              <ul className="space-y-3 mt-8">
                {[
                  "100% Legal & Certified Platform",
                  "Over 5 Million Active Players",
                  "₹1 Crore+ Daily Winnings Distributed",
                  "RNG Certified for Absolute Fairness"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                      <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-yellow-400 rounded-3xl blur-3xl opacity-20"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-800 p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center justify-center text-center hover:border-amber-500/50 transition-colors">
                  <span className="text-4xl font-black text-amber-500 mb-2">5M+</span>
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Downloads</span>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center justify-center text-center hover:border-amber-500/50 transition-colors">
                  <span className="text-4xl font-black text-amber-500 mb-2">4.9</span>
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">User Rating</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-b from-amber-500 to-amber-700 p-6 rounded-2xl border border-amber-400 shadow-xl shadow-amber-900/50 flex flex-col items-center justify-center text-center transform scale-105 z-10">
                  <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-4xl font-black text-white mb-2">₹10Cr+</span>
                  <span className="text-sm font-bold text-amber-100 uppercase tracking-wider">Won Daily</span>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center justify-center text-center hover:border-amber-500/50 transition-colors">
                  <span className="text-4xl font-black text-amber-500 mb-2">24/7</span>
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Instant Withdrawal</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
