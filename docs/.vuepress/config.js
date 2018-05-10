module.exports = {
  title: "Cipow",
  description: "dokumentasi",
  base: "/",
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/"},
      { text: "Dokumentasi", link: "/dokumentasi/"},
      { text: "Info", link: "/info/"}
    ],
    sidebar: [
      {
        title: 'Dokumentasi',
        collapsable: false,
        children: [
          '/dokumentasi/',
          '/dokumentasi/one'
        ]
      },
      {
        title: 'Info',
        collapsable: false,
        children: [
          '/info/'
        ]
      }
    ]
  }
}
