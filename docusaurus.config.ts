import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '地図の店 中国書店',
  tagline: '広島市内小学校社会科副読本『わたしたちの広島3年,4年』並びに児童用「広島市地図」「広島県地図」を取り扱っております。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.chugokusyoten.jp/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'GoodLemurian', // Usually your GitHub org/user name.
  // projectName: 'mise-website', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: 'blog',
          include: ['*.md', '*.mdx'],
          blogSidebarTitle: 'All posts',
          feedOptions: {
            type: 'json',
            title: '',
            description: '',
            limit: 3,
            copyright: "Copyright © " + new Date().getFullYear() + " 中国書店",
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/img_1.jpg',
    navbar: {
      title: '中国書店',
      logo: {
        alt: '中国書店',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'お知らせ', position: 'left'},
        {to: '/goods', label: '取扱商品', position: 'left'},
        {to: '/tsushinhanbai', label: '通信販売', position: 'left'},
        {to: '/access', label: 'アクセス', position: 'left'},
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
              label: 'わたしたちの広島3年,4年',
              to: '/goods#わたしたちの広島',
            },
            {
              label: '広島市地図',
              to: '/goods#広島市地図',
            },
            {
              label: '広島県地図',
              to: '/goods#広島県地図',
            },
          ],
        },
        {
          title: '通信販売',
          items: [
            {
              label: '通信販売のご案内',
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
              href: 'https://forms.gle/px2mS6unWPhY7UwM6',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 中国書店. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
