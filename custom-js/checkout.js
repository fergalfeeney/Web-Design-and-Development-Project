var checkout=document.getElementById('buy-now');checkout.addEventListener("click",()=>{event.preventDefault();var cardnumber=document.getElementById('cardNumber').value;var cardcvv=document.getElementById('cardCvv').value;if(cardnumber=="1234 0293 4732 2256"&&cardcvv=="123"){var element=document.getElementById("payment-failure");element.classList.add("d-none");var element=document.getElementById("payment-success");element.classList.remove("d-none");var total=0;localStorage.setItem('checkout',total);localStorage.setItem('payment-success',1);window.location.href="email.html"}else{var element=document.getElementById("payment-success");element.classList.add("d-none");var element=document.getElementById("payment-failure");element.classList.remove("d-none")}
return!1})