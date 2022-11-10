class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <center>
        <header>
            <div class="head">
                <h1>Tyson Toller's Game Design Portfolio</h1>
                <a href="projects.html"> <button class="active">PROJECTS</button></a>
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
        <b style="float:left">© 2022 - HoneyTbone33@gmail.com</b> <b style="float:right">Designed and Managed by Tyson Toller</b>
        </footer>
    `
    }
}

customElements.define('my-footer', MyFooter)