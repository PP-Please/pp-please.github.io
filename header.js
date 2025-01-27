class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="blog-header">
            <a class="navbar-brand" href="">Kelvin</a>
            <button class="hamburger" id="hamburger">☰</button>
                <nav class="nav-main" aria-label="main menu">
                    <ul class="nav-right" id="nav-right">
                        <li class="nav-item">
                            <a class="nav-link" href="">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/countdown">UNSW</a>
                        </li>
                    </ul>
                </nav>
            
            <div class="off-screen-menu">
                <button class="exit-off-screen-menu">X</button>
                <ul class="nav-right" id="nav-right">
                    <li class="nav-item">
                        <a class="nav-link" href="">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/countdown">UNSW</a>
                    </li>
                </ul>
            </div>
            </header>
        `;
    }
}

customElements.define('main-header', Header);
