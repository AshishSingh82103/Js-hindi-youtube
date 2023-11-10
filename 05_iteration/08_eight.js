// reduce method
const myNumbers = [1, 2, 3, 4];

// const myTotal = myNumbers.reduce(function(accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentValue ${currentValue}`)
//     return accumulator + currentValue
// }, 0)

const myTotal = myNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)

console.log(myTotal); // 10

const shoppingCart = [
    {
        itemName: "js-course",
        price: 2999
    },

    {
        itemName: "python",
        price: 5999
    },

    {
        itemName: "mobile-dev",
        price: 2999
    },

    {
        itemName: "Data-Science",
        price: 12999
    }


];

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 299)

console.log(priceToPay);