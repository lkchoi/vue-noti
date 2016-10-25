<template lang="pug">
  #login
    form(@submit.prevent="yelp")
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
export default {

  name: 'login',

  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  }
}
</script>
