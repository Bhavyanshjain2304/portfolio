import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    duration: 'August 2022 - Present',
    description: 'Currently pursuing B.Tech with a CGPA of 7.50. Focusing on computer science fundamentals, data structures, and algorithms.',
  },
  {
    id: 2,
    degree: 'Intermediate',
    institution: 'DAV Public School Morak',
    location: 'Rajasthan, India',
    duration: 'April 2021 - March 2022',
    description: 'Completed intermediate education with 80% marks, focusing on science and mathematics.',
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: "St Mary's Convent Secondary School",
    location: 'Kota, Rajasthan',
    duration: 'April 2019 - March 2020',
    description: 'Completed matriculation with 87% marks, developing a strong foundation in academics.',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and educational qualifications that have shaped my professional journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 py-4 space-y-12">
            {educationData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.5rem] bg-white dark:bg-gray-900 p-1 rounded-full">
                  <div className="bg-blue-600 dark:bg-blue-400 p-2 rounded-full">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.institution} - {item.location}
                  </p>
                  
                  <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-3 text-sm">
                    <Calendar size={14} /> {item.duration}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;