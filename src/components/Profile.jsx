import axios from 'axios';
import { Fragment, useCallback, useEffect, useState } from 'react';
import HeadTagEditor from './head-tag-editor';
import ErrorPage from './error-page';
import ThemeChanger from './theme-changer'
import AvatarCard from './avatar-card';

import Skill from './skill';

import Project from './project';

import AboutMe from './about';


import {
  genericError,
  getInitialTheme,
  noConfigError,
  notFoundError,
  
  tooManyRequestError,
  sanitizeConfig,
} from '../helpers/utils';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import '../assets/index.css';
import { formatDistance } from 'date-fns';


const bgColor = 'bg-base-300';

const Profile = ({ config }) => {
  const [error, setError] = useState(
    typeof config === 'undefined' && !config ? noConfigError : null
  );
  const [palatableConfig] = useState(
    typeof config === 'undefined' && !config ? null : sanitizeConfig(config)
  );
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    if (palatableConfig) {
      setTheme(getInitialTheme(palatableConfig.themeConfig));
      
      loadData();
    }
  }, [palatableConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const loadData = useCallback(() => {
    axios
      .get(`https://api.github.com/users/${palatableConfig.github.username}`)
      .then((response) => {
        let data = response.data;

        let profileData = {
          avatar: data.avatar_url,
          name: data.name ? data.name : '',
          
          
        };

        setProfile(profileData);
        return data;
      })
      .then((userData) => {
        let excludeRepo = ``;
        if (userData.public_repos === 0) {
          setRepo([]);
          return;
        }

        palatableConfig.github.exclude.projects.forEach((project) => {
          excludeRepo += `+-repo:${palatableConfig.github.username}/${project}`;
        });

        let query = `user:${
          palatableConfig.github.username
        }+fork:${!palatableConfig.github.exclude.forks}${excludeRepo}`;

        let url = `https://api.github.com/search/repositories?q=${query}&sort=${palatableConfig.github.sortBy}&per_page=${palatableConfig.github.limit}&type=Repositories`;

        axios
          .get(url, {
            headers: {
              'Content-Type': 'application/vnd.github.v3+json',
            },
          })
          .then((response) => {
            let data = response.data;

            setRepo(data.items);
          })
          .catch((error) => {
            handleError(error);
          });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const handleError = (error) => {
    console.error('Error:', error);
    try {
      let reset = formatDistance(
        new Date(error.response.headers['x-ratelimit-reset'] * 1000),
        new Date(),
        {
          addSuffix: true,
        }
      );

      if (error.response.status === 403) {
        setError(tooManyRequestError(reset));
      } else if (error.response.status === 404) {
        setError(notFoundError);
      } else {
        setError(genericError);
      }
    } catch (error2) {
      setError(genericError);
    }
  };

  return (
    <HelmetProvider>
      {palatableConfig && (
        <HeadTagEditor/>
      )}
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={`${error.status}`}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          palatableConfig && (
            <Fragment>
              <div className={`p-4 lg:p-10 min-h-full ${bgColor}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                    
                      
                      <AvatarCard
                        profile={profile}
                        loading={loading}
                        avatarRing={!palatableConfig.themeConfig.hideAvatarRing}
                        resume={palatableConfig.resume}
                        resume2={palatableConfig.resume2}
                      />
                     
                      <Skill
                        loading={loading}
                        skills={palatableConfig.skills}
                      />
                <div className='mr-20 flex'>
              {!palatableConfig.themeConfig.disableSwitch && (
                        <ThemeChanger
                          theme={theme}
                          setTheme={setTheme}
                          loading={loading}
                          themeConfig={palatableConfig.themeConfig}
                        />
                      )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 col-span-1">
                    <div className="grid grid-cols-1 gap-y-6">

                      <AboutMe/>

                      <Project
                        repo={repo}
                        loading={loading}
                        github={palatableConfig.github}
                        
                      />

                      
                      
                    </div>
                  </div>
                </div>
              </div>
              
            </Fragment>
          )
        )}
      </div>
    </HelmetProvider>
  );
};

Profile.propTypes = {
  config: PropTypes.shape({
    github: PropTypes.shape({
      username: PropTypes.string.isRequired,
      sortBy: PropTypes.oneOf(['stars', 'updated']),
      limit: PropTypes.number,
      exclude: PropTypes.shape({
        forks: PropTypes.bool,
        projects: PropTypes.array,
      }),
    }).isRequired,

    social: PropTypes.shape({
      linkedin: PropTypes.string,
      
      phone: PropTypes.string,
      email: PropTypes.string,
    }),

    resume2: PropTypes.shape({
      fileUrl: PropTypes.string,
    }),

    resume: PropTypes.shape({
      fileUrl: PropTypes.string,
    }),
    
    
    themeConfig: PropTypes.shape({
      defaultTheme: PropTypes.string,
      
    
    }),
    
  }).isRequired,
};

export default Profile;
