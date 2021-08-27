import './country.js';

class Countries extends HTMLElement {
    set countries(countries) {
        this._countries = countries
        this.render()
    }

    render() {
        this.innerHTML = "";
        this._countries.forEach(country => {
            const countryItem = document.createElement("country-item")
            countryItem.country = country
            this.appendChild(countryItem)
        })
    }
}

customElements.define("countries-list", Countries)