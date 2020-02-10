import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12f70830 = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages_editor" */))
const _72dac6be = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _7f8ef15e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _0532bede = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */))
const _38d78e01 = () => interopDefault(import('..\\pages\\article\\_sulg.vue' /* webpackChunkName: "pages_article__sulg" */))
const _7ee867e7 = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages_profile__username" */))
const _ad99b8b2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _12f70830,
    name: "editor"
  }, {
    path: "/login",
    component: _72dac6be,
    name: "login"
  }, {
    path: "/register",
    component: _7f8ef15e,
    name: "register"
  }, {
    path: "/settings",
    component: _0532bede,
    name: "settings"
  }, {
    path: "/article/:sulg?",
    component: _38d78e01,
    name: "article-sulg"
  }, {
    path: "/profile/:username?",
    component: _7ee867e7,
    name: "profile-username"
  }, {
    path: "/",
    component: _ad99b8b2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
