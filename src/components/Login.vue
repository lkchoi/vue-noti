<template lang="pug">
  #login
    form(@submit.prevent="attemptLogin")
      .control.has-icon
        input.input(
          type="email"
          placeholder="Email"
          v-model="user.email")
        i.fa.fa-envelope
      .control.has-icon
        input.input(
          type="password"
          placeholder="Password"
          v-model="user.password")
        i.fa.fa-lock
      .control
        button.button.is-primary Login
</template>

<script>
import EventHub from '../EventHub'
export default {

  name: 'login',

  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },

  methods: {
    attemptLogin () {
      let { email, password } = this.user
      if (this.verifyLogin(email, password)) {
        EventHub.$emit('notify', {
          title: 'Awesome',
          message: "You've successfully logged in!",
          type: 'success'
        })
      } else {
        EventHub.$emit('notify', {
          title: 'Uhoh',
          message: 'Invalid credentials',
          type: 'danger'
        })
      }
    },

    verifyLogin (email, password) {
      return email === 'someone@example.com' && password === 'asdfasdf'
    }
  }
}
</script>
