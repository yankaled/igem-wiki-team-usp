<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/5/5d/T--USP-Brazil--IGEM-USP--PARTNERSHIP-banner.png"
      />
    </div>

    <section class="columns">
      <div class="menu column is-one-fifth">
        <aside class="is-sticky is-hidden-touch">
          <div class="sub-navigation sub-menu-content">
            <div>
              <a
              class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
              href="#title-partnership-scientific"
              >
              Partnership for the Scientific Camp
              </a>
            </div>
          </div>
        </aside>
      </div>

      <Backtotop />

      <div class="content column is-three-fifth">
        <p>
          Besides the various collaborations we established during the iGEM
          season, we also partnered with two teams to help develop segments of
          both our projects, making longer and stronger connections.
        </p>

        <p>
          The cooperation between us was fundamental to get to this point of the
          competition. So, for their huge help, we thank them from the bottom of
          our hearts!
          <span id ="title-partnership-scientific"></span>
        </p>

        <!--- Partnership for the Scientific Camp --->
        <h2>Partnership for the Scientific Camp</h2>
        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/c/c6/T--USP-Brazil--IGEM-USP-Partnership-Eagle.png"
            alt=""
          />
        </figure>

        <h3>British_Columbia</h3>

        <p>
          The UBC Team reached out to us looking for a collaboration for a
          possible public education project that was going to happen in Brazil
          and was very similar to our Scientific Camp.
        </p>

        <p>
          With that in mind we asked if they wanted to help us by creating some
          workshops for our project.
        </p>

        <p>
          From then on we had weekly meetings between both HP teams, talking
          about possible workshops, plot points in the narrative we were
          building for the RGP dynamic and even special recipes for typical
          Brazilian sweets.
        </p>

        <p>
          We worked together from April to October and ended up building a
          warming friendship. The Scientific Camp wouldn't have been the same
          without them.
        </p>

        <p>
          They also contributed to our Brazilian Synthetic Biology Olympiad
          (OBBS) with 14 questions, more than any other team.
        </p>

        <p>
          These are the activities that we created together in during our
          meetings.
        </p>
        <div class="columns has-text-justified">
          <div class="column is-one-third ">
            <Collapsible
              title="Petri Dish Handprint"
              text="The Petri Dish was the only in person activity, respecting all the sanitary criteria required by the context of the COVID-19 pandemic. Petri dishes with complex medium were prepared, where each child left a handprint: one before washing and one after washing. The intention was, after two weeks, to compare the plates and show the microorganisms that grew there, emphasizing the importance of hand washing."
            />
          </div>
          <div class="column is-one-third ">
            <Collapsible
              title="Food Chain"
              text="In the Food Chain activity, children received a personalized picture with various members of an ecosystem's food web: producers, primary, secondary and tertiary consumers. The children's goal is to trace as many food chains as possible, thus forming a complex food web with diverse trophic relationships. Note: this activity unfortunately could not be applied in the Scientific Camp of 2021."
            />
          </div>
          <div class="column is-one-third ">
            <Collapsible
              title="Memory game"
              text="The Memory Game was held on the Kahoot platform on the last day of the Camp. It had the intention of reminding children of important moments in history and the content worked during the weeks of application. The questions included concepts explored in all previous activities: the Microbe Drop, Petri Dish, Coarse Salt Crystallization, CO2 Balloon, CinePalito and Ecological Bingo. "
            />
          </div>
        </div>

        <h3>Partnership on adapting data for drylab and knowing iGEM</h3>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/c/cc/T--USP-Brazil--IGEM-USP-Partnership-EEL.png"
            alt=""
          />
        </figure>
        <h4>USP-EEL-Brazil</h4>

        <p>
          We had a year-long partnership with the USP-EEL-Brazil team. Being
          both teams from Brazil, we bonded over our difficulties to counsel
          each other in multiple aspects of the projects and the competition,
          especially:
        </p>
        <ul>
          <li>Dry lab (protein modeling)</li>
          <li>Synbio scientific divulgation in Education and Communication</li>
          <li>iGEM criteria</li>
          <li>University bureaucracies</li>
        </ul>

        <p>
          The initial discussion was connected to mathematical modelling: what
          does it mean? How can we apply it to the project? The USP-EEL-Brazil
          team was also working with a protein in their project and planned to
          model its structure and kinectics. Because of the restrictions on
          laboratories during the pandemics, just like us, they could not access
          their laboratories preventing them from obtaining the data needed to
          model their project. However, they had data on similar proteins so we
          proposed to fit the model so ti would behave like those other proteins
          theiy had, data under the hypothesis that it would behave similarly.
          In the end it was possible to obtain an estimation of the missing data
          and with mathematical manipulation it was possible to model their
          project as they wanted.
        </p>

        <p>
          In addition, we had periodical meetings to discuss possible questions
          about iGEM criterias that we had to meet, as well as to solve
          questions about bureaucratic financial processes. With the increase in
          the dollar price in relation to real (brazilian currency), paying the
          competition was made into more of a challenge, a new hard criteria to
          meet. We discussed our troubles with getting financial support from
          the university as well as from alternative ways. Likewise we also
          helped each other in solving doubts about certain criterias,
          especially around the final months.
        </p>

        <p>
          For Human Practices, we also made a quick video about our team so they
          could advertise synbio projects on their social media, as part of a
          great scientific divulgation project that aimed at spreading
          information about synthetic biology.
        </p>

        <p>
          During the year, we have reciprocally helped each other through the
          pandemic situation, financial problems, doubts and project
          development, stablishing a lasting partnership through the various
          moments and hardships.
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
import Collapsible from "@/components/Collapsible.vue";

export default {
  name: "Education",

  components: {
    Nav,
    Footer,
    Backtotop,
    Collapsible,
  },
};
</script>
