<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/f/f2/T--USP-Brazil--IGEM-USP-Implementation-banner.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth"></div>
      <Backtotop />
      <div class="content column is-three-fifth">
        <img
          src="https://2021.igem.org/wiki/images/2/26/T--USP-Brazil--IGEM-USP-Implementation-DailyRate.png"
        />

        <!--- Introduction --->
        <h2>Introduction</h2>
        <blockquote cite="[1] - Luís Rangel">
          <p>
            <cite>
              "The issue is, within the perspective of protecting pollinators,
              to manage the environmental risk posed by pesticides, integrating
              agronomic knowledge" [1] - Luís Rangel
            </cite>
          </p>
        </blockquote>
        <p>
          We knew that bees and pollination are essential to our ecological and
          economical systems and also that they were being gravely affected by
          the off-target action of neonicotinoids due to its misuse in the
          farming areas. However, simply banning these pesticides wouldn't be
          wise.
        </p>
        <p>
          Neonicotinoids are one of the most important groups of insecticides
          nowadays. They are highly effective against economically aggravating
          pests, like aphids, leafhoppers and whiteflies [2]. These substances
          also affect directly the nervous system of insects, being highly safe
          for humans [2]. Other equivalents have devastating effects on the
          environment - such as the infamous DDTs. France tried banning
          neonicotinoids and had to bring them back due to resistant pests [3].
          This shows how hard it is to abolish one of the most used methods of
          maintaining crops in agriculture. In Brazil, if neonicotinoids were to
          be completely removed, sugar cane, cotton and soy, the most important
          crops in our economy, would be negatively affected [1].
        </p>
        <p>
          To solve this big dilemma we came up with the idea to make plants
          capable of metabolizing neonicotinoids in a pollen-specific way. That
          way, chemicals would act and protect the plant's body while the pollen
          wouldn't be affected. Therefore, bees - and other pollinators - could
          continue their hard work without being contaminated.
        </p>
        <p>
          This way we can
          <b>
            bring together the productivity that both neonicotinoid's protection
            and pollination bring to our agriculture.
          </b>
        </p>
        <p>
          Here we want to discuss why Let.it.bee. would be important for its
          users, who are these users and how we would implement it in the world.
        </p>

        <!--- The Let.it.bee. product --->
        <h2>The Let.it.bee. product</h2>
        <p>
          In practical terms, Let.It.Bee. is an
          <b>
            adaptable genetic circuit
          </b>
          joining the CYP6G1, which can metabolize the Imidacloprid (a famous
          type of neonicotinoid) molecules, and the LAT52 pollen-specific
          promotor, which guarantees that the enzyme will only be expressed in
          the plant's pollen. With this circuit, we can generate plants that
          metabolize the neonicotinoid locally.
        </p>
        <p>
          The choice of the CYP and the promoter (and the addition of the GUS
          reporter + self-cleaving peptide) were
          <b>
            particular for this first circuit as a proof of concept,
          </b>
          but the beauty of synthetic biology is that it is modular. That means
          that either one or even both of them
          <b>
            could be changed to fit another plant or pesticide if needed.
          </b>
        </p>
        <img
          src="https://2021.igem.org/wiki/images/9/94/T--USP-Brazil--IGEM-USP-Implementation-Basic.png"
        />
        <p>
          The LAT52
          <u>
            promoter
          </u>
          has already been tested in other plants, such as
          <em>
            Arabidopsis thaliana
          </em>
          and
          <em>
            Nicotiana tabacum,
          </em>
          with successful and optimal local expression in pollen, suggesting
          that it can be used for many other crops too since there are homologs
          to the LAT52 gene [6]. In case it does not have an optimal expression,
          the Let.it.bee. circuit can be easily adapted to other species by
          <b>
            changing the promoter to a pollen-specific promoter from the plant
          </b>
          you wish to transform.
        </p>
        <p>
          The CYP6G1
          <u>
            enzyme
          </u>
          also can be used for different pesticides, promiscuity has been
          reported in the CYP P450 superfamily, so it is common for them to have
          many substrates [7, 8, 9]. For example, there are articles reporting
          the degradation capacity of DDT by the CYP6G1, too, so our circuit is
          also resistant to DDT [10]. However, if needed, there are many other
          cytochromes P450 that have been known to metabolize many kinds of
          pesticides, such as CYP6D1, CYP6BQ9, CYP4E3 and CYP4G16 from resistant
          insects [11, 12]. Depending on the crop, other kinds of pesticides can
          be used in a higher or lower quantity, so all that is needed for
          Let.it.bee. to work on them is to
          <b>
            change or add another CYP P450
          </b>
          to the circuit.
        </p>

        <!--- Who will use it? --->
        <h2>Who will use it?</h2>
        <p>
          Our competitive differential compared to other bee conservation
          projects is that our technology is based on synthetic biology, which
          allows it to protect the crops from the real pests while also
          protecting the bees that are so important to our environment and
          increasing productivity through pollination.
          <b>
            That makes it actually applicable for crops, a safer option for
            farmers.
          </b>
        </p>
        <p>
          Our Let.It.Bee. circuit is meant for both the
          <b>
            big and small players in the agribusiness,
          </b>
          from independent/family farmers to big companies.
        </p>
        <p>
          Unfortunately, throughout our
          <a href="https://2021.igem.org/Team:USP-Brazil/Human_Practices"
            >Integrated Human Practices</a
          >
          work we learned that a lot of farmers and beekeepers do not know a lot
          about the relationship between the misuse of neonicotinoids and the
          mass death of bees, even less about their whole importance to the
          economy and crop productivity, so first we would have to elaborate
          more communication strategies to spread the word about the bees
        </p>
        <p>
          By opting for our transgenic technology with Let.It.Bee., the
          <b>
            farmers will finally be closer to achieving full capacity
          </b>
          from their crops and the
          <b>
            beekeepers will have more safety for their hives,
          </b>
          with increasing productivity of honey, royal jelly and beeswax, too.
          In the bigger picture of the national and international agribusiness,
          these players will have the benefit of marketing their plants as
          <b>
            bee-friendly,
          </b>
          since the whole situation has been gaining more and more attention
          from the media.
        </p>
        <p>
          Nevertheless, the subject of the
          <b>
            use of neonicotinoids in agriculture is very polemic.
          </b>
          Many big agricultural companies in Brazil search for a method of
          minimizing its consequences due to the environmental effects it has.
          We have learned that there is a big interest in the industry for a
          product that would preserve the fauna and flora while maintaining the
          productivity of crops. Companies like Embrapa and Ouro Fino (the most
          influential agricultural companies in Brazil) gave us big compliments
          for the project and showed that there is interest from companies in
          what we do.
        </p>
        <p>
          The users will thus have a bunch of benefits:
        </p>
        <ul>
          <li>Increase in productivity and quality of the product.</li>
          <li>Marketing as bee-friendly products.</li>
          <li>Financial gain.</li>
        </ul>

        <!--- Development of the devices --->
        <h2>Development of the devices</h2>
        <h3>Design and synthesis</h3>
        <p>
          The development process of the Let.it.bee. device (the circuit) begins
          with the definition of the plant species and, consequently, the
          type(s) of pesticide(s). Depending on the plant and substance type,
          the
          <b>
            circuit may need modifications
          </b>
          (in case the target pesticide is not metabolized by CYP6G1 or if the
          plant chassis does not have an optimal local expression by the pLAT52,
          for example).
        </p>
        <p>
          In the light of these facts, the circuit can be appropriately designed
          and synthesized in a binary vector for
          <em>
            Agrobacterium tumefaciens,
          </em>
          in order for the desired plant to be stably transformed. The
          transformation should happen accordingly to the biosafety procedures
          in the country, as we explain in the Biosafety sector of this page!
        </p>
        <h3>Transformation</h3>
        <p>
          The plant transformation should happen in a
          <b>
            specialized lab
          </b>
          for Let.it.bee., following the correct protocols for each species with
          <em>
            A. tumefaciens.
          </em>
          After the cell transformation in Petri, the plants can be regenerated
          and cultivated in the greenhouse, so they can reach maturity and
          generate offspring.
        </p>
        <h3>In the hands of users</h3>
        <p>
          The users will receive the
          <b>
            offspring's seeds to plant,
          </b>
          for they will be more stable than the generation of plants directly
          regenerated from the Petri plate. The seed will already be treated
          with the neonicotinoid by the user, as per the pesticide instructions,
          and the substance will spread through the whole body of the plant. In
          maturity, when the flower and, consequently, the anther start to
          develop and pollinators might be at risk when they try to pollinate
          the plant, Let.it.bee. will start to function and metabolize the
          neonicotinoid into less toxic metabolites. The crop then becomes safe
          for bees.
        </p>
        <p>
          Of course, this whole process will only be possible under safe and
          regulated conditions, so let's talk about it.
        </p>

        <!--- Biosafety --->
        <h2>Biosafety</h2>
        <p>
          The objective of our project is to create a genetically modified
          organism (GMO). Therefore, our main concern would be how to
          <b>
            manage and distribute it safely.
          </b>
        </p>
        <p>
          Brazil has many organizations and laws that cover the use of GMOs.
          They approve their research and commercialization, all within safety
          norms and inspection mechanisms [4]. Proper equipment and laboratory
          would be required to further develop the project, as well as a highly
          trained team. We already have a vast preparation on how to handle GMOs
          and chemicals, and we also have all the laboratory e protection
          equipment necessary for the initial steps.
        </p>
        <p>
          For further phases, we would require field testing with different
          types of plants, insecticides and also testing directly with bees
          before fully releasing Let.it.bee. into the world for production. We
          would do all following the Brazilian laws of research and science, as
          well as of the ethics in the research committee.
        </p>
        <p>
          We would have to follow all of those regulations and the one about
          commercial use and registry of transgenic plants, as well as to patent
          our circuit idea [5].
        </p>
        <p>
          Additionally, all of our
          <b>
            lab work and lab spaces have to be certified for biosafety
          </b>
          according to regulations.
        </p>

        <!--- References --->
        <h2>References:</h2>
        <div class="references">
          <ol>
            <li>
              RANGEL, LEP, et al. "Uso de Neonicotinoides no Brasil-situação
              atual dos produtos registrados." Embrapa Uva e Vinho-Artigo em
              anais de congresso (ALICE). In: WORKSHOP RELAÇÃO PRODUTIVA ENTRE
              AGRICULTURA E APICULTURA, 1., 2014, Belo Horizonte. Anais... Belo
              Horizonte: SBDA, 2014., 2014.
            </li>
            <li>
              Blacquiere, Tjeerd, et al. "Neonicotinoids in bees: a review on
              concentrations, side-effects and risk assessment." Ecotoxicology
              21.4 (2012): 973-992.
            </li>
            <li>
              https://www.bee-life.eu/post/a-lesson-from-france-s-return-to-neonicotinoids-we-need-a-structural-shift-towards-sustainability
            </li>
            <li>
              http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm
            </li>
            <li>
              https://sistemas.agricultura.gov.br/snpc/cultivarweb/index.php
            </li>
            <li>
              TWELL D, Yamaguchi J, McCormick S. Pollen-specific gene expression
              in transgenic plants: coordinate regulation of two different
              tomato gene promoters during microsporogenesis. Development. 1990
              Jul;109(3):705-13. PMID: 2401221.
            </li>
            <li>
              GUO J, Ma X, Cai Y, Ma Y, Zhan Z, Zhou YJ, Liu W, Guan M, Yang J,
              Cui G, Kang L, Yang L, Shen Y, Tang J, Lin H, Ma X, Jin B, Liu Z,
              Peters RJ, Zhao ZK, Huang L. Cytochrome P450 promiscuity leads to
              a bifurcating biosynthetic pathway for tanshinones. New Phytol.
              2016 Apr;210(2):525-34. doi: 10.1111/nph.13790. Epub 2015 Dec 18.
              PMID: 26682704; PMCID: PMC4930649.
            </li>
            <li>
              O’REILLY, E., Corbett, M., Hussain, S., Kelly, P. P., Richardson,
              D., Flitsch, S. L., & Turner, N. J. (2013). Substrate promiscuity
              of cytochrome P450 RhF. Catalysis Science & Technology, 3(6),
              1490. doi:10.1039/c3cy00091e
            </li>
            <li>
              EKROOS, M., & Sjogren, T. (2006). Structural basis for ligand
              promiscuity in cytochrome P450 3A4. Proceedings of the National
              Academy of Sciences, 103(37), 13682–13687.
              doi:10.1073/pnas.0603236103
            </li>
            <li>
              JOUSSEN N, Heckel DG, Haas M, Schuphan I, Schmidt B. Metabolism of
              imidacloprid and DDT by P450 CYP6G1 expressed in cell cultures of
              Nicotiana tabacum suggests detoxification of these insecticides in
              Cyp6g1-overexpressing strains of Drosophila melanogaster, leading
              to resistance. Pest Manag Sci. 2008 Jan;64(1):65-73. doi:
              10.1002/ps.1472. PMID: 17912692.
            </li>
            <li>
              ZHANG, W., Yao, Y., Wang, H., Liu, Z., Ma, L., Wang, Y., & Xu, B.
              (2019). The Roles of Four Novel P450 Genes in Pesticides
              Resistance in Apis cerana cerana Fabricius: Expression Levels and
              Detoxification Efficiency. Frontiers in Genetics, 10.
              doi:10.3389/fgene.2019.01000
            </li>
            <li>
              PANG, R., Chen, M., Liang, Z. et al. Functional analysis of
              CYP6ER1, a P450 gene associated with imidacloprid resistance in
              Nilaparvata lugens. Sci Rep 6, 34992 (2016).
              https://doi.org/10.1038/srep34992
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
table {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}
</style>
