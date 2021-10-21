<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/thumb/7/7f/T--USP-Brazil--IGEM-USP-Proofofconcept-BannerProofofconcept.png/800px-T--USP-Brazil--IGEM-USP-Proofofconcept-BannerProofofconcept.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth">
        <aside class="is-sticky">
          <div id="" class="sub-navigation sub-menu-content">
            <div class="">
              <a class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                >Introduction</a
              >
            </div>
            <div class="">
              <a class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                >Test Results</a
              >
            </div>
            <div class="">
              <a class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                >Conclusion</a
              >
            </div>
          </div>
          <Backtotop />
        </aside>
      </div>
      <div class="content column is-three-fifth">
        <h2>Introduction</h2>
        <p>
          Let.it.bee aims to protect bees from the toxic effects of imidacloprid
          (IMI) without losing protection against other pests. In order to to
          achieve that goal, some criteria must be met:
        </p>
        <p>
          1- The plant must be
          <b>able to express the detoxifying enzyme CYP6G1.</b> This is the
          enzyme responsible for metabolizing imidacloprid into its less toxic
          metabolites.
        </p>
        <p>
          2- The enzyme
          <b>must not be expressed anywhere but the pollen.</b> That way the
          rest of the plants will still be protected against harmful pests, but
          the pollen will be safer for bees and other pollinators.
        </p>
        <p>
          3- The GMO plant must have a <b>significant protective action</b> on
          the surrounding bee population.
        </p>
        <h2>Test results</h2>
        <p>
          Despite the long-lasting impairment caused by COVID-19, we were able
          to perform enough preliminary wet lab tests for proof of concept,
          which was complemented by dry lab simulations.
        </p>
        <p>
          The first two criteria were proven successful through the wet lab
          experiments. GUS assays revealed that 4 transgenic plants lineages
          <b>expressed Let.it.bee in their pollen grains.</b> The relative
          quantity of GUS positive pollen is low due to the fact that the plant
          is in the "zero" generation (T0), so only a few cells of the plant are
          genetically modified. As GUS is co-expressed with CYP6G1 in our
          construct, the expression of the latter indicates the expression of
          the former.
        </p>
        <div class="columns">
          <figure class="has-text-centered">
            <img
              src="https://2021.igem.org/wiki/images/0/07/T--USP-Brazil--IGEM-USP-Proofofconcept-GUS-positive-pollen.png"
            />
          </figure>
        </div>
        <p>
          Nonetheless, Let.it.bee's expression was also confirmed by PCR.
          Lineages 2, 22 and 25 genomic PCR showed bands corresponding to the
          size of the construct. Additionally, qRT-PCR of plant 2 was positive
          for CYP6G1 RNA, directly confirming its expression.
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/c/c9/T--USP-Brazil--IGEM-USP-Proofofconcept-Electrophoresis-gel-results.png"
          />
        </figure>

        <p>
          The latter also ruled out the possibility of leakage in Let.it.bee's
          expressions. qRT-PCR performed on leaves shows undetermined levels of
          CYP6G1 expression, confirming literature data around the tissue
          specificity of the LAT52 promoter. Even though a faint signal (Ct >
          29) could be detected for the CYP transcript in the negative control
          and in the leaves, we attribute that to the dimerization of primers
          or, more unlikely, sample contamination; rather than a proper result.
        </p>

        Figure 4

        <p>
          Regarding the last criteria, mathematical tools based on the quantity
          and toxicity of the imidacloprid metabolites indicate that
          <b>plants bearing Let.it.bee are 5 to 10 times less toxic</b> to bees
          when compared to their wild-type counterparts. And in some cases, it
          <b>may even avoid the extinction of an entire hive.</b>
        </p>

        <h2>Conclusion</h2>
        <p>
          It is possible to conclude that the aforementioned experiments suffice
          to offer a proof of concept for Let.it.bee. We considered that their
          promising results show strong evidence that it can work as an
          alternative for more sustainable and bee-friendly crops. However,
          further experiments are needed to confirm the bioinformatic
          predictions. Additionally, more precise data could be obtained with
          further generations of the GMO plant. We intend to follow on those
          topics after the Giant Jamboree. Moreover, we already secured some
          partnerships with private and public institutions that wish to carry
          out some of those alongside our team. You can read more about those
          partnerships in our
          <a href=" https://2021.igem.org/Team:USP-Brazil/Human_Practices">
            integrated session.</a
          >
        </p>
      </div>
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
.is-sticky {
  margin-left: 25%;
  position: sticky;
  top: 100px;
  display: block;
}
.sub-navigation {
  padding: 2em 0;
  border-right: solid 3px #ffba17;
  max-width: 220px;
}
.sub-menu-content {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}
.sub-nav-link-usp {
  /* font-weight: bold;
  font-size: 14px;
  font-family: "Poppins", sans-serif; */
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  background-color: transparent !important;
  padding: 20px 0px;
  margin: 0px 20px;
  display: flex;
  position: relative;
  opacity: 0.75;
}

.sub-nav-link-usp:hover {
  opacity: 1;
}

.sub-nav-link-usp::before {
  transition: 500ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #000;
}

.sub-nav-link-usp-ltr::before {
  width: 0%;
  bottom: 10px;
}

.sub-nav-link-usp-ltr:hover::before {
  width: 100%;
}

sub-menu-content {
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}
/* a.sub-navbar-item:hover {
  color: #ffffff;
}

.sub-navbar-link:hover {
  color: #ffffff;
} 


*/
</style>
