function update(){
    let table = document.getElementById("mytable")
    let row = table.insertRow();
    let firstName = row.insertCell();
    let lastName = row.insertCell();
    let address = row.insertCell();
    let pincode = row.insertCell();
    let gender = row.insertCell();
    let food = row.insertCell();
    let state = row.insertCell();
    let country = row.insertCell();
    firstName.innerHTML=document.getElementById("first-name").value;
    lastName.innerHTML=document.getElementById("last-name").value;
    address.innerHTML=document.getElementById("address").value;
    pincode.innerHTML=document.getElementById("pincode").value;
    gender.innerHTML=document.getElementById("gender").value;
    food.innerHTML=document.getElementById("food").value;
    state.innerHTML=document.getElementById("state").value;
    country.innerHTML=document.getElementById("country").value;
}