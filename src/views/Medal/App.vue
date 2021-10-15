<template>
  <div>
    <body id="medal">
      <Nav />
      <div class="is-full">
        <img
          class="header"
          src="https://2021.igem.org/wiki/images/0/03/T--USP-Brazil--IGEM-USP-Medal-Banner.png"
        />
      </div>
      <div class="container">
        <section class="has-text-centered">
          <h2>GIMME MEDALS</h2>
          <h3>the honey of our work</h3>
          <br /><br /><br /><br />
          <p>
            In this page we discuss our accomplishments throughout the year and
            how they align with iGEM's medal criteria for iGEM competition 2021.
          </p>
        </section>
        <section class="columns is-vcentered">
          <div class="column is-half">
            <ul>
              <li>Competition Deliverables</li>
              <li>Attributions</li>
              <li>Project Description</li>
              <li>Contribution</li>
            </ul>
          </div>
          <div class="column is-half">
            <img
              src="https://2021.igem.org/wiki/images/2/20/T--USP-Brazil--IGEM-USP-Medal-Bronze.png"
              alt="Bronze bee"
            />
          </div>
        </section>
        <section class="columns is-vcentered ">
          <div class="column is-half">
            <img
              src="https://2021.igem.org/wiki/images/9/9f/T--USP-Brazil--IGEM-USP-Medal-Silver.png"
              alt="Silver bee"
            />
          </div>
          <div class="column is-half ">
            <ul>
              <li>Engineering success</li>
              <li>Collaboration</li>
              <li>Human Practices</li>
              <li>Proposed Implementation</li>
            </ul>
          </div>
        </section>
        <section class="columns is-vcentered">
          <div class="column is-half">
            <ul>
              <li>Integrated Human Practices</li>
              <li>Improvement of an Existing Part</li>
              <li>Project Modelling</li>
              <li>Proof of Concept</li>
              <li>Partnership</li>
              <li>Education & Comunication</li>
            </ul>
          </div>
          <div class="column is-half">
            <img
              src="https://2021.igem.org/wiki/images/f/f3/T--USP-Brazil--IGEM-USP-Medal-Gold.png"
              alt="Gold bee"
            />
          </div>
        </section>
      </div>

      <Footer />
    </body>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Description",

  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped>
#medal {
  background-color: #000000;
}
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
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
  color: #ffffff;
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
  color: #fff;
}

ul li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ffba17; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>
