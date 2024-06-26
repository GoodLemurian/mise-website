import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '地図の店 中国書店',
  tagline: '広島市内小学校社会科副読本「わたしたちの広島」並びに児童用「広島市地図」「広島県地図」及び国土地理院地形図等を取り扱っております。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://goodlemurian.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mise-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GoodLemurian', // Usually your GitHub org/user name.
  projectName: 'mise-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '中国書店',
      logo: {
        alt: '中国書店',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'お知らせ', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '取扱商品',
        },
        {to: '/tsushinhanbai', label: '通信販売', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'お知らせ',
              to: '/blog',
            },
          ],
        },
        {
          title: '取扱商品',
          items: [
            {
              label: 'わたしたちの広島',
              to: '/docs/watashitachi-no-hiroshima',
            },
            {
              label: '広島市・県地図',
              to: '/docs/city-pref-maps',
            },
            {
              label: '国土地理院地形図',
              to: '/docs/gsi-maps',
            },
            {
              label: 'その他の取扱商品',
              to: '/docs/others',
            },
          ],
        },
        {
          title: '通信販売',
          items: [
            {
              label: 'ご案内',
              href: '/tsushinhanbai',
            },
            {
              label: 'ご注文フォーム',
              href: 'https://forms.gle/6u5BAaspssEDjGtf8',
            },
          ],
        },
        {
          title: '店舗情報',
          items: [
            {
              label: 'アクセス',
              to: '/access',
            },
            {
              label: 'お問い合わせ',
              to: 'https://forms.gle/px2mS6unWPhY7UwM6',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
