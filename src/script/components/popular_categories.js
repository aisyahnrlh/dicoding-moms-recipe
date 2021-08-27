import './popular_category.js';

class PopularCategories extends HTMLElement {
    set categories(categories) {
        this._categories = categories
        this.render()
    }

    render() {
        this.innerHTML = "";
        this._categories.forEach(category => {
            const popularCategoryElement = document.createElement("popular-category")
            popularCategoryElement.category = category
            this.appendChild(popularCategoryElement)
        })
    }
}

customElements.define("popular-categories", PopularCategories)