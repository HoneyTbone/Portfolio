class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <center>
        <header>
            <div class="head">
                <h1>Tyson Toller's Game Design Portfolio</h1>
                <a href="projects.html"> <button>PROJECTS</button></a>
                <a href="aboutme.html"><button>ABOUT ME</button></a>
                <a href="resume.html"><button>RESUME</button></a>
            </div>
        </header>
    </center>
    `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div style="text-align:left">© 2022 - Tyson Toller - HoneyTbone33@gmail.com</div> <div style="text-align:right">Designed and Managed by Tyson Toller</div>
        </footer>
    `
    }
}

customElements.define('my-footer', MyFooter)