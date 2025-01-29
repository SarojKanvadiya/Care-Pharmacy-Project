const header = `<div class="header__contact">
            <div class="header__contact__number">
                <a href="tel:+91-78544-78695">+91-78544-78695</a>
            </div>
            <div class="header__contact-form">
                <a href="contactUs.html">Contact US</a>
            </div>
        </div>
        <div class="header__offer">
            <div class="header__offer-content">
                <p><span>Limited Period Offer: </span>Get up 1o 10% off + extra 15% off on medicine & more offers. <a href="offer.html" id="explore-more-btn">Explore More</a></p>
            </div>
        </div>
        <div class="header_loginandregister">
         <a href="Login.html">Log In </a> / <a href="Sign up.html">Sign Up</a>
        </div>`;

let headerCont = document.getElementById("header")
headerCont.innerHTML = header;


const searchBar = `<a id="logo" href="index.html">Logo</a>
        <form class="search-bar">
            <input type="search" class="search" placeholder="Search Medicine By Name here">
            <i class="fa-solid fa-magnifying-glass"></i>
        </form>
            <div class="user__account_details">
            <span id="user_login_id"></span>
            <a href="profile.html" id = "profile" style = "color:black;"><i class="fa-solid fa-user"></i>
</a>
            <div class="cart">
                 <a href="cart.html" style = "color:black;"><i class="fa-solid fa-cart-shopping"></i></a>
                <span class="count">3</span>
            </div>
        </div>`;

let searchCont = document.getElementById("search")
searchCont.innerHTML = searchBar;

const navbar = `<a href="products.html">Medicine</a>
        <a href="offer.html">Offers</a>
        <a href="#">Lab Test</a>
        <a href="#">Consult Doctor</a>
        <a href="#">Care Plan</a>
        <a href="#">Cancer Care</a>
        <a href="#">Parternership</a>`;

let navCont = document.getElementById("nav");
navCont.innerHTML = navbar;

let resNav = `<a id="logo" href="index.html">Care Pharmacy</a>
        <form class="search-bar">
            <input type="search" class="search" placeholder="Search Medicine By Name here">
            <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div id="nav-icon">
            <span style="font-size: 20px;">&#9776;</span>
        </div>`;

document.getElementById("resNav").innerHTML = resNav;

let resnavbar = `<div id="closenav" style="border: 2px solid white; float: right; padding: 5px; font-size: 20px; margin: 10px; color: white;">&cross;</div>
    <div id="links">
       <p><a href="index.html">Home</a></p>
       <p><a href="profile.html">Profile</a></p>
       <p><a href="Login.html">Login</a></p>
       <p><a href="products.html">Medicine</a></p>
       <p><a href="Sign up.html">Sign Up</a></p>
       <p><a href="offer.html">Offer</a></p>
       <p><a href="cart.html">Cart</a></p>
       <p><a href="#">Lab Test</a></p>
      <p><a href="#">Consult Doctor</a></p>
      <p><a href="#">Care Plan</a></p>
      <p><a href="#">Cancer Care</a></p>
      <p><a href="#">Parternership</a></p>
    </div>
    `;

document.getElementById("resnavbar").innerHTML = resnavbar;
