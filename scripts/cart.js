function cartdisplayProducts(arr, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    arr.map((el) => {
        const card = document.createElement("div");
        card.className = "offer-card";

        card.innerHTML = `<div class="image">
                <img src=${el.image} alt="${el.title}">
              </div>
              <div class="details">
                <div class="title-date">
                  <h4 class="title">${el.title}</h4>
                </div>
                <div class="removeBtn_container">
                  <button id="remove">Remove</button>
                  <select name="" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div class="offer-Details">
                  <p><span>Price:</span> &#8377; ${el.price}</p>
                </div>
              </div>
        `;

        container.appendChild(card);


        card.querySelector('#remove').addEventListener("click",function(){
            alert("Remove From Cart");
            removeToLocalStorage("cart", el);
        
        })
    });
}

function removeToLocalStorage(key, product) {
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.pop(product);
    localStorage.setItem(key, JSON.stringify(existing));
}

let cartProducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartProducts)
cartdisplayProducts(cartProducts, 'offer_card-container');

let cont = document.getElementById("offer_card-container");
let form = document.getElementById("form");

document.getElementById("placeOrderBtn").addEventListener("click", function(){
  alert("add Adresss")
  cont.style.display = "none";
  form.style.display = "flex";

})

form.addEventListener("submit", function(){
  event.preventDefault();
  let fullName = form.name.value;
  let plotHouse = form.houseNo.value;
  let streetColonyBuilding = form.buildingName.value;
  let city = form.city.value;
  let state = form.state.value;
  let pincode = form.pincode.value;
  let contact = form.contact.value;
  let addressObj = {fullName, plotHouse, streetColonyBuilding, city, state, pincode, contact}
  // console.log(addressObj)
  localStorage.setItem("address",JSON.stringify(addressObj));
  form.reset()
  window.location.href = "paymentGateway.html"
})