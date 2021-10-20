<template>
  <div>
    <Nav />

    <div class="is-full">
      
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/d/d4/T--USP-Brazil--IGEM-USP-Experiments-Banner.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth"></div>
      <Backtotop />
      <div class="content column is-three-fifth">
        <img
          src="https://2021.igem.org/wiki/images/5/52/T--USP-Brazil--IGEM-USP-Experiments-Figure1.png" 
        />

        <!--- Plant transformation and regeneration --->
        <h2>Plant transformation and regeneration</h2>
        <p>
          The plant transformation was done by Pangea Biotech as described by Wittmann et al. (2015) [3]. If you wish to check 
          out a summarized version of the protocol used, access 
          <a href="https://docs.google.com/document/d/1caghi_0KG4K2SArPymAUNeMyihkoOXDx/edit?usp=sharing&ouid=112739303746270721820&rtpof=true&sd=true">this documentation.</a>
        </p>

        <!--- Plant growth and material extraction --->
        <h2>Plant growth and material extraction</h2>
        <p>
          The plants were grown under a controlled temperature environment, set up at 30°C. A natural daylight cycle was used. 
          Leafs and pollen were extracted between 9-10 a.m, during August and September (*in the southern hemisphere). The samples 
          were frozen on liquid nitrogen and stored on 1.5 mL microtubes at -80°C (except for GUS assays).
        </p>
        <ul>
            <li>
              <em>
                Histochemical GUS staining
              </em>
              <p>The assay followed a modified Goldbio Biotechnology's protocol [2] in which fresh pollen was collected 
                from the transgenic plant's flower using a brush less electric toothbrush. Further explanation can be 
                found in this 
                <a href="https://2021.igem.org/Team:USP-Brazil/Notebook">wiki's notebook.</a>            
              </p>
            </li>
            <p></p>
            <li>
              <em>
                DNA plants extraction
              </em>
              <p>
                Sample leaves were used for RNA isolation following a modified Vennapusa (2020) protocol. Ten and twenty 
                milligrams of plant mass was ruptured with glass beads in 1 mL lysis buffer three times. Each cycle had 1 
                minute of agitation and 1 minute of rest at room temperature, 22°C. Tris-HCl buffer saturated phenol 
                (pH 7.4) was used instead of 0.1 M citrate buffer saturated phenol pH 4.3. DNA precipitation was made with 
                the addition of 2.5x ethanol volume and 0.1x volume of lysate with sodium acetate 3M (pH 5.2). DNA washing 
                was carried in two similar steps with etanol 70% (v/v) solution. The DNA pellet was solubilized in water 
                treated with 0.1% (v/v) DEPC.
              </p>
              <p>
                The DNA quantity and purity was checked with NanoPhotometer® NP80.
              </p>
            </li>
            <p></p>
            <li>
              <em>
                Validation of insertion cassette LAT52-CYP6G1-GUS from genomic PCR
              </em>
              <p>
                To validate the Let.it.bee's cassette integration into the plant's genome, 100 ng of each plant 
                DNA was used in GoTaq® Green Master Mix (Promega) reaction. Touchdown PCR conditions were used:
              </p>
              <h3></h3>
              <p>
                Touchdown Phase:
              </p>
              <p>
                Initial denaturation: 94°C - 30 s
              </p>
              <p>
                <b>
                  Cycle with 10 repetitons: 94°C - 20 s, 62°C (-1°C per cycle) - 30 s, 68°C - 2 min 30s
                </b>
              </p>
              <p>
                Enrichment Phase:
              </p>
              <p>
                <b>
                  Cycle with 27 repetitions: 94°C - 20 s, 52°C - 30 s, 68°C - 2 min 30s
                </b>
              </p>
              <p>
                Final Extension: 68°C - 5 min
              </p>
              <h3></h3>
              <p>
                PCR products were visualized in an agarose gel with 1% (w/v) in 1x Tris-Acetate-EDTA buffer. The gel ran 
                on an electrophoresis chamber set to 20 min and 130V.
              </p>
            </li>
            <p></p>
            <li>
              <em>
                RNA extraction
              </em>
              <p>
                About 10-20 mg of plant mass or pollen, frozen in liquid nitrogen, had their cells was disrupted with 
                mortar and pestle. After pulverization, a lysis buffer was added following PureLink™ RNA 
                (Invitrogen™) protocol. The total RNA was eluted in 30 μL of water treated with diethyl 
                pyrocarbonate (DEPC). Genomic DNA traces were removed through of TURBO DNA-free™ Kit (Invitrogen™), 
                following their protocol. For leaves, 10-20 mg of mass was extracted with TRIzol™ Reagent (Invitrogen), 
                disrupting wall cells with the previously mentioned method. We used 1 mL of reagent for each sample and 
                the extraction was made according to the optimized method [1]. The RNA pellet was solubilized in 32 µL 
                of water treated with DEPC. Quantity and purity were analysed in Implen NanoPhotometer® NP80 and integrity 
                was verified with a 1% (w/v) agarose gel electrophoresis in 0.5x Tris-Borate-EDTA buffer. Treated RNA samples 
                were stored at -80°C.
              </p>
            </li>
            <p></p>
            <li>
              <em>
                cDNA synthesis
              </em>
              <p>
                cDNA synthesis was made with 500 ng of treated RNA from leaf or pollen according to SuperScript IV (Invitrogen) 
                protocol at final volume of 30 μL reaction. The synthesized cDNA synthesized was stored at 
                -20°C.
              </p>
            </li>
            <p></p>
            <li>
              <em>
                Transcripts quantification from RT-qPCR
              </em>
              <p>
                RT-qPCR assays were carried out in StepOnePlus equipment (Applied Biosystems) using 6 µL of 2X SYBR Green Fast 
                reagent (Applied Biosystems), 0.3 µM forward and reverse primers, 50 ng cDNA synthetized from all RNA from 
                tomato's pollen and leaf, and nuclease-free water to a final volume of 12 µL. Primers efficiency were determined 
                in RT-qPCR reactions using 1:2 cDNA dilutions in a range between 200 ng and 12,5 ng obtained from the pollen of 
                transgenic tomato plants. Genic expression at transcript level was assessed for two target genes, CYP6G1 and GUS, 
                and "Expressed", a reference gene for tomato.
              </p>
            </li>
        </ul>

        <!--- References --->
        <h2>References:</h2>
        <div id="references1" class="references">
          <ol>
            <li>
              Lee S. Toni, Anastacia M. Garcia, Danielle A. Jeffrey, Xuan Jiang, Brian L. Stauffer, Shelley D. Miyamoto, Carmen C. 
              Sucharov, Optimization of phenol-chloroform RNA extraction, MethodsX, Volume 5, 2018, Pages 599-608, ISSN 2215-0161, 
              https://doi.org/10.1016/j.mex.2018.05.011. (https://www.sciencedirect.com/science/article/pii/S2215016118300773)
            </li>
            <li>
              Gold Biotechnology. (2016). Histochemical Staining of GUS Reporter Activity. Retrieved from 
              https://www.goldbio.com/documents/1052/Histochemical Staining of GUS Reporter Activity.pdf.
            </li>
            <li>
              Wittmann, J.; Brancato, C.; Berendzen, K. W., Dreiseikelmann, B.; Development of a tomato plant resistant to Clavibacter 
              michiganensis using the endolysin gene of bacteriophage CMP1 as a transgene, 2015. https://doi.org/10.1111/ppa.12417
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
