<template>
  <div id="app">
    <Nav />
  </div>

  <router-view/>

</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
