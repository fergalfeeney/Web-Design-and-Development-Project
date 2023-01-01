if (localStorage.getItem('userdetails') === null) {  
    // if userdetails is null, that means it has not been loaded before. we not initialise userdetails object
    var userDetails = {firstName:"Walter", lastName:"Mitty", email:"wmitty@email.com", mobile:"0831234567", address1:"Buenos Ayres Drive", address2:"13 Road House", town:"Strandhill", county:"Co. Sligo", postcode:"A76P102"};
    // now we store the userdetails object as a localstorage object but localstore only stores text and userdetails is a javascript object
    // we convert a javascript object ot a string using JSON.stringify - we are being expedient!
    localStorage.setItem('userdetails',JSON.stringify(userDetails));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("emailID").setAttribute('value',userDetails.email);
    document.getElementById("mobileID").setAttribute('value',userDetails.mobile);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);       
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("townID").setAttribute('value',userDetails.town);
    document.getElementById("countyID").setAttribute('value',userDetails.county);
    document.getElementById("postcodeID").setAttribute('value',userDetails.postcode);
} else {
    // if localstorage variable userdetails is already created - load it to javascript oject. JSON.parse turns it back into an javascript object
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("emailID").setAttribute('value',userDetails.email);
    document.getElementById("mobileID").setAttribute('value',userDetails.mobile);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);      
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("townID").setAttribute('value',userDetails.town);
    document.getElementById("countyID").setAttribute('value',userDetails.county);
    document.getElementById("postcodeID").setAttribute('value',userDetails.postcode);
}


var userDetailsUpdate = document.getElementById('udetails');
// add a listener for update details if user decides to save updated details 
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails() {
    // if the user updates the user details - we update the userDetails javascript object
    var userDetails={};
    userDetails.firstName=document.getElementById('firstNameID').value;
    userDetails.lastName=document.getElementById('lastNameID').value;
    userDetails.email=document.getElementById('emailID').value;
    userDetails.mobile=document.getElementById('mobileID').value;
    userDetails.address1=document.getElementById('address1ID').value;   
    userDetails.address2=document.getElementById('address2ID').value;
    userDetails.town=document.getElementById('townID').value; 
    userDetails.county=document.getElementById('countyID').value; 
    userDetails.postcode=document.getElementById('postcodeID').value; 
  
  // finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    event.preventDefault();


}
