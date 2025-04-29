import React, { useState } from 'react';
import { ExternalLink, Github, Trophy } from 'lucide-react';
import profileImage from '../assets/your photo.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  organization: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'LeetCode Contest Rating 1600+',
    description: 'Among top 21.27% on this platform',
    date: '2025',
    organization: 'LeetCode'
  },
  {
    id: 2,
    title: '500+ Coding Problems Solved',
    description: 'Solved problems across multiple platforms: LeetCode, HackerRank, and GeeksforGeeks',
    date: '2025',
    organization: 'Multiple Platforms'
  },
  {
    id: 3,
    title: 'Community Development Volunteer',
    description: 'Volunteered as a tutor for children aged 6-12, teaching Mathematics and English, and enhancing their reading and writing skills.',
    date: '2023',
    organization: 'Utkarsh Sansthan'
  }
];

const projects: Project[] = [
  {
    id: 1,
    title: 'MentorMind',
    description: 'MentorMind is an AI-powered career guidance platform that provides personalized mentorship by analyzing user profiles, skills, and preferences to suggest optimal career paths and resources.',
    image: 'https://images.yourstory.com/cs/images/company_products/mentormind_1657097239677.png',
    tags: ['Python', 'Flask', 'Machine Learning', 'Google Gemini API',  'Scikit-Learn', 'Data Preprocessing'],
    liveUrl: 'https://mentormind.onrender.com/',
    githubUrl: 'https://github.com/Bhavyanshjain2304/MentorMind',
  },
  {
    id: 2,
    title: 'British Airways Management',
    description: 'Interactive Tableau dashboard for analyzing customer reviews, enabling real-time sentiment analysis and data-driven decision-making. Improved customer insights by 20%.',
    image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Tableau', 'SQL', 'Data Visualization', 'Data Analysis'],
    liveUrl: 'https://public.tableau.com/views/British_Airways_Management/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    githubUrl: 'https://github.com/Bhavyanshjain2304/British_Airways_Reviews_Dashboard',
  },
  {
    id: 3,
    title: 'Spam Filtration Model',
    description: 'Developed a spam classification model using Naive Bayes with 97.91% accuracy. Implemented text preprocessing pipelines, reducing false positives by 15%.',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Machine Learning', 'NLP', 'Data Preprocessing'],
    liveUrl: 'https://github.com/Bhavyanshjain2304/Spam-Filteration',
    githubUrl: 'https://github.com/Bhavyanshjain2304/Spam-Filteration',
  },
  {
    id: 4,
    title: 'Lead Management System',
    description: 'Lead Management System (LMS) is a full-stack application designed to capture leads, score them using AI (Gemini API), and send personalized emails based on the lead score.',
    image: 'https://www.techfunnel.com/wp-content/uploads/2020/07/lead-management.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'TypeScript', 'JWT'],
    liveUrl: 'https://github.com/Bhavyanshjain2304/Lead-Management-System',
    githubUrl: 'https://github.com/Bhavyanshjain2304/Lead-Management-System',
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'projects' | 'achievements'>('projects');
  
  // Extract unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = activeFilter
    ? projects.filter(project => project.tags.includes(activeFilter))
    : projects;
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Work</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my projects and achievements.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'achievements'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Achievements
            </button>
          </div>
        </div>
        
        {activeTab === 'projects' ? (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <div 
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <div className="flex space-x-2">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all"
                          aria-label="View live site"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all"
                          aria-label="View code on GitHub"
                        >
                          <Github size={18} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map(achievement => (
              <div 
                key={achievement.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{achievement.organization}</span>
                      <span>•</span>
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;