<template>
  <div>
    <Nav />

    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Adrian"
                src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Amanda"
                src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Anna"
                src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Beatriz"
                src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="BrunoL"
                src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- People Modal Boxes -->
    <div id="AdrianMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Adrian"
            src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Adrian David González Chaves</p>
          <p><b>Team Attribution:</b>Drylab</p>
          <p><b>Field:</b>Graduation Program in Ecology</p>
          <p><b>Hobbies:</b>Hiking, climbing, cooking, anything outdoors.</p>
          <p>
            <b>About:</b>I am a Venezuelan biologist, and have lived in Brazil
            for 8 years. I work with landscape ecology and biodiversity
            conservation in agricultural landscapes. In my master's I worked
            with coffee pollination, nowadays I'm analyzing a large agricultural
            production database in the Atlantic Forest biome.
          </p>
        </div>
      </div>
    </div>
    <div
      id="AdrianOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="AmandaMO" class="modal_USP is-hidden ">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Adrian"
            src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Amanda Soares Hirata</p>
          <p><b>Team Attribution:</b>Wetlab</p>
          <p><b>Field:</b>Postgraduate Course in Pharmacology</p>
          <p><b>Hobbies:</b>Lots of TV Shows and cooking</p>
          <p>
            <b>About:</b>I'm a PhD student seeking the cure of cancer. Graduated
            in Biomedical Sciences and an Environmental Technician (SAVE THE
            BEES!). In my spare time, i like to cook (Gordon Ramasay, call me)
            and hangout with my friends.
          </p>
        </div>
      </div>
    </div>
    <div
      id="AmandaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="AnnaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Adrian"
            src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Anna Júlia Medeiros Martins</p>
          <p><b>Team Attribution:</b>Design, Wiki, Human Practices</p>
          <p><b>Field:</b>Social Communication</p>
          <p>
            <b>Hobbies:</b>Reading books, watching TV series, discovering new
            stories to obsess and inspire my whole personality in it, making
            analogies with reality and inventing new hobbies (when I don't even
            have time)
          </p>
          <p>
            <b>About:</b>'Im a publishing student who believes books change the
            world. My name is Anna Júlia, but you can call me Naju (or create a
            new nickname, but never dare to call me by my composite name), I'm
            19 years old, I'm passionate about fiction (and even more about
            realities that seem made up) and you always will find me on 220
            volts 24 hours a day. I work on the team's design and social media,
            but if you need me, just shout: learning new things is my religion.
          </p>
        </div>
      </div>
    </div>
    <div
      id="AnnaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="BeatrizMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Adrian"
            src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Beatriz Akiti</p>
          <p><b>Team Attribution:</b>Wetlab, Wiki, Coordinator</p>
          <p><b>Field:</b>Biological Science</p>
          <p>
            <b>Hobbies:</b>procrastinating and looking for useless information
            online
          </p>
          <p>
            <b>About:</b>Biological Science student, stereotypically in love for
            life in all its forms. Due to her workaholic nature, tries to do a
            little bit of everything, being mainly the Scientific Coordinator,
            besides dealing with some HR issues, Integrated and a lot, a LOT of
            bureaucracy. She looks like a very silly person, however, against
            all odds, she is even more so.
          </p>
        </div>
      </div>
    </div>
    <div
      id="BeatrizOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="BrunoLMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Adrian"
            src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Members-Iron-test.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Bruno Luka de Souza Bambirra Silveira</p>
          <p><b>Team Attribution:</b>Human Practices, Wiki</p>
          <p><b>Field:</b>Biological Science</p>
          <p>
            <b>Hobbies:</b>Music, mostly playing guitar and ukulele, and playing
            games in my spare time
          </p>
          <p>
            <b
              >About: Biology student and Human Practices member. Works mainly
              on social media. Loves science, science communication, music,
              books and is probably drinking coffee right now.</b
            >
          </p>
        </div>
      </div>
    </div>
    <div
      id="BrunoLOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Members",
  methods: {
    openModal(event) {
      let clicked_id = event.target.id;
      console.log(clicked_id);
      let overlay = document.getElementById(`${clicked_id}OV`);
      let modal = document.getElementById(`${clicked_id}MO`);
      modal.classList.remove("is-hidden");
      overlay.classList.remove("is-hidden");
    },
    closeModal(event) {
      console.log(event);
      let clicked_id = event.target.id;
      let id = clicked_id.replace("OV", "");
      console.log(id);
      let overlay = document.getElementById(`${id}OV`);
      let modal = document.getElementById(`${id}MO`);
      console.log(overlay);
      console.log(modal);
      modal.classList.add("is-hidden");
      overlay.classList.add("is-hidden");
    },
  },
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
.show-modal {
  font-size: 2rem;
  font-weight: 600;
  padding: 1.75rem 3.5rem;
  margin: 5rem 2rem;
  border: none;
  background-color: #fff;
  color: #444;
  border-radius: 10rem;
  cursor: pointer;
}

.close-modal {
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.8rem;
}

/* -------------------------- */
/* CLASSES TO MAKE MODAL WORK */
.modal_USP {
  position: absolute;
  top: 25%;
  left: 15%;
  width: 70%;
  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}
</style>
