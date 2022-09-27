/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação',
  tagline: 'Documentação ANS',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'omnisaude', // Usually your GitHub org/user name.
  projectName: 'documentacaoANS', // Usually your repo name.

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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentação',
        logo: {
          alt: 'Logo do projeto documentação ANS',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/2-operadoras-de-saúde',
            position: 'left',
            label: 'Início',
          },
          // {to: 'blog', label: 'Blog', position: 'left'},
          // // Please keep GitHub link to the right for consistency.
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Learn',
          //   items: [],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: 'blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'Legal',
          //   // Please do not remove the privacy and terms, it's a legal requirement.
          //   items: [
          //     {
          //       label: 'Privacy',
          //       href: 'https://opensource.fb.com/legal/privacy/',
          //     },
          //     {
          //       label: 'Terms',
          //       href: 'https://opensource.fb.com/legal/terms/',
          //     },
          //     {
          //       label: 'Data Policy',
          //       href: 'https://opensource.fb.com/legal/data-policy/',
          //     },
          //     {
          //       label: 'Cookie Policy',
          //       href: 'https://opensource.fb.com/legal/cookie-policy/',
          //     },
          //   ],
          // },
        ],
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   // This default includes a positive & negative version, allowing for
        //   // appropriate use depending on your site's style.
        //   src: '/img/meta_opensource_logo_negative.svg',
        //   href: 'https://opensource.fb.com',
        // },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Omnisaude. Built with Docusaurus.`,
      },
    }),

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['pt'],
        indexBaseUrl: true,
      },
    ],
  ],
};

module.exports = config;
