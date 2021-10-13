<template>
  <div class="home">
    <Nav />
    
    TESTANDO

    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Nav,
    Footer
  }
}
</script>
