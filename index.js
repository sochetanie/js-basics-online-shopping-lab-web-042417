var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100)
    cart.push({[item]: price})
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.")
    } else {
        var message = "In your cart, you have "
        for (let item of cart) {
            for (let name in item) {
                message += `${name} at $${item[name]}, `
            }
        }
        var newMessage = message.slice(0, -2)
        console.log(`${newMessage}.`)
    }
}

function total() {
    var total = 0
    for (let item of cart) {
        for (let name in item) {
            total += item[name]
        }
    }
    return total
}

function removeFromCart(item) {
    for (let i=0; i<=cart.length; i++) {
        if (cart.length === 0 || !cart[i].hasOwnProperty(item)) {
            console.log('That item is not in your cart.')
        } else {
            cart.splice(i, 1)
            return cart
        }
    }
}

function placeOrder(cardNumber) {
    if (cardNumber == undefined) {
        console.log("We don't have a credit card on file for you to place your order.")
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
        cart = []
    }
}

