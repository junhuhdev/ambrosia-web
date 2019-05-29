import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Restaurant from './views/restaurant/Restaurant.vue';
import RestaurantDetail from './views/restaurant/RestaurantDetail.vue';
import Admin from './views/Admin.vue';
import Customer from '@/views/customer/Customer.vue';
import Supplier from '@/views/supplier/Supplier.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Meal from '@/views/meal/Meal.vue';
import Order from '@/views/order/Order.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/login', name: 'login', component: Login},
        {path: '/register', name: 'register', component: Register},
        {path: '/restaurant', name: 'restaurant', component: Restaurant},
        {path: '/restaurant/:id', name: 'restaurant-detail', component: RestaurantDetail, props: true},
        {path: '/meal', name: 'meal', component: Meal},
        {path: '/order', name: 'order', component: Order},
        {path: '/admin', name: 'admin', component: Admin},
        {path: '/customer', name: 'customer', component: Customer},
        {path: '/supplier', name: 'supplier', component: Supplier},
        {
            path: '/about', name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
});
