import Vue from 'vue';
import Router from 'vue-router';
import Overview from './views/Overview';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/transitioning-single-elements-components',
      name: 'transitioning-single-elements-components',
      component: () =>
        import('./views/TransitioningSingleElementsComponents.vue')
    },
    {
      path: '/initial-render',
      name: 'initial-render',
      component: () => import('./views/InitialRender.vue')
    },
    {
      path: '/transitioning-between-elements',
      name: 'transitioning-between-elements',
      component: () => import('./views/TransitioningBetweenElements.vue')
    },
    {
      path: '/transitioning-between-components',
      name: 'transitioning-between-components',
      component: () => import('./views/TransitioningBetweenComponents.vue')
    },
    {
      path: '/list-transitions',
      name: 'list-transitions',
      component: () => import('./views/ListTransitions.vue')
    },
    {
      path: '/reusable-transitions',
      name: 'reusable-transitions',
      component: () => import('./views/ReusableTransitions.vue')
    },
    {
      path: '/dynamic-transitions',
      name: 'dynamic-transitions',
      component: () => import('./views/DynamicTransitions.vue')
    }
  ]
});
