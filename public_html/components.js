class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="header">
                <div class="head">
                    <h1 margin:0>Tyson Toller's Game Design Portfolio</h1>
                    <a href="projects.html"> <button>PROJECTS</button></a>
                    <a href="aboutme.html"><button>ABOUT ME</button></a>
                    <a href="resume.html"><button>RESUME</button></a>
                </div>
            </div>
        </header>
    `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        © 2022 - Tyson Toller - HoneyTbone33@gmail.com - Design inspired by www.michaellevall.com/
        </footer>
    `
    }
}

customElements.define('my-footer', MyFooter)