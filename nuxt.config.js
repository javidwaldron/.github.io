export default {
  css: [
    'public/style.css'
  ],
  buildModules: ["@nuxtjs/svg"],
  env: {
    cvpw: process.env.cvpw
  }
}