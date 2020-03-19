module.exports = {
  title: 'Joes Cookbook',
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
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        /*{ 
          to: 'blog', 
          label: 'Blog', 
          position: 'left' },*/
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },*/
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TechnicallyJoe/joes-cookbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joes Cookbook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
