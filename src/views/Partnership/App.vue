<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/7/71/T--USP-Brazil--IGEM-USP-Sponsors-Banner.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth"></div>
      <div class="content column is-three-fifth"></div>
      <div class="column is-one-fifth"></div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Backtotop from "@/components/BacktoTop.vue";
export default {
  name: "Safety",
  components: {
    Nav,
    Footer,
    Backtotop,
  },
};
</script>

<style scoped>
blockquote {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}
</style>
