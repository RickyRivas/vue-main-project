import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Main/Home route which will be directed to /coaches
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      // dynamic route
      path: '/coaches/:id',
      component: CoachDetail,
      // setting props to true allows props to be passed down to the coachDetail component
      props: true,
      children: [
        {
          // this child will be loaded as /coaches/c1/contact
          path: 'contact',
          component: ContactCoach
        }
      ]
    },
    {
      path: '/register',
      component: CoachRegistration
    },
    {
      path: '/requests',
      component: RequestsReceived
    },
    {
      // Catch all route => if unknown route is entered redirect page to specified component
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});
export default router;
