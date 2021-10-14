<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/7/7d/T--USP-Brazil--IGEM-USP-Contributions-banner.png"
      />
    </div>
    
    <section class="columns">
      <div class="column is-one-fifth"></div>
      <div class="content column is-three-fifth">

        <!--- Contributions --->
        <h2>Contribution</h2>
        <p>
          In this page we show our special contributions to future iGEM teams and researchers, 
          by trying to pass on some of the knowledge and abilities we learned while developing our project. 
          The COVID-19 pandemic was a major obstacle for us during the last two years, it kept us from doing
          experiments in the lab throughout most of the time, but from that difficulty we came up with the 
          <b>
            Protein Structure Prediction Handbook.
          </b>
          We also learned a lot about many enzymes from the CYP P450 superfamily, 
          that can be useful for many types of projects, thus we decided to share some of what we learned by  
          <b>
            adding data to the CYP3A4
          </b>
          in the Registry.
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
          We had to find ways to understand our protein and its interactions with the pesticide, while still 
          being far away from our lab. Searching for literature, we
          <b>
            did not even find its crystallographic structure,
          </b>
          which would have been the most important feature. Among the options, molecular modelling seemed to 
          be the most interesting one.
        </p>
        <p>
          At first, we really had seen ourselves at the bottom of the pit. Nobody knew anything about protein 
          modelling. After months of research and contact with specialists, we realized how molecular modelling 
          was difficult. 
          <b>
            We struggled to find the information we needed
          </b>
          and even more to apply it to several programs to do our experiments. Also, there was another hindrance 
          we found in our way: the
          <b>
            high price of several programs,
          </b>
          making them inaccessible for most people.
        </p>
        <p>
          Having these factors in mind, our objective while writing this handbook was to 
          <b>
            give a shortcut in the usage of different programs while we showed why and how we were performing each 
            step.
          </b>
          Also, having the economic factor in mind, we decided to only use 
          <b>
            open-source programs,
          </b>
          facilitating the access and studies of scientists around the world. This way, by turning our journey 
          into a handbook, we could maybe help other teams and researchers that also have to use a protein structure 
          in their project that was not yet studied.
        </p>
        <h3>A little about what you can find in our handbook</h3>
        <p>
          Our handbook has a logic sequence of steps that approaches from 
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
          We decided to use the CYP6G1, which is a member of the cytochrome P450 superfamily of enzymes, as our object 
          of study because it was the focus of our project in general. 
        </p>
        <p>
          As there was no CYP6G1 structure deposited in the 
          <a href="https://www.rcsb.org/">RCSB.org</a>
          (an important website for structural biologists that presents crystallized proteins) we started the handbook 
          by telling future users about the 
          <b>
            comparative modelling
          </b>
          and what we could do if we did not have our object of study crystallized or deposited in RSCB.org. 
          Consequently, we delved through the choice of a 
          <b>
            template protein
          </b>
          and the usage of BLAST system. Then, we described the modeller program which is a protein modeling software 
          known for demanding little of computer processing.
        </p>
        <p>
          After introducing a little about protein modelling and modeller, we present the 
          <b>
            experimental procedure section
          </b>
          in which we detailed the command lines for the alignment of proteins after the choice of the template protein, 
          giving an open-minding view of each command and line involved. Then, we present how the modeling process is 
          realized in modeller software. After this step, we taught how the modelling refination could be realized using 
          programs as
          <a href="https://toolkit.tuebingen.mpg.de/tools/quick2d">Quick2D</a>
          and  I-tasser, showing the excellence of our model compared to the well known established database for modeled 
          proteins : the 
          <a href="https://alphafold.ebi.ac.uk/">alphaphold</a>
          .
        </p>
        <p>
          Noticeably, for scientists, there is 
          <b>
            no science without method validation.
          </b>
          Thus, we also created a section that introduced some tools employed to validate the cyp6g1 generated models 
          while we explained why and how each one of these tools could be used.  
        </p>
        <p>
          Not satisfied with presenting distinguished aspects and programs for protein modeling, our team created a 3rd 
          section for 
          <b>
            molecular docking
          </b>
           in the handbook. Molecular docking is very important to understand aspects of interaction between ligands and 
           proteins. Having this in mind, the section started by describing molecular docking and its process of 
           <b>
             molecular recognition.
           </b>
           Thereafter, we explained 
           <b>
             molecular interactions
           </b>
           and what can be observed in docking followed by a brief explanation of evaluation scores functions used by docking 
           programs. Then, we described how molecular docking is used in distinct industries.
        </p>
        <p>
          This section ends by demonstrating each step needed to carry out a proper molecular docking experiment using an 
          open-source website (
          <a href="https://dockthor.lncc.br/v2/">dockthor</a>
          ). As we have pointed out, we wanted to present some free ways for you to carry out your own modelling road, and 
          Dockthor fill these requirements.
        </p>
        <p>
          To do so, we presented tools for protein parameterization (
          <a href="https://server.poissonboltzmann.org/pdb2pqr">pdb2pqr</a>
          ), ligand minimization (chem3d), structure visualization (Studio Discovery Visualizer), file converter (Open Babel), 
          explaining in details each part at the handbook. 
        </p>
        <p>
          If you enjoyed knowing a little about protein modelling and molecular docking and want to check out for more 
          information please access our handbook: 
          <!--- ************** PATH DO PDF (PDF DO HANDBOOK) ************** --->
        </p>

        <!--- Adding data to CYP3A4 --->
        <h2>Adding data to CYP3A4</h2>
        <p>
          Our project was based on a CYP P450 and its properties, but researching and understanding relevant characteristics of 
          this enzyme can be very demanding. So nothing better for us than to aid future teams that might be thinking of using 
          them in their own project by providing some important information about one of them. 
        </p>
        <p>
          The CYP3A4 enzyme (BBa_K1064004) has the function of metabolizing a vast diversity of molecules in the cell naturally, 
          being part of the cytochromes P450 superfamily and also the 
          <b>
            most abundant xenobiotic-metabolizing cytochrome P450 isoform,
          </b>
          with the CYP3A4 encoding gene located on chromosome 7 in humans. 
        </p>
        <p>
          Being such an important enzyme, much work and research is done about it, and the vast knowledge about this protein makes 
          it a prime candidate for synthetic biology experiments. Thus, we reckon that adding more data about this enzyme to the 
          iGEM Registry page could be very helpful for future teams to understand more about its potential, limitations and usages. 
          On this expansion of data, we aimed to introduce 
          <b>
            relevant and introductory information
          </b>
          on a wide range of topics regarding the enzyme, such as its 
          <b>
            interactions with other molecules, structure and genetic variability.
          </b>
          Those topics can be especially useful to figure out the applicability of the enzyme to an idea, its modelling, as well as 
          possible modification mechanisms that one might want to apply to it.  Hopefully, providing a 
          <b>
            good headstart for other teams
          </b>
          interested in it to more easily situate themselves and then find more articles on their own specific interests.
        </p>
        <p>
          This enzyme is capable of 
          <b>
            metabolizing toxic substances,
          </b>
          like insecticides (Azinphos-methyl; carbaryl; chlorpyrifos; diazinon; imidacloprid; parathion; phorate), insect repellents 
          (DEET), herbicides (Acetachlor; alachlor; ametryne; atrazine; butachlor; terbuthylazine; terbutryne) and numerous drugs 
          (Erythromycin, alprazolam, felodipine, simvastatin, testosterone, testosterone, verapamil, vincristine), with the hydroxylation 
          of an sp³ C-H bond as one of the ways in which CYP3A4 affects its ligand. A vital part of its ability to metabolize toxic 
          substances lies on the heme group present inside its structure, which is very flexible and is able to interact with various 
          types of substrates.
        </p>
        <p>
          It is possible to induce a heightened production of CYP3A4 through a variety of ligands. These ligands bind to a specific receptor 
          called pregnane X (PXR). The activated complex forms a heterodimer that binds to a regulatory region of the CYP3A4 gene and this 
          interaction can result in increased transcription of the enzyme due to the cooperative interaction with the proximal promoter 
          regions of the gene.
        </p>
        <p>
          For teams aiming to use this molecule, its ligand-free crystal structure has been reported and is available for download in .pdb 
          format at 
          <a href="https://www.rcsb.org/structure/1TQN">this RCSB PDB database page,</a>
          with a resolution of 2.05 Å. For a CYP3A4 bound to metyrapone and progesterone, reports have been produced with crystal structures 
          that can be found at the RCSB PDB database under the pubmed 
          <a href="https://www.rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_pubmed_container_identifiers.pubmed_id%22%2C%22negation%22%3Afalse%2C%22operator%22%3A%22in%22%2C%22value%22%3A%5B15256616%5D%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%226951e0ac56bdef3b7285c101e4fc216b%22%7D%2C%22request_options%22%3A%7B%22pager%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D">ID 15256616</a>
          Check our other additions in the CYP3A4 page in
          <a href="http://parts.igem.org/Part:BBa_K1064004">the Registry</a>
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

export default {
  name: "Description",

  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped></style>
