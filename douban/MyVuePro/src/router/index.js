import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test from '../components/test'

import Home from '../pages/Home/home.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Audio from '../pages/Audio/audio.vue'
import Group from '../pages/Group/group.vue'
import Mine from '../pages/Mine/mine.vue'

// import Movie from '../pages/Audio/movie.vue'
import Movie1 from '../pages/Audio/movie1.vue'

import Tv from '../pages/Audio/tv.vue'
import Read from '../pages/Audio/read.vue'
import City from '../pages/Audio/city.vue'
import Music from '../pages/Audio/music.vue'



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
        path: '',
        component: Movie1
      },
      // {
      //   path: 'movie',
      //   component: Movie
      // },
       {
        path: 'movie1',
        component: Movie1
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
