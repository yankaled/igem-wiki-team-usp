<template>
  <div>
    <span id="text_btn" v-on:click="topFunction">
      Back to top
    </span>
    <input
      type="image"
      class="image is-64x64"
      src="https://2021.igem.org/wiki/images/b/bf/T--USP-Brazil--IGEM-USP-BacktoTopButton.png"
      v-on:click="topFunction"
      id="myBtn"
    />
  </div>
</template>
<script>
export default {
  created() {
    window.addEventListener("scroll", this.scrollFunction);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      const mybutton = document.getElementById("myBtn");
      const mybuttontext = document.getElementById("text_btn");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
        mybuttontext.style.display = "block";
      } else {
        mybutton.style.display = "none";
        mybuttontext.style.display = "none";
      }
    },

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<style scoped>
#myBtn {
  /* display: none; Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 30px;
  /* placethe button at the bottom of the page  */
  right: 30px;
  /* placethe button 30px from the right */
  z-index: 90;
  /* makesure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}
#text_btn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px;
  /* placethe button at the bottom of the page  */
  right: 30px;
  /* placethe button 30px from the right */
  z-index: 99;
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: #040404; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  font-size: 12px; /* Increase font size */
}

#text_btn:hover {
  color: #ff6600;
}
</style>
<style>
html {
  scroll-behavior: smooth;
}
</style>
