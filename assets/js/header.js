class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <link href="assets/css/styles.css" rel="stylesheet" />
    `;
  }
}

class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="logo.png" alt="Logo">
            </a>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="scratch.html">Scratch Game</a></li> <!-- TODO add Scratch Project -->
                <!--<li class="nav-item"><a class="nav-link" href="#">Projects</a></li>-->

                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
            </ul>
        </div>
        </nav>
        `;
    }
}

class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="">
            <p text-align="center">By Marckus5</p>
            <hr>
            <a class="nav-link" href="https://cs50.harvard.edu/">For CS50</p>
        </footer>
        `;
    }
}


customElements.define('head-template', Header);
customElements.define('navbar-template', Navbar);
customElements.define('footer-template', Footer);
