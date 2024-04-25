export const pwa = [
  '@docusaurus/plugin-pwa',
  {
    debug: true,
    offlineModeActivationStrategies: [
      'appInstalled',
      'standalone',
      'queryString',
    ],
    pwaHead: [
      {
        tagName: 'link',
        rel: 'icon',
        href: '/img/docusaurus.png',
      },
      {
        tagName: 'link',
        rel: 'manifest',
        href: '/manifest.json', // your PWA manifest
      },
      {
        tagName: 'meta',
        name: 'theme-color',
        content: 'rgb(320, 194, 160)',
      },
    ],
  },
];
