<template>
  <div >
    <button
      ref="collapsible-button"
      type="button"
      class="collapsible-button"
    >
      {{ title }}
    </button>
    <div
      ref="collapsible-content"
      class="collapsible-content"
    >
      <p>{{ text }}</p>
    </div> 
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },

  mounted() {
    const coll = this.$refs['collapsible-button'];

    coll.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
    
  }
}
</script>

<style scoped>
 /* Style the button that is used to open and close the collapsible content */
.collapsible-button {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible-button:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.collapsible-content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>