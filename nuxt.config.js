export default {
  css: [
    'public/style.css'
  ],
  buildModules: ["@nuxtjs/svg"],
  env: {
    cvpw: process.env.cvpw,
    API_URL: process.env.API_URL,
    CONTENT_KEY: process.env.CONTENT_KEY
  },
  pwa: {
    icon: {
      source: 'https://cdn.glitch.global/c2f99bc4-f921-4cee-90b5-df019f304eee/favicon.png?v=1652244090700'
    }
  }
}