import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test from '../components/test'

import Home from '../pages/Home/home.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Audio from '../pages/Audio/audio.vue'
import Group from '../pages/Group/group.vue'
import Mine from '../pages/Mine/mine.vue'

import Movie from '../components/movie.vue'
import Tv from '../components/tv.vue'
import Read from '../components/read.vue'
import City from '../components/city.vue'
import Music from '../components/music.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children: [
      {
        path: 'movie',
        component: Movie
      },
      {
        path: 'tv',
        component: Tv
      },
      {
        path: 'read',
        component: Read
      },
      {
        path: 'city',
        component: City
      },
      {
        path: 'music',
        component: Music
      },
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
