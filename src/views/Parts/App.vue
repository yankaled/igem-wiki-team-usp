<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/thumb/2/2a/T--USP-Brazil--IGEM-USP-Parts-Bannerparts.png/800px-T--USP-Brazil--IGEM-USP-Parts-Bannerparts.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth">
        <aside class="is-sticky is-hidden-touch">
          <div class="sub-navigation sub-menu-content">
            <div>
              <a
              class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
              href="#title-OVERVIEW"
              >
              OVERVIEW
              </a>
            </div>
            <div class="">
              <a
              class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
              href="#title-CYP6G1-PART-IMPROVEMENT"
              >
              CYP6G1 PART IMPROVEMENT
              </a>
            </div>
            <div class="">
              <a
              class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
              href="#title-OUR-NEW-PARTS"
              >
              OUR NEW PARTS
              </a>
            </div>
            <div class="">
              <a
              class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
              href="#title-references"
              >
              References
              </a>
            </div>
          </div>
        </aside>
      </div>
      <Backtotop />
      <div class="content column is-three-fifth">
        <!--- OVERVIEW --->
        <span id ="title-OVERVIEW"></span>
        <h2>OVERVIEW</h2>
        <p>
          One of the main principles of synbio is
          <b>
            modularity
          </b>
          modularity, allowing the combination of different specific sequences
          (biobricks) to get a determinate result. In the course of our project,
          we used and developed multiple genetic parts that might be of help for
          future teams to come up with ideas for their projects by using them as
          biobricks. For that, we also worked to characterize them as best as
          possible. In our assemblage of parts, we include parts that were
          <b>
            used and tested in plants,
          </b>
          making it an option for teams that wish to use plants for their
          project.
        </p>
        <p>
          Our main part is the circuit we made for the pollen expression of the
          enzyme in Micro-Tom (BBa_K3890000), which has the pLAT52
          (BBa_K3890001), CYP6G1 codon optimized for tomato expression
          (BBa_K3890006) and the LP4/2A cleaving peptide (BBa_K3890002 ) in its
          composition.
        </p>
        <p>
          Besides that, we
          <b>
            improved the enzyme CYP6G1,
          </b>
          which had already been registered in the Registry, with with the
          intention of increasing its velocity, so that more pesticides can be
          metabolized by the same quantity of the protein in the same time span
        </p>
        <p>
          You can learn more about our parts in the sections and links below!
          <span id ="title-CYP6G1-PART-IMPROVEMENT"></span>
        </p>

        <!--- CYP6G1 PART IMPROVEMENT --->
        <h2>CYP6G1 PART IMPROVEMENT</h2>
        <h3>Brief Introduction:</h3>
        <p>
          A key part of our project that is also included in the iGEM registry
          is the
          <b>
            enzyme CYP6G1,
          </b>
          a class II cytochrome P450 monooxygenase native from the Drosophila
          melanogaster fly that has
          <b>
            affinity for several xenobiotics as substrates,
          </b>
          even the neonicotinoids pesticides such as imidacloprid, transforming
          that compound into its more hydrophilic metabolites derived by
          hydroxylation of the 4/5 or 4,5 carbon of the imidazolidine ring of
          imidacloprid [2].
        </p>
        <p>
          The
          <a href="http://parts.igem.org/Part:BBa_K1197013">CYP6G1 enzyme</a>
          was previously used by the iGEM Middle East Technical University
          (METU) team 2013, and later in 2015 this part was improved by the iGEM
          British Columbia team with the aim of efficiently expressing it in the
          periplasm of Escherichia coli by adding a signal peptide located in
          the upstream direction of the
          <a href="http://parts.igem.org/Part:BBa_K1813064"
            >CYP6G1 coding sequence</a
          >
          <b>
            Both sequences were designed and optimized for their expression in
            prokaryotic systems,
          </b>
          being Bacillus subtilis and E. coli, respectively. However, given that
          <b>
            our project uses an eukaryotic organism
          </b>
          as a chassis and the enzymatic activity of CYP6G1 depends on the
          coupled-action of a cytochrome P450 reductase (CPR), it was more
          interesting to
          <b>
            develop an expression and enzyme enhancement strategy for eukaryotic
            systems.
          </b>
        </p>
        <p>
          Therefore, inspired by the evolution of certain CYPs to become
          naturally “self-sufficient” such as cytochrome P450BM3 (CYP102A1) that
          belongs to class III [8] by the natural fusion of CYP with the
          cytochrome P450 reductase through a flexible linker [4] and the use of
          S. cerevisiae chassis as a eukaryotic expression system,
          <b>
            we improved this part by artificially fusing CYP6G1 with the
            NADPH-dependent cytochrome P450 reductase by adding a flexible
            linker between the C-terminal CYP6G1 and N-terminal CPR sequence,
            respectively -
          </b>
          <a href="http://parts.igem.org/Part:BBa_K3890004"
            >[http://parts.igem.org/Part:BBa_K3890004].</a
          >
        </p>
        <p>
          Additionally, the codon of both
          <b>
            coding sequences was optimized to be expressed in the
            <i>
              Saccharomyces cerevisiae
            </i>
          </b>
          chassis, in order to obtain a correct expression of both enzymes in a
          single polypeptide chain. Below we explain in more detail how the
          improvement of this part was developed.
        </p>
        <h3>iGEM Registry Part Improvement:</h3>
        <p>
          Although the iGEM British Columbia 2015 team improved the
          <a href="http://parts.igem.org/Part:BBa_K1197013"
            >existing CYP6G1 part,</a
          >
          such improvement was at the expression level in
          <a href="http://parts.igem.org/Part:BBa_K1813064">E. coli.</a>
          Unfortunately, so far, the enzymatic enhancement of CYP6G1 has not
          been carried out.
          <b>
            We aim to increase the enzyme's catalytic efficiency by engineering
            the redox partner: the NAPDH-dependent cytochrome P450 reductase
            (CPR), since the CYP6G1 enzyme belongs to type II and its enzymatic
            activity depends on the acquisition of electrons in an
            oxidation-reduction reaction that the CPR protein transfers from the
            cofactor NADPH
          </b>
          [4,7]. However, this interaction is inefficient because, commonly, in
          the microsome the CPR is shared with 15 CYPs, so the interaction molar
          ratio remains to 1:15, respectively [6]. Both proteins in Drosophila
          melanogaster are naturally anchored in the membranes of the
          endoplasmic reticulum. The Figure 1 exemplifies how the CYP-CPR system
          works.
        </p>
        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/9/96/T--USP-Brazil--IGEM-USP-Parts-P450redox.png/800px-T--USP-Brazil--IGEM-USP-Parts-P450redox.png"
          />
        </figure>
        <p>
          Thus, our improvement strategy in order to the CYP6G1 becomes a
          self-sufficient cytochrome P450 monooxygenase enzyme carrying its own
          redox partner (CPR) was adding a small flexible linker composed of
          amino acids (Gly-Gly-Gly-Gly-Ser) between the C-terminus of CYP6G1 and
          the N-terminus of cytochrome P450 reductase originally from Musca
          domestica -
          <a href="http://parts.igem.org/Part:BBa_K1197014"
            >[http://parts.igem.org/Part:BBa_K1197014].</a
          >
        </p>
        <p>
          Therefore, that linker containing small
          <b>
            non-polar amino acids such as glycine (Gly) and polar residues such
            as serine (Ser)
          </b>
          gives the linker
          <b>
            flexibility and stability
          </b>
          in aqueous media, which in turn
          <b>
            facilitates the movement and/or interaction of both proteins
          </b>
          [1]. Additionally, in Figure 2, we didactically show the scheme of the
          new CYP6G1-CPR by the artificial fusion of the linker. It can be seen
          that the N-terminal sequence of the membrane-anchoring CPR was removed
          in order to facilitate the movement of CPR fused to CYP6G1.
        </p>
        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/4/45/T--USP-Brazil--IGEM-USP-Parts-NADPH-dependent.png/800px-T--USP-Brazil--IGEM-USP-Parts-NADPH-dependent.png"
          />
        </figure>
        <p>
          The artificial fusion of both parts through this linker would reduce
          the molar ratio from 15:1 to 1:1 between CPR and CYP6G1, respectively
          [4]. This would mean a higher electron transfer efficiency from the
          NADPH cofactor to the CYP6G1 enzyme, promoting much higher enzymatic
          turnover rates compared to the unfused CYP6G1 [4]. Consequently, this
          high turnover rate would allow the enzyme to efficiently catalyze
          (e.g., hydroxylate) a greater amount of the substrate (i.e,
          imidacloprid) thus improving the enzymatic catalysis of CYP6G1.
        </p>
        <h3>Future Experiments and Expected Results</h3>
        <p>
          Unfortunately, due to the
          <b>
            COVID-19 pandemic,
          </b>
          the
          <a href="http://parts.igem.org/Part:BBa_K3890004">experiments</a>
          to characterize the new improved part of CYP6G1 fused with cytochrome
          P450 reductase was not possible due to the
          <b>
            delay in the synthesis of gBlocks in arriving
          </b>
          at our university and also because of the
          <b>
            restricted access to the laboratory
          </b>
          by members of the wetlab team.
        </p>
        <p>
          However, the planning of the test experiments was described earlier by
          our wetlab team. A first test to be carried out would be in a
          <b>
            culture medium with different high concentrations
          </b>
          of imidacloprid as co-substrate in triplicate using wild S. cerevisiae
          wild type as control, another strain of S. cerevisiae carrying only
          the unfused CYP6G1 and finally S. cerevisiae loading the fused CYP6G1
          -
          <a href="http://parts.igem.org/Part:BBa_K3890004"
            >[http://parts.igem.org/Part:BBa_K3890004].</a
          >
        </p>
        <p>
          Thus, inspired by the work of Labade et al., (2018) a
          <b>
            cell culture growth curve
          </b>
          would indirectly indicate that our improved part would have a
          contribution in increasing the tolerance to imidacloprid, so it would
          be expected that the strain with the new improved part would have a
          greater growth in relation to other strains. Subsequently, the
          <b>
            supernatant
          </b>
          would serve to determine the degree of conversion of imidacloprid to
          its metabolites 4-hydroxy-imidacloprid, 5-hydroxy-imidacloprid and/or
          4,5 hydroxy-imidacloprid by of
          <b>
            GC-MS and HPLC analytic methods.
          </b>
          Thus, we will expect to obtain a lower amount of imidacloprid in its
          molecular form and a higher concentration of metabolites in the strain
          carrying the fused CYP6G1-CPR, compared to other strains.
          <span id ="title-OUR-NEW-PARTS"></span>
        </p>

        <!--- OUR NEW PARTS --->
        <h2>OUR NEW PARTS</h2>
        <p>
          To help future teams and researchers develop projects, we
          characterized and disponibilized the new genetic parts we used in the
          iGEM Registry, including:
          <b>
            the specific pollen promoter (pLAT52) and the self cleaving peptide
            fusion (LP4/2A)
          </b>
          that have a better efficiency
        </p>
        <div class="columns">
          <figure class=" column is-half ">
            <img
              src="https://2021.igem.org/wiki/images/thumb/2/29/T--USP-Brazil--IGEM-USP-Parts-table1.png/517px-T--USP-Brazil--IGEM-USP-Parts-table1.png"
            />
          </figure>
          <div class="column is-half">
            <groupparts>iGEM21 USP-Brazil</groupparts>
          </div>
        </div>
        <p><span id ="title-references"></span></p>

        <!--- References --->
        <h2>References:</h2>
        <div id="references1" class="references">
          <ol>
            <li>
              Chen, X., Zaro, J. L., & Shen, W.-C. (2013). Fusion protein
              linkers: Property, design and functionality. Advanced Drug
              Delivery Reviews, 65(10), 1357-1369.
              https://doi.org/10.1016/j.addr.2012.09.039
            </li>
            <li>
              Joußen, N., Heckel, D. G., Haas, M., Schuphan, I., & Schmidt, B.
              (2008). Metabolism of imidacloprid and DDT by P450 CYP6G1
              expressed in cell cultures of Nicotiana tabacum suggests
              detoxification of these insecticides in Cyp6g1-overexpressing
              strains of Drosophila melanogaster, leading to resistance. Pest
              Management Science, 64(1), 65-73. https://doi.org/10.1002/ps.1472
            </li>
            <li>
              Labade, C. P., Jadhav, A. R., Ahire, M., Zinjarde, S. S., &
              Tamhane, V. A. (2018). Role of induced glutathione-S-transferase
              from Helicoverpa armigera (Lepidoptera: Noctuidae) HaGST-8 in
              detoxification of pesticides. Ecotoxicology and Environmental
              Safety, 147, 612-621. https://doi.org/10.1016/j.ecoenv.2017.09.028
            </li>
            <li>
              Li, Z., Jiang, Y., Guengerich, F. P., Ma, L., Li, S., & Zhang, W.
              (2020). Engineering cytochrome P450 enzyme systems for biomedical
              and biotechnological applications. Journal of Biological
              Chemistry, 295(3), 833-849.
              https://doi.org/10.1016/S0021-9258(17)49939-X
            </li>
            <li>
              Sadeghi, S. J., & Gilardi, G. (2013). Chimeric P450 enzymes:
              Activity of artificial redox fusions driven by different
              reductases for biotechnological applications: Artificial Fusions
              of CYP Heme Domain with Different Reductases. Biotechnology and
              Applied Biochemistry, 60(1), 102-110.
              https://doi.org/10.1002/bab.1086
            </li>
            <li>
              Shephard, E. A., Phillips, I. R., Bayney, R. M., Pike, S. F., &
              Rabin, B. R. (1983). Quantification of NADPH: Cytochrome P-450
              reductase in liver microsomes by a specific radioimmunoassay
              technique. Biochemical Journal, 211(2), 333-340.
              https://doi.org/10.1042/bj2110333
            </li>
            <li>
              Talmann, L., Wiesner, J., & Vilcinskas, A. (2017). Strategies for
              the construction of insect P450 fusion enzymes. Zeitschrift Für
              Naturforschung C, 72(9-10), 405-415.
              https://doi.org/10.1515/znc-2017-0041
            </li>
            <li>
              Whitehouse, C. J. C., Bell, S. G., & Wong, L.-L. (2012). P450 BM3
              (Cyp102a1): Connecting the dots. Chem. Soc. Rev., 41(3),
              1218-1260. https://doi.org/10.1039/C1CS15192D
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
  name: "Parts",
  components: {
    Nav,
    Footer,
    Backtotop,
  },
};
</script>

<style scoped></style>
