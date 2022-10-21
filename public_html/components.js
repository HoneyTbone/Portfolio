class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <h1>Tyson Toller's Game Design Portfolio</h1>
        <a href = "projects.html" > <button>PROJECTS</button></a >
        <a href="aboutme.html"><button>ABOUT ME</button></a>
        <a href="resume.html"><button>RESUME</button></a>
        </header>
    `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        © 2022 - Tyson Toller - HoneyTbone33@gmail.com
        </footer>
    `
    }
}

customElements.define('my-footer', MyFooter)