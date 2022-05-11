export default {
  css: [
    'public/style.css'
  ],
  buildModules: ["@nuxtjs/svg"],
  env: {
    cvpw: process.env.cvpw,
    API_URL: process.env.API_URL,
    CONTENT_KEY: process.env.CONTENT_KEY
  }
}