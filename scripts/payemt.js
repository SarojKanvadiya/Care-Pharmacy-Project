let data = JSON.parse(localStorage.getItem("address"));
console.log(data.fullName)

let cont = document.getElementById("address");

let card = document.createElement("div");
card.innerHTML = `<h2>Billing Address : </h2>
            <p>${data.fullName}</p>
            <p>${data.plotHouse}, ${data.streetColonyBuilding}, ${data.city}, ${data.state} - ${data.pincode}</p>
            <p>${data.contact}</p>`;

cont.appendChild(card);

let paymentBtn = document.getElementById("orderDoneBtn");
paymentBtn.addEventListener("click", function() {
    alert("Order Placed.......");
    window.location.href = "cart.html";
})
