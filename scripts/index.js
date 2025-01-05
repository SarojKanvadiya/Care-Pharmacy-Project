async function getData() {
    try{
        let res = await fetch('https://fakestoreapi.com/products');
        let data = await res.json()
return data;
    }catch(err) {
console.log(err)
    }
}

window.onload = async() => {
    let arr = await getData();
     dataToBeDisplayed = [...arr];
    displayData(dataToBeDisplayed, 'product')
}


function displayData(arr, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 
// let cont = document.getElementById("product");
//     cont.innerHTML = "";
    arr.map((el) => {
        let card = document.createElement("a");
        card.className = "product-card";
        card.setAttribute("href", "ProductDetail.html")
        card.innerHTML = `<div class="image">
                                <img src=${el.image} alt=${el.title}>
                            </div>
                            <div class="details">
                                <h4>${el.title}</h4>
                                <p></p>
                                <div class="rating">
                                    <p id="ratingNumber">${el.rating.rate} <i class="fa-solid fa-star"></i></p>
                                    <p id="ratingCount">${el.rating.count} ratings</p>
                                </div>
                                <div class="price">&#8377; ${el.price} </div>
                                <div class="button">
                                    <button id="BuyNowBtn">Buy Now</button>
                                    <button id="AddCartBtn">Add to Cart</button>
                                </div>
                            </div>`
            
                            container.append(card);

                            let AddCartBtn =card.querySelector("#AddCartBtn");
                            AddCartBtn.addEventListener("click", function(){
                                alert("Add to cart")
                                saveToLocalStorage("cart", el);
                            })        
                            
    })
}

function saveToLocalStorage(key, product) {
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.push(product);
    localStorage.setItem(key, JSON.stringify(existing));
}

let dataToBeDisplayed = [];

let sortName = document.getElementById("sortbyname");
    sortName.addEventListener("change", function () {
        if (sortName.value == "atoz") {
            dataToBeDisplayed.sort((a, b) => (a.title > b.title ? 1 : -1))
            displayData(dataToBeDisplayed)
        } else {
            dataToBeDisplayed.sort((a, b) => (a.title > b.title ? -1 : 1))
            displayData(dataToBeDisplayed)
        }
    })

    let sortPrice = document.getElementById("sortbyprice");
    sortPrice.addEventListener("change", function () {
        if (sortPrice.value == "htl") {
            dataToBeDisplayed.sort((a, b) => (b.price - a.price))
            displayData(dataToBeDisplayed)
        } else {
            dataToBeDisplayed.sort((a, b) => (a.price - b.price))
            displayData(dataToBeDisplayed)
        }
    })