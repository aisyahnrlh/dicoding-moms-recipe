class Country extends HTMLElement {
    set country(country) {
        this._country = country
        this.render()
    }

    render() {
        this.innerHTML =
            `
            <a class="country__link" title="${this._country}">
                <img class="img-50 country__flag" src="https://s9.gifyu.com/images/${this._country === "egypt" ? "egypt7636a23e1e947645" : this._country}.png" alt="${this._country.country}">
            </a>
        `
    }
}

customElements.define("country-item", Country)