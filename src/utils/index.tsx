import { LOCAL_STORAGE_KEY_NAME } from '../constants';
import { DEFAULT_CUSTOM_THEME } from '../constants/default-custom-theme';
import { DEFAULT_THEMES } from '../constants/default-themes';
import colors from '../data/colors.json';
import {
  SanitizedConfig,
  SanitizedThemeConfig,
} from '../interfaces/sanitized-config';


type EventParams = {
  [key: string]: string;
};

type Colors = {
  [key: string]: { color: string | null; url: string };
};

export const getSanitizedConfig = (
  config: Config,
): SanitizedConfig | Record<string, never> => {
  try {
    return {
      github: {
        username: config.github.username,
      },
      projects: {
        github: {
          display: config?.projects?.github?.display ?? true,
          header: config?.projects?.github?.header || 'Github Projects',
          mode: config?.projects?.github?.mode || 'automatic',
          automatic: {
            sortBy: config?.projects?.github?.automatic?.sortBy || 'stars',
            limit: config?.projects?.github?.automatic?.limit || 8,
            exclude: {
              forks:
                config?.projects?.github?.automatic?.exclude?.forks || false,
              projects:
                config?.projects?.github?.automatic?.exclude?.projects || [],
            },
          },
          manual: {
            projects: config?.projects?.github?.manual?.projects || [],
          },
        },
      },
      seo: {
        title: config?.seo?.title,
        description: config?.seo?.description,
        imageURL: config?.seo?.imageURL,
      },
      social: {
        linkedin: config?.social?.linkedin,
        phone: config?.social?.phone,
        email: config?.social?.email,
      },
      resume: {
        fileUrl: config?.resume?.fileUrl || '',
      },
      skills: config?.skills || [],
      publications: config?.publications?.filter((item) => item.title) || [],
      themeConfig: {
        defaultTheme: config?.themeConfig?.defaultTheme || DEFAULT_THEMES[0],
        displayAvatarRing: config?.themeConfig?.displayAvatarRing ?? true,
        themes: config?.themeConfig?.themes || DEFAULT_THEMES,
        customTheme: {
          primary:
            config?.themeConfig?.customTheme?.primary ||
            DEFAULT_CUSTOM_THEME.primary,
          secondary:
            config?.themeConfig?.customTheme?.secondary ||
            DEFAULT_CUSTOM_THEME.secondary,
          accent:
            config?.themeConfig?.customTheme?.accent ||
            DEFAULT_CUSTOM_THEME.accent,
          neutral:
            config?.themeConfig?.customTheme?.neutral ||
            DEFAULT_CUSTOM_THEME.neutral,
          'base-100':
            config?.themeConfig?.customTheme?.['base-100'] ||
            DEFAULT_CUSTOM_THEME['base-100'],
          '--rounded-box':
            config?.themeConfig?.customTheme?.['--rounded-box'] ||
            DEFAULT_CUSTOM_THEME['--rounded-box'],
          '--rounded-btn':
            config?.themeConfig?.customTheme?.['--rounded-btn'] ||
            DEFAULT_CUSTOM_THEME['--rounded-btn'],
        },
      },
   
      enablePWA: config?.enablePWA ?? true,
    };
  } catch (error) {
    return {};
  }
};

export const getInitialTheme = (themeConfig: SanitizedThemeConfig): string => {

  if ( typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_KEY_NAME) !== null) {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY_NAME);

    if (savedTheme && themeConfig.themes.includes(savedTheme)) {
      return savedTheme;
    }
  }

   
    if (typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {

        return 'dark';

      }
     

  return themeConfig.defaultTheme;
};

export const skeleton = ({
  widthCls = null,
  heightCls = null,
  style = {} as React.CSSProperties,
  shape = 'rounded-full',
  className = null,
}: {
  widthCls?: string | null;
  heightCls?: string | null;
  style?: React.CSSProperties;
  shape?: string;
  className?: string | null;
}): JSX.Element => {
  const classNames = ['bg-base-300', 'animate-pulse', shape];
  if (className) {
    classNames.push(className);
  }
  if (widthCls) {
    classNames.push(widthCls);
  }
  if (heightCls) {
    classNames.push(heightCls);
  }

  return <div className={classNames.join(' ')} style={style} />;
};



export const ga = {
  event(action: string, params: EventParams): void {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)?.gtag('event', action, params);
    } catch (error) {
      console.error(error);
    }
  },
};

export const getLanguageColor = (language: string): string => {
  const languageColors: Colors = colors;
  if (typeof languageColors[language] !== 'undefined') {
    return languageColors[language].color || 'gray';
  } else {
    return 'gray';
  }
};
