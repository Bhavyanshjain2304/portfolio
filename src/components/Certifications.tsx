import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'IBM DevOps and Software Engineering',
    issuer: 'Coursera',
    date: 'November 2024',
    description: 'Comprehensive training in DevOps practices, CI/CD pipelines, and software engineering principles.',
    verifyUrl: 'https://drive.google.com/drive/folders/11Dh65pHz-NRxLZuYI_YPPTQ9Nccoxjbt?usp=sharing',
  },
  {
    id: 2,
    title: 'Responsible and Safe AI Systems',
    issuer: 'NPTEL',
    date: 'October 2024',
    description: 'In-depth study of ethical AI development, safety considerations, and responsible AI practices.',
    verifyUrl: 'https://drive.google.com/drive/folders/11Dh65pHz-NRxLZuYI_YPPTQ9Nccoxjbt?usp=sharing',
  },
  {
    id: 3,
    title: 'Excel Skills for Data Analysis',
    issuer: 'Coursera',
    date: 'April 2024',
    description: 'Advanced Excel techniques for data analysis, visualization, and business intelligence.',
    verifyUrl: 'https://drive.google.com/drive/folders/11Dh65pHz-NRxLZuYI_YPPTQ9Nccoxjbt?usp=sharing',
  },
  {
    id: 4,
    title: 'Supervised Machine Learning',
    issuer: 'Coursera',
    date: 'October 2024',
    description: 'Comprehensive course covering machine learning algorithms, model training, and evaluation.',
    verifyUrl: 'https://drive.google.com/drive/folders/11Dh65pHz-NRxLZuYI_YPPTQ9Nccoxjbt?usp=sharing',
  },
  {
    id: 5,
    title: 'Data Structures and Algorithms',
    issuer: 'Coding Spoon',
    date: 'June 2024',
    description: 'Advanced course in DSA covering complex algorithms and problem-solving techniques.',
    verifyUrl: 'https://drive.google.com/drive/folders/11Dh65pHz-NRxLZuYI_YPPTQ9Nccoxjbt?usp=sharing',
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map(cert => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full shrink-0">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{cert.issuer}</span> •{' '}
                    <span className="flex items-center gap-1 inline-flex">
                      <Calendar size={14} /> {cert.date}
                    </span>
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {cert.description}
                  </p>
                  
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;