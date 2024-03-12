
let productCount = 0;

function addToCart() {
    productCount++;
    updateCount();
}

function removeFromCart() {
    if (productCount > 0) {
        productCount--;
        updateCount();
    }
}

function updateCount() {
    document.getElementById("productCount").innerText = productCount;
}
