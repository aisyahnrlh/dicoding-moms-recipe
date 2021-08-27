import Logo from "../../assets/logo.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"

class Footer extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
            <footer class="text-white my-16 flex flex-col items-center" >
                <img class="h-10" src="${Logo}" alt="Mom's Recipe Logo">
                <div class="flex my-8 w-60 justify-between">
                    <img src="${Facebook}" alt="Facebook Logo">
                    <img src="${Twitter}" alt="Twitter Logo">
                    <img src="${Instagram}" alt="Instagram Logo">
                </div>
                <div class="flex justify-between w-full flex-col-phone text-center">
                    <p class="my-8">© mom’s recipe | Made with ❤️ in Indonesia</p>
                    <p class="my-8">Privacy Policy | Terms and Condition</p>
                </div>
            </footer>
        `
    }
}

customElements.define("footer-component", Footer);