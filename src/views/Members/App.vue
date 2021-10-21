<template>
  <div>
    <Nav />

    <div class="is-full">
      <img
        class="header"
        src="https://2021.igem.org/wiki/images/1/1c/T--USP-Brazil--IGEM-USP-Member-Banner.png"
      />
    </div>

    <!-- PARTE 1 -->
    <h2 class="has-text-centered">Members</h2>
    <section>
      <div class="columns">
        <div class="column is-1">
          <Backtotop />
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Adrian"
                src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Member-Adrian.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Amanda"
                src="https://2021.igem.org/wiki/images/0/04/T--USP-Brazil--IGEM-USP-Member-Amanda.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Anna"
                src="https://2021.igem.org/wiki/images/d/da/T--USP-Brazil--IGEM-USP-Member-Anna.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Beatriz"
                src="https://2021.igem.org/wiki/images/1/15/T--USP-Brazil--IGEM-USP-Member-Beatriz.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="BrunoK"
                src="https://2021.igem.org/wiki/images/5/5b/T--USP-Brazil--IGEM-USP-Member-BrunoK.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- PARTE 2 -->
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="BrunoL"
                src="https://2021.igem.org/wiki/images/6/6c/T--USP-Brazil--IGEM-USP-Member-BrunoL.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Caio"
                src="https://2021.igem.org/wiki/images/6/60/T--USP-Brazil--IGEM-USP-Member-Caio.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="CarolSa"
                src="https://2021.igem.org/wiki/images/f/f7/T--USP-Brazil--IGEM-USP-Member-CarolSa.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="CarolSi"
                src="https://2021.igem.org/wiki/images/b/b8/T--USP-Brazil--IGEM-USP-Member-CarolSi.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon ">
            <a>
              <img
                id="Eric"
                src="https://2021.igem.org/wiki/images/d/d7/T--USP-Brazil--IGEM-USP-Member-Eric.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- Parte 3 -->
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Erick"
                src="https://2021.igem.org/wiki/images/2/2c/T--USP-Brazil--IGEM-USP-Member-Erick.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a class="">
              <img
                id="Gabi"
                src="https://2021.igem.org/wiki/images/b/bf/T--USP-Brazil--IGEM-USP-Member-Gabi.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Gui"
                src="https://2021.igem.org/wiki/images/e/e6/T--USP-Brazil--IGEM-USP-Member-Gui.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Isa"
                src="https://2021.igem.org/wiki/images/2/29/T--USP-Brazil--IGEM-USP-Member-Isa.png"
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="JoaoFe"
                src="https://2021.igem.org/wiki/images/f/fb/T--USP-Brazil--IGEM-USP-Member-JoaoFe.png"
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- Parte 4 -->
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="JoaoMa"
                src="https://2021.igem.org/wiki/images/2/25/T--USP-Brazil--IGEM-USP-Member-JoaoMa.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="JoaoPe"
                src="https://2021.igem.org/wiki/images/4/4b/T--USP-Brazil--IGEM-USP-Member-JoaoPe.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="JoaoPeH"
                src="https://2021.igem.org/wiki/images/6/6d/T--USP-Brazil--IGEM-USP-Member-JoaoPeH.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Lari"
                src="https://2021.igem.org/wiki/images/f/fb/T--USP-Brazil--IGEM-USP-Member-Lari.png"
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Leo"
                src="https://2021.igem.org/wiki/images/8/87/T--USP-Brazil--IGEM-USP-Member-Leo.png"
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- Parte 5 -->
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Luan"
                src="https://2021.igem.org/wiki/images/9/98/T--USP-Brazil--IGEM-USP-Member-Luan.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Luiz"
                src="https://2021.igem.org/wiki/images/1/16/T--USP-Brazil--IGEM-USP-Member-Luiz.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Marcos"
                src="https://2021.igem.org/wiki/images/5/56/T--USP-Brazil--IGEM-USP-Member-Marcos.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Mah"
                src="https://2021.igem.org/wiki/images/0/06/T--USP-Brazil--IGEM-USP-Member-Mah.png"
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="PedroGa"
                src="https://2021.igem.org/wiki/images/f/ff/T--USP-Brazil--IGEM-USP-Members-Pedro-Balbino.png"
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- Parte 6 -->
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="PedroB"
                src="https://2021.igem.org/wiki/images/7/73/T--USP-Brazil--IGEM-USP-Member-WikiGod.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="PedroGo"
                src="https://2021.igem.org/wiki/images/4/40/T--USP-Brazil--IGEM-USP-Member-PedroGo.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Sarah"
                src="https://2021.igem.org/wiki/images/6/67/T--USP-Brazil--IGEM-USP-Member-Sarah.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Vital"
                src="https://2021.igem.org/wiki/images/5/5e/T--USP-Brazil--IGEM-USP-Member-Vital.png"
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Kaled"
                src="https://2021.igem.org/wiki/images/4/48/T--USP-Brazil--IGEM-USP-Member-Kaled.png"
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- PIs -->
    <h2 class="has-text-centered">Pi's and Advisor</h2>
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Estev"
                src="https://2021.igem.org/wiki/images/8/83/T--USP-Brazil--IGEM-USP-Members-advisor-estevao.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Giulia"
                src="https://2021.igem.org/wiki/images/e/eb/T--USP-Brazil--IGEM-USP-Members-advisor-Giulia.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Alice"
                src="https://2021.igem.org/wiki/images/b/b3/T--USP-Brazil--IGEM-USP-Members-advisor-Alice.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Jung"
                src="https://2021.igem.org/wiki/images/8/82/T--USP-Brazil--IGEM-USP-Members-advisor-Jung.png"
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="MariaEl"
                src="https://2021.igem.org/wiki/images/2/2b/T--USP-Brazil--IGEM-USP-Members-advisor-Maria-Elice.png"
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>
    <!-- Parte 2 -->
    <section>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="MariaMa"
                src="https://2021.igem.org/wiki/images/6/68/T--USP-Brazil--IGEM-USP-Members-advisor-Maria-Magdalena.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="LucasDe"
                src="https://2021.igem.org/wiki/images/1/13/T--USP-Brazil--IGEM-USP-Members-advisor-Lucas-Delgado.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="MariaCri"
                src="https://2021.igem.org/wiki/images/e/ef/T--USP-Brazil--IGEM-USP-Members-advisor-Maria-Cristina.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
    </section>

    <section>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Gisele"
                src="https://2021.igem.org/wiki/images/9/9f/T--USP-Brazil--IGEM-USP-Members-advisor-Gisele-Monteiro.png"
              />
            </a>
          </div>
        </div>
        <div class="column ">
          <div v-on:click="openModal($event)" class="person-icon">
            <a>
              <img
                id="Igor"
                src="https://2021.igem.org/wiki/images/d/d8/T--USP-Brazil--IGEM-USP-Members-advisor-Igor.png"
              />
            </a>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </section>

    <!-- People Modal Boxes -->
    <div id="AdrianMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Adrian"
            src="https://2021.igem.org/wiki/images/c/c3/T--USP-Brazil--IGEM-USP-Member-Adrian.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Adrian David González Chaves</p>
          <p><b>Team Attribution:</b>Drylab</p>
          <p><b>Field:</b>Graduation Program in Ecology</p>
          <p><b>Hobbies:</b>Hiking, climbing, cooking, anything outdoors.</p>
          <p>
            <b>About:</b>I am a Venezuelan biologist, and have lived in Brazil
            for 8 years. I work with landscape ecology and biodiversity
            conservation in agricultural landscapes. In my master's I worked
            with coffee pollination, nowadays I'm analyzing a large agricultural
            production database in the Atlantic Forest biome.
          </p>
        </div>
      </div>
    </div>
    <div
      id="AdrianOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="AmandaMO" class="modal_USP is-hidden ">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Amanda"
            src="https://2021.igem.org/wiki/images/0/04/T--USP-Brazil--IGEM-USP-Member-Amanda.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Amanda Soares Hirata</p>
          <p><b>Team Attribution:</b>Wetlab</p>
          <p><b>Field:</b>Postgraduate Course in Pharmacology</p>
          <p><b>Hobbies:</b>Lots of TV Shows and cooking</p>
          <p>
            <b>About:</b>I'm a PhD student seeking the cure of cancer. Graduated
            in Biomedical Sciences and an Environmental Technician (SAVE THE
            BEES!). In my spare time, i like to cook (Gordon Ramasay, call me)
            and hangout with my friends.
          </p>
        </div>
      </div>
    </div>
    <div
      id="AmandaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="AnnaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Anna"
            src="https://2021.igem.org/wiki/images/d/da/T--USP-Brazil--IGEM-USP-Member-Anna.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Anna Júlia Medeiros Martins</p>
          <p><b>Team Attribution:</b>Design, Wiki, Human Practices</p>
          <p><b>Field:</b>Social Communication</p>
          <p>
            <b>Hobbies:</b>Reading books, watching TV series, discovering new
            stories to obsess and inspire my whole personality in it, making
            analogies with reality and inventing new hobbies (when I don't even
            have time)
          </p>
          <p>
            <b>About:</b>'Im a publishing student who believes books change the
            world. My name is Anna Júlia, but you can call me Naju (or create a
            new nickname, but never dare to call me by my composite name), I'm
            19 years old, I'm passionate about fiction (and even more about
            realities that seem made up) and you always will find me on 220
            volts 24 hours a day. I work on the team's design and social media,
            but if you need me, just shout: learning new things is my religion.
          </p>
        </div>
      </div>
    </div>
    <div
      id="AnnaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="BeatrizMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Beatriz"
            src="https://2021.igem.org/wiki/images/1/15/T--USP-Brazil--IGEM-USP-Member-Beatriz.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Beatriz Akiti</p>
          <p><b>Team Attribution:</b>Wetlab, Wiki, Coordinator</p>
          <p><b>Field:</b>Biological Science</p>
          <p>
            <b>Hobbies:</b>procrastinating and looking for useless information
            online
          </p>
          <p>
            <b>About:</b>Biological Science student, stereotypically in love for
            life in all its forms. Due to her workaholic nature, tries to do a
            little bit of everything, being mainly the Scientific Coordinator,
            besides dealing with some HR issues, Integrated and a lot, a LOT of
            bureaucracy. She looks like a very silly person, however, against
            all odds, she is even more so.
          </p>
        </div>
      </div>
    </div>
    <div
      id="BeatrizOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="BrunoKMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="BrunoK"
            src="https://2021.igem.org/wiki/images/5/5b/T--USP-Brazil--IGEM-USP-Member-BrunoK.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Bruno Koshin Vazquez Iha</p>
          <p><b>Team Attribution:</b>Drylab, Wiki, Coordinator</p>
          <p>
            <b>Field:</b>Bioinformatics, Machine Learning, Modelling and
            simulations, Physics
          </p>
          <p>
            <b>Hobbies:</b>Tinkering, travelling, longboarding and trying to
            break my personal record of living in the wilderness without modern
            resources.
          </p>

          <p>
            <b>About: </b>
            I like ambitious projects and long walks on the beach (Normandy,
            June 6th 1944 was a blast)
          </p>
        </div>
      </div>
    </div>
    <div
      id="BrunoKOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="BrunoLMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="BrunoL"
            src="https://2021.igem.org/wiki/images/6/6c/T--USP-Brazil--IGEM-USP-Member-BrunoL.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Bruno Luka de Souza Bambirra Silveira</p>
          <p><b>Team Attribution:</b>Human Practices, Wiki</p>
          <p><b>Field:</b>Biological Science</p>
          <p>
            <b>Hobbies:</b>Music, mostly playing guitar and ukulele, and playing
            games in my spare time
          </p>
          <p>
            <b>About: </b>
            Biology student and Human Practices member. Works mainly on social
            media. Loves science, science communication, music, books and is
            probably drinking coffee right now.
          </p>
        </div>
      </div>
    </div>
    <div
      id="BrunoLOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="CaioMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Caio"
            src="https://2021.igem.org/wiki/images/6/60/T--USP-Brazil--IGEM-USP-Member-Caio.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Caio Klocke Zamuner</p>
          <p><b>Team Attribution:</b>Drylab, Wetlab</p>
          <p><b>Field:</b>Bichemistry, molecular biology and chemistry</p>
          <p>
            <b>Hobbies:</b>Love listen and sing all kind of songs, since pop
            until rock. I like to watch Palmeiras football matches. We'll be
            world champion in this year!
          </p>
          <p>
            <b>About: </b>
            I'm a person that like bet in risky. What would we be without
            ambition? I'm a enthusiastic nature student to discovery a molecular
            world. There were two years that I have playing with the life's
            tools and, now a days, I'm immerse in bioluminescents mushrooms
            environment. Ah, I have a huge party spirit too! I really like to
            going parties for dance all night. Is there someone accompany me at
            party after the pandemic?
          </p>
        </div>
      </div>
    </div>
    <div
      id="CaioOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="CarolSaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="CarolSa"
            src="https://2021.igem.org/wiki/images/f/f7/T--USP-Brazil--IGEM-USP-Member-CarolSa.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Caroline Santos Alves</p>
          <p><b>Team Attribution:</b>Human Practices, Wetlab</p>
          <p><b>Field:</b>Biological Science</p>
          <p>
            <b>Hobbies:</b>I love dancing, learning and watching animes and
            Asian dramas
          </p>
          <p>
            <b>About: </b>
            I'm 21 years old and want to be a researcher. I'm a vegetarian, love
            doing projects to save animals. My favorite subjects are molecular
            biology and cytology.
          </p>
        </div>
      </div>
    </div>
    <div
      id="CarolSaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="CarolSiMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="CarolSi"
            src="https://2021.igem.org/wiki/images/b/b8/T--USP-Brazil--IGEM-USP-Member-CarolSi.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Caroline Silvério</p>
          <p><b>Team Attribution:</b>Human Practices</p>
          <p><b>Field:</b>Biotechnology</p>
          <p>
            <b>Hobbies:</b>
            Reading and get angry at games
          </p>
          <p>
            <b>About: </b>

            Biotechnology student. Human Practices Member, working mainly on
            social media. In my spare time she ventures into books and get
            nervous at games. She loves chemistry and biology, and saw iGEM as a
            way to get closer to science.
          </p>
        </div>
      </div>
    </div>
    <div
      id="CarolSiOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="EricMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Eric"
            src="https://2021.igem.org/wiki/images/d/d7/T--USP-Brazil--IGEM-USP-Member-Eric.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Eric Velasco</p>
          <p><b>Team Attribution:</b>Wetlab</p>
          <p><b>Field:</b>Biotechnology and Industrial Microbiology</p>
          <p>
            <b>Hobbies:</b>
            He likes to look ridiculous in his room while singing his favorite
            songs and drinking a beer.
          </p>
          <p>
            <b>About: </b>

            Ecuadorian student, living in Brazil for 6 years. Currently doing
            his master's degree in biotechnology. Participates more actively in
            the iGEM's scientific group, especially in the wetlab. He feels more
            affinity for molecular biology and microbial metabolism. He joined
            iGEM because he considers himself an enthusiast of synthetic
            biology, and likes its applications in both metabolic engineering
            and environmental conservation.
          </p>
        </div>
      </div>
    </div>
    <div
      id="EricOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="ErickMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Erick"
            src="https://2021.igem.org/wiki/images/2/2c/T--USP-Brazil--IGEM-USP-Member-Erick.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Erick Tavares Marcelino Alves</p>
          <p><b>Team Attribution:</b>Wetlab</p>
          <p><b>Field:</b>Pharmacy and Biochemistry</p>
          <p>
            <b>Hobbies:</b>
            I love singing, watching animes (One piece, Steins gate and
            charlotte, My favorites) and telling jokes. I also love playing and
            watching football. I support Flamengo and you will observe that
            every wednesday night I am shouting, crying or laughing :)
          </p>
          <p>
            <b>About: </b>
            I really love science and all behind it. For the last two years I've
            delving through the synthetic biology and drug discovery world. I
            got into iGEM so that I could learn from my scientist colleagues
            about this world. Coincidently, because of the pandemic situation, I
            also found another passion : molecular modelling.Also, i really love
            knowing more about other culture and people. Language is one of my
            many passions. I really hope i can meet igem's participants in
            person as well. I really love music too, being passionate for
            everything it can cause and transbord through us.
          </p>
        </div>
      </div>
    </div>
    <div
      id="ErickOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="GabiMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Gabi"
            src="https://2021.igem.org/wiki/images/b/bf/T--USP-Brazil--IGEM-USP-Member-Gabi.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Gabi Tavares Marcelino Alves</p>
          <p><b>Team Attribution:</b>Human Practices , Design</p>
          <p><b>Field:</b>Advertising</p>
          <p>
            <b>Hobbies:</b>
            Taking photos of cats and discovering new restaurants
          </p>
          <p>
            <b>About: </b>
            Advertising student who loves challenging projects and has a passion
            for UX design. I believe in the power of advertising to connect good
            ideas with good people.
          </p>
        </div>
      </div>
    </div>
    <div
      id="GabiOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="GuiMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Gui"
            src="https://2021.igem.org/wiki/images/e/e6/T--USP-Brazil--IGEM-USP-Member-Gui.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Guilherme da Costa Cruz</p>
          <p><b>Team Attribution:</b>Drylab</p>
          <p><b>Field:</b>Maths</p>
          <p>
            <b>Hobbies:</b>
            Music
          </p>
          <p>
            <b>About: </b>
            Mathematics student. Scientific member, mainly in modeling. Get
            excited by the connections between Biology and Math. Likes to listen
            to bossa-nova and shoegaze.
          </p>
        </div>
      </div>
    </div>
    <div
      id="GuiOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="IsaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Isa"
            src="https://2021.igem.org/wiki/images/2/29/T--USP-Brazil--IGEM-USP-Member-Isa.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Isabela Carvalho Velloso de Oliveira</p>
          <p><b>Team Attribution:</b>Human Practives, Wetlab, Wiki</p>
          <p><b>Field:</b>Biomedicine</p>
          <p>
            <b>Hobbies:</b>
            I really like fishkeeping, games (nintendo), music and animation
          </p>
          <p>
            <b>About: </b>
            Student of Biomedicine, Scientific researcher, in addition to the
            parts of Human Practices and finances. Tries to apply creativity and
            theory to everything. Loves to spend the weekend watching movies,
            anime and reading webtoons.
          </p>
        </div>
      </div>
    </div>
    <div
      id="IsaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="JoaoFeMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="JoaoFe"
            src="https://2021.igem.org/wiki/images/f/fb/T--USP-Brazil--IGEM-USP-Member-JoaoFe.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>João Lucas Fehler Freitas</p>
          <p><b>Team Attribution:</b>Human Practives,Design</p>
          <p><b>Field:</b>Advertising and Marketing</p>
          <p>
            <b>Hobbies:</b>
            E-player and always up to a drinking game
          </p>
          <p>
            <b>About: </b>
            I am passionate about communication and telling stories through
            photo and video editing.
          </p>
        </div>
      </div>
    </div>
    <div
      id="JoaoFeOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="JoaoMaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="JoaoMa"
            src="https://2021.igem.org/wiki/images/2/25/T--USP-Brazil--IGEM-USP-Member-JoaoMa.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>João Marcos Sperber</p>
          <p><b>Team Attribution:</b>Human Practives,Wiki</p>
          <p><b>Field:</b>Audiovisual Higher Education Course</p>
          <p>
            <b>Hobbies:</b>
            Food and Musicals
          </p>
          <p>
            <b>About: </b>
            Audiovisual student. Human Practices coordinator and a member of the
            social media teams. Can't wait to have a huge community snack with
            the team.
          </p>
        </div>
      </div>
    </div>
    <div
      id="JoaoMaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="JoaoPeHMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="JoaoPeH"
            src="https://2021.igem.org/wiki/images/6/6d/T--USP-Brazil--IGEM-USP-Member-JoaoPeH.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>João Pedro Honda De Sordi</p>
          <p><b>Team Attribution:</b>Human Practices, Wiki</p>
          <p><b>Field:</b>Audiovisual Higher Education Course</p>
          <p>
            <b>Hobbies:</b>
            Comedy & Jokes
          </p>
          <p>
            <b>About: </b>
            Audiovisual student. Co-supervisor and co-writer of the team's
            YouTube and coordinator of entrepreneurship, seeks to promote our
            cause to a wide range of audiences. Unofficial group clown.
          </p>
        </div>
      </div>
    </div>
    <div
      id="JoaoPeHOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="JoaoPeMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="JoaoPe"
            src="https://2021.igem.org/wiki/images/4/4b/T--USP-Brazil--IGEM-USP-Member-JoaoPe.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>João Pedro A. Fairbanks</p>
          <p><b>Team Attribution:</b>Drylab</p>
          <p><b>Field:</b>Chemistry</p>
          <p>
            <b>Hobbies:</b>
            Read, cook and Observe
          </p>
          <p>
            <b>About: </b>
            Fascinated by natural sciences and his ability to explain the
            impressive spectacle that is life.
          </p>
        </div>
      </div>
    </div>
    <div
      id="JoaoPeOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="JoaoPeMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="JoaoPe"
            src="https://2021.igem.org/wiki/images/4/4b/T--USP-Brazil--IGEM-USP-Member-JoaoPe.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>João Pedro A. Fairbanks</p>
          <p><b>Team Attribution:</b>Drylab</p>
          <p><b>Field:</b>Chemistry</p>
          <p>
            <b>Hobbies:</b>
            Read, cook and Observe
          </p>
          <p>
            <b>About: </b>
            Fascinated by natural sciences and his ability to explain the
            impressive spectacle that is life.
          </p>
        </div>
      </div>
    </div>
    <div
      id="JoaoPeOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="LariMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Lari"
            src="https://2021.igem.org/wiki/images/f/fb/T--USP-Brazil--IGEM-USP-Member-Lari.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Larissa Braga</p>
          <p><b>Team Attribution:</b>Wetlab, Human Practices, Wiki</p>
          <p><b>Field:</b>Biotechnology</p>
          <p>
            <b>Hobbies:</b>
            Theater, Dance and Nutrition
          </p>
          <p>
            <b>About: </b>
            I am passionate about science and techonology, and love
            communication and education. I dream on having an impact on people's
            lives through science and I hope to do this with a great deal of
            dedication.
          </p>
        </div>
      </div>
    </div>
    <div
      id="LariOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="LeoMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Leo"
            src="https://2021.igem.org/wiki/images/8/87/T--USP-Brazil--IGEM-USP-Member-Leo.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Leonardo Andrade</p>
          <p><b>Team Attribution:</b>Human Practices</p>
          <p><b>Field:</b>Pharmacy and Biochemistry</p>
          <p>
            <b>Hobbies:</b>
            I love singing, watching animes (One piece, Steins gate and
            charlotte, My favorites) and telling jokes. I also love playing and
            watching football. I support Flamengo and you will observe that
            every wednesday night I am shouting, crying or laughing :)
          </p>
          <p>
            <b>About: </b>
            I really love science and all behind it. For the last two years I've
            delving through the synthetic biology and drug discovery world. I
            got into iGEM so that I could learn from my scientist colleagues
            about this world. Coincidently, because of the pandemic situation, I
            also found another passion : molecular modelling.Also, i really love
            knowing more about other culture and people. Language is one of my
            many passions. I really hope i can meet igem's participants in
            person as well. I really love music too, being passionate for
            everything it can cause and transbord through us.
          </p>
        </div>
      </div>
    </div>
    <div
      id="LeoOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="LuanMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Luan"
            src="https://2021.igem.org/wiki/images/9/98/T--USP-Brazil--IGEM-USP-Member-Luan.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Luan Perez de Souza</p>
          <p><b>Team Attribution:</b>Human Practices,Design, Wiki</p>
          <p><b>Field:</b>Nature Sciences</p>
          <p>
            <b>Hobbies:</b>
            I really like to do cute digital arts, read comics like Sandman or
            Marvel and see a lot of animation
          </p>
          <p>
            <b>About: </b>
            Hottie
          </p>
        </div>
      </div>
    </div>
    <div
      id="LuanOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="LuizMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Luiz"
            src="https://2021.igem.org/wiki/images/1/16/T--USP-Brazil--IGEM-USP-Member-Luiz.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Luiz Gustavo Dos Santos</p>
          <p><b>Team Attribution:</b>Human Practices,Wetlab, Wiki</p>
          <p><b>Field:</b>Pharmacy</p>
          <p>
            <b>Hobbies:</b>
          </p>
          <p>
            <b>About: </b>
            Pharmacy and Biochemistry Student Microbiology Researcher
            Participates in Scientific, HR and Public Education. Eagerly awaits
            a post-vaccination party
          </p>
        </div>
      </div>
    </div>
    <div
      id="LuizOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="MarcosMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Marcos"
            src="https://2021.igem.org/wiki/images/5/56/T--USP-Brazil--IGEM-USP-Member-Marcos.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Marcos Markevich</p>
          <p><b>Team Attribution:</b>Drylab, Wiki</p>
          <p><b>Field:</b>Statistics</p>
          <p><b>Hobbies: </b>Music and short videos on YouTube</p>
          <p>
            <b>About: </b>
            Student of statistics and passionate about machine learning,
            Scientific member, mainly in the computational modeling. Also likes
            music and short videos on youtube.
          </p>
        </div>
      </div>
    </div>
    <div
      id="MarcosOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="MahMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Mah"
            src="https://2021.igem.org/wiki/images/0/06/T--USP-Brazil--IGEM-USP-Member-Mah.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Maria Eliza Porto Pires</p>
          <p><b>Team Attribution:</b>Human Practices, Wiki, Coordinator</p>
          <p><b>Field:</b>Advertising and Marketing</p>
          <p><b>Hobbies: </b>Watching Tik Toks, dancing and reading</p>
          <p>
            <b>About: </b>
            That typical student who “talks a lot, but does well in class”. A
            future publicist and music addict, I almost always has a song
            playing in my head. At iGEM I'm the Human Practices coordinator and
            I try to do a little bit of everything too, if there is a meeting
            happening I'm probably in it.
          </p>
        </div>
      </div>
    </div>

    <div
      id="MahOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="PedroGaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="PedroGa"
            src="https://2021.igem.org/wiki/images/f/ff/T--USP-Brazil--IGEM-USP-Members-Pedro-Balbino.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Pedro Balbino Nogueira</p>
          <p><b>Team Attribution:</b>Human Practices</p>
          <p><b>Field:</b>Pharmacy and Biochemistry</p>
          <p><b>Hobbies: </b>Play games with my friends</p>
          <p>
            <b>About: </b>

            I'm 23 years old, I love science and education. In my free time I
            love to play and chat with my friends
          </p>
        </div>
      </div>
    </div>

    <div
      id="PedroGaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="PedroBMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="PedroB"
            src="https://2021.igem.org/wiki/images/7/73/T--USP-Brazil--IGEM-USP-Member-WikiGod.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Pedro Henrique Costa Bonamin</p>
          <p><b>Team Attribution:</b>Wetlab, Wiki</p>
          <p><b>Field:</b>Forensic Molecular Biology</p>
          <p><b>Hobbies: </b>Photography and Confectionery</p>
          <p>
            <b>About: </b>

            Hi, I’m Pedro and I currently study biological sciences in general,
            but more specifically I'm interested in forensic molecular biology!
            I participated in IGEM 2019 as the wiki progammer, and last
            year(2020) I helped my team with scientific stuff but this year I'm
            again working as the wiki programmer! My research topics are
            molecular biology, genetics and forensic science.
          </p>
        </div>
      </div>
    </div>

    <div
      id="PedroBOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="PedroGoMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="PedroGo"
            src="https://2021.igem.org/wiki/images/4/40/T--USP-Brazil--IGEM-USP-Member-PedroGo.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Pedro Garcia Abilleira de Castro</p>
          <p><b>Team Attribution:</b>Wetlab, Wiki</p>
          <p><b>Field:</b>MSc in Biotechnology with focus on Astrobiology</p>
          <p><b>Hobbies: </b>Books, anime and furry stuff</p>
          <p>
            <b>About: </b>

            Hi, folks! My name is Pedro, and I joined the Team iGEM USP because
            I felt it was a great opportunity to learn and practice things we
            don’t usually have the chance to in our regular courses. Proud
            furry, otaku and bookworm, you’ll easily find me spending many hours
            delving into those subjects or chatting about them.
          </p>
        </div>
      </div>
    </div>

    <div
      id="PedroGoOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="SarahMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Sarah"
            src="https://2021.igem.org/wiki/images/6/67/T--USP-Brazil--IGEM-USP-Member-Sarah.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Sarah Salviano Martins</p>
          <p><b>Team Attribution:</b>Human Practices, Wiki</p>
          <p><b>Field:</b>Biological Science</p>
          <p><b>Hobbies: </b>I love watching K-drama and annoying my cats.</p>
          <p>
            <b>About: </b>

            I am 23 years old and, as a good old Osasco citizen, I am always
            eating a hot-dog. Sciences and education are my objectives and I
            believe in them as paramount tools to world betterment. I take part
            on projects regarding scientific education and hope on someday
            becoming a researcher and professor.
          </p>
        </div>
      </div>
    </div>

    <div
      id="SarahOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="VitalMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Vital"
            src="https://2021.igem.org/wiki/images/5/5e/T--USP-Brazil--IGEM-USP-Member-Vital.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Vital Pegorin</p>
          <p><b>Team Attribution:</b>Wetlab</p>
          <p><b>Field:</b>Biochemical Pharmacy</p>
          <p>
            <b>Hobbies: </b>Search for unknown bands on Spotify and play with
            his friends
          </p>
          <p>
            <b>About: </b>

            Pharmacy and biochemistry student, carries out research in the
            team's scientific department and also participates in the
            development of the Olympics. He fell in love with iGEM because he
            saw synthetic biology as an interesting way to deal with
            technological problems, mainly related to sustainability, he likes
            to play with his friends and hunting down unknown bands on Spotify
            in your spare time.
          </p>
        </div>
      </div>
    </div>

    <div
      id="VitalOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="KaledMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Kaled"
            src="https://2021.igem.org/wiki/images/4/48/T--USP-Brazil--IGEM-USP-Member-Kaled.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Yan Tadeu Kaled</p>
          <p><b>Team Attribution:</b>Drylab, Wiki</p>
          <p><b>Field:</b>Exact sciences/Applied mathematics</p>
          <p><b>Hobbies: </b>Studying neuroscience</p>
          <p>
            <b>About: </b>

            I'm a programmer and junior researcher interested in human
            cognition, AI, heuristics and brain science
          </p>
        </div>
      </div>
    </div>

    <div
      id="KaledOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="EstevMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Estev"
            src="https://2021.igem.org/wiki/images/8/83/T--USP-Brazil--IGEM-USP-Members-advisor-estevao.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Estevão Macedo</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p><b>Field:</b>Communication</p>
          <p><b>Hobbies: </b></p>
          <p>
            <b>About: </b>

            Hello! My name is Estevão Macedo. Since 2018, I study Communication
            in University of São Paulo. My involvement with science dates back
            to when curiosity touched my heart, maybe since forever. I am very
            inquisitive and interested. What fascinated me the most about Time
            was the realization of the projects we were involved in.
          </p>
        </div>
      </div>
    </div>

    <div
      id="EstevOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="GiuliaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Giulia"
            src="https://2021.igem.org/wiki/images/e/eb/T--USP-Brazil--IGEM-USP-Members-advisor-Giulia.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Giulia Maria Ramella</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p><b>Field:</b>Health</p>
          <p><b>Hobbies: </b> Dancing and going to karaoke</p>
          <p>
            <b>About: </b>
            I'm Giulia, a recent biologist and passioned for innovation in
            health sciences. Right now I'm working in the industry, but my goal
            is to enter grad School. I love dancing and going to karaoke with
            friends.
          </p>
        </div>
      </div>
    </div>

    <div
      id="GiuliaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="AliceMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Alice"
            src="https://2021.igem.org/wiki/images/b/b3/T--USP-Brazil--IGEM-USP-Members-advisor-Alice.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Alice Kei Endo</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p><b>Field:</b>Master in Genetics and Evolutionary Biology</p>
          <p>
            <b>Hobbies: </b> Trying new foods, crochet and learn to draw with
            chalk
          </p>
          <p>
            <b>About: </b>
            Master student interested in understanding the therapeutic potency
            of non-coding RNAs for the study of cancer. He enjoys doing cell
            culture and capturing immunofluorescence images. Involved in iGEM
            since 2019, she loves helping to develop cross-disciplinary
            projects, being a supporter of iGEM projects developed within Human
            Practices
          </p>
        </div>
      </div>
    </div>

    <div
      id="AliceOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="JungMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Jung"
            src="https://2021.igem.org/wiki/images/8/82/T--USP-Brazil--IGEM-USP-Members-advisor-Jung.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Jung Hun Park</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p><b>Field:</b>Microbiology</p>
          <p><b>Hobbies: </b> Adult fan of Lego; I also like taking pictures</p>
          <p>
            <b>About: </b>

            I have a bachelor degree in Biomedical Sciences and a Masters in
            Microbiology. Understanding how biology works at the molecular level
            and creating genetically modified organisms is what fascinates and
            motivates me to learn more about synthetic biology. As an advisor, I
            helped the team from the conception of the project to the design of
            the genetic circuit.
          </p>
        </div>
      </div>
    </div>

    <div
      id="JungOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="MariaElMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="MariaEl"
            src="https://2021.igem.org/wiki/images/2/2b/T--USP-Brazil--IGEM-USP-Members-advisor-Maria-Elice.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Maria Elice de Brzezinski Prestes</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p>
            <b>Field:</b>History of Science, Science Education and Teacher
            Training
          </p>
          <p><b>Hobbies: </b> Reading and listening music</p>
          <p>
            <b>About: </b>
            I am an Associate Professor at the Department of Genetics and
            Evolutionary Biology at USP's Bioscience Institute. I work in the
            field of History of Biology and its interfaces with the teaching of
            science and biology. Author of "The investigation of nature in
            Brazil Colony" and co-author, with Cibelle Celestino Silva, of
            "Teaching science with context: Historical, Philosophical,
            Sociological Approaches". I am editor of the scientific journal
            "Philosophy and History of Biology".
          </p>
        </div>
      </div>
    </div>

    <div
      id="MariaElOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="MariaMaMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="MariaMa"
            src="https://2021.igem.org/wiki/images/6/68/T--USP-Brazil--IGEM-USP-Members-advisor-Maria-Magdalena.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Maria Magdalena Rossi</p>
          <p><b>Team Attribution:</b>PI</p>
          <p>
            <b>Field:</b>Molecular physiology and functional genomics of plants
          </p>
          <p>
            <b>Hobbies: </b>I love outdoor activities like hiking and cycling.
          </p>
          <p>
            <b>About: </b>
            The mysteries of nature have always fascinated me. That's how I
            studied biology at the University of Buenos Aires, Argentina.
            Biology opened me up to the world and during different stages of my
            career I worked in several research groups in different parts of the
            world: Argentina, Mexico, USA, Brazil and France, until I settled
            permanently in Brazil. My professional mission is to continue
            contributing to the generation of scientific knowledge and defending
            the public, free, secular and autonomous university, as this is the
            only way to guarantee the intellectual freedom of a nation.
          </p>
        </div>
      </div>
    </div>

    <div
      id="MariaMaOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="LucasDeMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="LucasDe"
            src="https://2021.igem.org/wiki/images/1/13/T--USP-Brazil--IGEM-USP-Members-advisor-Lucas-Delgado.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Lucas Delgado</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p><b>Field:</b>Science-based innovation consulting</p>
          <p>
            <b>Hobbies: </b>Cooking, eating, a good meal with friends and
            exercising.
          </p>
          <p>
            <b>About: </b>
            Lucas is partner and director of projects and new business at
            Emerge. He holds a degree in Production Engineering from the Federal
            University of Juiz de Fora (Brazil) and a specialization in
            corporate finance from the University at Albany (USA). He leads
            science-based innovation integration projects with companies from
            different sectors, technology assessment and development of
            innovation strategies
          </p>
        </div>
      </div>
    </div>

    <div
      id="LucasDeOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <div id="MariaCriMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="MariaCri"
            src="https://2021.igem.org/wiki/images/e/ef/T--USP-Brazil--IGEM-USP-Members-advisor-Maria-Cristina.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Maria Cristina Arias</p>
          <p><b>Team Attribution:</b>Advisor</p>
          <p><b>Field:</b>Bee Genetics and Evolution</p>
          <p>
            <b>Hobbies: </b>
          </p>
          <p>
            <b>About: </b>
          </p>
        </div>
      </div>
    </div>

    <div
      id="MariaCriOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="GiseleMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Gisele"
            src="https://2021.igem.org/wiki/images/9/9f/T--USP-Brazil--IGEM-USP-Members-advisor-Gisele-Monteiro.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Gisele Monteiro</p>
          <p><b>Team Attribution:</b>PI</p>
          <p>
            <b>Field:</b>Molecular biology with emphasis on protein engineering
            and heterologous expression in microorganisms
          </p>
          <p>
            <b>Hobbies: </b>Read, dogs, beer with friends, series and movies
          </p>
          <p>
            <b>About: </b> Graduated in Molecular Biology at UNICAMP, I have
            been working in the area of biopharmaceuticals for almost 10 years.
            Mother of a couple and a puppy named Snoopy. She got to know USP's
            iGEM team through her students and fell in love with the idea of
            this global competition. She loves USP and hopes that one day this
            huge university will be the big winner of this competition.
          </p>
        </div>
      </div>
    </div>

    <div
      id="GiseleOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>

    <div id="IgorMO" class="modal_USP is-hidden">
      <div class="columns">
        <div class="column is-half">
          <img
            id="Igor"
            src="https://2021.igem.org/wiki/images/d/d8/T--USP-Brazil--IGEM-USP-Members-advisor-Igor.png"
            alt=""
          />
        </div>
        <div class="content column is-half">
          <p><b>Name:</b>Gisele Monteiro</p>
          <p><b>Team Attribution:</b>PI</p>
          <p>
            <b>Field:</b>Molecular biology and plant biotechnology; lignin
            metabolism; cell wall engineering
          </p>
          <p>
            <b>Hobbies: </b>Listening to music (mainly rock and heavy metal),
            watching football
          </p>
          <p>
            <b>About: </b> I am a biologist graduated from the State University
            of Campinas in 2007. I did a master's and doctorate in Plant Biology
            at the same university, always working with secondary metabolism.
            I've been researching lignin metabolism since my PhD. In addition to
            spending a sandwich period, I also did a 2-year postdoctoral course
            at the Center for Plant Systems Biology (VIB-UGent) in Belgium. I
            have been a professor at IB/USP since 2014. Outside of work, I like
            listening to music, watching football and playing with my cats.
          </p>
        </div>
      </div>
    </div>

    <div
      id="IgorOV"
      v-on:click="closeModal($event)"
      class="overlay is-hidden"
    ></div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Backtotop from "@/components/BacktoTop.vue";

export default {
  name: "Members",

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
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

.header {
  width: 100% !important;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.8rem;
}

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

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: #040404;
  text-shadow: 2px 6px 4px rgba(159, 109, 0, 0.5);
}
h3 {
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  font-weight: 900;
  color: #ffba17;
  text-shadow: 2px 6px 4px rgba(159, 109, 0, 0.5);
}
p {
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #040404;
}

b {
  color: #ffba17;
}
p b {
  font-weight: 700;
}
ul {
  list-style: none; /* Remove default bullets */
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #040404;
}

ul li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ffba17; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.person-icon {
  padding: 20px;
  overflow: hidden;
  margin: 0 auto 40px auto;
  /* -- Prevent flicker -- */
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}

.person-icon img {
  max-width: 100%;
  height: auto;
  display: block;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

.person-icon img:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
