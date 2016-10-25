<template lang="pug">
  #app
    img#logo(src='./assets/logo.png')
    .columns
      .column.is-one-third.is-offset-one-third
        login
    .columns
      .column.is-one-third.is-offset-one-third
        demo
</template>

<script>
import Vue from 'vue'
import Login from './components/Login.vue'
import Demo from './components/Demo.vue'
import EventHub from './EventHub'
import Notification from 'vue-bulma-notification'
const NotificationComponent = Vue.extend(Notification)
const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4000,
  container: '.notifications'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  name: 'app',

  components: {
    Login,
    Demo
  },

  created () {
    EventHub.$on('notify', this.notify)
  },

  methods: {
    notify ({ title, message, type, duration, direction }) {
      duration = duration || this.duration(message)
      direction = direction || 'Down'
      openNotification({
        title,
        message,
        type,
        duration,
        direction
      })
    },

    duration (message) {
      return 32 * message.length + 3000
    }
  }
}
</script>

<style lang="scss">
@import './assets/sass/app.scss';
</style>
