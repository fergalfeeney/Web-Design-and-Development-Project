var addtocart = document.getElementById('addtocart');
var addtocart2 = document.getElementById('addtocart2');
var addtocart3 = document.getElementById('addtocart3');
var addtocart4 = document.getElementById('addtocart4');
var addtocart5 = document.getElementById('addtocart5');
var addtocart6 = document.getElementById('addtocart6');
// add a listener for add to cart if such a button id is pressed
addtocart.addEventListener("click", addToCart);
addtocart2.addEventListener("click", addToCart);
addtocart3.addEventListener("click", addToCart);
addtocart4.addEventListener("click", addToCart);
addtocart5.addEventListener("click", addToCart);
addtocart6.addEventListener("click", addToCart);


function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}


