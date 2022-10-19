<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
.about
    <h1>This is an about page</h1>
    HelloWorld(msg="Hello world component")
</template>
