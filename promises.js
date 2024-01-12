const directions = [
	"Starting point: Ironhack Miami",
	"↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
	"➔ Turn right onto S Miami Ave",
	"* Chipotle Mexican Grill 891 S Miami Ave, Miami",
]

function getDirections(step, callback, errorCallback) {
	setTimeout(() => {
		// console.log(directions[step])

		if (!directions[step]) errorCallback("Instructions not found.")
		else callback(directions[step])
	}, 1000 + Math.random() * 1000)
}

// Single callback
// getDirections(
// 	0,
// 	(direction) => {
// 		console.log("Success!")
// 		console.log(direction)
// 		getDirections(
// 			1,
// 			(direction) => {
// 				console.log(direction)
// 				getDirections(
// 					2,
// 					(direction) => {
// 						console.log(direction)
// 						getDirections(
// 							3,
// 							(direction) => {
// 								console.log(direction)
// 							},
// 							(error) => {
// 								console.log(error)
// 							}
// 						)
// 					},
// 					(error) => {
// 						console.log(error)
// 					}
// 				)
// 			},
// 			(error) => {
// 				console.log(error)
// 			}
// 		)
// 	},
// 	(error) => {
// 		console.log("In the error")
// 		console.log(error)
// 	}
// )

/**
 * Promise syntax
 * new Promise (resolveFunction, rejectFunction)
 *
 * Promise states:
 * - Pending
 * - Fullfilled
 * - Rejected
 */

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() > 0.5) {
			return resolve("let us panda!")
		}
		reject("No panda :(")
	}, 1000)
})

// promise
// 	.then((success) => console.log(success))
// 	.catch((error) => console.log(error))

function getDirectionsPromise(step) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// console.log(directions[step])

			if (!directions[step]) reject("Instructions not found.")
			else resolve(directions[step])
		}, 1000 + Math.random() * 1000)
	})
}

// getDirectionsPromise(0)
// 	.then((direction) => {
// 		console.log("direction 0: ", direction)
// 		return getDirectionsPromise(1)
// 	})
// 	.then((direction) => {
// 		console.log("Direction 1:", direction)
// 		return getDirectionsPromise(6)
// 	})
// 	.then((direction) => {
// 		console.log(direction)
// 		return getDirectionsPromise(3)
// 	})
// 	.then((direction) => {
// 		console.log(direction)
// 	})
// 	.catch((error) => console.log(error))
// 	.finally(() => {
// 		console.log("Instructions are finished :)")
// 		return
// 	})

/**
 * Async Await
 * We need an async function to be able to await promises
 */

async function gpsToChipotle() {
	try {
		const firstDirection = await getDirectionsPromise(0)
		console.log(firstDirection)
		const secondDirection = await getDirectionsPromise(1)
		console.log(secondDirection)
		const thirdDirection = await getDirectionsPromise(2)
		console.log(thirdDirection)
	} catch (error) {
		console.error(error)
	} finally {
		console.log("Done!")
	}
}

// gpsToChipotle()

async function promiseAll() {
	try {
		const allPromises = directions.map((direction, index) => {
			return getDirectionsPromise(index)
		})
		console.log(allPromises)
		const allDirections = await Promise.all(allPromises)
		console.log(allDirections)
	} catch (error) {
		console.log(error)
	}
}

// promiseAll()
