<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/thumb/b/bf/T--USP-Brazil--img-group47.png/800px-T--USP-Brazil--img-group47.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth"></div>

      <Backtotop />
      
      <div class="content column is-three-fifth">
        <h2>Introduction?</h2>

        <p>
          This section tackles two important simulations: <b>the enzyme CYP6G1</b> and <b>bee behaviour</b>. For CYP6G1 we did two models:
        </p>

        <ul>
          <li>
            <p>Firstly, we tried to improve CYP6G1 activity by modelling a mutation on the enzyme that would allow it to metabolize other pesticides. This was possible through docking experiments.</p>
          </li>
          <li>
            <p>Secondly, we simulated a <b>theoretical model of CYP6G1 gene expression rate</b> while associated with pLAT52 (promoter LAT52). This model was useful to predict imidacloprid's degradation rate and the number of metabolites it generates.</p>
          </li>
        </ul>

        <p>
          <b>As for the bees</b>, we looked into <b>their behaviour in the presence of our modified plant</b> Considering that worker bees could poison their hive by carrying pollen contaminated with Imidacloprid, we have created a model to evaluate the number of bees contaminated, the impact that contamination would have on the hive and if that could lead to its collapse.
        </p>

        <p> 
          Unfortunately, most of our data had to be were acquired through specialized scientific literature due to the COVID-19 pandemic restrictions on laboratory access. Nevertheless, we were able to surpass third-party data-availability obstacles and gather enough data to power our model. We have also managed to include some experimental data obtained in the last few months, as labs started gradually reopening for students.
        </p>

        <h3>1) Protein Modelling and Interactions</h3>

        <h4>Protein Modelling and Docking</h4>

        <p>
          We wanted to design a CYP6G1 3D model in order to <b>understand the possible interactions between Imidacloprid and the enzyme's catalytic site</b>.  CYP6G1 belongs to CYP450's family and thus has a heme group as a cofactor, which is important for several catalytic reactions mediated by molecular oxygen.
        </p>

        <p>
          We started our model construction by performing two steps to include the cofactor in the final protein model. First, we put CYP6g1 primary sequence in the highest-scoring CASP predict protein model servers (I-Tasser and Robetta). Once the best results were generated, we manually <b>added the heme group into CYP3A1</b> crystallography-solved model using <b>Modeller</b>. [5, 6]. (Figure 1).
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/a/af/T--USP-Brazil--IGEM-USP-Model-Scheme-of-building-model-CYP6G1.png/1200px-T--USP-Brazil--IGEM-USP-Model-Scheme-of-building-model-CYP6G1.png"
          />
        </figure>

        <p>Selection of CYP3A4 as a template was based on a PSI-BLAST search [16], in which we searched for the most similar and already solved structure deposited in the PDB database. We chose CYP3A4 (<b>PDB: 4D6Z</b>), a <i>Human sapiens</i> Cythocrome P450 enzyme. The local alignment scores showed that the modeled CYP3A4  had 34% of similarity with the primary sequence of CYP6G1 and a coverage of 93% [8]. Results from the literature have indicated a similar catalytic function for imidacloprid degradation [7] and the presence of an important cysteine residue for covalent sulfur-iron bond. Additionally, that protein had already been used as a template for a CYP6G1 3D model[9]. </p>

        <p> {{ `In the urge of minimizing possible errors [10, 15, 17], we searched for high crystallography resolution <2.5Å and a good R-free value in PDB database, <0.26. Then, we checked the model for missing amino acids residues that could hinder our experiments by deforming the catalytic site [9, 15].` }}</p>

        <p>In order to validate our model, we needed to check out the stability of the heme group inside the protein's core. Assuming that specific chemical and physical properties of the residues were highly conserved, we manually analyzed 20 <b>experimentally solved</b> CYP450 (<b>whose primary sequences were the most similar to CYP6G1</b>). As a result, we have found a helix with tryptophan and arginine residues and a central arginine as the stabilizing residues in most templates. Although some mutated residues were found, such as ARG—>LYS or ARG—>HIS, and, TRP—>HIS, the mutant residues' capability to establish hydrogen bonds remained.</p>

        <p>For CYP6G1, we have found TRP130 and ARG134 present in an alpha-helix; ARG106 between two carboxyl groups, and also residues ARG383 e SER453 as feasible stabilizers to the heme group. Those last two residues were similar to what we observed in CYP3A4 from <i>Homo sapiens</i> sp, CYP2B35 and CYP2B37 from <i>Neotoma lepida</i> and CYP76AH1 <i>Salvia miltiorrhiza</i>. In order to clarify these concepts, images of the three highest-scoring blast proteins found from different organisms are presented in the figure below. They intend to demonstrate the presence of hydrogen bonds involving lysine, arginine, tryptophan, tyrosine and serine, groups that serve as stabilizers of the heme group (Figure 2).</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/5/58/T--USP-Brazil--IGEM-USP-Comparison-of-stabilizers-aminoacids.png"
          />
        </figure>

        <p>The models generated by I-TASSER and Robetta have positioned the residues in similar locations, indicating a better prediction protein algorithm.</p>

        <img
          src="https://2021.igem.org/wiki/images/thumb/d/d1/T--USP-Brazil--IGEM-USP-Model-_Structure-scores-for-several.png/1200px-T--USP-Brazil--IGEM-USP-Model-_Structure-scores-for-several.png"
        />

        <p>Furthermore, we compared our CYP6G1 model with the best scoring model CYP6G1 built by Alphaphold and we realized that our model has similarities concerning the conformations of several residues on the binding site. The RMSD value for 82% (430 of 524) of residues between the alignment of both proteins was 1.172 Å, a good value for templates with similarity greater than 90%  [8]. The heme group added to the model generated by MODELLER was positioned closer to the stabilizer residues than the one added to Alphafold's. (Figure 3). The addition of the heme group in Alphaphold CYP6G1 model was carried out through molecular docking and its adjustment was made considering other documented CYP450's enzymes.</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/5/58/T--USP-Brazil--IGEM-USP-Comparison-of-stabilizers-aminoacids.png"
          />
        </figure>

        <p>The models generated by Robetta and I-TASSER were the best obtained, showing good structural scores (Table 1). However, they both still had some issues to be solved. First, the Robetta model was not suitable for future experiments, such as substrate docking. Its structure conformation was predicted without the presence of a heme group, creating a steric hindrance next to the place where the cofactor might be allocated. Thus, even after molecular docking, it is not possible to add the cofactor similarly as it was observed in the protein predicted by Alphaphold (Figure 3).  Besides, I-TASSER model had shown good scores too, but lower than Robetta's, mainly for <b>each residue position, which were validated by the Ramachandran plot (Table 1)</b>.</p>

        <p><b>I-TASSER (5%) model resulted in a 25 fold error increase when compared to Robetta(0,2%)</b>,  which influenced directly the decision not to choose it as the main template.  We also tried to build the CYP6G1 model by I-TASSER, but that rendered bad Ramachandran scores, with many outliers residues.</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/9/93/T--USP-Brazil--IGEM-USP-Model-Ramachandran-plots.png"
          />
        </figure>

        <h4>Exploration of pesticides interaction with CYP6G1</h4>
        
        <p>By comparing the models we built with the one generated by Alphaphold, we sought to understand how pesticides interacted in the catalytic site. However, unexpectedly, our model has presented a larger catalytic site than Alphaphold's (Figure 4) [9].</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/f/f7/T--USP-Brazil--IGEM-USP-Model-CYP6G1-catalytic.png"
          />
          <h4>
            <a
              href="http://sts.bioe.uic.edu/castp/calculation.html"
              target="_blank"
            >
              (http://sts.bioe.uic.edu/castp/calculation.html)
            </a>
          </h4>
        </figure>

        <p>Compared to the best-predicted model generated by Alphaphold, ours isn't as suitable for docking experiments, for which it was discarded.</p>

        <p> We have used the structure Iron (IV)–Oxo [21] heme group calculated by Shahrokh and colleagues (2011) to carry out docking experiments with Alphaphold's CYP6G1 and some pesticides as substrates. We have manually edited the .mol2 file downloaded from the supplementary data and we generated a .top file in Dockthor [18], changing the partial charges for all atoms of the porphyrin ring. Then, we simulated the presence of iron using a carbon atom at the center of the porphyrin ring and adjusted the partial charge that was expected for the metal. </p>

        <p>The docking experiments used solely structural modifications of ligands, allowing some degree of freedom for bonds rotations. We analyzed the position of the pesticides inside the catalytic site and observed them near the heme and iron(IV)-oxo, where the hydroxylation of compounds happens. To search for important residues on the catalytic site, we used a program to create a 2D atmosphere for ligands interactions with the protein and we found a hydrophobic catalytic pocket (https://www.playmolecule.com/PlexView/). The analysis showed several important phenylalanine residues as stabilizers of hydrophobic regions of substrates, as already was expected (Figure 5) [9]. </p>

        <p><b>To improve the protein's promiscuity, we could explore the phenylalanine pocket (Figure 5), changing it to a smaller hydrophobic residue, as PHE245 —> ALA245, and consequently increasing the inside space for accommodating large pesticides.</b></p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/c/ce/T--USP-Brazil--IGEM-USP-Model-The-CYP6G1-hydrophobic.png"
          />
        </figure>

        <p>The docking experiments used solely structural modifications of ligands, allowing some degree of freedom for bonds rotations. We analyzed the position of the pesticides inside the catalytic site and observed them near the heme and iron(IV)-oxo, where the hydroxylation of compounds happens. To search for important residues on the catalytic site, we used a program to create a 2D atmosphere for ligands interactions with the protein and we found a hydrophobic catalytic pocket ([https://www.playmolecule.com/PlexView/](https://www.playmolecule.com/PlexView/)). The analysis showed several important phenylalanine residues as stabilizers of hydrophobic regions of substrates, as already was expected (Figure 5) [9].</p>

        <p>The docking experiments used solely structural modifications of ligands, allowing some degree of freedom for bonds rotations. We analyzed the position of the pesticides inside the catalytic site and observed them near the heme and iron(IV)-oxo, where the hydroxylation of compounds happens. To search for important residues on the catalytic site, we used a program to create a 2D atmosphere for ligands interactions with the protein and we found a hydrophobic catalytic pocket ([https://www.playmolecule.com/PlexView/](https://www.playmolecule.com/PlexView/)). The analysis showed several important phenylalanine residues as stabilizers of hydrophobic regions of substrates, as already was expected (Figure 5) [9].</p>

        <h4>Conclusions</h4>

        <p>In order to address the problem related to the lack of molecular dynamics, by using the best model predicted, we remodelled CYP6g1 using a comparative methodology approach. It’s easily carried out on a regular computer with the help of MODELLER, a free program for protein modelling that demands little computer processing. With this program, we were looking forward to sharing a capable and accessible way of modelling protein-cofactor bounding. By accessible, we mean a program that requires a low cost of energy and computer processing in order to run.</p>

        <p>The Modeller approach can be used for the addition of huge cofactors, e.g. FADH, FMN or ligands, for a  satisfactory identification of aminoacids residues for future mutations aiming to improve enzyme activity and construct an optimized protein.</p>

        <p>Based on the extensive experience gained in this project and its troubleshooting, <b>we wrote a protein modelling protocol with the program MODELLER to help the future iGEM teams to model proteins with extern atoms</b> such as cofactors and still not solved by high-performance algorithms as Alphaphold.</p>

        <p>The handbook can be found here:
          <a hrefe="https://docs.google.com/document/d/1ssPa9jfE3ctUhPMgi0HEPJ3yk_5igip3Wh91k4j4VcM/edit">
            Simulating Proteins: basic guide of comparative modelling
          </a>
        </p>

        <h2>References:</h2>
        <div class="references">
          <ol start="5">
            <li>
              Webb, B. and A. Sali, Comparative Protein Structure Modeling Using MODELLER. Curr Protoc Bioinformatics, 2016. 54: p. 5.6.1-5.6.37.
            </li>
            <li>
              Sali, A. and T.L. Blundell, Comparative protein modelling by satisfaction of spatial restraints. J Mol Biol, 1993. 234(3): p. 779-815.
            </li>
            <li>
              Schulz-Jander DA, Casida JE. Imidacloprid insecticide metabolism: human cytochrome P450 isozymes differ in selectivity for imidazolidine oxidation versus nitroimine reduction. Toxicol Lett. 2002 Jun 7;132(1):65-70. doi: 10.1016/s0378-4274(02)00068-1. PMID: 12084621.
            </li>
            <li>
              Vitkup, D., et al., Completeness in structural genomics. Nature Structural Biology, 2001. 8(6): p. 559-566.
            </li>
            <li>
              Jones RT, Bakker SE, Stone D, Shuttleworth SN, Boundy S, McCart C, Daborn PJ, ffrench-Constant RH, van den Elsen JM. Homology modelling of Drosophila cytochrome P450 enzymes associated with insecticide resistance. Pest Manag Sci. 2010 Oct;66(10):1106-15. doi: 10.1002/ps.1986. PMID: 20583201.
            </li>
            <li>
              Haddad, Y., V. Adam, and Z. Heger, Ten quick tips for homology modeling of high-resolution protein 3D structures. PLOS Computational Biology, 2020. 16(4): p. e1007449.
            </li>
            <li>
              Fiser, A., Template-based protein structure modeling. Methods Mol Biol, 2010. 673: p. 73-94.
            </li>
            <li>
              Altschul, S.F., et al., Gapped BLAST and PSI-BLAST: a new generation of protein database search programs. Nucleic Acids Research, 1997. 25(17): p. 3389-3402.
            </li>
            <li>
              Haddad, Y., V. Adam, and Z. Heger, Ten quick tips for homology modeling of high-resolution protein 3D structures. PLOS Computational Biology, 2020. 16(4): p. e1007449.
            </li>
            <li>
              dos Santos, K. B., Guedes, I. A., Karl, A. L. M. & Dardenne, L. Highly Flexible Ligand docking: benchmarking of the DockThor program on the LEADS-PEP protein-peptide dataset. J. Chem. Inf. Model. acs.jcim.9b00905 (2020) doi:https://doi.org/10.1021/acs.jcim.9b00905.
            </li>
            <li>
              dos Santos, K. B., Guedes, I. A., Karl, A. L. M. & Dardenne, L. Highly Flexible Ligand docking: benchmarking of the DockThor program on the LEADS-PEP protein-peptide dataset. J. Chem. Inf. Model. acs.jcim.9b00905 (2020) doi:https://doi.org/10.1021/acs.jcim.9b00905.
            </li>
            <li>
              Shahrokh K, Orendt A, Yost GS, Cheatham TE 3rd. Quantum mechanically derived AMBER-compatible heme parameters for various states of the cytochrome P450 catalytic cycle. J Comput Chem. 2012;33(2):119-133. doi:10.1002/jcc.21922
            </li>
            <li>
              Nam, W. (2007). High-Valent Iron(IV)–Oxo Complexes of Heme and Non-Heme Ligands in Oxygenation Reactions. Accounts of Chemical Research, 40(7), 522–531. doi:10.1021/ar700027f
            </li>
          </ol>
        </div>

        <h3>2) Enzyme Kinetics Simulation</h3>

        <p>The goal of this simulation is to <b>predict the behavior of the modified cell plants</b>, in a way that we can observe <b>how our CYP6G1 associated with pLAT52 of our Micro-Tom</b> plant would behave.</p>

        <p>In other words, we checked the <b>expression rate for our CYP</b> and the <b>degradation rate of Imidacloprid</b>. In addition, we analyzed the residues of the reaction and the amount of <b>energy needed</b> for the plant to synthesize CYP6G1.</p>

        <p>
          Due to the COVID-19 pandemic restrictions, no availability of reactants and short time, our team's WetLab was not able to experiment and observe the reaction between our transformed plant and the neonicotinoid Imidacloprid, so we resorted to <b>mathematics and theory</b> to try and estimate how it would go in practice. For that we had to make some <b>assumptions</b> about the behavior of the circuit:
        </p>

        <ul>
          <li><p>The concentration of <b>LAT52 gene expression remains constant</b> in the cell.</p></li>
          <li><p>The <b>pollen cells have all the resources</b> necessary to fully express CYP6G1.</p></li>
          <li><p>There are two main ways of applying imidacloprid to the plant: topically or in the seed before the cultivation. Here we considered the <b>application on the seed</b> which is when our project is able to work.</p></li>
          <li><p>The reaction between CYP6G1 and imidacloprid is <b>100% efficient</b></p></li>.
        </ul>

        <p>First and foremost, we wanted to know the concentration of expressed CYP in the pollen of our plant. In our project's circuit, we used <b>LP4/2A peptide linker</b> to express both the CYP6G1 and the GUS gene reporter. This linker has an approximate cleavage <b>efficiency of 80% to 90%</b> [1]. This means that if we find the <b>concentration of GUS</b> expressed by the LAT52 promoter, we could calculate the concentration of CYP in our construction. Experimentally, we were not able to retrieve it, but luckily, literature was on our side. <b>Neil Bate</b>, from the Department of Botany of the University of Leicester, has a publicly available Doctorate Thesis [2] about pollen genes, in which he expresses the GUS reporter with the LAT52 promoter, which was perfect for our project.</p>

        <p>Using the Materials and Methods section, we were able to reverse the process in which he measured GUS activity and found the concentration of GUS on pollen. Calculations can be found <a id="First" v-on:click="openModal($event)">here</a> </p>

      </div>

      <div class="column is-one-fifth"></div>
    </section>

    <div
      id="FirstOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="FirstMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column " />
        <div class="content column is-two-thirds">
          <p>Using the following image we calculated the <b>diameter of pollen grains.</b></p>

          <figure class="has-text-centered">
            <img
              src="https://2021.igem.org/wiki/images/e/ea/T--USP-Brazil--IGEM-USP-Model-_Pollen-grains.png"
            />
          </figure>

          <p>Then considering the pollens having a spherical volume we obtained the value of <b>4,6.10^9 grains/L.</b></p>

          <p>Now looking at the work of Twell (1994) [4] it is known that the mass of GUS enzyme per pollen grain (in the anthesis period, then the reproductive cycle of tomato plants begins) is <b>6 ng</b>. We experimentally found a value of 4.1 ng/pollen grain. In addition, we considered E. coli GUS enzyme having a molecular weight of 68,447 kDa [5], so:</p>

          <p>Considering the cleavage efficiency being between 80%-90% then we have:</p>
          
        </div>

        <div class="column " />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Backtotop from "@/components/BacktoTop.vue";

export default {
  name: "Description",

  components: {
    Nav,
    Footer,
    Backtotop,
  },

  methods: {
    openModal(event) {

      let clicked_id = event.target.id;
      let overlay = document.getElementById(`${clicked_id}OV`);
      let modal = document.getElementById(`${clicked_id}MO`);
      modal.classList.remove("is-hidden");
      overlay.classList.remove("is-hidden");
   
    },

    closeModal(event) {
      
      let clicked_id = event.target.id;
      let id = clicked_id.replace("OV", "");
      
      let overlay = document.getElementById(`${id}OV`);
      let modal = document.getElementById(`${id}MO`);
     
      modal.classList.add("is-hidden");
      overlay.classList.add("is-hidden");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Roboto:wght@500;700;900&display=swap");


/* -------------------------- */
/* CLASSES TO MAKE MODAL WORK */
.modal_USP {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: animatetop;
  animation-duration: 0.4s;

  background-color: white;
  padding: 6rem;
  /* border-radius: 5px; */
  z-index: 50;
}

.overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 45;
}
/* ----------------------------- */

.header {
  width: 100% !important;
}


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
</style>
