<template>
  <nav
    id="Navbar_USP"
    :class="`navbar ${navClass} is-fixed-top`"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://2021.igem.org/Team:USP-Brazil">
        <img
          style="max-height: 5rem !important;"
          src="https://2021.igem.org/wiki/images/b/b1/T--USP-Brazil--img--TEAMUSP-LOGO-PB-01.19db15e5.png"
          width="112"
          height="28"
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
      <a
        href="https://2021.igem.org/Team:USP-Brazil"
        class="navbar-item nav-link-usp nav-link-usp-ltr"
      >
        <!-- <img src="Navbar/Home_logo.png" width="50" height="" /> -->
        Home
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Project_logo.png" width="50" height="" /> -->
          Project
        </a>

        <div class="navbar-dropdown">
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Description"
            class="navbar-item"
          >
            Description
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Design"
            class="navbar-item"
          >
            Design
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Experiments"
            class="navbar-item"
          >
            Experiments
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Model"
            class="navbar-item"
          >
            Model
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Engineering"
            class="navbar-item"
          >
            Engineering
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Proof_Of_Concept"
            class="navbar-item"
          >
            Proof of Concept
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Results"
            class="navbar-item"
          >
            Results
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Contribution"
            class="navbar-item"
          >
            Contribution
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Lab_logo.png" width="50" height="" /> -->
          Lab
        </a>

        <div class="navbar-dropdown">
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Parts"
            class="navbar-item"
          >
            Parts
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Safety"
            class="navbar-item"
          >
            Safety
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Notebook"
            class="navbar-item"
          >
            Notebook
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/HP_logo.png" width="50" height="" /> -->
          Human Practices
        </a>

        <div class="navbar-dropdown">
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Human_Practices"
            class="navbar-item"
          >
            Human Practices
          </a>
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Human_Practices#integrated"
            class="navbar-item"
          >
            Integrated Human Practices
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Communication"
            class="navbar-item"
          >
            Education and Communication
          </a>
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Entrepreneurship"
            class="navbar-item"
          >
            Entrepreneurship
          </a>
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Implementation"
            class="navbar-item"
          >
            Implementation
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Team_logo.png" width="50" height="" /> -->
          Team
        </a>

        <div class="navbar-dropdown">
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Members"
            class="navbar-item"
          >
            Members
          </a>
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Attributions"
            class="navbar-item"
          >
            Attributions</a
          >
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Collaborations"
            class="navbar-item"
          >
            Collaborations
          </a>
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Partnership"
            class="navbar-item"
          >
            Partnership</a
          >
          <!-- <hr class="navbar-divider" />
          <a class="navbar-item"> Outreach </a> -->
          <hr class="navbar-divider" />
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Sponsors"
            class="navbar-item"
          >
            Sponsors</a
          >
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link nav-link-usp nav-link-usp-ltr">
          <!-- <img src="Navbar/Awards_logo.png" width="50" height="50" /> -->
          Awards
        </a>

        <div class="navbar-dropdown">
          <a
            href=" https://2021.igem.org/Team:USP-Brazil/Medals"
            class="navbar-item"
          >
            Medal Criteria</a
          >
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Plant"
            class="navbar-item"
          >
            Best Plant</a
          >
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Education"
            class="navbar-item"
          >
            Best Public Engagement
          </a>
          <hr class="navbar-divider" />
          <a
            href="https://2021.igem.org/Team:USP-Brazil/Sustainable"
            class="navbar-item"
          >
            Best Sustainable Development Impact</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",

  props: {
    transition: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    if (this.transition) {
      this.navClass = "transparent-nav";
      window.addEventListener("scroll", this.calcNavClass);
    }
  },

  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },

  beforeUnmount() {
    if (this.transition) {
      window.removeEventListener("scroll", this.calcNavClass);
    }
  },

  data() {
    return {
      navClass: "is-primary",
    };
  },

  methods: {
    calcNavClass() {
      this.navClass = window.scrollY > 0 ? "is-primary" : "transparent-nav";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

.navbar-link:not(.is-arrowless)::after {
  border-color: #fa7c91;
}

#Navbar_USP {
  margin-bottom: -1em;
  transition: all 0.5s;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.transparent-nav {
  background-color: transparent !important;
}

.transparent-nav .nav-link-usp {
  color: white !important;
}

.nav-link-usp {
  font-weight: bold;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  background-color: transparent !important;
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
