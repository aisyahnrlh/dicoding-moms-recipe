import Logo from "../../assets/logo.svg"

class Navbar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
            <nav class="flex justify-between items-center py-4 flex-col-phone">
                <ul>
                    <a href="index.html">
                        <img class="h-10 h-16-phone" src="${Logo}" alt="Mom's Recipe Logo">
                    </a>
                </ul>
                <ul class="flex list-none w-80 justify-between font-semibold text-sm text-white my-4">
                    <li><a href="index.html" class="text-none text-white">Home</a></li>
                    <li><a href="search.html" class="text-none text-white">Search</a></li>
                    <li><a href="contact-us.html" class="text-none text-white">Contact Us</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define("navbar-component", Navbar);