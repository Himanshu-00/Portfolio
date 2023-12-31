import { LuSettings2 } from 'react-icons/lu';
import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const ThemeChanger = ({ theme, setTheme, loading, themeConfig }) => {
  const changeTheme = (e, selectedTheme) => {
    e.preventDefault();
    document.querySelector('html').setAttribute('data-theme', selectedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem('portfolio-app-theme', selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row space-x-5 flex ">
    
        <div className="flex-0">
          {loading ? (
            skeleton({
              width: 'w-14 md:w-28',
              height: 'h-10',
              className: 'mr-6',
            })
          ) : (
            <div title="Change Theme" className="dropdown dropdown-down dropdown-hover">
              <div
                tabIndex={0}
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
              >
                <LuSettings2 className="inline-block w-5 h-5 stroke-current md:mr-2" />
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  className="inline-block w-4 h-4 ml-1 fill-current"
                >
                  <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10"
              >
                <ul className="p-5 menu compact flex-row">
                  {[
                    themeConfig.defaultTheme,
                    ...themeConfig.themes.filter(
                      (item) => item !== themeConfig.defaultTheme
                    ),
                  ].map((item, index) => (
                    <li key={index}>
                      
                      <a
                        onClick={(e) => changeTheme(e, item)}
                        className={`${theme === item ? 'active' : ''}`}
                      >
                        <span className="opacity-60 capitalize">
                          {item === themeConfig.defaultTheme ? 'Default' : item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ThemeChanger.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  themeConfig: PropTypes.object.isRequired,
};

export default ThemeChanger;