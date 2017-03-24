// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
// import VueRouter from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// });

// let app = Vue.extend(App);

const routes = [
    {path: '/', component: goods},
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});
// router.map({
//     '/goods': {
//         component: goods
//     }
// });
// router.start(app, '#app');
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
