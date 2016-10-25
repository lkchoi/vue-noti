<template lang="pug">
  #app
    img#logo(src='./assets/logo.png')
    .columns
      .column.is-half.is-offset-one-quarter
        login
    //- .columns
      .column.is-half.is-offset-one-quarter
        form(@submit.prevent="notify")
          .control
            input.input(
              placeholder="Title"
              v-model="noti.title"
            )
          .control
            textarea.textarea(
              placeholder="Message"
              v-model="noti.message"
            )
          .control
            label.radio(v-for="type in types")
              input(type="radio", :value="type", v-model="noti.type")
              span &nbsp;{{ type }}
          .control
            button.button.is-primary.is-pulled-right Notify!
</template>

<script>
import Vue from 'vue'
import Login from './components/Login.vue'
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
    Login
  },

  data () {
    return {
      types: [
        'primary',
        'info',
        'warning',
        'danger'
      ],
      noti: {
        type: 'info',
        title: 'Sample Title',
        message: `As electronic devices become more compact and powerful, conventional methods for manufacturing electrical components simply won’t do. The problem lies in the fact that current systems require a huge battery and their components are too bulky.`
      }
    }
  },

  methods: {
    notify () {
      openNotification({
        title: this.noti.title,
        message: this.noti.message,
        type: this.noti.type,
        duration: this.duration(this.noti.message),
        direction: 'Down'
      })
    },

    /**
     * Calculate notification duration based on message length
     * @return {} [description]
     */
    duration (message) {
      return 32 * message.length + 3000
    }
  },

  events: {
    notify (message, title = '', type = 'info', duration = null, direction = 'Down') {
      if (duration === null) {
        duration = this.duration(message)
      }
      openNotification({title, message, type, duration, direction})
    }
  }
}
</script>

<style lang="scss">
@import './assets/sass/app.scss';
</style>
