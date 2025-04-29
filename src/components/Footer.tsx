import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-blue-400">
              Portfolio
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Creating beautiful digital experiences
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div>
              <h4 className="font-medium mb-2 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-lg">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="mailto:example@email.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;