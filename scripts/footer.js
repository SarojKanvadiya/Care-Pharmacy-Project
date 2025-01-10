const footer =`<div class="newsletter">
            <h2>Subscribe to stay informed</h2>
            <form id="newsletter">
                <input id="newsletteremail" type="email" placeholder="Enter Email">
                <input id="submitBtn" type="submit" value="Submit">
            </form>
        </div>
        <div class="footer_columns">
            <div class="col">
                <h3>Know Us</h3>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Press Coverage</a>
                <a href="#">Careers</a>
                <a href="#">Business Partnership</a>
                <a href="#">Became a Health Partner</a>
                <a href="#">Corporate Governance</a>
            </div>
            <div class="col">
                <h3>Our Policies</h3>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Editorial Policy</a>
                <a href="#">Return Policy</a>
                <a href="#">IP Policy</a>
                <a href="#">Grievance Redressal Policy</a>
                <a href="#">Fake Jobs and Fraud Disclamier</a>
            </div>
            <div class="col">
                <h3>Our Services</h3>
                <a href="#">Order Medicine</a>
                <a href="#">Book Lab Tests</a>
                <a href="#">Consult a Doctor</a>
                <a href="#">Ayurveda Articles</a>
                <a href="#">Hindi Articles</a>
                <a href="#">Care Plan</a>
            </div>
            <div class="col-4 col">
                <h3>Connect</h3>
                <p>Social Links</p>
               <div class="social-logo">
                       <a href="facebook.com"><img src="./assest/Social Media/facebook.png" alt="facebook"></a>
                       <a href="instagram.com"><img src="./assest/Social Media/instagram.png" alt="instagram"></a>
                       <a href="linkedin.com"><img src="./assest/Social Media/linkedin.png" alt="linkedin"></a>
                       <a href="twitter.com"><img src="./assest/Social Media/twitter.png" alt="twitter"></a>
                       <a href="https://www.youtube.com/"><img src="./assest/Social Media/youtube.png" alt="youtube"></a>
               </div>
                <p>Want daily dose of health?</p>
                <a id="signupBtn" href="Sign up.html">Sign Up</a>
            </div>
        </div>
        <hr>
        <div class="secure-reliable-affordable">
            <div class="col">
                <div class="image">
                    <img src="./assest/RS/shield.png" alt="Reliable">
                </div>
                <div class="contentafo">
                    <h1>Reliable</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sit odit quam quibusdam quo
                temporibus deleniti. Hic saepe id quod?</p>
                </div>
            </div>
            <div class="col">
                <div class="image">
                    <img src="./assest/RS/padlock.png" alt="Secure">
                </div>
                <div class="contentafo">
                    <h1>Secure</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sit odit quam quibusdam quo
                temporibus deleniti. Hic saepe id quod?</p>
                </div>
            </div>
            <div class="col">
                <div class="image">
                    <img src="./assest/RS/wallet.png" alt="Affordable">
                </div>
                <div class="contentafo">
                    <h1>Affordable</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sit odit quam quibusdam quo
                temporibus deleniti. Hic saepe id quod?</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="certificates">
            <h1>ISO Certificates</h1>
        </div>
        <hr>
        <div class="know-more__section"><a href="#">Know More About Us</a></div>
        <hr>
        <div class="bottom-footer">
            <div class="copyrights">
                <p style="font-size: 15px;"><span>&copy;</span>2024 Website Name.All rights reseved.All medicines are
                    dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945.
                    We do not process requests for Schedule X and habit forming drugs.</p>
            </div>
           <div class="payments-mode-footer">
                <img src="./assest/payments/Google Pay.png" alt="Google Pay">
                <img src="./assest/payments/Paytm .png" alt="Paytm">
                <img src="./assest/payments/PhonePe.png" alt="PhonePe">
                <img src="./assest/payments/visa-logo.png" alt="Visa">
                <img src="./assest/payments/mastercard.png" alt="Mastercard">
            </div>
        </div>`;

 const footerCont = document.getElementById("footer");
 footerCont.innerHTML = footer;   
 
 document.getElementById("newsletter").addEventListener("submit", function(){
    event.preventDefault();
    alert("Thank You for Subscribing....");
 })