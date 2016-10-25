<template lang="pug">
  #demo
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
import EventHub from '../EventHub'

export default {

  name: 'noti-demo',

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
      EventHub.$emit('notify', this.noti)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
