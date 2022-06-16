console.log("Hello")

//Primitív adattípusok
    /* string
    number
    boolean
    null
    undefined

    array[]
    object{} */

// mindent tudunk objektumban tárolni - objektumorientált programozás

/* let string = "hello";
let newString = string.toUpperCase()
console.log(newString) */

/* console.dir(String)
const user = {
    name: "Joe",
    age: 20
}

console.log(typeof user) 

console.log(user.name)
console.log(user["name"]) */

function createPizza(name, price){
    return {
        name: pizzaName,
        price: pizzaPrice,
        details: function () {
            console.log(pizzaName, pizzaPrice)
            let newPrice = pizzaPrice * 2
            console.log(newPrice)
        }
    }
}

//details kulcshoz tartozik egy anonim function


let pizza1 = createPizza("Hawaii", 1800)
console.log(pizza1)
console.log(createPizza("Magyaros", 2800))
pizza1.details()

const pizza = {
    name: "Hawaii",
    price: 1800,
    details() {
        console.log(this.name)
        console.log(this.price)
        console.log(pizza.price)
        console.log(pizza.name)
    }
}

pizza.details()

class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    details () {
        console.log(this.name)
        console.log(this.price)
    }
}

const pizzaLecso = new Pizza ("Lecso", 3100)
console.log(pizzaLecso)
console.log(pizzaLecso.name)
console.log(pizzaLecso.price)

/* const pizzaHam = new Pizza ("Ham", 1400)
console.log(pizzaHam)
console.log(pizzaHam.price)
console.log(pizzaHam.name) */


let params = ["kolbasz", 1560]

let pizzaFromArray = new Pizza(...params)
console.log(pizzaFromArray)

let params1 = [...params, "raja"]
console.log(params1)

let params2 = [...params, params1]

console.log(params2)