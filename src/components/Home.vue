<template lang="pug">
  #home
    .control.has-addons
      router-link(to="/login").button.is-primary
        span Login
      router-link(to="/demo").button.is-info
        span Demo
</template>

<script>
export default {

  name: 'home',

  data () {
    return {

    }
  }
}
</script>
