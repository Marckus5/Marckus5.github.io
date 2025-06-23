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

                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li> <!-- TODO add forms for this page-->
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
            <p text-align="center">Footer</p>
            <hr>
            <a class="nav-link" href="https://cs50.harvard.edu/">For CS50</p>
        </footer>
        `;
    }
}



customElements.define('navbar-template', Navbar);
customElements.define('footer-template', Footer);
