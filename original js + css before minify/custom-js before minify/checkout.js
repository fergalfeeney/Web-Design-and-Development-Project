// checkout.js

var checkout = document.getElementById('buy-now');

// add a listener for add to cart if such a button id is pressed


// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 0293 4732 2256" && cardcvv=="123") {
        var element = document.getElementById("payment-failure");
        element.classList.add("d-none");
        var element = document.getElementById("payment-success");
        element.classList.remove("d-none");
        // now set cart total to zero
        var total=0;
        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout',total); 

        localStorage.setItem('payment-success',1);    
        window.location.href = "email.html";  // sends confirmation email
    } else {
        var element = document.getElementById("payment-success");
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        element.classList.remove("d-none");
   
    }
    return false;  

    
    
})
