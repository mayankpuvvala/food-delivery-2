
var cart = []; // array to hold cart items

function add(id) {
    // split the id into name, price, and image
    var itemDetails = id.split(" || ");
    var itemName = itemDetails[0];
    var itemPrice = parseFloat(itemDetails[1].replace("Rs.", ""));
    var itemImage = itemDetails[2];
    
    // create item object
    var item = {
        name: itemName,
        price: itemPrice,
        image: itemImage
    };
    
    // add item to cart array
    cart.push(item);
    
    // update shopping list display
    updateShoppingList();
}

function updateShoppingList() {
    var ul = document.getElementById("ul_pr");
    
    // empty the shopping list
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    
    // add cart items to shopping list
    var total = 0;
    cart.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item.name + " || Rs." + item.price;
        ul.appendChild(li);
        total += item.price;
    });
    
    // add total to shopping list
    var totalLi = document.createElement("li");
    totalLi.textContent = "Total: Rs." + total;
    ul.appendChild(totalLi);
    
    // add proceed to checkout button
    var checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Proceed to Checkout";
    
    var checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Proceed to Checkout";
    checkoutButton.style.backgroundColor = "#4CAF50"; // green
    checkoutButton.style.border = "none";
    checkoutButton.style.color = "white";
    checkoutButton.style.padding = "15px 32px";
    checkoutButton.style.textAlign = "center";
    checkoutButton.style.textDecoration = "none";
    checkoutButton.style.display = "inline-block";
    checkoutButton.style.fontSize = "16px";
    checkoutButton.style.margin = "4px 2px";
    checkoutButton.style.cursor = "pointer";
    
    checkoutButton.onmouseover = function() {
        this.style.backgroundColor = "#3e8e41"; // darker green
    }
    checkoutButton.onmouseout = function() {
        this.style.backgroundColor = "#4CAF50"; // green
    }
    checkoutButton.addEventListener("click", function() {
        // redirect to checkout page with cart items as query parameter
        window.location.href = "checkout.html?cart=" + encodeURIComponent(JSON.stringify(cart));
    });
    ul.appendChild(checkoutButton);
}

window.emptyList = function() {
    cart = []; // empty the cart array
    updateShoppingList(); // update the shopping list display
}

// in checkout.html