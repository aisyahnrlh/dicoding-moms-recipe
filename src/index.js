import "./script/components/navbar.js"
import "./script/components/footer.js"
import "./script/components/popular_categories.js"
import "./script/components/recipes.js"
import "./script/components/countries.js"
import countries from "./script/data/countries.js"
import popularCategories from "./script/data/popular-categories.js"
import "./styles/style.css"
import axios from "axios"
import "regenerator-runtime"

const fetchRecipe = async () => {
    const response = await axios.get("https://themealdb.com/api/json/v1/1/random.php")
    const recipe = await response.data
    return recipe.meals[0]
}

const fetchRecipes = async () => {
    let recipes = []
    for (let i = 0; i < 8; i++) {
        const recipe = await fetchRecipe()
        recipes.push(recipe)
    }
    return recipes
}

const countryList = document.querySelector('countries-list')
const popularCategoryList = document.querySelector('popular-categories')
const recipeList = document.querySelector('recipe-list')
const rotdContainer = document.querySelector('.rotd')

// rotd stands for recipe of the day
const rotdMeals = await fetchRecipe()
const recipes = await fetchRecipes()

popularCategoryList.categories = popularCategories

rotdContainer.innerHTML =
    `
<div class="self-center rotd__text">
    <h2>Recipe of the Day</h2>
    <p class="text-6xl font-bold my-8 rotd__title">${rotdMeals.strMeal}</p>
    <button>Start Cooking</button>
</div>
<img class="round-10 img-300 object-cover rotd__image" src="${rotdMeals.strMealThumb}" alt="${rotdMeals.strMeal}">
`

recipeList.recipes = recipes

countryList.countries = countries