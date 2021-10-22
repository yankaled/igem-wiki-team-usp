<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/5/5a/T--USP-Brazil--IGEM-USP--Contribution-Banner.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth">
        <aside class="is-sticky is-hidden-touch">
          <div class="sub-navigation sub-menu-content">
            <div>
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#Handbook"
              >
                Protein structure prediction handbook
              </a>
            </div>
            <div class="">
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#CYP"
              >
                Adding data about CYP3A4
              </a>
            </div>
            <div class="">
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#Ref"
              >
                References
              </a>
            </div>
          </div>
        </aside>
      </div>
      <Backtotop />
      <div class="content column is-three-fifth">
        <p>
          On this page we show our special contributions to future iGEM teams
          and researchers, by trying to pass on some of the knowledge and
          abilities we learned while developing our project. The COVID-19
          pandemic was a major obstacle for us during the last two years, it
          kept us from doing experiments in the lab throughout most of the time,
          but from that difficulty we came up with the
          <b>
            Protein Structure Prediction Handbook.
          </b>
          We also learned a lot about many enzymes from the CYP P450
          superfamily, that can be useful for many types of projects, thus we
          decided to share some of what we learned by
          <b>
            adding data to the CYP3A4
          </b>
          in the Registry. <span id="Handbook"></span>
        </p>

        <p>
          Nonetheless, we didn't stop at CYP3A4. We also added a <b> new sequence for CYP6g1 with optimized codons for plants</b> <a href="http://parts.igem.org/Part:BBa_K3890006" target="_blank">BBa_K3890006</a>. That way, we intened to save time for any team who wishes to use this plant in a plant chassis, like we did.
        </p>

        <!--- Protein structure prediction handbook --->
        <h2>Protein structure prediction handbook</h2>

        <h3>Why we created the handbook</h3>
        <p>
          Faced with the limited situation brought by the
          <b>
            pandemic,
          </b>
          our team had to
          <b>
            rethink its experiments.
          </b>
          We had to find ways to understand our protein and its interactions
          with the pesticide, while still being far away from our lab. Searching
          for literature, we
          <b>
            did not even find its crystallographic structure,
          </b>
          which would have been the most important feature. Among the options,
          molecular modelling seemed to be the most interesting one.
        </p>
        <p>
          At first, we really had seen ourselves at the bottom of the pit.
          Nobody knew anything about protein modelling. After months of research
          and contact with specialists, we realized how molecular modelling was
          difficult.
          <b>
            We struggled to find the information we needed
          </b>
          and even more to apply it to several programs to do our experiments.
          Also, there was another hindrance we found in our way: the
          <b>
            high price of several programs,
          </b>
          making them inaccessible for us.
        </p>
        <p>
          Having these factors in mind, our objective while writing this
          handbook was to
          <b>
            give a shortcut in the usage of different programs while we showed
            why and how we were performing each step.
          </b>
          Also, having the economic factor in mind, we decided to only use
          <b>
            open-source programs,
          </b>
          facilitating the access and studies of scientists around the world.
          This way, by turning our journey into a handbook, we could maybe help
          other teams and researchers that also have to use a protein structure
          in their project that was not yet studied.
        </p>
        <h3>A little about what you can find in our handbook</h3>
        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/0/0e/T--USP-Brazil--IGEM-USP-Contributtion-Alittle.png"
          />
        </figure>
        <p>
          Our handbook has a logical sequence of steps that approaches from
          <b>
            <u>
              protein homology and blast
            </u>
          </b>
          to
          <b>
            <u>
              protein modeling and molecular docking.
            </u>
          </b>
        </p>
        <p>
          We decided to use the CYP6G1, which is a member of the cytochrome P450
          superfamily of enzymes, as our object of study because it was the
          focus of our project in general.
        </p>
        <p>
          As there was no CYP6G1 structure deposited in the
          <a href="https://www.rcsb.org/">RCSB.org</a>
          (an important website for structural biologists where solved proteins
          models are available) we started the handbook by telling future users
          about
          <b>
            comparative modeling
          </b>
          and what we could do if we did not have our object of study
          crystallized or deposited in RSCB.org. Consequently, we delved into
          the choice of a
          <b>
            template protein
          </b>
          and the usage of BLAST system. Then, we described the
          <b>
            modeller program
          </b>
          which is a protein modeling software known for demanding little
          computer processing.
        </p>
        <p>
          After introducing about protein modeling and modeller, we present the
          <b>
            experimental procedure section
          </b>
          in which we detailed the command lines for the alignment of proteins
          after the choice of the template protein, giving a broad view of each
          command and line involved. Then, we present how the modeling process
          is in modeller software. After this step, we taught how the modeling
          refination could be realized using programs as
          <a href="https://toolkit.tuebingen.mpg.de/tools/quick2d">quick2D</a>
          and I-tasser, showing the excellence of our model compared to the well
          known established database for modeled proteins: the
          <a href="https://alphafold.ebi.ac.uk/">alphafold.</a>
        </p>
        <p>
          Noticeably, for scientists,
          <b>
            there is no science without methods of validation.
          </b>
          Thus, we also created a section that introduced some tools employed to
          validate the software-based CYP6G1 models created while we explained
          why and how each one of these tools could be used.
        </p>
        <p>
          Not satisfied with presenting distinguished aspects and programs for
          protein modeling, our team created a 3rd section for
          <b>
            molecular docking
          </b>
          in the handbook. Molecular docking is very important to understand
          aspects of the
          <b>
            interaction between ligands and proteins.
          </b>
          Having this in mind, the section started by describing molecular
          docking and its process of
          <b>
            molecular recognition.
          </b>
          Thereafter, we explained
          <b>
            molecular interactions
          </b>
          and what can be observed in docking followed by a brief explanation of
          evaluation scores functions used by docking programs. Then, we
          described how molecular docking is used in distinct industries.
        </p>
        <p>
          This section ends by demonstrating each step needed to carry out a
          proper molecular docking experiment using an open-source website (
          <a href="https://dockthor.lncc.br/v2/">dockthor</a>
          ). As we have pointed out, we wanted to present some free ways for
          future teams and researchers to carry out their own modeling road, and
          Dockthor fills these requirements.
        </p>
        <p>
          Thus, we presented tools for protein parameterization (
          <a href="https://server.poissonboltzmann.org/pdb2pqr">pdb2pqr</a>
          ), ligand minimization (chem3d), structure visualization (Studio
          Discovery Visualizer), file converter (Open Babel), explaining in
          details each part at the handbook.
        </p>
        <p>
          If you enjoy learning about protein modeling and molecular docking and
          want to check out for more information, please access our handbook
          <a
            href="https://2021.igem.org/wiki/images/2/23/T--USP-Brazil--IGEM-USP-Contribution-Handbook.pdf"
            >by clicking here.</a
          >
          <span id="CYP"></span>
        </p>

        <!--- Adding data to CYP3A4 --->
        <h2>Adding data about CYP3A4</h2>
        <p>
          Our project was based on the CYP6G1 and its properties, but
          researching and understanding relevant characteristics of this enzyme
          proved to be very demanding. So nothing better for us than to aid
          future teams that might be thinking of using this CYP superfamily in
          their own project by providing some important information about one of
          them.
        </p>
        <p>
          The CYP3A4 enzyme (BBa_K1064004) has the function of metabolizing a
          vast diversity of molecules in the cell naturally, being part of the
          cytochromes P450 superfamily and also the
          <b>
            most abundant xenobiotic-metabolizing cytochrome P450 isoform,
          </b>
          with the CYP3A4 encoding gene located on chromosome 7 in humans [1,2].
        </p>
        <p>
          Being such an important enzyme, much work and research are carried out
          with it, and the vast knowledge about this protein makes it a prime
          candidate for synthetic biology experiments. Thus, we reckon that
          adding more data about this enzyme to the iGEM Registry page could be
          very helpful for future teams to understand more about its potential,
          limitations and usages. On this expansion of data, we aimed to
          introduce
          <b>
            relevant and introductory information
          </b>
          on a wide range of topics regarding the enzyme, such as its
          <b>
            interactions with other molecules, structure and genetic
            variability.
          </b>
          Those topics can be especially useful in figuring out the
          applicability of the enzyme to an idea, its modeling, as well as
          possible modification mechanisms that one might want to apply.
          Hopefully we can provide a
          <b>
            good headstart for other teams
          </b>
          interested in it to more easily situate themselves and then find more
          articles on their own specific interests.
        </p>
        <h3>Some Information About CYP3A4</h3>
        <p>
          This enzyme is capable of
          <b>
            metabolizing toxic substances,
          </b>
          like insecticides (Azinphos-methyl; carbaryl; chlorpyrifos; diazinon;
          imidacloprid; parathion; phorate), insect repellents (DEET),
          herbicides (Acetachlor; alachlor; ametryne; atrazine; butachlor;
          terbuthylazine; terbutryne) and numerous drugs (Erythromycin,
          alprazolam, felodipine, simvastatin, testosterone, testosterone,
          verapamil, vincristine), with the hydroxylation of an sp³ C-H bond as
          one of the ways in which CYP3A4 affects its ligand [3,4,5,6]. A vital
          part of its
          <b>
            ability to metabolize toxic substances lies on the heme group
          </b>
          present inside its structure, which is very flexible and is able to
          interact with various types of substrates [1].
        </p>
        <p>
          It is possible to
          <b>
            induce a heightened production of CYP3A4
          </b>
          through a variety of ligands. These ligands bind to a specific
          receptor called
          <b>
            pregnane X (PXR).
          </b>
          The activated complex forms a heterodimer that binds to a regulatory
          region of the CYP3A4 gene and this interaction can result in an
          increased transcription of the enzyme due to the
          <b>
            cooperative interaction with the proximal promoter regions
          </b>
          of the gene [7].
        </p>
        <p>
          Also, besides showing the ligands and types of interactions with
          CYP3A4, we also present some types of
          <b>
            mutations recently reported
          </b>
          in the CYP3A4 gene. While some of them result in a decrease in the
          enzyme activity, most of them do not [8].
        </p>
        <p>
          For teams aiming to use this molecule,
          <b>
            its ligand-free crystal structure has been reported
          </b>
          and is available for download in .pdb format at this
          <a href="https://www.rcsb.org/structure/1TQN">RCSB PDB</a>
          database page, with a resolution of 2.05 Å.
        </p>
        <p>
          For a
          <b>
            CYP3A4 bound to metyrapone and progesterone,
          </b>
          reports have been produced with crystal structures that can be found
          at the
          <b>
            RCSB PDB
          </b>
          database under the pubmed
          <a
            href="https://www.rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_pubmed_container_identifiers.pubmed_id%22%2C%22negation%22%3Afalse%2C%22operator%22%3A%22in%22%2C%22value%22%3A%5B15256616%5D%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%226951e0ac56bdef3b7285c101e4fc216b%22%7D%2C%22request_options%22%3A%7B%22pager%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
            >ID 15256616.</a
          >
        </p>
        <p>
          Check our other additions in the CYP3A4 page
          <a href="http://parts.igem.org/Part:BBa_K1064004">in the Registry</a>
          for more. <span id="Ref"></span>
        </p>

        <!--- References --->
        <h2>References:</h2>
        <div id="references1" class="references">
          <ol>
            <li>
              OHKURA K, Kawaguchi Y, Watanabe Y, Masubuchi Y, Shinohara Y, Hori
              H. Flexible structure of cytochrome P450: promiscuity of ligand
              binding in the CYP3A4 heme pocket. Anticancer Res. 2009
              Mar;29(3):935-42. PMID: 19414330.
            </li>
            <li>
              SATA, Fumihiro; SAPONE, Andrea; ELIZONDO, Guillermo; STOCKER,
              Penny; MILLER, Vaughn P.; ZHENG, Wei; RAUNIO, Hannu; CRESPI,
              Charles L.; GONZALEZ, Frank J. CΥP3A4 allelic variants with amino
              acid substitutions in exons 7 and 12: Evidence for an allelic
              variant with altered catalytic activity. Clinical Pharmacology and
              Therapeutics, [S. l.], v. 67, n. 1, p. 48–56, 2000. DOI:
              10.1067/mcp.2000.104391.
            </li>
            <li>
              HONDA, Hideo, Motohiro Tomizawa, and John E. Casida.
              "Neonicotinoid metabolic activation and inactivation established
              with coupled nicotinic receptor-CYP3A4 and-aldehyde oxidase
              systems." Toxicology letters 161.2 (2006): 108-114.
            </li>
            <li>
              TORNIO, Aleksi, and Janne T. Backman. "Cytochrome P450 in
              pharmacogenetics: an update." Advances in Pharmacology 83 (2018):
              3-32.
            </li>
            <li>
              KENWORTHY, K. E., J. C. Bloomer, S. E. Clarke, and J. B. Houston.
              "CYP3A4 drug interactions: correlation of 10 in vitro probe
              substrates." British journal of clinical pharmacology 48, no. 5
              (1999): 716.
            </li>
            <li>
              MEUNIER, Bernard, Samuel P. De Visser, and Sason Shaik. "Mechanism
              of oxidation reactions catalyzed by cytochrome P450 enzymes."
              Chemical reviews 104, no. 9 (2004): 3947-3980.
            </li>
            <li>
              RATAJEWSKI, Marcin, Aurelia Walczak-Drzewiecka, Anna Sałkowska,
              and Jarosław Dastych. "Aflatoxins upregulate CYP3A4 mRNA
              expression in a process that involves the PXR transcription
              factor." Toxicology letters 205, no. 2 (2011): 146-153.
            </li>
            <li>
              WERK, Anneke Nina, and Ingolf Cascorbi. "Functional gene variants
              of CYP3A4." Clinical Pharmacology & Therapeutics 96.3 (2014):
              340-348.
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
  name: "Contribution",

  components: {
    Nav,
    Footer,
    Backtotop,
  },
};
</script>

<style scoped></style>
