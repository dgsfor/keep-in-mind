// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '二雕日志',
  tagline: '欢迎来到这里！相信在这里都能找到适合自己口味和需求的菜谱',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.dgsfor.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'erdiao', // Usually your GitHub org/user name.
  projectName: 'kim', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dgsfor/keep-in-mind/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dgsfor/keep-in-mind/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '二雕日志',
        logo: {
          alt: '二雕日志Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '随心记',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'cookbookSidebar',
            label: 'CookBook',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/dgsfor/keep-in-mind',
          //   label: 'Github',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Home',
            items: [
              {
                label: '随心记',
                to: '/docs/kim-home',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '猿的野生香蕉',
                href: 'https://github.com/dgsfor',
              },
              {
                label: '美丽小黄的食谱',
                href: 'https://www.huangchuang.com.cn/',
              },
            ],
          },
        ],
        copyright: `<span>Copyright © ${new Date().getFullYear()} HuangChuang, Inc. Built with Docusaurus.</span>
                    <div style="width:300px;margin:0 auto; padding:5px 0;">
		 		              <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302035855" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                        <img src="./img/gongan_beian.png" style="float:left;"/>
                        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">闽公网安备 35020302035855号</p>
                      </a>
		 	              </div>
                    <a href="https://beian.miit.gov.cn">豫ICP备2023016700号-2</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
