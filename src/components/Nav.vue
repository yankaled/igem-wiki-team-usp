<template>
  <nav
    id="Navbar_USP"
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          style="max-height: 5rem !important;"
          src="https://2021.igem.org/wiki/images/b/b1/T--USP-Brazil--img--TEAMUSP-LOGO-PB-01.19db15e5.png"
          width="112" height="28"
          alt="Team-USP Igem"
        />
      </a>        

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <!-- <div class="navbar-end"> -->
      <a class="navbar-item nav-link-usp nav-link-usp-ltr">
        <!-- <img src="Navbar/Home_logo.png" width="50" height="" /> -->
        Home
      </a>

      <a
        class="navbar-item nav-link-usp nav-link-usp-ltr"
        href="/members"
      >
        members
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Project_logo.png" width="50" height="" /> -->
          Project
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"> Description </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Design </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Experiments </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Model </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Engineering </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Proof of Concept </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Results </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Contribution </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Lab_logo.png" width="50" height="" /> -->
          Lab
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"> Parts </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Safety </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Notebook </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/HP_logo.png" width="50" height="" /> -->
          Human Practices
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"> Integrated Human Practices </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Public Engagment </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Entrepreneurship </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Implementation </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Team_logo.png" width="50" height="" /> -->
          Team
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"> Members </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Attributions</a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Collaborations </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Partnership</a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Outreach </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Implementation </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Awards_logo.png" width="50" height="50" /> -->
          Awards
        </a>

        <div class="navbar-dropdown">
          <hr class="navbar-divider" />
          <a class="navbar-item"> Medal Criteria</a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Best plant</a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Best Public Engagment </a>
          <hr class="navbar-divider" />
          <a class="navbar-item"> Best Sustainable Development Impact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

#Navbar_USP {
  background-color: #ffba17;
  margin-bottom: -1em;
}

.nav-link-usp {
  font-weight: bold;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  padding: 20px 0px;
  margin: 0px 20px;
  display: flex;
  position: relative;
  opacity: 0.75;
}

.nav-link-usp:hover {
  opacity: 1;
}

.nav-link-usp::before {
  transition: 500ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #000;
}

.nav-link-usp-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-usp-ltr:hover::before {
  width: 100%;
}
a.navbar-item:hover {
  color: #ffffff;
}
.navbar-link:hover {
  color: #ffffff;
}
</style>