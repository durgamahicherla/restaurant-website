// Cart counter
let cartItems = 0;
let cartNames = [];

function addToCart(itemName) {
    cartItems++;
    cartNames.push(itemName);
    
    // Update cart count in navbar
    document.getElementById("cartCount").innerHTML = 
        "🛒 Cart (" + cartItems + ")";
    
    // Show confirmation message
    alert(itemName + " added to cart! 🛒");
}