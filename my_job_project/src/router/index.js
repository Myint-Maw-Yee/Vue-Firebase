import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetail from '../views/jobs/JobsDetail.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobs',
      component: Jobs,
      name: 'Job',
    },
    {
      path: '/jobs-detail/:id ',
      component: JobsDetail,
      name: 'JobDetail',
      props: true,
    },
    //redirect
    {
      path:'/all-jobs',
      redirect: 'jobs',
    },
    //catchAll 404 not found
    {
      path: '/:catchAll(.*)',
      component:NotFound,
    }
  ]
})

export default router
