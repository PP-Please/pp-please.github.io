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

function redirectToWebpage(weblink) {
    window.location.href= weblink;
}

const offScreenMenu = document.querySelector('.off-screen-menu');
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    offScreenMenu.classList.toggle('active');
})

// function toggleHamburger() {
    // const isActiveLink = document.getElementById('nav-right');
    // const hamburger = document.getElementById('hamburger');

    // if (!isActiveLink || !hamburger) {
    //     console.log('bruh');
    //     return;
    // }

    // if (isActiveLink.style.display === "none") {
    //     isActiveLink.style.display = "flex";
    //     // hamburger.style.display = "none";

    // } else {
    //     isActiveLink.style.display = "none";
    // }
// }