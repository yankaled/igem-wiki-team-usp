<template>
  <div>
    <Nav :transition="true" />

    <div class="is-full" style="position: relative;">
      <video
        autoplay
        loop="true"
        class="header"
        src="https://2021.igem.org/wiki/images/1/19/T--USP-Brazil--IGEM-USP-Home-Video.mp4"
      />
      <img
        style="transform: translateY(-15em); width: 100%;"
        src="https://2021.igem.org/wiki/images/d/dd/T--USP-Brazil--IGEM-USP-Home-Colmeia.png"
      />
    </div>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column is-1"></div>
      <Backtotop />
      <div class="column is-5">
        <figure class="image is-128x128">
          <img
            src="https://2021.igem.org/wiki/images/1/16/T--USP-Brazil--IGEM-USP-Home-Bee.png"
          />
        </figure>
      </div>
      <div class="content column is-4">
        <h2>Let.It.Bee.</h2>
        <p>
          We always talk about how important bees are to our ecosystem, but we
          don't hear enough about how big of a part they play in our daily
          lives!
        </p>
      </div>
      <div class="column is-2"></div>
    </section>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column is-2"></div>
      <div class=" content column is-8 has-text-centered">
        <p>
          <b
            >Bees are essential for ecological preservation, around 90% of the
            species in the Atlantic Forest and 30% in the Pantanal depend on
            their action.</b
          >
        </p>
        <figure class="has-text-centered">
          <img
            style="max-width:70%; max-height:70%"
            src="https://2021.igem.org/wiki/images/0/03/T--USP-Brazil--IGEM-USP-Home-map.png"
          />
        </figure>
      </div>

      <div class="column is-2"></div>
    </section>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column is-1"></div>
      <div class=" content column is-9">
        <p>
          <b
            >These small workers are essential to world agriculture, virtually
            all commercial plantations depend on pollination.</b
          >
        </p>
      </div>

      <div class="column is-2"></div>
    </section>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column is-1"></div>
      <div class="content column">
        <p>
          In Brazil alone, <br />
          <span class="count-number" /> cultures depend <br />directly or
          indirectly on the action of bees
        </p>
      </div>
      <div class=" content column">
        <p>
          >Pollinated crops generate<br />
          9.3 billion dollars <br />
          in exports for the brazilian agribusiness!
        </p>
      </div>
      <div class="column is-2"></div>
    </section>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column is-1"></div>
      <div class="content column is-6">
        <p>
          <b
            >And this also directly impacts global food security, because
            without bees the variability of food available to the population
            around the world is also reduced</b
          >
        </p>
      </div>
      <div class="content column is-5"></div>
    </section>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column is-offset-7">
        <img
          src="https://2021.igem.org/wiki/images/1/16/T--USP-Brazil--IGEM-USP-Home-Bee.png"
        />
      </div>
    </section>

    <section class="columns" style="transform: translateY(-15em);">
      <div class="column"></div>
      <div class=" content column is-9">
        <h2 style="text-align: center ;">But bees are being endangered...</h2>
        <p>
          by the indiscriminate and irrational use of pesticides, generating
          massive deaths of these very important small insects.
        </p>
      </div>

      <div class="column"></div>
    </section>

    <section
      class="columns"
      style="transform: translateY(-15em); background-color:rgba(255, 102, 0, 0.7);"
    >
      <div class="column is-1"></div>
      <div class=" content column is-4">
        <br />
        <img
          src="https://2021.igem.org/wiki/images/a/a2/T--USP-Brazil--IGEM-USP-Home-Destruction.png"
        />
      </div>
      <div class="content column is-4">
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          <b
            style="color:#040404;
            font-size: 30px;"
            >Beekeepers find <b>half a billion dead bees in 3 months</b> in
            Brazil
          </b>
        </p>
        <br />
        <br />
        <p style="color:#fff">(Galileu Maganize, 2019)</p>
      </div>
      <div class="column is-1"></div>
    </section>

    <section
      class="columns"
      style="transform: translateY(-15em); text-align: center; "
    >
      <div class="column"></div>
      <div class=" content column is-9">
        <p>
          The mass death of bees and even entire hives has grown exponentially
          since the 1990s and this has been closely linked to acute poisoning
          due to the misuse of pesticides, especially the neonicotinoids class.
        </p>
        <br />
        <p>
          <b
            >It would be very easy to say that they are the villains of our
            story, but it is far more complex than that</b
          >
        </p>
        <p>
          <b> . . . </b>
        </p>
        <p>
          <b
            >neonicotinoids are actually one of the safest classes of pesticides
            for humans.</b
          >
        </p>
      </div>

      <div class="column"></div>
    </section>

    <section class="columns is-vcentered" style="transform: translateY(-15em);">
      <div class="column is-1"></div>
      <div class=" content column is-4">
        <img
          src="https://2021.igem.org/wiki/images/8/85/T--USP-Brazil--IGEM-USP-Home-Have.png"
        />
      </div>
      <div class=" content column is-4">
        <br />
        <p>
          They have a specific targeting for insects wich makes them safe for
          humans and other animals.
        </p>
      </div>
      <div class="column is-1"></div>
    </section>
    <section class="columns is-vcentered" style="transform: translateY(-15em);">
      <div class="column is-1"></div>
      <div class=" content column is-4">
        <br />
        <p>
          Aerial application is secondary, they are mainly applied to seeds,
          decreasing the action on adjacent natural vegetation.
        </p>
      </div>
      <div class=" content column is-4">
        <img
          src="https://2021.igem.org/wiki/images/b/ba/T--USP-Brazil--IGEM-USP-Home-Air.png"
        />
      </div>

      <div class="column is-1"></div>
    </section>
    <section
      class=" content columns has-text-centered"
      style="transform: translateY(-15em); text-align: center; "
    >
      <blockquote
        cite="https://www.in.gov.br/web/dou/-/resolucao-rdc-n-512-de-27-de-maio-de-%202021-322975673"
      >
        <p>
          <cite>
            "Not using neonicotinoids means using pesticides that are more
            aggressive to human health and the environment." (EMBRAPA, Luciano,
            2021)"
          </cite>
        </p>
      </blockquote>
    </section>
    <section
      class="columns"
      style="transform: translateY(-15em); text-align: center; "
    >
      <div class="column "></div>
      <div class=" content column is-9">
        <p>
          So to maintain productivity and ensure food security for the world
          population, it is necessary to combine productive agriculture with the
          preservation of bees.
        </p>
        <p>
          Therefore, pesticides must be safe for consumption and managed
          responsibly so as not to lead to acute poisoning of these insects.
        </p>
      </div>

      <div class="column "></div>
    </section>

    <section
      class="columns"
      style="text-align: center; transform: translateY(-15em); background-color:#FFB923 "
    >
      <div class="column "></div>
      <div class=" content column is-9">
        <h2 style="text-shadow: 2px 6px 4px #FFFDFD;">
          And what would be the solution?
        </h2>
        <img
          src="https://2021.igem.org/wiki/images/e/e0/T--USP-Brazil--IGEM-USP-Home-Solution.png"
        />
        <br />
        <br />
        <p>
          We have developed a transgenic plant with an enzyme capable of
          metabolizing the neonicotinoids in its pollen!
        </p>
        <p>
          We used CYP6G1, which makes Drosophila melanogaster resistant to
          neonicotinoids, and paired it with a specific promoter for the pollen
          of our model plant to incorporate this mechanism into our chassis.
        </p>
        <p>
          And keeping the action of our project directed only on the plant's
          pollen, we guarantee the protection of both crops and pollinators!
        </p>
      </div>

      <div class="column "></div>
    </section>

    <section class="columns" style="transform: translateY(-10em);">
      <div class="column is-3"></div>

      <div class=" content column is-2">
        <br />
        <br />
        <br />

        <img
          src="https://2021.igem.org/wiki/images/3/37/T--USP-Brazil--IGEM-USP-Home-Bee-with-guitar.png"
        />
      </div>
      <div class=" content column is-4">
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          And when the night is cloudy<br />
          There is still a light that shines on me<br />
          Shine on until tomorrow<br />
          Let it be
          <br />
          <br />
          <b style="color:#046620"> Beatles</b>
        </p>
      </div>

      <div class="column "></div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

