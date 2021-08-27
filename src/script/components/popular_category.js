class PopularCategory extends HTMLElement {
    set category(category) {
        this._category = category
        this.render()
    }

    render() {
        this.innerHTML =
            `
            <div class= "category relative" style = "background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) repeat scroll 0% 0%, rgba(0, 0, 0, 0) url('${this._category.image}') no-repeat scroll center center; background-size: cover" >
                <p class="category__text absolute top-0">${this._category.category}</p>
            </div >
        `
    }
}

customElements.define("popular-category", PopularCategory)