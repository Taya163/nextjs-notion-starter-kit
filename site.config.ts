import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'TayaW-s-BLOG-942a25acbcae4b47b69634fd88325179',// Next-js-Notion-Starter-Kit-Template-1f92658494d04a57af2402093bcd3b83、

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'TayaW blok',
  domain: 'https://kit.taya163.com',
  author: 'TayaW',

  // open graph metadata (optional)
  description: '长路漫漫，技术相伴',

  // social usernames (optional)
  twitter: '@TayaW37828491',
  github: 'Taya163',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '首页',
      pageId: 'TayaW-s-BLOG-942a25acbcae4b47b69634fd88325179'
     
    },
    {
      title:  '图库',
      pageId: 'fa1c3564b1ec4c94a502ed7794fb18d4'
      
    },
    {
       title: '关于',
       pageId: '828a7b41ee6747f1855c6e1248285f12'
      
    },
    {
       title: '友链',
       pageId: '2160d8df7b354d11979857b608f0e69c'
    },
    {
      title: '留言板',
      pageId: '6b5c4db1062343648aa98275dd9472ca'
    }
  ]
})
