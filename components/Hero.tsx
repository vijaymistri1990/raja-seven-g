"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/r1.jpg", "/r2.jpg", "/r3.jpg", "/r4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-500/20 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-sm font-medium text-amber-200">New Version 2026 Available</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Experience Raja7 & <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 drop-shadow-sm">
            Win Real Cash Daily
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12">
          Join the elite circle of players on the official Raja7 app. Download the ultimate real money game, claim your welcome bonus, and start dominating the leaderboards today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://share-rxapq9cajg.raja7.org/share/agent/AS0NV958?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full hover:from-amber-300 hover:to-amber-500 transition-all shadow-[0_0_30px_rgba(217,119,6,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.7)] hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-wider"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download APK
          </a>
          <a
            href="https://share-rxapq9cajg.raja7.org/share/agent/AS0NV958?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 text-lg font-medium text-white bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-amber-500/50 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.208 1.488C2.656 2.015 2.375 2.809 2.375 3.867v16.266c0 1.058.281 1.852.833 2.379L3.333 22.6l10.875-10.875v-.25L3.333 1.375l-.125.113z" fill="#00e676"/>
              <path d="M18.875 16.4l-4.667-4.667v-.25l4.667-4.667 1.542.875c1.75.992 1.75 2.617 0 3.608l-1.542.875z" fill="#ffea00"/>
              <path d="M14.208 11.483l-10.875 10.875c.675.725 1.775.808 3.125.042l9.292-5.325-1.542-5.592z" fill="#ff3d00"/>
              <path d="M14.208 12.517l1.542-5.592-9.292-5.325C5.108.833 4.008.917 3.333 1.642L14.208 12.517z" fill="#29b6f6"/>
            </svg>
            <div className="text-left leading-none">
              <span className="text-[10px] block text-slate-400">GET IT ON</span>
              <span className="text-base font-bold">Google Play</span>
            </div>
          </a>
        </div>
        
        {/* Mockup Preview Area */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 sm:p-3 shadow-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl bg-slate-800 overflow-hidden relative flex items-center justify-center border border-white/5 z-10 group cursor-pointer">
              
              {/* Image Carousel */}
              {images.map((img, index) => (
                <div 
                  key={img}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Raja7 Game Screen ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={index === 0}
                  />
                </div>
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent z-20 pointer-events-none"></div>
              
              {/* Carousel Indicators */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? "bg-amber-400 w-4 shadow-[0_0_8px_rgba(251,191,36,0.8)]" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* UI Overlays */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-30 pointer-events-none">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/90 text-slate-950 text-xs font-bold shadow-lg backdrop-blur-md mb-3 border border-amber-400 pointer-events-auto">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
                    </span>
                    Live Tournament
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">Raja7 Mega Jackpot</h4>
                  <p className="text-amber-200/80 text-sm mt-1 font-medium">Join 24,500+ active players</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-start sm:items-end bg-slate-900/80 p-3 sm:p-4 rounded-xl backdrop-blur-md border border-amber-500/30 shadow-xl pointer-events-auto">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Prize Pool</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                      ₹5,00,000+
                    </span>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(217,119,6,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(217,119,6,0.8)] transition-all duration-300 z-30 cursor-pointer">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
