const itemsContainer = document.getElementById('items') 
import data from './data.js'

for (let i=0; i<data.length; ++i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    let img = document.createElement('img');
    console.log(data[i])
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
    
    let desc = document.createElement('P')
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button');
    button.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    itemsContainer.appendChild(newDiv)
}

const cart = []

function addItem(name, price) {
    for (let i = 0; i < cart.length; i +=1 ) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }

    const item = { name, price, qty:1 }
    cart.push(item)
}

function showItems() {
    const qty = getQty()
    console.log(`You have ${qty} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(` ${cart[i].mame} $${cart[i].price} * ${cart[i].qty}`)
    }

    console.log(`Your total is $${getTotal()}`)
}

function getQty() {
    let qty = 0 
    for (let i = 0; i < cart.lenght; i += 1) {
        qty += cart[i].qty
    }
    return qty 
}

function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty 
    }
    return total.toFixed(2)    
}

function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            // cart.splice(i, 1)
            return
        }
    }
}

showItems()