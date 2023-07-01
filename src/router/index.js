import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/views/LandingPage'
import QuizPage from '@/views/QuizPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/quiz',
      name: 'quiz',
      props: true,
      component: QuizPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
