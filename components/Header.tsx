"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const navItems = ["Home", "About", "Features", "Install"];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* 18+ Warning Banner */}
      {isBannerVisible && (
        <div className="bg-amber-600 text-slate-950 text-xs sm:text-sm py-2 px-4 flex items-center justify-center relative shadow-md">
          <span className="font-bold mr-2 border border-slate-950/50 px-1.5 py-0.5 rounded text-[10px] sm:text-xs tracking-wider">18+</span>
          <p className="mr-6 sm:mr-8 text-center font-medium">You must be 18 or older to play. Please play responsibly.</p>
          <button 
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-amber-700 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      
      <header className="w-full bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Image 
                src="/raja7.png" 
                alt="Raja7 Logo" 
                width={80} 
                height={80} 
                className="w-20 h-20 rounded-md object-contain shadow-[0_0_15px_rgba(217,119,6,0.5)] bg-black" 
                unoptimized={true}
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 hidden sm:block tracking-wide">
                Raja7
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <a
              href="https://share-rxapq9cajg.raja7.org/share/agent/AS0NV958?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full hover:from-amber-300 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:-translate-y-0.5 uppercase tracking-wider"
            >
              Download App
            </a>
            <button 
              className="md:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-amber-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-colors text-lg font-medium tracking-wide flex items-center justify-between group uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            <a
              href="https://share-rxapq9cajg.raja7.org/share/agent/AS0NV958?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 mt-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl hover:from-amber-300 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] active:scale-95 uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download App
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
