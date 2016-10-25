<template lang="pug">
  #app
    router-link(to="/")
      img#logo(src='./assets/logo.png')
    .columns
      .column.is-one-third.is-offset-one-third
        router-view
</template>

<script>
import Vue from 'vue'
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
