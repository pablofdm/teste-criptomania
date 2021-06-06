import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main.vue'
// import Post from '../components/Post.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '',
        component: Main,
        name: 'home',
     },{
        path: '/posts/:idPost?',
        component: () => import('../components/Post.vue'),
        name: 'POSTS'
        }
]
})

