module.exports = {
  title: 'Joes DevOps Cookbook',
  tagline: 'A collection of DevOps centric recipies',
  url: 'https://cookbook.technicallyjoe.net',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'technicallyjoe',
  projectName: 'joes-cookbook',
  themeConfig: {
    navbar: {
      title: 'Joes Cookbook',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon.ico',
      },
      links: [
        {
          to: 'docs/cookbook/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        /*{
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },*/
        {
          href: 'https://github.com/TechnicallyJoe/joes-cookbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: 'docs/cookbook/about',
            },
            {
              label: 'Style Guide',
              to: 'docs/cookbook/styleguide',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TechnicallyJoe/joes-cookbook',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/4Q3rbnn',
            },
          ],
        },
        {
          title: 'Powered by',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/',
            },
            {
              label: 'Netlify',
              href: 'https://www.netlify.com/',
            },
            {
              label: 'Docusaurus v2',
              href: 'https://v2.docusaurus.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joes Cookbook`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/TechnicallyJoe/joes-cookbook/edit/master/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
