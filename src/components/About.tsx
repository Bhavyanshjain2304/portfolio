import React from 'react';
import { FileText } from 'lucide-react';
import yourPhoto from '../assets/your_photo.jpg';
const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="bg-blue-600 dark:bg-blue-700 absolute -left-4 -top-4 h-full w-full rounded-xl"></div>
              <img 
                src={yourPhoto}
                alt="Professional headshot" 
                className="relative z-10 w-full h-auto rounded-xl object-cover aspect-[4/5] shadow-xl"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a dedicated Computer Science and Engineering student at Lovely Professional University, 
              with a strong foundation in data structures, algorithms, and various programming languages. 
              My passion lies in data engineering and analysis, where I combine technical expertise with 
              problem-solving skills.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With experience in developing data visualization solutions and machine learning models, 
              I'm constantly exploring new technologies and methodologies to enhance my skills in the 
              field of data engineering.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 font-medium">1600+ LeetCode Rating</p>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 font-medium">400+ DSA Problems</p>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 font-medium">7.50 CGPA</p>
              </div>
            </div>
            
            <a 
              href="https://drive.google.com/file/d/15DzPT6jAMzChAeLiWaWD6RWqwBVpvVKk/view?usp=sharing" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={20} />
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;