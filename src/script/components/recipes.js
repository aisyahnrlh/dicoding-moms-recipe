import './recipe.js';

class Recipes extends HTMLElement {
    set recipes(recipes) {
        this._recipes = recipes
        this.render()
    }

    render() {
        this.innerHTML = "";
        this._recipes.forEach(recipe => {
            const recipeElement = document.createElement("recipe-card")
            recipeElement.recipe = recipe
            this.appendChild(recipeElement)
        })
    }
}

customElements.define("recipe-list", Recipes)