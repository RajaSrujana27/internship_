let cart = [];
function showSection(section) {
    document.getElementById('home').classList.remove('active');
    
    // Hide banner when selecting "Products" or "Toys"
    let banner = document.querySelector(".banner");
    if (section === 'home') {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }

    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.style.display = section === 'home' || product.dataset.category === section ? "inline-block" : "none";
    });

    document.getElementById('home').classList.add('active');
}

function addToCart(id, name, price, image) {
    let existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    updateCartUI();
    showMessage("Item added to cart!");
    document.querySelector(".cart").classList.add("open");
}
    function updateCartUI() {
        let cartItemsContainer = document.getElementById('cart-items');
        let cartTotalContainer = document.getElementById('cart-total');
        let cartCountContainer = document.getElementById('cart-count');
    
        cartItemsContainer.innerHTML = "";
        let total = 0;
        let itemCount = 0;
    
        cart.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <img src="images/${item.name.toLowerCase().replace(/\s+/g, '')}.jpg" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <p>${item.name} - $${item.price} x ${item.quantity}</p>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(li);
    
            total += item.price * item.quantity;
            itemCount += item.quantity;
        });
    
        cartTotalContainer.textContent = total;
        cartCountContainer.textContent = itemCount;
    }
    

function removeFromCart(id) {
    let itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function toggleCart(event) {
    event.stopPropagation();
    document.querySelector(".cart").classList.toggle("open");
}

function closeCart(event) {
    if (!event.target.closest(".cart") && !event.target.closest(".cart-icon")) {
        document.querySelector(".cart").classList.remove("open");
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function showMessage(msg) {
    let messageDiv = document.getElementById("message");
    messageDiv.textContent = msg;
    messageDiv.classList.add("show");

    setTimeout(() => {
        messageDiv.classList.remove("show");
    }, 2000);
}
