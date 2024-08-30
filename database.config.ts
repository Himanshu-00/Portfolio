
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
      // manual: {
       
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Himanshu Vinchurkar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Himanshu Vinchurkar',
    phone: '+91 9324199233',
    email: 'himanshuvinchurkar1387@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ajOKeIn8pe0Mi-nv5oiCe9tqRkqUx6ay/view?usp=sharing',
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
