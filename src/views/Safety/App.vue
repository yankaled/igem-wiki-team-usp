<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/4/44/T--USP-Brazil--IGEM-USP-Design-Banner.png"
      />
    </div>
    <section class="columns">
      <div class="column is-one-fifth"></div>
      <div class="content column is-three-fifth">
        <h2>GENETIC CIRCUIT OVERVIEW</h2>
        <p>
          The Let.it.bee. project aims to aid bee populations by the development
          of an adaptable genetic circuit for plants, capable of
          <b
            >metabolizing the Imidacloprid pesticide specifically in pollen
            tissue, inserted in a micro-tomato plant.</b
          >
          >
          <br />
          Our circuit design (Fig,1) is therefore composed by:
        </p>
        <ul>
          <li>
            A <b>specific pollen promoter</b>, to avoid off targets tissues.
          </li>
          <li>
            A <b>LP4/2A peptide</b>, to allow expression of two genes under the
            same promoter.
          </li>
          <li>
            A <b>CYP6G1</b> enzyme, to metabolize the Imidacloprid pesticide.
          </li>
          <li>
            A <b>GUS</b> reporter gene, for qualitative and quantitative
            expression tests.
          </li>
        </ul>
        <img
          src="https://2021.igem.org/wiki/images/5/56/T--USP-Brazil--IGEM-USP-Design-Figure1.jpg"
        />

        <p>
          For plant transformation with the genetic circuit we built, we need it
          to first be inserted into a <b>binary vector</b> (Fig, 2) for
          Agrobacterium tumefaciens, containing elements specific for plants,
          such as the nptII kana
        </p>
        <img src="https://2021.igem.org/File:T--USP-Brazil--img--Joao.52695277.jpg" />
        <p>
          You can know more about each of the listed specific genetic parts of
          our circuit in the next sections!
        </p>
        <h2>POLLEN SPECIFIC EXPRESSION</h2>
        <p>
          Although neonicotinoids can be harmful to bees, they are to this day
          some of the best products against pests, because of both their
          <b>efficacy</b> in protecting the plant from them and their
          <b>selectiveness</b> to insects. Therefore, we can not harm the
          pesticide function, the enzyme can not be expressed in the whole
          plant, but rather only in specific tissues while
          <b
            >keeping leaves and other places, that are mostly targeted by pests
            and not by bees, protected.</b
          >
        </p>
        <p>
          For our project to work, we need the pesticide metabolizing enzyme to
          be specifically expressed , as to not harm the substance efficacy
          agains pests. Thus, our circuit has to be expressed specifically in
          plant tissues that bees come in contact with the most during
          pollination: <b>nectar and pollen.</b>
        </p>
        <p>
          Our chassis, the <b>micro-tomato plant,</b> does not produce nectar ,
          so we used a tissue specific promoter that is only expressed in
          pollen: the
          <b>LAT52 promoter.</b>
        </p>
        <p>
          pLAT52 is an anther specific promoter, highly expressed during pollen
          maturation. Previous mature anthers GUS assays in the literature
          showed that there is <b>high level sof expression in anthers,</b> with
          almost no activity in other organs, be them vegetative or floral. It
          displayed <b>high specificity to pollen,</b> especially in comparison
          with other anther promoters like pLAT59 [1].
        </p>
        <p>
          Besides tomatoes, the pLAT52 has been tested in other plants, such as
          Arabidopsis thaliana and Nicotiana tabacum, with very similar results
          for the specificity of its functions [1]. It also has homologues in
          other plant species [7].
        </p>
        <h2>A VIRAL AND PLANT PEPTIDE FOR GENE EXPRESSION</h2>
        <p>
          The <b>2A</b> peptides, also known as
          <b>self cleaving peptides,</b> are short sequences of aminoacids found
          encoded on many viral DNAs. As it's name sugests, this class of
          peptides can be cleaved, usualy by a method known as ribosome
          skipping, in witch, during the translation, the ribosome misattaches
          two aminoacids of the sequence, producing two separated proteins.
        </p>

        <p>
          Thoses sequences can be used as <b>tools</b> for a syntethic
          biologist, allowing the
          <b
            >expression of more than one protein to be regulated by the same
            promoter,</b
          >
          even in eukariotes.
        </p>
        <p>
          One of the problems of this technique is that, during the skipping,
          the ribosome may fall off, or do not skip at all, producing an
          uncleaved and potentialy useless protein, lowering the eficiency of
          production of the subsequent protein by as much as 50%. To bypass this
          issue the <b>fusion</b> of the foot and mouth virus 2A peptide with a
          plant self cleaving peptide (LP4) found in the seeds of Impatiens
          balsamina has proven to be a good solution,
          <b>enhancing the cleavage rate to about 80% to 90% </b>[2].
        </p>
        <p>
          In our project this tecnology was used to express the detoxifing
          enzyme (upstream) with the gene reporter (downstream), so when the GUS
          reporter was present, so should be the CYP6g1. By using this method
          <b>we lowered the size, complexity and cost of our circuit.</b>
        </p>
        <img src="https://2021.igem.org/File:T--USP-Brazil--img--Joao.52695277.jpg" />
        <h2>
          A DETOXIFYING ENZYME
        </h2>
        <p>
          There are many enzymes that are capable of metabolizing pesticides.
          Among them, a superfamily of proteins that is specialized in the
          metabolism of compounds like toxins and drugs have been revealed as a
          possible solution to our project: the
          <b>cytochromes P450 (or CYPs) superfamily.</b> They can be found in
          all kingdoms of life, from bacteria to us humans, but the most
          interesting for the Let.it.bee. project are the
          <b>pesticide resistant organisms</b> they can be found in. It has been
          noticed that different CYPs expressed by those insects are directly
          involved in the metabolization of different kinds of pesticides,
          resulting in their resistance.
        </p>
        <p>
          Some fruit flies, Drosophila melanogaster, overexpress by 10 to 100
          times a type of CYP, named <b>CYP6G1.</b> This overtranscription has
          been correlated to their <b>resistance to Imidacloprid</b> and assays
          with the enzyme shows it is very effective in metabolizing the
          phytosanitary product. In 48h it metabolized 83% of the Imidacloprid
          [3]:
        </p>
        <img
          src="https://2021.igem.org/wiki/images/9/9a/T--USP-Brazil--IGEM-USP-Design-Figure3.png"
        />
        <br />
        <br />
        <p>
          Later, 4 and 5 hydroxyimidacloprid can be metabolised again by CYP6g1
          to form 4, 5-hydroxyimidacloprid, and can spontaneously react in an
          acid media to form olefine. These metabolites are also more
          <b>hydrophyllic</b> than the parent compound Imidacloprid, so it is
          <b>quicker for the insect to excrete it from its body</b> [3].
        </p>
        <p>
          In addition to these facts, the CYP6G1 has also already been
          succesfully expressed in a plant, Nicotiana tabacum, making it a even
          more secure option for our project [3].<br />
          In the table bellow there is a table indicating the median lethal dose
          (LD50) of imidacloprid and its main metabolites on Apis mellifera in
          ng/bee:
        </p>
        <img
          src="https://2021.igem.org/wiki/images/f/f5/T--USP-Brazil--IGEM-USP-Design-Figure4.png"
        />
        <h2>OUR CHASSIS: MICRO-TOM</h2>

        <p>
          For this project, we used a new chassis in iGEM: the
          <b>Micro-Tomato.</b> It is a miniature dwarf of tomato released in
          1989, by J. Scott and B. Harbaugh, for home gardening and only in 1997
          became a genetic tool. That role fits the micro-tom (MT) very well, it
          has many characteristics that made it the perfect chassis for our
          project:
        </p>
        <ul>
          <li>Relatively <b>small genome</b> (950Mb)</li>
          <li><b>Small size.</b></li>
          <li>
            <b>Short life cycle</b> it takes about 6 months to mature, a
            incredible tool for plant projects since plant growth takes a long
            time. For our project, time was a great
          </li>
          <li>
            Is a <b>well described model</b>, which helps us gather more
            information for our modelling. In the pandemic situation, in which
            our lab access was highly restricted, data availability was very
            important for the mathematical modelling development (you can check
            our models at COLOCAR LINK Model page)
          </li>
          <li>
            <b>Commercial interest,</b> since tomatoes are planted for the food
            industry. Because of the essence of our project, helping develop a
            more sustainable agricultre, it is only fair that we test on a plant
            that is already part of that scenario.
          </li>
        </ul>
        <img src="https://2021.igem.org/File:T--USP-Brazil--img--Joao.52695277.jpg" />
        <img src="https://2021.igem.org/File:T--USP-Brazil--img--Joao.52695277.jpg" />

        <h2>References:</h2>
        <div class="references">
          <ol>
            <li>
              TWELL, D. & McCormick, S.. Pollen-specific gene expression in
              transgenic plants: coordinate regulation of two different tomato
              gene promoters during microsporogenesis. 1990 Jul;109(3):705-13.
              PMID: 2401221.
            </li>
            <li>
              SUN H, Zhou N, Wang H, Huang D, Lang Z. Processing and targeting
              of proteins derived from polyprotein with 2A and LP4/2A as peptide
              linkers in a maize expression system. PLoS One. 2017 Mar
              30;12(3):e0174804. doi: 10.1371/journal.pone.0174804. PMID:
              28358924; PMCID: PMC5373624.
            </li>
            <li>
              JOUßEN, N., Heckel, D. G., Haas, M., Schuphan, I., & Schmidt, B.
              (2007). Metabolism of imidacloprid and DDT by P450 CYP6G1
              expressed in cell cultures ofNicotiana tabacum suggests
              detoxification of these insecticides inCyp6g1-overexpressing
              strains ofDrosophila melanogaster, leading to resistance. Pest
              Management Science, 64(1), 65–73. doi:10.1002/ps.1472
            </li>
            <li>
              ESALQ. Micro-tom mutants. Retrieved in 20 Sept, 2021 from
              http://www.esalq.usp.br/tomato/
            </li>
            <li>
              IHARA, M., & Matsuda, K. (2018). Neonicotinoids: molecular
              mechanisms of action, insights into resistance and impact on
              pollinators. Current Opinion in Insect Science.
              doi:10.1016/j.cois.2018.09.009
            </li>
            <li>
              Suchail, Séverine. (2000). Toxicity of imidacloprid metabolites in
              Apis mellifera.
              https://www.researchgate.net/publication/305496382_Toxicity_of_imidacloprid_metabolites_in_Apis_mellifera
            </li>
            <li>
              Twell, D., Wing, R., Yamaguchi, J., & McCormick, S. (1989).
              Isolation and expression of an anther-specific gene from tomato.
              MGG Molecular & General Genetics, 217(2-3), 240–245.
              doi:10.1007/bf02464887
            </li>
            <li>
              BUZZABOUTBEES. Do bees pollinate tomatoes? Retrieve in October
              1st, 2021 from
              https://www.buzzaboutbees.net/bees-pollinate-tomatoes.html
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

export default {
  name: "Description",

  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped></style>
