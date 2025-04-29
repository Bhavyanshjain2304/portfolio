import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'tools' | 'soft' | 'coursework';
}

const skills: Skill[] = [
  // Technical Skills
  { name: 'Java', level: 85, category: 'technical' },
  { name: 'Python', level: 80, category: 'technical' },
  { name: 'SQL', level: 85, category: 'technical' },
  { name: 'C++', level: 75, category: 'technical' },
  { name: 'R Language', level: 70, category: 'technical' },
  
  // Tools/Platforms
  { name: 'Power BI', level: 80, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Git/Github', level: 85, category: 'tools' },
  { name: 'MS Excel', level: 90, category: 'tools' },
  { name: 'Jupyter Notebooks', level: 85, category: 'tools' },
  
  // Coursework
  { name: 'Data Structures', level: 90, category: 'coursework' },
  { name: 'Algorithms', level: 85, category: 'coursework' },
  { name: 'DBMS', level: 80, category: 'coursework' },
  { name: 'OOP', level: 85, category: 'coursework' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Teamwork', level: 85, category: 'soft' },
  { name: 'Time Management', level: 80, category: 'soft' },
  { name: 'Work Ethic', level: 95, category: 'soft' },
];

const Skills: React.FC = () => {
  const categories = ['technical', 'tools', 'coursework', 'soft'];
  
  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'technical':
        return 'Technical Skills';
      case 'tools':
        return 'Tools & Platforms';
      case 'coursework':
        return 'Course Work';
      case 'soft':
        return 'Soft Skills';
      default:
        return category;
    }
  };
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and expertise across various domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {getCategoryTitle(category)}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;