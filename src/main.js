import Vue from 'vue';
import App from './App.vue';
import router from './router';
import rootStore from './store/RootStore';

Vue.config.productionTip = false;

new Vue({
    router,
    store: rootStore,
    render: h => h(App),
}).$mount('#app');
