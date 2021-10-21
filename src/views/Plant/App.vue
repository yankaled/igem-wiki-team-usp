<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/5/5d/T--USP-Brazil--IGEM-USP-BEST-PLANT-Banner.png"
      />
    </div>

    <section class="columns">
      <div class="menu column is-one-fifth"></div>

      <Backtotop />

      <div class="content column is-three-fifth">
        <p>
          During the last two years, our team was working on a project, which
          was based entirely on an engineered plant to aid foraging bees and
          beehives. Their specific and evolutionary interaction with plants is
          both essential for the world and our project Let.it.bee. All the
          while, we came to slowly know and understand more about working with
          these multicellular organisms in synthetic biology.
        </p>

        <p>
          Here we want to share some takes on our <b>journey</b> with
          Let.it.bee. and also how we can <b>contribute to future teams</b> that
          wish to use plants in their synthetic biology projects.
        </p>

        <h2>A plant approach to save bees</h2>

        <p>
          Choosing a chassis for your synbio project is a very important step,
          as that is the organism in which your idea will develop and where it
          will be tested. Along with many factors, the goals and objectives of
          your idea should also be considered in the decision.
        </p>

        <p>
          We decided to genetically engineer a plant so it is capable of
          metabolizing pesticides in its pollen, making pollen safe for bees to
          come in contact and eat, while still keeping the function of the
          pesticide. That makes it a safer option for farmers and companies to
          use in their crops, guaranteeing its productivity.
        </p>

        <p>
          Plants have their own
          <b>peculiarities and difficulties,</b> considering their complex
          structure, functioning and life cycle. From our experience, one of the
          most important things you should consider for making a plant project
          is the time you can manage to spend on it, since even model plants
          with a shorter life cycle still take considerably longer time to
          mature in comparison to microorganisms like <i>Escherichia coli</i>.
          <b>Time becomes a much bigger part of your planning.</b>
        </p>

        <p>
          As if time was not enough of a problem by itself, another situation
          cut the already small time we had available: the
          <b>COVID-19 pandemic</b>. In Brazil, for a long time, the situation
          was very worrying, reaching more than 21.500.000 cases by October of
          2021. To guarantee people's safety, most researchers were kept away
          from their labs for almost two years, including us. Consequently, the
          small time we had for the plant to grow and mature for pollen
          collection <b>was much smaller than we accounted for</b> in planning.
          We tried to bypass this situation by investing in modeling and
          prioritizing some preliminary experiments. Although the preliminary
          tests were done in a less stable generation, they still show success
          in our objective:
          <b
            >plants were successfully transformed with our circuit and the
            expression was detected in pollen, with no leaks to other tissues</b
          >.
        </p>

        <p>
          With the improvement of the pandemic condition in Brazil, we plan to
          continue the tests and gather more results.
        </p>

        <p>
          The circuit designed for Let.it.bee. is versatile, easily adaptable
          for more plants by changing the bio-bricks if needed, plus some
          aspects of our project can be helpful for future teams.
        </p>

        <h2>A local plant transformation method</h2>

        <p>
          For our project to work, we needed the plant to be able to locally
          express an enzyme with as minimal off-targets as possible. That aspect
          was very essential since the pesticide had to maintain its function
          while the point of contact with the bee needed to be safe from
          toxicity. Thus, we used a method for pollen-specific expression in our
          circuit, based on anther promoter pLAT52.
        </p>

        <p>
          Local expression is essential for our project and can be useful for
          many other ideas and studies. The ability to express in a
          predetermined tissue, organ or cells is more powerful than letting the
          modified or external gene only affect certain targets, which may
          result in less toxicity and deficiency for the organism, or maybe be
          central to the project, just as it is for Let.it.bee.
        </p>

        <p>
          In our project, the promoter was chosen for its very specific
          expression, guiding genes for expression in pollen, and has been
          reported as comparatively having fewer leaks to other regions of the
          plant [5]. It also has homologs reported in other very important
          plants, especially for research, such as the Nicotiana tabacum and
          Arabidopsis thaliana and even its tomato sequence was able to guide
          specific expression in optimal levels in other plants [5,6,7].
          Promoters like pLAT52 are key for a local transformation method and
          can be found through the research around pollen development in the
          desired plant. Due to these characteristics, this method can be
          expanded to other projects, whether they use Solanum lycopersicum or
          not.
        </p>

        <p>
          Let.it.bee.'s results indicate a successful and sufficient specific
          expression, with no leaks to other plant tissues detected by our GUS
          assay and qPCR. The blue coloring was detected in the pollen of
          transformed plants, as well as the qPCR data, which showed no leaks.
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/5/5b/T--USP-Brazil--IGEM-USP-BestPlant-figure1.png"
          />
        </figure>

        <p>
          We hope that our characterization in our Wiki and Registry page can be
          of help for other teams looking for a pollen promoter, as well as
          offering a basic design for local expression projects.
        </p>

        <h2>A new chassis for iGEM: Micro-Tom</h2>

        <p>
          Considering the desirable features we needed for Let.it.bee., we chose
          to use a different plant chassis: the Micro-Tom.
        </p>

        <p>
          Micro-Tom (MT) is a dwarf tomato (Solanum lycopersicum), its small
          appearance can be attributed to some genetic mutations [1,2]. MT has
          been released as a genetic tool in 1997, ever since then being used as
          a model plant for many types of studies, especially related to fruit
          development [3].
        </p>

        <p>
          Being a tomato cultivar, MT is a member is the Solanaceae family, that
          englobes, among many other species, the tobacco, potatoes, eggplant
          and pepper [4]. Being related to plants of interest and having
          multiple features of interest for easier experiment conduction, it
          became a meaningful model plant for studies.
        </p>

        <p>
          This plant has some advantages over other more common chassis, their
          flowers and fruits are more well developed than Arabidopsis thaliana
          and are smaller than Nicotiana tabacum. In our case, it also had
          better growth in our lab in comparison to A. thaliana, better
          developing in our greenhouse and thus providing more test material.
          These characteristics together with many others make it a nice
          addition to the chassis repository [3]:
        </p>

        <ul>
          <li>Produces fruits</li>
          <li>Produces pollen (in our case, it was very important)</li>
          <li>Small size [3]</li>
          <li>Easy to transform [1]</li>
          <li>Can grow at densities as high as 1357 plants/m3 [2]</li>
        </ul>

        <p>
          Micro-Tom can be a great chassis for other projects, helping them
          analyze the results they need and <b>expand their creativity</b> by
          having one more model plant to consider during the idealization of the
          idea
        </p>

        <div class="columns is-vcentered">
          <figure class="column is-half">
            <img
              src="https://2021.igem.org/wiki/images/8/8e/T--USP-Brazil--IGEM-USP-BestPlant-figure2.png"
              alt=""
            />
          </figure>
          <div class="column is-half">
            <p>
              To help future teams that are thinking about using Micro-Tom as
              their chassis, we have created a
              <b
                >mini-handbook as a quick initial guide for both helping you
                decide whether you want to use it as a chassis and giving
                important information
              </b>
              for you to use it!
            </p>
          </div>
        </div>
        <p>
          You can find the PDF for the handbook<a
            href="ttps://2021.igem.org/wiki/images/b/b0/T--USP-Brazil--IGEM-USP-BestPlant-Microtom.pdf"
          >
            here</a
          >!
        </p>

        <h2>References</h2>
        <div class="references">
          <ol>
            <li>
              ESMERALDA Martí, Carmina Gisbert, Gerard J. Bishop, Mark S. Dixon,
              José L. García-Martínez, Genetic and physiological
              characterization of tomato cv. Micro-Tom, Journal of Experimental
              Botany, Volume 57, Issue 9, June 2006, Pages 2037–2047,
              [https://doi.org/10.1093/jxb/erj154](https://doi.org/10.1093/jxb/erj154)
            </li>
            <li>
              ROTHAN, C., Just, D., Fernandez, L., Atienza, I., Ballias, P., &
              Lemaire-Chamley, M. (2016). Culture of the Tomato Micro-Tom
              Cultivar in Greenhouse. Methods in Molecular Biology, 57–64.
              doi:10.1007/978-1-4939-3115-6_6
            </li>
            <li>
              ESALQ. Micro-Tom Mutants. Retrieved in October 5th, 2021 from
              [http://www.esalq.usp.br/tomato/](http://www.esalq.usp.br/tomato/)
            </li>
            <li>
              SHIKATA, M., & Ezura, H. (2016). Micro-Tom Tomato as an
              Alternative Plant Model System: Mutant Collection and Efficient
              Transformation. Methods in Molecular Biology, 47–55.
              doi:10.1007/978-1-4939-3115-6_5
            </li>
            <li>
              TWELL D, Yamaguchi J, McCormick S. Pollen-specific gene expression
              in transgenic plants: coordinate regulation of two different
              tomato gene promoters during microsporogenesis. Development. 1990
              Jul;109(3):705-13. PMID: 2401221.
            </li>
            <li>
              TWELL D, Wing R, Yamaguchi J, McCormick S. Isolation and
              expression of an anther-specific gene from tomato. Mol Gen Genet.
              1989 Jun;217(2-3):240-5. doi: 10.1007/BF02464887. PMID: 2770694.
            </li>
            <li>
              TAIR. AT5G45880. Retrieved in Oct 10th 2021, from
              [https://www.arabidopsis.org/servlets/TairObject?type=locus&name=AT5G45880](https://www.arabidopsis.org/servlets/TairObject?type=locus&name=AT5G45880)
            </li>
          </ol>
        </div>
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
  name: "Plant",

  components: {
    Nav,
    Footer,
    Backtotop,
    Collapsible,
  },
};
</script>
