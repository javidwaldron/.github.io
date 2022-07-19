import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b7bc597 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _41db5aaa = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _0ad5c202 = () => interopDefault(import('../pages/cv/index.vue' /* webpackChunkName: "pages/cv/index" */))
const _c61c5848 = () => interopDefault(import('../pages/tag/_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))
const _c1bdfad6 = () => interopDefault(import('../pages/work/_slug.vue' /* webpackChunkName: "pages/work/_slug" */))
const _818e0e4e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/javidwaldron.github.io/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6b7bc597,
    name: "about"
  }, {
    path: "/contact",
    component: _41db5aaa,
    name: "contact"
  }, {
    path: "/cv",
    component: _0ad5c202,
    name: "cv"
  }, {
    path: "/tag/:slug?",
    component: _c61c5848,
    name: "tag-slug"
  }, {
    path: "/work/:slug?",
    component: _c1bdfad6,
    name: "work-slug"
  }, {
    path: "/",
    component: _818e0e4e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
