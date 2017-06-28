let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor((Math.random() * 100) + 1)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  var result = 'In your cart, you have '
  for (let i=0; i<cart.length; i++) {
    if (i != cart.length - 1){
        // debugger
      result += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
    } else {
      result += `${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
    }
  }
  console.log(result)
}

function total() {
  // write your code here
  let sumArr = []
  for (let i=0; i<cart.length; i++) {
        // debugger
    sumArr.push(parseInt(Object.values(cart[i])))
  }
    return sumArr.reduce((a, b) => a + b, 0)
}

function removeFromCart(item) {
  // write your code here
  for (let i=0; i<cart.length; i++) {
        debugger
    if (cart[i].hasOwnProperty(item)) {
        cart = []
    }
    return cart
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
}
