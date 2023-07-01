

import { Component } from 'react';

export interface Github {
  
  username: string;

  
  sortBy?: string;

  
  limit?: number;

  
  exclude?: {
   
    forks?: boolean;

   
    projects?: Array<string>;
  };
}

export interface Social {
  
  linkedin?: string;

  phone?: string;

  
  email?: string;
}






export interface CustomTheme {
 
  primary?: string;

  
  secondary?: string;

  
  accent?: string;

  
  neutral?: string;

  
  'base-100'?: string;

  
  '--rounded-box'?: string;

  
  '--rounded-btn'?: string;
}

export interface ThemeConfig {
  
  defaultTheme?: string;

  

  
}



export interface Resume2 {
  fileUrl?: string;
}

export interface Resume {
  fileUrl?: string;
}

export interface Config {
  /*
   * GitHub Config
   */
  github: Github;

  
  // social?: Social;

  /*
   * Resume
   */
  resume?: Resume;

  resume2?: Resume2;

  /*
   * Skill list
   */
  skills?: Array<string>;

  

  
  themeConfig?: ThemeConfig;

  
}

export interface ProfileProps {
  
  config: Config;
}

declare class Profile extends Component<ProfileProps> {}

export default Profile;
