<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/7/71/T--USP-Brazil--IGEM-USP-Sponsors-Banner.png"
      />
    </div>

    <section class="columns">
      <div class="column is-one-fifth"></div>
      <Backtotop />
      <div class="content column is-three-fifth">
        <h2>A GLIMPSE INTO OUR JOURNEY</h2>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/8/81/T--USP-Brazil--IGEM-USP-Engineering-journey.png"
            alt=""
          />
        </figure>

        <p>
          Bees carry great importance to the environment and humanity,
          pollinating a huge diversity of plants, including meaningful crops.
          Driven by concern over their disappearance, we created our synbio
          project Let.it.bee by genetically modifying a Micro-Tom that can
          metabolize the dangerous substance.
        </p>

        <p>
          The development of our project through these last two years can be
          divided into many steps, that all form our Engineering cycle. The
          story begins with the idealization of Let.it.bee., by
          <b>researching</b> literature and specialists to
          <b>understand the problem and the possible solution</b>. After
          learning about the situation, we managed to
          <b>design and build an optimized genetic circuit</b> to be expressed
          in a plant.
        </p>

        <p>
          Although the pandemic impaired many of our plans, we managed to test
          it by <b>modelling</b> and conducting preliminary
          <b>wet lab tests</b>. However, to gather more knowledge about our
          project's operation, we need to conduct
          <b>more experiments in the future</b>, to continue the cycle and
          improve it continuously.
        </p>

        <p>
          Here we plan to show you step by step the journey of our project
          development and how it finally became Let.it.bee.
        </p>

        <h2>IDEALIZING AND CREATING LET.IT.BEE.</h2>

        <h3>1st Step. Understanding the problem</h3>

        <p>
          The first step for the creation of our project was understanding the
          problem we wanted to deal with: the bees' disappearance. From this
          essential initial point, we could begin to design a possible solution.
          So we had to research <b>WHAT</b> is affecting the bees,
          <b>HOW</b> and <b>WHY</b> is it happening.
        </p>

        <p>
          Throughout the research, we discovered that the phenomenon is very
          related to <b>neonicotinoid pesticides</b>, especially the most used
          one called Imidacloprid, that affect bees through
          <b>pollen contamination</b> because farmers need to use it in their
          crops since it is a <b>necessary pesticide</b> for its maintenance [1,
          2, 3]. From that perspective, we understood that, in order for our
          project to be applicable, it had to aim at those pesticides, while not
          harming the function of the substance.
        </p>

        <p>
          With that in mind, we now had to understand how we could approach that
          initial basic planning of the project:
          <b
            >a genetic circuit capable of detoxifying Imidacloprid without
            making plants vulnerable to pests.</b
          >
        </p>

        <h3>2nd Step. Understanding the solution</h3>

        <p>
          After performing some literature research about the topic, we
          discovered some elements that could help us reach the approach we
          needed and answer our major questions. Now we also had to choose
          between the options the literature provided us, mainly considering the
          <b>best possible results</b> in relation to our goal and the
          <b>optimization</b> of our circuit. Our preliminary research consisted
          especially of the followins topics:
        </p>

        <p><b>WHAT COULD MAKE IMIDACLOPRID LESS TOXIC?</b></p>

        <p>
          There are organisms that are capable of metabolizing Imidacloprid to
          less toxic and/or more hydro soluble metabolites and they could give
          us a tip on which way we can use to reach our goal.
        </p>

        <ul>
          <li>
            <b>In Prokaryotes:</b> our first find was the evidence of
            <b
              >bacteria that have been reported as capable of degrading
              Imidacloprid in soil</b
            >, a clue as to the existence of a possible metabolic pathway to
            generate interesting substances for the project [4]. The mechanisms
            related to the action was not yet totally clarified, though, so its
            use could not be as effective for our objective.
          </li>
          <li>
            <b>In Eukaryotes:</b> some insects were reported as being resistant
            to Imidacloprid. In those animals, the mechanisms related to the
            metabolism of the pesticide were studied, connecting it to the
            expression of some CYP P450 enzymes [5]. They metabolize the
            substance at different rates and into different proportions of
            metabolites. We came across two potential enzymes that were found in
            insects, indicating that they could generate metabolites that were
            less harmful to insects than Imidacloprid. They were:
          </li>
          <li>
            CYPAY1: from <i>Nilaparvata lugens</i>, being the enzyme with a
            higher catalytic activity than the other one that is also
            overexpressed in the insect with insecticide resistance [15].
          </li>
          <li>
            CYP6G1: from <i>Drosophila melanogaster</i>, which notably generates
            the 4-hydroxy and 5-hydroxy metabolites.
          </li>
        </ul>

        <p>
          They generate similar metabolites, with the highest concentration
          being of 5-hydroxy and 4- hydroxy [16, 19]. We
          <b>chose the CYP6G1</b> especially for the following reasons, besides
          the generation of more hydrosoluble metabolites in resistant fruit
          flies: it is
          <b>very effective in metabolizing the Imidacloprid</b> (83% of 400 µg
          in 48h) and it had also been
          <b>successfully expressed in plants cells</b>,making it a safer option
          for our project to get good results [16].
        </p>

        <p><b>WHAT COULD BE OUR CHASSIS?</b></p>

        <p>
          The chassis choice is very important for any synbio project, as it
          will be where your circuit will act and where you will test. Using
          plants in a synbio project has its own peculiarities and difficulties,
          especially concerning its <b>relatively long life cycle</b> in
          comparison with microorganisms and
          <b>conditions for optimal development</b>, so we can collect enough
          material for tests in a viable time for the competition.
        </p>

        <p>
          Depending on the type of project, chassis with relatively simple
          systems can be used, which can help surpass some obstacles: algae,
          diatoms and moss [6]. But, for our project, we needed plants that grow
          flowers, and therefore pollen tissue, to test the local expression, so
          we had to choose an <b>angiosperm chassis</b>.
        </p>

        <ul>
          <li>
            <b>First choice: <i>Arabidopsis thaliana</i> </b>
          </li>
        </ul>

        <p>
          The main chassis for most plant projects is
          <i>Arabidopsis thaliana</i>, from the mustard family
          (<i>Brassicaceae</i>), notably because of its short life cycle, ease
          in genetic transformation and extensive resources in research [6].
          Accordingly, it was also our first choice for the transformation, as
          it produces pollen.
        </p>

        <ul>
          <li><b>Final choice: Micro-Tom</b></li>
        </ul>

        <p>
          However, although <i>A. thaliana</i> is a good plant chassis, it had
          some problems in relation to our project development. First,
          <b>its growth in our Institute is not optimal</b> and it could affect
          the pollen collection by not having enough for our tests or not
          reaching maturity by the time we needed it. Another important point is
          that
          <b>it is not a crop, grown as food or for other commercial purposes</b
          >, it is mostly used as a model for researches, so it diverges from
          the main goal of our project which is its applicability to
          agriculture.
        </p>

        <p>
          Talking to our Principal Investigators, we decided to use the
          <b>Micro-Tom</b> (<i>Solanum lycopersicum</i>) as a chassis for our
          transformation. It is a dwarf tomato cultivar, thus we can associate
          its transformation to future agriculture applicability, as well as it
          is <b>pollinated by bees</b> that vibrate on its flower to release
          pollen (such as the bumblebees) [8]. Also, it has many main technical
          characteristics that are important for plant projects: its
          <b
            >life cycle is short, it has a lot of genomic data and it has an
            optimal growth in our Institute's greenhouse</b
          >
          [14].
        </p>

        <p>
          This way, we managed to choose a chassis that could
          <b
            >provide us with material for experiments in time for the
            competition, while already testing for our target plant type: crops
            pollinated by bees</b
          >, that could possibly be very affected by their disappearance.
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/1/10/T--USP-Brazil--IGEM-USP-Engineering-Choice-of-chassis.png"
            alt=""
          />
        </figure>

        <p><b>HOW TO NOT HARM THE PESTICIDE FUNCTION?</b></p>

        <p>
          We had to research ways to make the enzyme be expressed in only a part
          of the plant: the pollen. As the time and place of the
          <b>gene expression is mainly guided by promoter regions</b>, because
          of the association of regulatory elements, that was the focus of our
          strategy [7]. We found articles describing the activity of some anther
          promoters, analyzing genes that are expressed in pollen. In tomato
          genome, we found out about especially two promoters that had more
          resources in articles: <b>pLAT59 and pLAT52</b>, related to the
          regulation of pollen development [17, 18]. By analyzing articles about
          their expression, we came to some conclusions:
        </p>
        <ul>
          <li>
            <b>pLAT59</b>: although this promoter expression was very similar to
            pLAT52, being expressed in the plant's pollen, its expression was
            also detected, although in low levels, <b>in seeds and roots</b>,
            which could possibly impair the function of the pesticide in
            important parts of the plants that are visited by pests [17].
          </li>
          <li>
            <b>pLAT52</b>: in comparison, pLAT52 had a more tissue-specific
            expression, being very restricted to pollen. Thus it was
            <b>the best option for our project</b> [17].
          </li>
        </ul>

        <p><b>HOW CAN WE OPTIMIZE THE DEVICE?</b></p>

        <p>
          Making a long circuit can make it
          <b>too complex and too expensive</b>. Our promoter is already too long
          and to test the local expression we
          <b>would have to copy it two times</b>: one time before the enzyme and
          the other before the reporter gene, so both proteins can be expressed
          only in pollen. That was a huge problem for us since it made the
          construction incredibly expensive and possibly
          <b>less stable</b> [9,10,11].
        </p>

        <p>The first circuits we created was thus the following:</p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/a/af/T--USP-Brazil--IGEM-USP-Engineering-Final-circuit-with.png"
            alt=""
          />
        </figure>

        <p>
          To shorten it, we discovered the report of viral peptides (<b
            >2A peptides</b
          >) capable of
          <b
            >self cleaving, allowing co-expression through a mechanism called
            "ribosome skipping"</b
          >. Basically, during the translation, it would break the two proteins
          apart, so they would not need two promoters to be separately found in
          the cell. They are relatively small, so it does not interfere in the
          function of the proteins of interest we are trying to express. This
          method was tested in different <b>bi-cistronic works successfuly</b>,
          but there was a possibility of it also forming either a fusion protein
          (by the unsuccessful skipping) or the expression of only the upstream
          protein (because of the ribosome "falling off", discontinuing the
          translation) in some of the skippings [12].
        </p>

        <p>
          Although 2A peptides, in comparison with other methods, are very
          efficient in the downstream protein expression, the percentage of
          successful cleavage could be an obstacle, since it could be as lower
          as 50% [13]. By using them, we could possibly not have an ideal
          expression of both our proteins.
        </p>

        <p>
          However, when
          <b>fusioning the 2A peptide to a LP4 linker peptide</b> from seeds of
          <i>Impatiens balsamina</i>, the cleaving
          <b>efficiency has been reported to grow up to 80-90%</b> [13]. For our
          circuit, we then decided to use the peptide fusion, allowing us the
          best of both worlds: the co-expression and an ideal expression of our
          proteins. This resulted in the following circuit design, the one we
          built:
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/3/3e/T--USP-Brazil--IGEM-USP-Engineering-Final-circuit-with-cyp6g1.png"
            alt=""
          />
        </figure>

        <h3>3rd step. Actually designing and building the device</h3>

        <p>
          With those findings, we decided that our project would have to be the
          <b
            >genetic modification of a plant, with the intention of making it
            express an enzyme locally, in its pollen, by constructing a circuit
            to be inserted into its genome, composed of a tissue-specific
            promoter, a CYP P450 and an LP4/2A peptide between the enzyme and
            our reporter gene</b
          >. If you wish to know more details about our Design, you can check
          our
          <a href=" https://2021.igem.org/Team:USP-Brazil/Design">
            Design page.</a
          >
        </p>

        <p>
          With the defined sequences for each genetic part, we, therefore,
          designed a circuit that could be easily adapted to different plants
          and different pesticides in the future, by replacing the promoter and
          enzyme genetic.
        </p>

        <p><b>The plant vector</b></p>

        <p>
          For the plant transformation to be stable, we used a
          <b><i>Agrobacterium tumefaciens</i></b> to insert the circuit into the
          plant, which meant we had to first insert it into a plant vector with
          adaptations for the transformation.
        </p>

        <p>
          The circuit was inserted into a <b>binary vector</b>, meant for
          <i>A. tumefaciens</i>, with some special gene sequences for right
          conduction of experiments, the most important one being the selection
          genes for the cloning with <i>Escherechia coli</i> and for selection
          of transformed plant cells, for which we used strep/spec resistance
          and kanamycin resistance, respectively.
        </p>

        <p><b>Obtaining the modified plant</b></p>

        <p>
          After obtaining the vector with our circuit inserted, the plants could
          be transformed. Because of the pandemic, we had to ask an specialized
          facility to do the transformation for us, since we could not use the
          lab spaces in our university.
        </p>

        <p>
          That completes the whole designing and building phase of our project,
          from researching, designing the circuit and, finally, genetically
          modifying the Micro-Tom plant.
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/6/65/T--USP-Brazil--IGEM-USP-Engineering-process-to-obtain-the-modified.png"
            alt=""
          />
        </figure>

        <h2>TESTING LET.IT.BEE.</h2>

        <h3>1. Modelling tests</h3>

        <p>
          The COVID-19 pandemic was a huge hardship for our team. For most of
          the time we spent developing our project, we were not allowed in lab
          spaces due to sanitary restrictions and therefore
          <b>could not conduct lab experiments</b>. In this scenario, we had to
          find ways to get results while isolated at our own homes. We got that
          through <i>in silico</i> approaches, through our modelling.
        </p>

        <p>
          To predict some results from our project, we developed especially two
          types of model: <b>micromodels</b> to understand more about the
          operation of our circuit and a <b>macromodel</b> to understand the
          applicability of the plants expressing our circuit among populations
          of bees. With these two main simulations, we intended to address the
          main questions about our idea.
        </p>

        <p><b>Micromodels</b></p>

        <p>
          The first modelling was to understand the CYP6G1 structure molecular
          to check viability of further improvement by amino acid-specific
          mutations. We tried modelling it by comparative modelling with help of
          the optimized structures from high performance predict servers. We
          used MODELLER program to create the best validation scores CYP6G1 a
          with cofactor heme included. We have identified important and
          conserved residues for stabilizing the heme group by hydrogen bonds.
          We will not recommend their mutation. Also, we can try to build the
          best protein model without high computer performance and time cost
          and, for this, we developed an accessible protocol for every iGEM
          team, showing that is possible to generate good models closer to the
          Alphaphold's protein models. But, depending on the percentage of
          protein similarity with the template, we will not recommend the use of
          the model to understand the interaction between the protein and
          substrate on catalytic site enzyme for predicting for select amino
          acids for mutations.
        </p>

        <p>
          The second micromodelling was to check how our circuit would behave
          within the plant, how much would be expressed, the rate of expression,
          how much imidacloprid would be degraded.
        </p>

        <p><b>Macromodel</b></p>

        <p>
          We have created a model that could simulate bee colony interactions
          with crops. In order to get a more precise understanding of the
          benefits that the introduction of our plant could generate for bee
          populations, we initially analysed the case when the field contains
          only wild type plants. This was made by calculating the percentage of
          foragers bees that do not come back to the hive after getting in
          contact with the pesticide, and also by creating a parameter that
          could quantify the likelihood of happening a colony collapse. After
          this, we simulated the scenario in which the cultivated plants were
          actually our modified plant. By comparing the parameters in both
          cases, we could conclude that, in the second scenario, the percentage
          of bees that succeed in returning to the colony increased and that the
          likelihood of occurrence of a colony collapse disorder was lowered.
        </p>

        <h3>2. Wet Lab tests</h3>

        <p>
          Although most of the experiments had to be delayed because of the
          <b>pandemic restrictions</b>, we performed a few
          <b>preliminary lab tests</b> to understand and confirm data about the
          expression of our circuit in the Micro-Tom plant.
        </p>

        <p>
          Because of the pandemic, our plants also took a long time to grow
          enough to test (as the lab from the facility was also restricted for
          the transformation to start sooner), therefore we had to
          <b>perform the tests in the first generation of plants (the T0)</b>,
          directedly regenerated from the transformed cells.
        </p>

        <p>
          Thus, we performed the following tests in the plants, to answer some
          important questions:
        </p>

        <ul>
          <li><b>Genomic PCR</b></li>

          <p>
            Are plants being successfully transformed? Which plants have our
            circuit integrated into their genome?
          </p>
        </ul>

        <ul>
          <li><b>qPCR</b></li>

          <p>
            How much of our circuit is being expressed? Is the expression
            specific enough?
          </p>
        </ul>

        <ul>
          <li><b>GUS assay</b></li>

          <p>
            Is our circuit being expressed? Where is it being expressed in the
            plant? Are there leakings to important parts of the plant?
          </p>
        </ul>

        <p><b>WHAT WE EXPECT</b></p>

        <p>
          From these tests we hope that the plants are
          <b>mainly transformed</b>, the expression of our circuit is
          <b>stable</b> and that it is <b>only detected in pollen</b> or flower
          parts, having little to no detections in leaves and other parts of the
          plants.
        </p>

        <h2>LEARNING FROM THE RESULTS</h2>

        <h3>MODELLING RESULTS</h3>

        <p>
          Analyzing the modelling tests, we gathered some information about how
          our project's operation and behaviour.
        </p>

        <p>
          With the micromodelling we predict that
          <b>the total metabolization of imidacloprid occurs in 12 seconds</b>.
          It may look unrealistic at a first glance, but one should bear in mind
          that this model attains to a single compartment - the pollen. Tomatoes
          and other superior plants are pluricellular organisms with multiple
          organs and tissues that accumulate imidacloprid and may recontaminate
          pollen through physiological diffusion processes. Nevertheless, an
          extremely quick degradation rate like the one we have predicted is
          already promising as we expect it to be far greater than a likely
          "recontamination" rate.
        </p>

        <p>
          From the macro model's hive simulation we found that plants
          transformed with Let.it.bee. can be
          <b>5 to 10 times less toxic than wild type plants</b>. In some cases,
          our project can avoid the extinction of a whole colony.
        </p>

        <h3>WET LAB RESULTS</h3>

        <p>
          From the results of each experiment (you can check more about them in
          our<a href=" https://2021.igem.org/Team:USP-Brazil/Results">
            Results page</a
          >) we
          <b>detected the insertion of our circuit pLAT52-CYP6G1-GUS</b> on
          three T0 transformants plants, meaning the plants were successfully
          transformed - 2, 22 and 25.
        </p>
        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/8/86/T--USP-Brazil--IGEM-USP-Engineering-Detection-of-positive-plants.png"
            alt=""
          />
        </figure>
        <p>
          Plant number 2 was chosen for qRT-PCR, which showed the transcription
          of CYP6G1-GUS insertion only pollen cells, without considerable
          leakage to the leaves. In addition, we have detected the presence of
          GUS activity on pollen from confirmed positive transformants and also
          lineages plants for which the genomic PCR could not be performed due
          to limited time.
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/f/f6/T--USP-Brazil--IGEM-USP-Engineering-qRT-PCR_results.png"
            alt=""
          />
        </figure>

        <p>
          In addition, we have detected the presence of GUS activity on pollen
          from confirmed positive transformants and also lineages for which the
          genomic PCR could not be performed due to limited time. That means
          that the number of transformant plants had increased from 3 to 5 with
          the addition of plants 5 and "M".
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/8/8b/T--USP-Brazil--IGEM-USP-Engineering-GUS-staining-of.png"
            alt=""
          />
        </figure>

        <h2>IN THE FUTURE</h2>

        <h3>From the results</h3>

        <p>
          Now knowing the results from our preliminary tests, we can better
          analyze them by answering the main questions:
        </p>

        <div class="has-text-centered">
          <b>What went wrong? What can we do to fix it?</b>
        </div>

        <p>
          We intend to improve our project by
          <b>researching in literature and consulting</b> with specialists about
          possible reasons why it did not work so we can come up with the
          solutions. From our preliminary results (modelling and wet lab), our
          circuit seems to be working as we idealized it. But, because we had to
          test on the T0 generation,
          <b
            >there is some level of uncertainty around those preliminary
            results. Even though promising, they must be confirmed by further
            experiments.</b
          >
        </p>

        <p>
          The number of plants in which the circuit was detected could be
          related to the fact that we tested on T0. The number could be higher
          in T1 plants and can be confirmed when we test on this generation in
          the future.
        </p>

        <h3>New experiments</h3>

        <p>
          The pandemic impaired our lab tests in many ways, it shortened the
          time we had in our hands to develop our project, making it one of the
          greatest obstacles for our team. There were a lot of
          <b
            >experiments we could not perform, as well as the conditions in
            which we performed some of our experiments were not ideal.</b
          >
        </p>

        <p>
          We have obtained success to prove that the plant was transformed by
          expression of the GUS protein and with more specificity at pollen than
          leaves. But, we did not have time for develop experiments on other
          plants part or tissues, such as fruits, roots and flowers and to test
          the activity of CYP6G1. The proof of the activity is very important
          for project because is the main key for keep safety the bees.
        </p>

        <p>
          With the hope for an improvement in the COVID-19 situation in Brazil
          with the advance of vaccination, we also hope to conduct
          <b>more experiments</b> to help improve our models and gather more
          information about our circuit's operation and come up with ways to
          upgrade it. Some of the tests we intend to do are:
        </p>
        <ul>
          <li>
            <b>Repeat the experiments in the T1 generation</b>(offsprings of the
            plants that were regenerated from the transformed cells, T0). We
            hope that, as the expression will not be mosaic as it can be
            reported in T0, these experiments can support more of the results we
            had with the T0 so we can finally conclude what worked in our design
            or not.
          </li>
          <li>
            <b>Enzymatic activity assay with CYP6G1</b>, to better understand
            its kinectics and improve the model we created based literature
            information.
          </li>
          <li>
            <b>HPLC and MS</b> (High performance liquid chromatography and mass
            spectrometry), to analyze and quantify the amount of imidacloprid
            and its metabolites present in pollen after the action of our
            circuit.
          </li>
          <li>
            Obtain more data about imidacloprid pharmacokinetics within the
            plant.
          </li>
          <li>
            <b>Tests with bees</b>, to understand the capacity of the project to
            save populations with bees by letting Let.it.bee. plants be freely
            pollinated by bees and test the toxicity of the metabolites in a
            controlled environment.
          </li>
        </ul>

        <p>
          With the possibility of performing those tests, we hope to further
          comprehend our project and gather results to improve it continuously
          by <b>understanding the reason behind our failures</b> and
          <b>understanding and designing a new solutions for them</b>, thus
          <b>maintaining the Engineering cycle</b>:
        </p>

        <figure class="has-text-centered">
          <img
            src="https://2021.igem.org/wiki/images/0/04/T--USP-Brazil--IGEM-USP-Engineering-The-continuity-of.png"
            alt=""
          />
        </figure>

        <h3>REFERENCES</h3>
        <div id="references1" class="references">
          <ol>
            <li>
              DENGLER, R. Neonicotinoid pesticides are slowly killing bees.
              Retrieved in 22 Sept, 2021 from
              [https://www.pbs.org/newshour/science/neonicotinoid-pesticides-slowly-killing-bees](https://www.pbs.org/newshour/science/neonicotinoid-pesticides-slowly-killing-bees)
            </li>
            <li>
              RANGEL, L.E.P.; Botton, M.; Papa, G.; Yamamoto, P. T. & Roggia, S.
              USO DE NEONICOTINOIDES NO BRASIL SITUAÇÃO ATUAL DOS PRODUTOS
              REGISTRADOS.
            </li>
            <li>
              MUTH, F., Leonard, A.S. A neonicotinoid pesticide impairs
              foraging, but not learning, in free-flying bumblebees. Sci Rep 9,
              4764 (2019).
              [https://doi.org/10.1038/s41598-019-39701-5](https://doi.org/10.1038/s41598-019-39701-5)
            </li>
            <li>
              NASRIN, Sabourmoghaddam, Mohamad Pauzi Zakaria, Dzolkhifli Omar,
              Evidence for the microbial degradation of imidacloprid in soils of
              Cameron Highlands, Journal of the Saudi Society of Agricultural
              Sciences, Volume 14, Issue 2, 2015, Pages 182-188, ISSN 1658-077X,
              [https://doi.org/10.1016/j.jssas.2014.03.002](https://doi.org/10.1016/j.jssas.2014.03.002).
            </li>
            <li>
              IHARA, M., & Matsuda, K. (2018). Neonicotinoids: molecular
              mechanisms of action, insights into resistance and impact on
              pollinators. Current Opinion in Insect Science.
              doi:10.1016/j.cois.2018.09.009
            </li>
            <li>
              STEWART, C. N., Patron, N., Hanson, A. D., & Jez, J. M. (2018).
              Plant metabolic engineering in the synthetic biology era: plant
              chassis selection. Plant Cell Reports.
              doi:10.1007/s00299-018-2342-1
            </li>
            <li>
              NATURE. Promoter. Retrieved in October 1st, 2021 from
              [https://www.genome.gov/genetics-glossary/Promoter](https://www.genome.gov/genetics-glossary/Promoter).
            </li>
            <li>
              BUZZABOUTBEES. Do bees pollinate tomatoes? Retrieve in October
              1st, 2021 from
              [https://www.buzzaboutbees.net/bees-pollinate-tomatoes.html](https://www.buzzaboutbees.net/bees-pollinate-tomatoes.html)
            </li>
            <li>
              FRARY A, Hamilton CM. Efficiency and stability of high molecular
              weight DNA transformation: an analysis in tomato. Transgenic Res.
              2001 Apr;10(2):121-32. doi: 10.1023/a:1008924726270. PMID:
              11305359.
            </li>
            <li>
              WARNES, A. & Stephenson, J. The insertion of large pieces of
              foreign genetic material reduces the stability of bacterial
              plasmids. Plasmid, Volume 16, Issue 2, 1986, Pages 116-123, ISSN
              0147-619X,
              [https://doi.org/10.1016/0147-619X(86)90070-3](https://doi.org/10.1016/0147-619X(86)90070-3).
            </li>
            <li>
              WILLEMSEM A, Zwart MP. On the stability of sequences inserted into
              viral genomes [published correction appears in Virus Evol. 2020
              Jan 30;6(1):veaa002]. Virus Evol. 2019;5(2):vez045. Published 2019
              Nov 14. doi:10.1093/ve/vez045
            </li>
            <li>
              LIU, Z., Chen, O., Wall, J.B.J. et al. Systematic comparison of 2A
              peptides for cloning multi-genes in a polycistronic vector. Sci
              Rep 7, 2193 (2017).
              [https://doi.org/10.1038/s41598-017-02460-2](https://doi.org/10.1038/s41598-017-02460-2)
            </li>
            <li>
              SUN H, Zhou N, Wang H, Huang D, Lang Z. Processing and targeting
              of proteins derived from polyprotein with 2A and LP4/2A as peptide
              linkers in a maize expression system. PLoS One.
              2017;12(3):e0174804. Published 2017 Mar 30.
              doi:10.1371/journal.pone.0174804
            </li>
            <li>
              ESALQ. Micro-tom mutants. Retrieved in 20 Sept, 2021 from
              [http://www.esalq.usp.br/tomato/](http://www.esalq.usp.br/tomato/)
            </li>
            <li>
              BAO, H., Gao, H., Zhang, Y., Fan, D., Fang, J., & Liu, Z. (2016).
              The roles of CYP6AY1 and CYP6ER1 in imidacloprid resistance in the
              brown planthopper: Expression levels and detoxification
              efficiency. Pesticide Biochemistry and Physiology, 129, 70–74.
              doi:10.1016/j.pestbp.2015.10.020
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
              TWELL D, Yamaguchi J, McCormick S. Pollen-specific gene expression
              in transgenic plants: coordinate regulation of two different
              tomato gene promoters during microsporogenesis. Development. 1990
              Jul;109(3):705-13. PMID: 2401221
            </li>
            <li>
              TWELL, David; Yamaguchi, J; Wing, Rod; Ushiba, J &McCormick,
              Sheila. 1991/04/01.Promoter analysis of genes that are
              coordinately expresed during pollen development reveals
              pollen-specific enhancer sequences and shared regulatory elements.
              Genes & development.DOI: 10.1101/gad.5.3.496
            </li>
            <li>
              Ding, Z., Wen, Y., Yang, B., Zhang, Y., Liu, S., Liu, Z., & Han,
              Z. (2013). Biochemical mechanisms of imidacloprid resistance in
              Nilaparvata lugens: Over-expression of cytochrome P450 CYP6AY1.
              Insect Biochemistry and Molecular Biology, 43(11), 1021–1027.
              doi:10.1016/j.ibmb.2013.08.005
            </li>
            <li>
              Banakar, R., Eggenberger, A. L., Lee, K., Wright, D. A., Murugan,
              K., Zarecor, S., … Wang, K. (2019). High-frequency random DNA
              insertions upon co-delivery of CRISPR-Cas9 ribonucleoprotein and
              selectable marker plasmid in rice. Scientific Reports, 9(1).
              doi:10.1038/s41598-019-55681-y
            </li>
            <li>
              Gelvin, S. B. (2017). Integration of Agrobacterium T-DNA into the
              Plant Genome. Annual Review of Genetics, 51(1), 195–217.
              doi:10.1146/annurev-genet-120215-035320
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
blockquote {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #262625;
}
</style>
