import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="inline-block animate-fade-in-1">Hello, I'm </span>
            <span className="text-blue-600 dark:text-blue-400 inline-block animate-fade-in-2"> Bhavyansh Jain</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in-3">
            An aspiring <span className="text-blue-600 dark:text-blue-400 font-medium">Data Engineer</span> passionate about transforming data into actionable insights
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;