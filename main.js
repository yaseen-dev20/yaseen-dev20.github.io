// Headr And Footer

// Start Header Code 

let headerHtml = `
<header>
    <div class="container">
        <nav>
            <a href="index.html" class="logo">Yaseen<span>.</span></a>
            <ul id="main-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <button
                class="menu-toggle"
                aria-label="Menu"
                aria-expanded="false"
                aria-controls="main-menu"
                >
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
        </nav>
    </div>
</header>
`

let footerHtml = `
<footer>
    <div class="container">
        <div class="foot">
            <div class="copy"> © 2026 YASEEN MOHAMED </div>
            <div class="links"> 
                <a href="https://github.com/yaseen-dev20">GitHub</a>
                <a href="https://www.linkedin.com/in/yaseen-soror-381427442" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            </div>
        </div>
    </div>
</footer>
`
// Inter To Body

document.getElementById("site-header").innerHTML = headerHtml;
document.getElementById("site-footer").innerHTML = footerHtml;


// Start Class Active 

let pageName = location.pathname.split("/").pop() || "index.html" ;
let activePage = pageName.startsWith("project-") ? "projects.html" : pageName;

document.querySelectorAll("#main-menu a").forEach( function (links) {
    if (links.getAttribute("href") === activePage) {
        links.classList.add("active")
        links.setAttribute("aria-current", "page")
    }
})

// Start Menu Toggle

let toggleBtn = document.querySelector(".menu-toggle");
let menu = document.getElementById("main-menu");

toggleBtn.addEventListener("click", function () {
    let isOpen = menu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        menu.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
    }
});