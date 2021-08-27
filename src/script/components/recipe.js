class Recipe extends HTMLElement {
    set recipe(recipe) {
        this._recipe = recipe
        this.render()
    }

    render() {
        this.innerHTML =
            `
            <div class="small-card round-10">
                <img class="small-card__image object-cover" src="${this._recipe.strMealThumb}" alt="${this._recipe.strMeal}">
                <div class="small-card__text-container flex items-center">
                    <h3 class="small-card__text text-black font-bold" title="${this._recipe.strMeal}">${this._recipe.strMeal}</h3>
                </div>
            </div>
        `
    }
}

customElements.define("recipe-card", Recipe)