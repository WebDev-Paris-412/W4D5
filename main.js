const chuckNorrisApi = "https://api.chucknorris.io/jokes/random"

// fetch(chuckNorrisApi)
// 	.then((rawResponse) => {
// 		// console.log(rawResponse)
// 		return rawResponse.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((error) => console.log(error))
const chuckButton = document.getElementById("fetch-chuck")
const jokeContent = document.querySelector(".joke")

chuckButton.addEventListener("click", fetchJoke)

async function fetchJoke() {
	try {
		const rawResponse = await fetch(chuckNorrisApi)
		const data = await rawResponse.json()

		jokeContent.textContent = data.value
	} catch (error) {
		console.log(error)
	}
}

const pokeInput = document.getElementById("poke-amount")
const fetchPokeButton = document.getElementById("fetch-poke")

const pokeContainer = document.querySelector(".pokemons")
const pokeTemplate = document.getElementById("template")

fetchPokeButton.addEventListener("click", asyncGottafetchThemAll)

function gottafetchThemAll() {
	const amountOfPokemonToFetch = Number(pokeInput.value)

	for (let i = 0; i < amountOfPokemonToFetch; i++) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
			.then((rawResponse) => rawResponse.json())
			.then((data) => {
				console.log(data)
				const clone = pokeTemplate.content.cloneNode(true)
				clone.querySelector(".name").textContent = data.name
				clone.querySelector(".poke-picture").src = data.sprites.front_shiny
				pokeContainer.append(clone)
			})
			.catch((error) => console.error(error))
	}
}
async function asyncGottafetchThemAll() {
	const amountOfPokemonToFetch = Number(pokeInput.value)

	try {
		for (let i = 0; i < amountOfPokemonToFetch; i++) {
			const rawResponse = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${i + 1}`
			)
			const data = await rawResponse.json()
			console.log(data)
			const clone = pokeTemplate.content.cloneNode(true)
			clone.querySelector(".name").textContent = data.name
			clone.querySelector(".poke-picture").src = data.sprites.front_shiny
			pokeContainer.append(clone)
		}
	} catch (error) {
		console.log(error)
	}
}
