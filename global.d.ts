interface Github {
  /**
   * GitHub org/user name
   */
  username: string;
}

interface GitHubProjects {
  /**
   * Display GitHub projects?
   */
  display?: boolean;

  /**
   * Header
   */
  header?: string;

  /**
   * 'automatic' | 'manual'
   */
  mode?: string;

  /**
   * Config of automatic mode
   */
  automatic?: {
    /**
     * 'stars' | 'updated'
     */
    sortBy?: string;

    /**
     * How many projects to display
     */
    limit?: number;

    /**
     * Exclude projects option
     */
    exclude?: {
      /**
       * Forked projects will not be displayed if set to true
       */
      forks?: boolean;

      /**
       * These projects will not be displayed
       *
       * example: ['my-project1', 'my-project2']
       */
      projects?: Array<string>;
    };
  };

  /**
   * Config of manual mode
   */
  manual?: {
    /**
     * These projects will be displayed
     *
     * example: ['my-project1', 'my-project2']
     */
    projects?: Array<string>;
  };
}



interface Projects {
  github?: GitHubProjects;

}

interface SEO {
  /**
   * Meta title
   */
  title?: string;

  /**
   * Meta description
   */
  description?: string;

  /**
   * Meta image
   */
  imageURL?: string;
}

interface Social {
  /**
   * LinkedIn
   */
  linkedin?: string;

  
  /**
   * Phone
   */
  phone?: string;

  /**
   * Email
   */
  email?: string;
}

interface Resume {
  /**
   * Resume file url
   */
  fileUrl?: string;
}


interface Publication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}



interface CustomTheme {
  /**
   * Primary color
   */
  primary?: string;

  /**
   * Secondary color
   */
  secondary?: string;

  /**
   * Accent color
   */
  accent?: string;

  /**
   * Neutral color
   */
  neutral?: string;

  /**
   * Base color of page
   */
  'base-100'?: string;

  /**
   * Border radius of rounded-box
   */
  '--rounded-box'?: string;

  /**
   * Border radius of rounded-btn
   */
  '--rounded-btn'?: string;
}

interface ThemeConfig {
  /**
   * Default theme
   */
  defaultTheme?: string;





  /**
   * Hide the ring in Profile picture
   */
  displayAvatarRing?: boolean;

  /**
   * Available themes
   */
  themes?: Array<string>;

  /**
   * Custom theme
   */
  customTheme?: CustomTheme;
}

interface Config {
  /**
   * GitHub config
   */
  github: Github;

  /**
   * Vite's base url
   */
  base?: string;

  /**
   * Projects config
   */
  projects?: Projects;

  /**
   * SEO config
   */
  seo?: SEO;

  /**
   * Social links
   */
  social?: Social;

  /**
   * Skill list
   */
  skills?: Array<string>;

  /**
   * Experience list
   */
  experiences?: Array<Experience>;

  /**
   * Certifications list
   */
  certifications?: Array<Certification>;

  /**
   * Education list
   */
  educations?: Array<Education>;

  /**
   * Publication list
   */
  publications?: Array<Publication>;

  /**
   * Resume
   */
  resume?: Resume;

  

  /**
   * Theme config
   */
  themeConfig?: ThemeConfig;



  /**
   * Enable PWA
   */
  enablePWA?: boolean;
}

declare const CONFIG: Config;
