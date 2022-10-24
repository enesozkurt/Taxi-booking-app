<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<template lang="pug">
.hello
  p {{ msg }}
  .counter {{ count }}
    button.increment(@click="increment") Increment
    button.decrement(@click="decrement") Decrement
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