import bulmaCarousel from "bulma-carousel";

// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach(".carousel", {});

// To access to bulmaCarousel instance of an element
const element = document.querySelector("#my-element");
if (element && element.bulmaCarousel) {
  // bulmaCarousel instance is available as element.bulmaCarousel
}

export default {
  name: "Home",

  mounted() {
    document.addEventListener("scroll", this.setAnimateValue);
  },

  beforeDestroy() {
    document.removeEventListener("scroll", this.setAnimateValue);
  },

  methods: {
    setAnimateValue() {
      const $number = document.querySelector(".count-number");
      if (this.checkVisible($number)) {
        this.animateValue($number, 0, 8, 2000);
      }
    },

    checkVisible(elm) {
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    },

    animateValue($obj, start, end, duration) {
      let range = end - start;
      let current = start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let timer = setInterval(() => {
        current += increment;
        $obj.innerHTML = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    },
  },
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped>
.content h2 {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: #040404;
  text-shadow: 2px 6px 4px rgba(159, 109, 0, 0.5);
}
.content h3 {
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  font-weight: 900;
  color: #040404;
  text-shadow: 2px 6px 4px rgba(159, 109, 0, 0.5);
}
.content p {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}

.content b {
  color: #ffba17;
}
.content p b {
  font-weight: 700;
}
.references {
  background: #fffdfd;
  border: 2px dashed #000000;
  border-radius: 20px;
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}
.count-number {
  background-color: #ccc;
  width: 100px;
  height: 100px;
  border: orange solid 10px;
  border-radius: 100%;
  line-height: 100px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
}
</style>
