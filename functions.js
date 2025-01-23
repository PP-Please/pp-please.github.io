function listenToClick() {
    console.log("Pressed Something!");
    getAnswer();
}

function getAnswer() {
    var h1 = document.createElement('h1')
    h1.innerText = "Type into the input to make this text change"
    
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    
    document.body.innerText = '';
    document.body.appendChild(h1);
    document.body.appendChild(input);
    
    input.addEventListener('change', function() {
        h1.innerText = input.value
    })
}

function redirectToCountdown() {
    window.location.href="/countdown";
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="blog-header py-2">
                <div class="nav-scroller py-1 mb-1">
                    <div class="nav d-flex" id="headerNav">
                        <a class="p-1 text-white" href="/">Home</a>
                        <a class="p-1 text-white" href="/projects">Projects</a>
                        <a class="p-1 text-white" href="/unsw">UNSW</a>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('main-header', Header);

