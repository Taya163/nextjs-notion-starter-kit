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
  youtube: 'channel/UCTjLnIG96tMniEeibp6NEsg', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

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
      title: '文章',
      pageId: '967efbe1db2c4c06b6394eefadb6e1df'
    }
    ,
    {
      title: '娱乐',
      pageId: 'ce5cb9296aa44448b60a5408e4244ca5'
    }
    ,
    {
      title:  '图库',
      pageId: '4f161b76156247cf98e66abf748589ea'
      
    },
    {
      title: '归档',
      pageId: 'c1a04aadfa42401092edd2245a158ede'
    }
    ,
    {
       title: '友链',
       pageId: '9a9b0e6d336c4b7eaad70b5967f8484e'
      
    },
    {
       title: '留言',
       pageId: 'ead2268494da4ae89e5beb5cd0145da1'
    },
    {
      title: '关于',
      pageId: '815bc1f4d8c34f7f9acedd49c369ddf6'
    }
  ]
})
