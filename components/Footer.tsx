import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Glow effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-600/10 rounded-t-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <Image 
                src="/raja7.jpg" 
                alt="Raja7 Logo" 
                width={100} 
                height={100} 
                className="w-20 h-20 rounded-md object-contain shadow-[0_0_15px_rgba(217,119,6,0.5)] bg-black" 
                unoptimized={true}
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-wide">
                Raja7
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              The premium destination for real money gaming. Download the Raja7 app, compete with millions of players, and win real cash every day. Trusted, secure, and legal in India.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-amber-500 bg-slate-900 shadow-inner">
                <span className="font-bold">18+</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-amber-500 bg-slate-900 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Features', 'Download'].map((link) => (
                <li key={link}>
                  <Link href={`/#${link.toLowerCase()}`} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          

          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Raja7. All rights reserved.
          </p>
          <div className="text-slate-500 text-sm max-w-2xl text-center md:text-right">
            Disclaimer: This game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk. Only for 18+ users.
          </div>
        </div>
      </div>
    </footer>
  );
}
