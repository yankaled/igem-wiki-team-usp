<template>
  <div>
    <Nav />
    <body id="prizes">
      <div class="is-full">
        <img
          class="header"
          src="https://2021.igem.org/wiki/images/d/de/T--USP-Brazil--IGEM-USP-Prizes-Header.png"
        />
      </div>
      <h2 class="has-text-centered">Results</h2>
      <div class="columns is-vcentered">
        <div class="side-stuff column is-4"></div>
        <div class="main-stuff column is-4">
          <h2 class="has-text-centered">Nominees</h2>
        </div>
        <div class="side-stuff column is-4"></div>
      </div>
      <!-- Part1 -->
      <section>
        <div class="column is-1">
          <Backtotop />
        </div>
        <div class="columns">
          <div class="column">
            <div v-on:click="openModal($event)" class="person-icon">
              <a>
                <img
                  id="Plant"
                  src="https://2021.igem.org/wiki/images/1/1f/T--USP-Brazil--IGEM-USP-Prizes-nom-plant.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="column is-5"></div>
        </div>
      </section>

      <section>
        <div class="columns">
          <div class="column is-5"></div>
          <div class="column ">
            <div v-on:click="openModal($event)" class="person-icon">
              <a>
                <img
                  id="HP"
                  src="https://2021.igem.org/wiki/images/2/26/T--USP-Brazil--IGEM-USP-Prizes-nom-HP.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="column is-1"></div>
        </div>
      </section>
      <!-- Part2 -->
      <section>
        <div class="columns">
          <div class="column">
            <div v-on:click="openModal($event)" class="person-icon">
              <a>
                <img
                  id="Env"
                  src="https://2021.igem.org/wiki/images/0/0a/T--USP-Brazil--IGEM-USP-Prizes-nom-Enviroment.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="column is-5"></div>
        </div>
      </section>

      <section>
        <div class="columns ">
          <div class="column is-5"></div>
          <div class="column ">
            <div v-on:click="openModal($event)" class="person-icon">
              <a>
                <img
                  id="Edu"
                  src="https://2021.igem.org/wiki/images/f/f1/T--USP-Brazil--IGEM-USP-Prizes-nom-Education.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="column is-1"></div>
        </div>
      </section>
      <section>
        <div class="columns ">
          <div class="column is-1"></div>
          <div class="column ">
            <div v-on:click="openModal($event)" class="person-icon">
              <a>
                <img
                  id="Part"
                  src="https://2021.igem.org/wiki/images/8/81/T--USP-Brazil--IGEM-USP-Prizes-nom-basic-part.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="column is-5"></div>
        </div>
      </section>

      <div class="columns is-vcentered">
        <div class="side-stuff column is-4"></div>
        <div class="main-stuff column is-4">
          <h2 class="has-text-centered">Prizes</h2>
        </div>
        <div class="side-stuff column is-4"></div>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-4"></div>
        <div class=" column is-4">
          <figure class="has-text-centered">
            <img
              src="https://2021.igem.org/wiki/images/7/77/T--USP-Brazil--IGEM-USP-Prizes-Gold-medal.png"
            />
          </figure>
        </div>
        <div class="column is-4"></div>
      </div>

      <div class="columns">
        <img
          class="column is-12"
          src="https://2021.igem.org/wiki/images/6/61/T--USP-Brazil--IGEM-USP-Prizes-Best-plant.png"
        />
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class=" column ">
          <p style="font-size:40px" class="has-text-left">and...</p>
          <br />
          <h2 class="has-text-left">TOP 10</h2>
          <figure class="has-text-centered">
            <img
              src="https://2021.igem.org/wiki/images/e/e8/T--USP-Brazil--IGEM-USP-Prizes-TOP10.png"
            />
          </figure>
          <p style="font-size:30px" class="has-text-centered">
            The only overgrad team from the Americas in the 2021 competition
          </p>
        </div>
        <div class="column is-1"></div>
      </div>
    </body>

    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Backtotop from "@/components/BacktoTop.vue";

export default {
  name: "Members",

  components: {
    Nav,
    Footer,
    Backtotop,
  },

  methods: {
    openModal(event) {
      let clicked_id = event.target.id;
      let overlay = document.getElementById(`${clicked_id}OV`);
      let modal = document.getElementById(`${clicked_id}MO`);
      modal.classList.remove("is-hidden");
      overlay.classList.remove("is-hidden");
    },

    closeModal(event) {
      let clicked_id = event.target.id;
      let id = clicked_id.replace("OV", "");

      let overlay = document.getElementById(`${id}OV`);
      let modal = document.getElementById(`${id}MO`);

      modal.classList.add("is-hidden");
      overlay.classList.add("is-hidden");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
#prizes {
  background-color: #ffba17;
}
.header {
  width: 100% !important;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.8rem;
}
.main-stuff h2 {
  color: #ffba17;
  text-shadow: -1.2px -1.2px 0 #000, 1.2px -1.2px 0 #000, -1.2px 1.2px 0 #000,
    1.2px 1.2px 0 #000;
}
.side-stuff {
  border-left: none;
  border-right: none;
  border-top: 2px solid#040404;
  border-bottom: 2px solid#040404;
  padding: 0px;
  height: 10px;
}
.modal_USP {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: animatetop;
  animation-duration: 0.4s;

  background-color: white;
  padding: 6rem;
  /* border-radius: 5px; */
  z-index: 50;
}

.overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 45;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  text-shadow: 2px 6px 4px rgba(159, 109, 0, 0.5);
}
h3 {
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  font-weight: 900;
  color: #ffba17;
  text-shadow: 2px 6px 4px rgba(159, 109, 0, 0.5);
}
p {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #040404;
}

b {
  color: #ffba17;
}
p b {
  font-weight: 700;
}
ul {
  list-style: none; /* Remove default bullets */
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #040404;
}

ul li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ffba17; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.person-icon {
  padding: 20px;
  overflow: hidden;
  margin: 0 auto 40px auto;
  /* -- Prevent flicker -- */
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}

.person-icon img {
  max-width: 100%;
  height: auto;
  display: block;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

.person-icon img:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
