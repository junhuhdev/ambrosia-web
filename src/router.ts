import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/main/HomePage.vue';
import Restaurant from './views/restaurant/Restaurant.vue';
import RestaurantDetail from './views/restaurant/RestaurantDetail.vue';
import AdminPage from '@/views/admin/AdminPage.vue';
import Supplier from '@/views/supplier/Supplier.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Meal from '@/views/meal/Meal.vue';
import Order from '@/views/order/Order.vue';
import RestaurantRegisterForm from '@/views/restaurant/RestaurantRegisterForm.vue';
import CustomerPage from '@/views/customer/CustomerPage.vue';
import RestaurantEditPage from '@/views/restaurant/RestaurantEditPage.vue';
import MenuRegisterForm from '@/views/menu/MenuRegisterForm.vue';
import MealRegisterForm from '@/views/meal/MealRegisterForm.vue';
import MealEditPage from '@/views/meal/MealEditPage.vue';
import CartCheckoutPage from '@/views/cart/CartCheckoutPage.vue';
import SearchResultPage from '@/views/search/SearchResultPage.vue';
import Home from '@/views/Home.vue';
import RestaurantPage from '@/views/restaurant_v2/RestaurantPage.vue'
import MealPage from '@/views/meal_v2/MealPage.vue';
import RestaurantDetailPage from '@/views/restaurant_v2/RestaurantDetailPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/restaurant', name: 'restaurant', component: RestaurantPage},
    {path: '/restaurant/:id', name: 'restaurant-detail', component: RestaurantDetailPage, props: true},
    {path: '/meal', name: 'meal', component: MealPage},
    {path: '/order', name: 'order', component: Order},
    {path: '/admin', name: 'admin', component: AdminPage},
    {path: '/supplier', name: 'supplier', component: Supplier},
    // Search pages
    {path: '/search-result-page', name: 'search-result-page', component: SearchResultPage},

    // Cart pages
    {path: '/cart-checkout-page', name: 'cart-checkout-page', component: CartCheckoutPage},
    // Admin pages
    {path: '/customer', name: 'customer', component: CustomerPage},
    {path: '/restaurant-register-form', name: 'restaurant-register-form', component: RestaurantRegisterForm},
    {path: '/restaurant-edit-page/:id', name: 'restaurant-edit-page', component: RestaurantEditPage, props: true},
    {path: '/menu-register-form', name: 'menu-register-form', component: MenuRegisterForm},
    {path: '/meal-register-form', name: 'meal-register-form', component: MealRegisterForm},
    {path: '/meal-edit-page/:id', name: 'meal-edit-page', component: MealEditPage, props: true},
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
