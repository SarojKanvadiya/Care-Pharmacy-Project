import { baseUrl } from "./baseUrl.js";

const form = document.getElementById("loginform");
form.addEventListener("submit", function () {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    fetch(`${baseUrl}/users`)
        .then((res) => res.json())
        .then((data) => {

            let userData = data.filter((el) => el.email == email)
            console.log(userData)
            if (userData.length != 0) {
                let userEmail = ((userData.map((el) => { return el.email; })).join("")).split('@');
                // console.log()
                if (userEmail.includes("admin.com")) {
                    // userData.map((el) => {
                        if (userData[0].password == password) {
                            alert("Login Successfully...");
                            localStorage.setItem("loginData", JSON.stringify(userData[0]));
                           
                            window.location.href = "adminPage.html";
                            // document.querySelector("a").setAttribute("href", "adminPage.html")
                            
                        } else {
                            alert("Password is wrong. Please Try again")
                        }
                    // })
                } else {
                    // userData.map((el) => {
                        if (userData[0].password == password) {
                            alert("Login Successfully...");
                            localStorage.setItem("loginData", JSON.stringify(userData[0]));
                            // document.querySelector("a").setAttribute("href", "UserPage.html")
                            window.location.href = "index.html";
                            
                        } else {
                            alert("Password is wrong. Please Try again")
                        }
                    // })

                }
            } else {
                alert("User Not Exist. Please Sign Up..");
                window.location.href = 'Sign up.html';
            }
        }).catch((err) => {
            alert("Something went Wrong while getting data...");
            console.log(err)
        })

})

// let profile = document.getElementById("user_login_id")
// profile.textContent = ``;




