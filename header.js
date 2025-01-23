class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="blog-header">
            <a class="navbar-brand" href="">Kelvin</a>
                <nav aria-label="main menu">
                    <ul class="main-menu">
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
            </header>
        `;
    }
}

customElements.define('main-header', Header);
