// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'George Johnson',
  tagline: 'Technical Writer Portfolio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages URL
  url: 'https://georgejohnsonoff-business.github.io',
  baseUrl: '/Portfolio/',

  // GitHub deployment config
  organizationName: 'georgejohnsonoff-business',
  projectName: 'Portfolio',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'George Johnson',
        items: [
          {
            href: 'https://github.com/georgejohnsonoff-business',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} George Johnson`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
