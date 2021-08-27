import "./script/components/navbar.js"
import "./script/components/footer.js"
import "./script/components/recipes.js"
import "./styles/style.css"
import axios from "axios"
import "regenerator-runtime"

const fetchMeals = async (value) => {
    const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?s=' + value)
    const data = await response.data
    return data.meals
}

const showResult = async (event) => {
    const title = document.querySelector('.search__title')
    const value = event.target.value

    if (value === '') {
        title.innerText = ''
    } else {
        title.innerText = `Search results of “${value}”`
    }

    const meals = await fetchMeals(value)

    recipeList.recipes = meals
}

const input = document.getElementById('input')
const recipeList = document.querySelector('recipe-list')

input.addEventListener('input', async (e) => await showResult(e))