
const config = {
  github: {
    username: 'Himanshu-00',
    sortBy: 'stars', // stars
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], 
    },
  },
  
  resume: {
    fileUrl:
      'https://in.linkedin.com/in/himanshu-vinchurkar-9b414322b', // Empty fileUrl will hide the `Download Resume` button.
  },

  resume2: {
    fileUrl:
    'https://github.com/Himanshu-00',
  },

  skills: [
    'Swift',
    'React',
    'Javascript',
    'C++',
    'ReactJs',
    'NodeJs',
    'Python'
  ],

  
  
  themeConfig: {
    defaultTheme: 'aqua',
    

    // Available themes. To remove any theme, exclude from here.
    themes: [
      
      
      'cupcake',
      'aqua',
      'night',
      'coffee',
      'winter',
      
      
      
    ],

    // Custom theme
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
  
  
};

export default config;
