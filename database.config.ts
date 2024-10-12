
const CONFIG = {
  github: {
    username: 'Himanshu-00',
  },

  
  projects: {
    github: {
      display: true,
      header: 'Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
     
    },
    
  },
  seo: {
    title: 'Himanshu Vinchurkar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'himanshu-vinchurkar-9b414322b/',
    phone: '+91 9324199233',
    email: 'himanshuvinchurkar1387@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1cz183MQM7NNrZyca7V6LoQpNyP6UVKpF/view?usp=sharing',
  },
  skills: [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Storyboard',
    'C++',
    'Firebase',
    'Python',
    'Flutter',
    'Tensorflow',
    'Keras',
    'Laravel',
    'Docker',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  






  themeConfig: {
    defaultTheme: 'coffee',

    // Available themes. To remove any theme, exclude from here.
    themes: [

      'coffee'
    ],

    
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },



  enablePWA: true,
};

export default CONFIG;
