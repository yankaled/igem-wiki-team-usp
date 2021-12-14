<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/4/45/T--USP-Brazil--IGEM-USP-Model-BannerModel.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth">
        <aside class="is-sticky is-hidden-touch">
          <div class="sub-navigation sub-menu-content">
            <div>
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#title-introduction"
              >
                Introduction
              </a>
            </div>
            <div>
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#title-protein"
              >
                Protein Modelling and Interactions
              </a>
            </div>
            <div>
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#title-enzyme"
              >
                Enzyme Kinetics Simulation
              </a>
            </div>
            <div>
              <a
                class="sub-navbar-link sub-nav-link-usp sub-nav-link-usp-ltr"
                href="#title-beehive"
              >
                Beehive, bees and plants simulation
              </a>
            </div>
          </div>
        </aside>
      </div>

      <Backtotop />
      
      <div class="content column is-three-fifth">
        
        <!--- Introduction --->
        <span id ="title-introduction"></span>
        <h2>Introduction</h2>

        <p>
          This section tackles two important simulations: <b>the enzyme CYP6G1</b> and <b>bee behaviour</b>. For CYP6G1 we did two models:
        </p>

        <ul>
          <li>
            Firstly, we tried to improve CYP6G1 activity by modelling a mutation on the enzyme that would allow it to metabolize other pesticides. This was possible through docking experiments.
          </li>
          <li>
            Secondly, we simulated a <b>theoretical model of CYP6G1 gene expression rate</b> while associated with pLAT52 (promoter LAT52). This model was useful to predict imidacloprid's degradation rate and the number of metabolites it generates.
          </li>
        </ul>

        <p>
          <b>As for the bees</b>, we looked into <b>their behaviour in the presence of our modified plant</b> Considering that worker bees could poison their hive by carrying pollen contaminated with Imidacloprid, we have created a model to evaluate the number of bees contaminated, the impact that contamination would have on the hive and if that could lead to its collapse.
        </p>

        <span id ="title-protein"></span>

        <p> 
          Unfortunately, most of our data had to be were acquired through specialized scientific literature due to the COVID-19 pandemic restrictions on laboratory access. Nevertheless, we were able to surpass third-party data-availability obstacles and gather enough data to power our model. We have also managed to include some experimental data obtained in the last few months, as labs started gradually reopening for students.
        </p>

        <h3>1) Protein Modelling and Interactions</h3>

        <h4 style="font-size: 1.5rem;">Protein Modelling and Docking</h4>

        <p>
          We wanted to design a CYP6G1 3D model in order to <b>understand the possible interactions between Imidacloprid and the enzyme's catalytic site</b>.  CYP6G1 belongs to CYP450's family and thus has a heme group as a cofactor, which is important for several catalytic reactions mediated by molecular oxygen.
        </p>

        <p>
          We started our model construction by performing two steps to include the cofactor in the final protein model. First, we put CYP6g1 primary sequence in the highest-scoring CASP predict protein model servers (I-Tasser and Robetta). Once the best results were generated, we manually <b>added the heme group into CYP3A1</b> crystallography-solved model using <b>Modeller</b>. [5, 6]. (Figure 1).
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/a/af/T--USP-Brazil--IGEM-USP-Model-Scheme-of-building-model-CYP6G1.png"
          />
        </figure>

        <p>Selection of CYP3A4 as a template was based on a PSI-BLAST search [16], in which we searched for the most similar and already solved structure deposited in the PDB database. We chose CYP3A4 (<b>PDB: 4D6Z</b>), a <i>Human sapiens</i> Cythocrome P450 enzyme. The local alignment scores showed that the modeled CYP3A4  had 34% of similarity with the primary sequence of CYP6G1 and a coverage of 93% [8]. Results from the literature have indicated a similar catalytic function for imidacloprid degradation [7] and the presence of an important cysteine residue for covalent sulfur-iron bond. Additionally, that protein had already been used as a template for a CYP6G1 3D model[9]. </p>

        <p>
          In the urge of minimizing possible errors [10, 15, 17], we searched for high crystallography resolution <span v-text="`<2.5 Å`" /> and a good R-free value in PDB database, <span v-text="`<0.26`" />. Then, we checked the model for missing amino acids residues that could hinder our experiments by deforming the catalytic site [9, 15].</p>

        <p>In order to validate our model, we needed to check out the stability of the heme group inside the protein's core. Assuming that specific chemical and physical properties of the residues were highly conserved, we manually analyzed 20 <b>experimentally solved</b> CYP450 (<b>whose primary sequences were the most similar to CYP6G1</b>). As a result, we have found a helix with tryptophan and arginine residues and a central arginine as the stabilizing residues in most templates. Although some mutated residues were found, such as ARG—>LYS or ARG—>HIS, and, TRP—>HIS, the mutant residues' capability to establish hydrogen bonds remained.</p>

        <p>For CYP6G1, we have found TRP130 and ARG134 present in an alpha-helix; ARG106 between two carboxyl groups, and also residues ARG383 e SER453 as feasible stabilizers to the heme group. Those last two residues were similar to what we observed in CYP3A4 from <i>Homo sapiens</i> sp, CYP2B35 and CYP2B37 from <i>Neotoma lepida</i> and CYP76AH1 <i>Salvia miltiorrhiza</i>. In order to clarify these concepts, images of the three highest-scoring blast proteins found from different organisms are presented in the figure below. They intend to demonstrate the presence of hydrogen bonds involving lysine, arginine, tryptophan, tyrosine and serine, groups that serve as stabilizers of the heme group (Figure 2).</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/c/ce/T--USP-Brazil--IGEM-USP-Model-Important-residues-for-the-stabilization-of-carboxyl-groups-in-CYP450.png/1200px-T--USP-Brazil--IGEM-USP-Model-Important-residues-for-the-stabilization-of-carboxyl-groups-in-CYP450.png"
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

        <h4 style="font-size: 1.5rem;">Exploration of pesticides interaction with CYP6G1</h4>
        
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
          <a
            href="https://2021.igem.org/wiki/images/2/23/T--USP-Brazil--IGEM-USP-Contribution-Handbook.pdf"
            target="_blank"
          >
            Simulating Proteins: basic guide of comparative modelling
          </a>
        </p>

        <!--- Thanks --->
        <h2>References:</h2>
        <div class="references">
          <ol>
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
              dos Santos, K. B., Guedes, I. A., Karl, A. L. M., Dardenne, L. Highly Flexible Ligand docking: benchmarking of the DockThor program on the LEADS-PEP protein-peptide dataset. J. Chem. Inf. Model. acs.jcim.9b00905 (2020) doi:https://doi.org/10.1021/acs.jcim.9b00905.
            </li>
            <li>
              dos Santos, K. B., Guedes, I. A., Karl, A. L. M., Dardenne, L. Highly Flexible Ligand docking: benchmarking of the DockThor program on the LEADS-PEP protein-peptide dataset. J. Chem. Inf. Model. acs.jcim.9b00905 (2020) doi:https://doi.org/10.1021/acs.jcim.9b00905.
            </li>
            <li>
              Shahrokh K, Orendt A, Yost GS, Cheatham TE 3rd. Quantum mechanically derived AMBER-compatible heme parameters for various states of the cytochrome P450 catalytic cycle. J Comput Chem. 2012;33(2):119-133. doi:10.1002/jcc.21922
            </li>
            <li>
              Nam, W. (2007). High-Valent Iron(IV)–Oxo Complexes of Heme and Non-Heme Ligands in Oxygenation Reactions. Accounts of Chemical Research, 40(7), 522–531. doi:10.1021/ar700027f
            </li>
          </ol>
        </div>

        <span id ="title-enzyme"></span>

        <h3>2) Enzyme Kinetics Simulation</h3>

        <p>The goal of this simulation is to <b>predict the behavior of the modified cell plants</b>, in a way that we can observe <b>how our CYP6G1 associated with pLAT52 of our Micro-Tom</b> plant would behave.</p>

        <p>In other words, we checked the <b>expression rate for our CYP</b> and the <b>degradation rate of Imidacloprid</b>. In addition, we analyzed the residues of the reaction and the amount of <b>energy needed</b> for the plant to synthesize CYP6G1.</p>

        <p>
          Due to the COVID-19 pandemic restrictions, no availability of reactants and short time, our team's WetLab was not able to experiment and observe the reaction between our transformed plant and the neonicotinoid Imidacloprid, so we resorted to <b>mathematics and theory</b> to try and estimate how it would go in practice. For that we had to make some <b>assumptions</b> about the behavior of the circuit:
        </p>

        <ul>
          <li>The concentration of <b>LAT52 gene expression remains constant</b> in the cell.</li>
          <li>The <b>pollen cells have all the resources</b> necessary to fully express CYP6G1.</li>
          <li>There are two main ways of applying imidacloprid to the plant: topically or in the seed before the cultivation. Here we considered the <b>application on the seed</b> which is the case when our project works.</li>
          <li>The reaction between CYP6G1 and imidacloprid is <b>100% efficient</b>.</li>
        </ul>

        <p>First and foremost, we wanted to know the concentration of expressed CYP in the pollen of our plant. In our project's circuit, we used <b>LP4/2A peptide linker</b> to express both the CYP6G1 and the GUS gene reporter. This linker has an approximate cleavage <b>efficiency of 80% to 90%</b> [1]. This means that if we find the <b>concentration of GUS</b> expressed by the LAT52 promoter, we could calculate the concentration of CYP in our construction. Experimentally, we were not able to retrieve it, but luckily, literature was on our side. <b>Neil Bate</b>, from the Department of Botany of the University of Leicester, has a publicly available Doctorate Thesis [2] about pollen genes, in which he expresses the GUS reporter with the LAT52 promoter, which was perfect for our project.</p>

        <p>Using the Materials and Methods section, we were able to reverse the process in which he measured GUS activity and found the concentration of GUS on pollen. Calculations can be found <a id="First" v-on:click="openModal($event)">here</a>.</p>

        <p>Then, we calculated a <b>range for the CYP6G1 concentration</b> using the 80% and 90% cleavage efficiency as our lower and upper bounds.</p>

        <p>As for <b>imidacloprid concentration</b> in our plant, we were not able to find data specifically for tomatoes. However, we were able to find information for the concentration in flowers from other species. We decided to move forward using the median value of them, as it was the only information available. We used the median and not the mean, as the mean can be biased by extreme values.</p>

        <p>The median concentration in pollen obtained for imidacloprid is:</p>

        <p class="has-text-centered">
          \(\frac{0.08ng}{g}\)
        </p>

        <p>And, experimentally, we were able to obtain the concentration of pollen mass/L:</p>

        <p class="has-text-centered">
          \( \frac{4.6G pollen grains}{L} \times \frac{4.1ng}{pollen grain} = \frac{19.03 g}{L} \)
        </p>

        <p>Now, using the molar mass of imidacloprid, we can finish the calculations and convert it to mol/L:</p>

        <p class="has-text-centered">
          \( \frac{0.08ng imidacloprid}{g Pollen} \times \frac{19.03 g}{L} \times \frac{mol}{255.66 g} = \frac{5.90 pmol}{L} \)
        </p>

        <p>
          Our approach to measuring the efficiency of our construct was to analyze the time period in which imidacloprid concentration would reach close-to-zero levels. Since CYP family enzymes obey Michaelis-Menten kinetics [3] we considered that the enzyme would behave as stated with the chemical equation:
        </p>
        
        <div class="columns has-text-centered">
          <div class="column is-full">
            <p v-text="`\\( \\ce{ S + E <=>[K_f][K_r] ES ->[K_{cat}] P + E } \\)`" />
          </div>
        </div>


        <p>Resulting in the following mass-transfer <b>equations (1-3)</b>.</p>


        <div class="columns has-text-centered">
          <div class="column is-11">
            <p>
              \( \frac{d[E]}{dt} = -k_f[E][S] + k_r[ES] + k_{cat}[ES] \)
            </p>
          </div>

          <div class="column is-1">
            <p>(1)</p>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p>
              \( \frac{d[ES]}{dt} = k_f[E][S]-k_r[ES]-k_{cat}[ES] \)
            </p>
          </div>

          <div class="column is-1">
            <p>(2)</p>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p>
              \( \frac{d[E]}{dt} = -k_f[E][S] + k_r[ES] + k_{cat}[ES] \)
            </p>
          </div>

          <div class="column is-1">
            <p>(3)</p>
          </div>
        </div>

        <p>By considering (3) equal to zero, which establishes a steady-state boundary, the famous Michaelis-Menten equation can be obtained:</p>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p>
              \( \frac{d[P]}{dt} = \frac{V_{max}[S]}{K+[S]} \)
            </p>
          </div>

          <div class="column is-1">
            <p>(4)</p>
          </div>
        </div>


        <p>After applying usual methods to solve differential equations, we also obtained time-dependent functions for the elements described in the model reaction <b>(Equations 5-8).</b></p>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p>
              \( [S](t)+Kln([S](t)) =- V_{max}t+[S]_0+Kln([S]_0) \)
            </p>
          </div>

          <div class="column is-1">
            <p>(5)</p>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \( [ES](t)=\frac{[E]_0[S](t)}{[S](t)+K} \) </p>
          </div>

          <div class="column is-1">
            <p>(6)</p>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \( [E](t)=[E]_0-[ES](t) \) </p>
          </div>

          <div class="column is-1">
            <p>(7)</p>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \(  [P](t)=[S]_0-[S](t) \) </p>
          </div>

          <div class="column is-1">
            <p>(8)</p>
          </div>
        </div>

        <p>For the equations, we considered the following notations:</p>

        <ul>
          <li>\( S \) stands for substrate concentration, in this case, imidacloprid</li>

          <li>\( S_0 \) is the initial concentration of substrate</li>
          <li>\( K \) is Michaelis constant, which is the substrate concentration when the reaction speed equals half of the V_max, sometimes referred as Km</li>
          <li>\( V_{max} \) is the maximum speed of the reaction</li>
          <li>\( E \) is enzyme concentration</li>
          <li>\( E_0 \) is the initial enzyme concentration</li>
          <li>\( P \) is the concentration of the product of the reaction</li>
        </ul>

        <p>This math was based on Mathematical Biology: I. An Introduction, JD Murray, Section 6.1.</p>

        <p>We have the famous Michaelis-Menten equation (9):</p>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \(  -\frac{dS}{dt} = \frac{dP}{dt} = V_{max}\frac{S}{S+K} \) </p>
          </div>

          <div class="column is-1">
            <p>(9)</p>
          </div>
        </div>

        <p>Therefore:</p>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \(  \frac{S(t)+K}{S(t)}S'(t) = -V_{max} \) </p>
          </div>

          <div class="column is-1">
            <p>(10)</p>
          </div>
        </div>

        <p>Integrating by t and substituting \( dS=S'(t)dt \):</p> 
        
        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \( \int_{S_0}^{S(t)}\frac{S+K}{S} dS = -V_{max}t \) </p>
          </div>

          <div class="column is-1">
            <p>(11)</p>
          </div>
        </div>

        <p>Solving this integral, we are able to reach the formula for \( S(t) \). Calculations can be found <a id="Second" v-on:click="openModal($event)">here</a>.</p>

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \( t(S) = -\frac{S + K lnS - S_{0} - K lnS_{0}}{Vmax} \) </p>
          </div>

          <div class="column is-1">
            <p>(12)</p>
          </div>
        </div>

        <p>While in the latter we have the functions beautifully isolated, the first equation presents a problem because <b>\( S(t) \) is a function that takes as input the value of itself</b>. We can not plot the value of a function in a point using the same value that we are trying to calculate. So, using some clever thinking, we overcame this problem by <b>plotting not for \( S(t) \), but for t</b>. Moving the variables around, we can isolate the time variable and know the value at which the substrate concentration will be some number S, which transforms it into a function of \( t(S) \), which is represented as equation (13).</p>:

        <div class="columns has-text-centered">
          <div class="column is-11">
            <p> \( t(S)=-\frac{S+KlnS-S_0-KlnS_0}{V_{max}} \) </p>
          </div>

          <div class="column is-1">
            <p>(13)</p>
          </div>
        </div>

        <p>As we know the \( S_0 \) value and that it goes to zero as time moves on, we can build a range of values \( [S_0, 0] \) and use our function to calculate the moment when the reaction will hit that \( S \) value.</p>        

        <p>The missing pieces are \( V_{max} \) and \( K \) values. We can calculate \( V_{max} \) by multiplying the initial enzyme concentration by the catalyzation constant, \( K_{cat} \). Both \( K \) and \( K_{cat} \) are obtained experimentally. Since we were not able to use the laboratories until September 2021, we were also not able to obtain the exact value for our specific CYP. However, using the data from the team that designed <a href="http://parts.igem.org/Part:BBa_K1197013" target="_blank">Part:BBa_K1197013</a> in the Parts Registry of iGEM, we were able to solve this problem.</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/9/93/T--USP-Brazil--IGEM-USP-Model-_Values-used-for-the-parameters.png/1116px-T--USP-Brazil--IGEM-USP-Model-_Values-used-for-the-parameters.png"
          />
        </figure>

        <p>Using this, we were able to plot our concentration over time for the imidacloprid substract in the expected reaction. The plot is listed below, as well for the jointed.</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/1/14/T--USP-Brazil--IGEM-USP-Model-Plot-of-the-substract.png/1200px-T--USP-Brazil--IGEM-USP-Model-Plot-of-the-substract.png"
          />
        </figure>

        <h4>Conclusions</h4>
        
        <p>
          Our model predicted the <b>total metabolization of imidacloprid in 12s</b>. It may look unrealistic at a first glance, but one should bear in mind that this model <b>attains to a single compartment</b> - the pollen. Tomatoes and other superior plants are pluricellular organisms with multiple organs and tissues that accumulate imidacloprid and may recontaminate pollen through physiological diffusion processes. Knowing how our construct would behave in a single tissue is the <b>first step to understanding how it would work globally</b>. However, to expand this model more empirical data about imidacloprid pharmacokinetics in the plant are needed and can be obtained in the lab when the pandemic situation improves in our country. Nevertheless, an extremely quick degradation rate like the one we have predicted is already promising as we expect it to be far greater than a likely "recontamination" rate.
        </p>

        <h2>References:</h2>
        <div class="references">
          <ol>
            <li>
             Sun, H., Zhou, N., Wang, H., Huang, D., Lang, Z. (2017). Processing and targeting of proteins derived from polyprotein with 2A and LP4/2A as peptide linkers in a maize expression system. PLoS One, 12(3), e0174804. doi: 10.1371/journal.pone.0174804.
            </li>
            <li>
              Bate, N. (1997). Transcriptional and translational control of gene expression during pollen development. University of Leicester (United Kingdom).
            </li>
            <li>
              Shumyantseva, V. V., Kuzikov, A. V., Masamrekh, R. A., Bulko, T. V., Archakov, A. I. (2018). From electrochemistry to enzyme kinetics of cytochrome P450. Biosensors and Bioelectronics, 121, 192-204. doi: 10.1016/j.bios.2018.08.040.
            </li>
            <li>
              Eady, C., Lindsey, K., Twell, D. (1994). Differential activation and conserved vegetative cell‐specific activity of a late pollen promoter in species with bicellular and tricellular pollen. The Plant Journal, 5(4), 543-550. doi: 10.1046/j.1365-313X.1994.05040543.x.
            </li>
            <li>
              Arul, L., Benita, G., Balasubramanian, P. (2008). Functional insight for β-glucuronidase in Escherichia coli and Staphylococcus sp. RLH1. Bioinformation, 2(8), 339. doi: 10.6026/97320630002339.
            </li>
          </ol>
        </div>

        <span id ="title-beehive"></span>

        <h3>3) Beehive, bees and plants simulation</h3>

        <h4>Introduction</h4>

        <p>With the previous enzymatic kinetic simulation, we obtained the rate at which imidacloprid is degraded in normal conditions and how much is degraded in the pollen cells from our genetically modified plant. Now we can extend our simulation to a higher level: simulating the effects among our modified plant in the field, on bees and on the beehive. This way, we can compare these effects to the realistic scenario where the bees and the beehive are in the presence of unmodified plants with imidacloprid. To make it possible, it must be taken into account not only the toxicity of the imidacloprid but also of its metabolites derived from its degradation. For both scenarios (modified vs unmodified plants), we will consider the initial imidacloprid concentration as the recommended level of field application as explained below.</p>

        <h4>a) Individual Effect</h4>

        <p>The individual effects of imidacloprid on bees differ between acute exposition, chronic exposition, topic exposition or ingestion. Below are shown the values of lethal dose of each case (LD50 is the amount of a material, given all at once, which causes the death of 50% of a group of test animals).</p>


        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/6/69/T--USP-Brazil--IGEM-USP-Model-Toxicity-of-imidacloprid.png/1161px-T--USP-Brazil--IGEM-USP-Model-Toxicity-of-imidacloprid.png"
          />
        </figure>

        <p>For 4-hydroxyimidacloprid we considered the same toxicity of 5-hydroxyimidacloprid. We did not find a specific quantity for 4-hydroxy. In fact, we found many articles stating that 4-hydroxyimidacloprid and 5-hydroxyimidacloprid could not be separated (or are very rarely so), due to them being compounds that can easily transform into each other, forming an equilibrium [15,16]. Authors even refer to those molecules as "4/5-hydroxyimidacloprid" or "5(4)-hydroxyimidacloprid". That can be seen in the metabolic pathway of imidacloprid in honeybees, as in:</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/a/a7/T--USP-Brazil--IGEM-USP-Model-Metabolic-pathway-of-imidacloprid.png/688px-T--USP-Brazil--IGEM-USP-Model-Metabolic-pathway-of-imidacloprid.png"
          />
        </figure>

        <p>When the imidacloprid and its metabolites derived from its degradation don't kill the bees they impair them non-lethaly with the possible effects being: some of them include changes in the bees' olfactory learning after exposure to neonicotinoids and proboscis extension (where proboscis is an extension of the oral tract that functions as a sucker) after the perception of sucrose and water. Another sublethal effect to be discussed is the neurotoxicity caused by improper exposure to neonicotinoids. Symptoms such as tipping, tremors, uncoordinated movements, hyperactivity and tremors are related to an alteration in bee mobility [17].</p>

        <h4>b) The LD50 of the "new" imidacloprid</h4>

        <p>In Joussen et al. (2008) [6], it was shown that after 48 hours, 83% of the imidacloprid is degraded by the CYP6G1 enzyme, and the following proportion of metabolites are generated:</p>

        <ul>
          <li>69.9% of 4-hydroxy</li>
          <li>22.9% of 5-hydroxy</li>
          <li>7.2% of olefin</li>
        </ul>

        <p>To simplify, from here we will call the mixture of these three substances in these proportions as the <b>modified plant metabolites mixture (MPMM)</b>. With this language, we can say that our modified plant basically transforms the imidacloprid pesticide in the pollen into the MPMM. </p>

        <p>Now, let us calculate its LD50. To do so, we used the LD50 values from Table 3, and created two hypothesis:</p>

        <p>
          1. If we assume that the toxicity of each metabolite can be taken <b>independently</b> that is, there are no synergies between them. Then, we simply calculate the worst scenario of each substance taking into their proportions into consideration:
        </p>

        <ul>
          <li>
            considering the average LD50 values, it can be seen that the smaller value of LD50 (i.e the most toxic for bees) was obtained by the 4-hydroxy \( \dfrac{222}{0.699}\approx 318\,\text{ng/bee} \)
          </li>

          <li>
            considering the minimum LD50 values (by subtracting the average by the standard deviation), the worst case was obtained by the olefin: \( \dfrac{17}{0.072}\approx 218\,\text{ng/bee} \)
          </li>

          <li>
            considering the maximum LD50 values (by adding the standard deviation), the worst case was obtained by the 4-hydroxy:
        
            \( \dfrac{247}{0.699}\approx 353 \text{ ng/bee} \)
          </li>
        </ul>

        <p>
          2. If we assume that the toxicity of the metabolites can be <b>taken together uniformly</b>, we can simply calculate the weighted average including each compound proportion: \( {0.699 \cdot (222 \pm 25)}+{0.229 \cdot (222 \pm 25)}+{0.072 \cdot (23 \pm 6)}\approx 208\pm 24 \,\text{ng/bee} \)
        </p>

        <p>
          Therefore, under these hypotheses, we can conclude that the LD50 of the MPMM for acute ingestion toxicity is <b>5 to 10 times</b> higher than the LD50 of the imidacloprid. One possible interpretation of this statement is the following: comparing two scenarios between bees feeding themselves of unmodified plants treated with imidacloprid (scenario 1) with our modified plant (scenario 2), the quantity of pesticide applied in scenario 2 would have to be <b>5 to 10 times</b> higher than in scenario 1 to generate the same proportion of bee deaths. This shows that our modified plant may provide lower toxicity in pollen cells.
        </p>

        <h3>Colony Effect</h3>

        <p>
        The majority of bees are highly social animals and each individual has a role in the hive. Therefore, the impact of a pesticide in a population cannot be considered solely by the sum of the individual effects. In other terms, this means that the impact to an individual bee is extremely correlated with the impact on other bees in the colony.
        </p>

        <p>
          As an example, forager bees are responsible for the hive's food supply and their deaths could reduce the food production to a level that would impair the next generation of bees. On the other hand, if the forager bees choose food sources contaminated with pesticides, they can contaminate the whole hive [14]. These are some of the reasons that could cause the disappearance of honey bees in a colony, which would create a scenario of insufficient numbers of bees to care for immature bees in the hive, and consequently could lead to a colony collapse disorder (CCD) case, defined in Magal et al (2019) [8].
        </p>

        <p>
          Having these ideas in mind, many questions can arise in order to propose a model that gives good insights into the true effect of a pesticide on a colony: how can we quantify these correlations between the bees? How strongly does it depend on the type of pesticide applied? What about other influences related to the environment in which the bees are submitted to?
        </p>

        <p>Below, we hope to give some answers to these questions.</p>

        <h4>a) A concise literature review on bee population models</h4>

        <p>We encountered a myriad of different models in order to assess the risk of pesticides to bee populations [5]. Getting knowledge of them was essential to have a broad and clear idea of the approaches and the rationale involved in the proposal of a model. Furthermore, understanding their foundations helped us to adapt the model in order to suit our specific needs and data. In what follows, hoping to provide for future iGEM teams a good start point when considering this topic, we will give a quick description of the models that we have studied during our research. We also summarize them in Table 4, where their references can be found.</p>

        <p>The oldest model encountered, proposed in 1989, was the so called BEEPOP. The principal objectives proposed were to study the influences on bee population size of the following condictions: weather; initial population size; queen strength; number of spermatozoa obtained by a queen during mating; and number of days a bee can forage. Although it was not proposed so recently (and was written in the older language Fortran 77), it was crucial to the creation of many subsequent models. For example, the VarroaPop+Pesticide model is essentially an adaptation of BEEPOP: it extends the model to analyze infestations of Varroa mite (<i>Varroa destructor</i>) in beehives as well as the influence of pesticides in all its forms of application (seed, soil and foliar spray). BEEHAVE seemed to be the most complete model in terms of provided documentation and information; however, it was also the most complex one and, even though it could be adapted for many different interests, studying pesticide impact was not its main focus.</p>

        <p>The model formulated by Magal et al. (2019) [9] has simplicity and clarity as its main qualities. It focuses to study the influence of pesticides to trigger the colony collapse disorder. Based on the percentage of pesticide-contaminated bees and their mortality, it proposes simple conditions to conclude when a colony will collapse or when the population size will converge to an equilibrium. As it can be seen below, we will give a more detailed description of it, since this was the model chosen for our main simulations.</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/7/75/T--USP-Brazil--IGEM-USP-Model-_Models-to-assess-status.png/834px-T--USP-Brazil--IGEM-USP-Model-_Models-to-assess-status.png"
          />
        </figure>
        
        <h4>b) Theoretical description of the model</h4>

        <p>Now, we will introduce the main ideas and equations present in the model with pesticide contamination of Magal et al. (2019) [9]. Some interpretations for our specific case are also explored.</p>

        <p>
          The first step is to create two boxes to distinguish the forager bees which had contact or not with the pesticide. The first one will be called the contaminated bees and their population size in the time \( t \) (or in the day \( n \)) will be denoted by C(t) (or C(n)), and the second one will be the uncontaminated bees with population size \( U(t) \) or \( U(n) \). After this, we should understand how these two values will vary during the first day and how one bee can pass from one box to the other, which can be summarized in the following equations:
        </p>

        <div class="columns has-text-centered">
          <div class="column is-full">
            <p>
              \[
                \begin{cases}
                  U'(t) = - \mu U(t) - \alpha U(t), \\
                  C'(t) = - \mu C(t) + \alpha U(t)
                \end{cases}\,
              \]
          </p>
          </div>
        </div>

        <p>where <span v-text="`\\( 0 \\leq t  < 1 \\text{ day } \\)`" />; \( \alpha \)  denotes the rate of contamination during the day and \( \mu \) is the natural causes mortality rate of forager bees. Following this, we need to insert the effect of the pesticide into the functions: having in mind that contaminated bees can die (lethal effect) or get disoriented (sublethal effect) after getting in contact with the imidacloprid, we take \( p \) as the proportion of contaminated bees succeeding to return to the hive each day. With this and using \( 1^-\) to denote the time at the end of the first day, the number of contaminated bees which are in the hive at the end of the first day is simply \( pC(1^-) \). The possibly most crucial step is to use this number to obtain the number of foragers recruited in that day, which is given by:
        </p>

        <div class="columns has-text-centered">
          <div class="column is-full">
            <p>
              \( \dfrac{\beta(U(1^{-})+pC(1^-))}{\chi^2 +(U(1^-)+pC(1^-))^2} \)
          </p>
          </div>
        </div>

        <p>where \( \beta \) is the maximal rate of new forager bees recruited per day and \( \chi \) is the so-called Allee parameter.</p>

        <p>Utilizing a similar approach for an arbitrary day \( n \) and making some (many) calculations, the following recursive formulas for the functions \( U(n) \) and \( C(n) \) are obtained:</p>

        <div class="columns has-text-centered">
          <div class="column is-full">
            <p>
              \[
                \begin{cases}
                  U(n+1) = \frac{\beta V(n)^2}{\chi + V(n) ^2} + e^{-(\mu + \alpha)} U(n), \\
                  C(n+1) = pe^{-\mu}C(n) + pe^{-\mu}[1 - e^{-\alpha}]U(n)
                \end{cases}\,
              \]
          </p>
          </div>
        </div>

        <p>where \( V(n) \) is an auxiliary function and is defined by:</p>

        <div class="columns has-text-centered">
          <div class="column is-full">
            <p>
             \( V(n) := pe^{-\mu}C(n) + [ pe^{-\mu} + (1 - p)e^{-(\alpha + \mu)} ] U(n) \)
          </p>
          </div>
        </div>
        
        <p>In order to get a clearer understanding of these functions, we will summarize the results proved in the article by one simpler theorem. Before this, we need to define the following quantity:</p>

        <div class="columns has-text-centered">
          <div class="column is-full">
            <p>
             \( R_1 := \frac{\hat{\beta}}{2\hat{\chi}} = \frac{\beta [1 + p k_2]}{2 \chi [ e^{(\mu + \alpha)} - 1 ]} = \frac{\beta [ [1 - pe^{-\mu}] + p[e^{\alpha} - 1] ]}{2 \chi [e^{(\mu + \alpha)} - 1] [1 - pe^{-\mu}]} \)
          </p>
          </div>
        </div>

        <p>
          As it can be seen below, this number can be used to estimate how likely the population of bees be extinct after some period of time. Intuitively, the likelihood of this happening is greater when the value of \( R_1 \) is smaller.
        </p>

        <p> <strong>Theorem:</strong> Given functions \( U(n) \) and \( C(n) \) satisfying the equations above and with initial values \( U(0)=U_0\geqslant 0 \) and \( C(0)=C_0\geqslant 0 \):
        </p>


        <p>a) (Extinction) If <span v-text="`\\( R_1 <1 \\)`" />, then the functions \( U(n) \) and \( C(n) \) both converge to 0 when \( n\rightarrow \infty \).</p>

        <p> b) If \( R_1>1 \), then the functions \( U(n) \) and \( C(n) \), depending on the initial values \( U_0 \) and \( C_0 \), may converge to \( (0,0) \) or to a positive equilibrium.
        </p>

        <p>
          <strong>Proof</strong>: [Magal et al. 2019, Propositions 1, 2 and 3]
        </p>

        <h4>c) Our scenarios and simulations</h4>

        <p>Now, let us see how this model can be used in our specific case. First of all, we should remember that our main purpose is to simulate a situation in which bees feed themselves from the cultivated field with plants treated with imidacloprid, and compare the cases in which the plants are the usual ones (scenario 1) with a field in which there are our genetically modified plants (scenario 2). We tried to simulate the environment described in the article of Gill et al. (2012) [4]. This way, we calculated most of the parameters, which are collected in Table 3, from the graphics and values shown there.</p>

        <p>Before saying how the parameters were obtained, we will describe the environment created for that by the following two assumptions:</p>

        <ul>
          <li>
            the cultivated field treated with imidacloprid was not the only source of food of the bees. More precisely, only a half of the quantity of the colony food was collected from the cultivated plantation; the other half was taken, for example, from the wild.
          </li>
          <li>
            the average concentration of imidacloprid used in normal plants was 10 ng/g. Therefore, we assume that the concentration of MPMM in the modified plant was also 10 ng/g (and no imidacloprid was found in that). Given the previous item, this means that the average concentration of pesticide in the bees' food was 5 ng/g.
          </li>
        </ul>

        <p>
          Note that the only parameter that will differ from one scenario to the other is the value of \( p \), because it is the only one that measures the pesticide harmful effects. Therefore, we will utilize the notation \( p_i \) for the value of \( p \) in scenario 1, in which imidacloprid is the pesticide, and \( p_m \) for its value in scenario 2, in which MPMM is assumed to be the pesticide.
        </p>

        <p>
          Now, we will propose some methods to calculate the parameters \( \alpha, \mu, p_i \) and \( p_m \), while the values of \( \beta \) and \( \chi \) were simply taken from Table 3 in [8]. 
        </p>

        <p>
          Having in mind that one bee make an average of 4032 visits per day in flowers [13, p. 38] and that half of the flowers of our environment are contaminated, the probability of one bee getting in contact with a contaminated flower is very close to 1. Then, we will assume that the rate of contamination during the day is 1, that is: \( \alpha = 1 \).
        </p>

        <p>
          For the daily natural causes mortality parameter \( \mu \), it was observed in [4, figure 3] that 30% (20% outside the nestbox) was the mean overall loss in the control population after 28 days. Taking into consideration that the average initial population of each colony in the study was around 4 bees and that 27 new bees eclosed by the end of the experiment [4; figure 1, Sup. Information p.1], we see that the average size of the population in each day was \( \frac{4+27}{2}=15.5 \). Therefore, 
        </p>

        <p>\( 15.5\mu= \dfrac{0.3\cdot(4+27)}{28}\Rightarrow \mu\approx 0.021 \)</p>

        <p>
          Thinking about the population treated with imidacloprid, we see that its mean overall loss was around 41%, with 30% being outside. This means that 30-20=10% of the deaths were not expected to happen and occurred outside the nest. We assume that this was the harmful effect generated by the imidacloprid. More precisely, we say that this was the proportion of bees that failed to return to the beehive during this 4-week experiment due to the imidacloprid. Noting that \( 1-p_i \) is the proportion of bees that failed to return after 1 day, we can conclude that:
        </p>

        <p>\( 15.5(1-p_i)=\dfrac{0.1\cdot(4+27)}{28} \Rightarrow p_i\approx 0.9929 \)</p>

        <p>
          Now, we will give a value for the last parameter, the daily proportion \( p_m \) of MPMM contaminated bees succeeding to return to the hive. Since this is the most specific part of our simulation and no experiments could be made in that sense, we made here our strongest assumption by relating the level of toxicity of MPMM with the number of bees that fail to return to the hive. In more details, it is assumed below that the number \( n_P \) of bees that fail to return to the hive due to a pesticide \( P \) is inversely and linearly proportional to the LD50 of \( P \). In mathematical language, this means that for two pesticides \( P \) and \( Q \), it is valid that:
        </p>

        <p>\( n_P\cdot LD50(P)= n_Q\cdot LD50(Q) \)</p>

        <p>
          Then, by considering one of the smaller values for the \( LD50 \) of MPMM, calculated at the end of the "Individual effect" section, we have the following for our case:
        </p>

        <p>\( (1-p_i)\cdot 37 = (1-p_m)\cdot 208\Rightarrow p_m \approx 0.9987 \)</p>


        <p>
          Using these values, it could be calculated our first measure of the harmful effects in a bee colony, the value of \( R_1 \):
        </p>

        <ul>
          <li>
            For scenario 1, with imidacloprid: \( R_1= 4.64 \).
          </li>

          <li>
            For scenario 2, with MPMM: \( R_1= 5.85 \)
          </li>
        </ul>

        <p>
          Our second manner of measuring this was to simulate for various initial population sizes \( (U_0,C_0) \), the evolution of the size of the population. As it can be seen in Figure 9, it was observed that, for sufficiently small populations, the colony population got extinguished in scenario 1 while it converged to a positive equilibrium in scenario 2. For initial population values ( \( U_0 + C_0 \) ) greater than 1,500, no differences were observed in the two scenarios. After dividing by 10 the values of \( U_0,\beta \) and \( \chi \) considered in the first simulation, we have obtained similar results (Figure 10).
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/b/b2/T--USP-Brazil--IGEM-USP-Model-Simulations-of-scenario-1.png/567px-T--USP-Brazil--IGEM-USP-Model-Simulations-of-scenario-1.png"
          />
        </figure>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/thumb/e/e8/T--USP-Brazil--IGEM-USP-Model-Simulations-respectively-of-scenario-1.png/542px-T--USP-Brazil--IGEM-USP-Model-Simulations-respectively-of-scenario-1.png"
          />
        </figure>

        <h4>Conclusions</h4>

        <p>
          Using mathematical tools, we were able to simulate how bees and their beehive would be positively impacted by our genetically modified plant treated with imidacloprid. We could conclude that in normal plants situations 0.71% of bees fail to return to the hive per day after imidacloprid consumption; while our plant provided 0.13% of return, which means the increase of more than 5 times of bees succeeding to return after forage. Additionally, this behave could be projected in long-terms with bee populations, where we were able to predict the survival of the populations with our modified plants against their extinction with usual plants.
        </p>

        <p>
          Finally, we should remember that every model, for the sake of intelligibility, needs to make some simplifications of the reality. And the one we used here is no exception. Therefore, we point out some aspects which were not the focus of the study, but that also deserve a thorough analysis: the influence of the pesticide storaged inside the beehive, and especially in individuals who are not necessarily foragers, such as larvae, nurse bees and the queen; and how the impact changes when different species of bees are considered.
        </p>

        <h2>References:</h2>
        <div class="references">
          <ol>
            <li>
              Becher, M.A., Grimm, V., Thorbek, P., Horn, J., Kennedy, P.J., Osborne, J.L. (2014). BEEHAVE: a systems model of honeybee colony dynamics and foraging to explore multifactorial causes of colony failure. *J Appl Ecol*, 51, 470-482. doi: 10.1111/1365-2664.12222.
            </li>
            <li>
              J. M. Bonmatin, P. A. Marchand, R. Charvet, I. Moineau, E. R. Bengsch, and M. E. Colin. Quantification of Imidacloprid Uptake in Maize Crops. Journal of Agricultural and Food Chemistry 2005. doi: 10.1021/jf0479362
            </li>
            <li>
              G. DeGrandi-Hoffman, S.A. Roth, G.L. Loper, E.H. Erickson, BEEPOP: A honeybee population dynamics simulation model, Ecological Modelling, Volume 45, Issue 2, 1989, Pages 133-150, ISSN 0304-3800. doi: 10.1016/0304-3800(89)90088-4.
            </li>
            <li>
              Gill, R., Ramos-Rodriguez, O., Raine, N. Combined pesticide exposure severely affects individual- and colony-level traits in bees. Nature 491, 105–108 (2012). doi: 10.1038/nature11585.
            </li>
            <li>
              Grimm, Volker; Becher, Matthias; Kennedy, Peter; Thorbek, Pernille; Osborne, Juliet. (2014). Ecological Modeling for Pesticide Risk Assessment for Honey Bees and Other Pollinators. doi: 10.1002/9781118852408.ch11.
            </li>

            <li>
              Joussen N, Heckel DG, Haas M, Schuphan I, Schmidt B. Metabolism of imidacloprid and DDT by P450 CYP6G1 expressed in cell cultures of Nicotiana tabacum suggests detoxification of these insecticides in Cyp6g1-overexpressing strains of Drosophila melanogaster, leading to resistance. Pest Manag Sci. 2008 Jan;64(1):65-73. doi: 10.1002/ps.1472.
            </li>

            <li>
              A. Carmen Kuan, Gloria DeGrandi-Hoffman, Robert J. Curry, Kristina V. Garber, Andrew R. Kanarek, Marcia N. Snyder, Kurt L. Wolfe, S. Thomas Purucker. Sensitivity analyses for simulating pesticide impacts on honey bee colonies, Ecological Modelling, Volume 376, 2018, Pages 15-27, ISSN 0304-3800. doi: 10.1016/j.ecolmodel.2018.02.010.
            </li>

            <li>
              Magal, P., Webb, G.F., Wu, Y. An Environmental Model of Honey Bee Colony Collapse Due to Pesticide Contamination. Bull Math Biol 81, 4908–4931 (2019). doi: 10.1007/s11538-019-00662-5
            </li>

            <li>
              Thomas Schmickl, Karl Crailsheim, HoPoMo: A model of honeybee intracolonial population dynamics and resource management, Ecological Modelling, Volume 204, Issues 1–2, 2007, Pages 219-245, ISSN 0304-3800. doi:10.1016/j.ecolmodel.2007.01.001.
            </li>

            <li>
              Schmuck, R., Schöning, R., Stork, A. and Schramel, O. (2001), Risk posed to honeybees (Apis mellifera L, Hymenoptera) by an imidacloprid seed dressing of sunflowers. Pest. Manag. Sci., 57: 225-238. doi: 10.1002/ps.270.
            </li>

            <li>
              Suchail, S., Guez, D., Belzunces, L. P. (2001). Discrepancy between acute and chronic toxicity induced by imidacloprid and its metabolites in Apis mellifera. Environmental Toxicology and Chemistry: An International Journal, 20(11), 2482-2486. doi: 10.1002/etc.5620201113.
            </li>

            <li>
              Sur, R., Stork, A. (2003). Uptake, translocation and metabolism of imidacloprid in plants. Bulletin of insectology, 56, 35-40.
            </li>

            <li>
              Truitt, L., McArt, S., Vaughn, A., Ellner, S. P. (2019). Trait-based modeling of multi-host pathogen transmission: Plant-pollinator networks. The American Naturalist. doi:10.1086/702959
            </li>

            <li>
              Zioga, E., Kelly, R., White, B., Stout, J. C. (2020). Plant protection product residues in plant pollen and nectar: A review of current knowledge. Environmental research, 109873. doi: 10.1016/j.envres.2020.109873.
            </li>

            <li>
              Suchail, Severine, et al. "In vivo distribution and metabolisation of 14C‐imidacloprid in different compartments of Apis mellifera L." Pest Management Science: formerly Pesticide Science 60.11 (2004): 1056-1062.
            </li>

            <li>
              Seifrtova, Marcela, et al. "Distributions of imidacloprid, imidacloprid‐olefin and imidacloprid‐urea in green plant tissues and roots of rapeseed (Brassica napus) from artificially contaminated potting soil." Pest management science 73.5 (2017): 1010-1016.
            </li>

            <li>
              Blacquiere, T., Smagghe, G., Van Gestel, C. A., Mommaerts, V. (2012). Neonicotinoids in bees: a review on concentrations, side-effects and risk assessment. Ecotoxicology, 21(4), 973-992.
            </li>
          </ol>
        </div>
        
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

        <div class="column" />

        <div class="content column is-two-thirds">
          <p>Using the following image we calculated the <b>diameter of pollen grains.</b></p>

          <figure class="has-text-centered">
            <img
              src="https://2021.igem.org/wiki/images/e/ea/T--USP-Brazil--IGEM-USP-Model-_Pollen-grains.png"
            />
          </figure>

          <p>Then considering the pollens having a spherical volume we obtained the value of <b>\( 4,6 \cdot 10^9 \text{grains}/L \).</b></p>

          <p>Now looking at the work of Twell (1994) [4] it is known that the mass of GUS enzyme per pollen grain (in the anthesis period, then the reproductive cycle of tomato plants begins) is <b>6 ng</b>. We experimentally found a value of 4.1 ng/pollen grain. In addition, we considered E. coli GUS enzyme having a molecular weight of 68,447 kDa [5], so:</p>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( GUS = \frac{1 mol}{68,447 kg} \)</p>
            </div>

            <div class="column is-1">
              <p>(1)</p>
            </div>
          </div>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( [GUS] = 4,6.10^{9}\frac{grain}{L} \cdot \frac{6 ng}{grain} \cdot \frac{1 mol}{68,447 kg}=0,407 mmol/L \) </p>
            </div>

            <div class="column is-1">
              <p>(2)</p>
            </div>
          </div>

          <p>Considering the cleavage efficiency being between 80%-90% then we have:</p>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( [CYP|0,8] = 0,326 mmol/L \) </p>
            </div>

            <div class="column is-1">
              <p>(3)</p>
            </div>
          </div>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( [CYP|0,9] = 0,366 mmol/L \) </p>
            </div>

            <div class="column is-1">
              <p>(4)</p>
            </div>
          </div>
          
        </div>

        <div class="column" />
      </div>
    </div>

    <div
      id="SecondOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="SecondMO" class="modal_USP is-hidden">
      <div class="columns">

        <div class="column" />

        <div class="content column is-two-thirds">

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( S(t) + K ln S(t) = -V_{max}t + S_{0} + K ln S_{0} \) </p>
            </div>

            <div class="column is-1">
              <p>(1)</p>
            </div>
          </div>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( ES(t) = \frac{E_{0}S(t)}{S(t) + K} \) </p>
            </div>

            <div class="column is-1">
              <p>(2)</p>
            </div>
          </div>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( E(t) = E_{0} - ES(t) \) </p>
            </div>

            <div class="column is-1">
              <p>(3)</p>
            </div>
          </div>

          <div class="columns has-text-centered">
            <div class="column is-11">
              <p> \( P(t) = S_{0} - S(t) \) </p>
            </div>

            <div class="column is-1">
              <p>(4)</p>
            </div>
          </div>

        </div>

        <div class="column" />
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

<style>
.katex { font-size: 1.2em; }
</style>

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
