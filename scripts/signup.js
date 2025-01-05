import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("SignUp");
form.addEventListener("submit", function(){
    event.preventDefault();
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const gender = form.gender.value;
    const DOB = form.dob.value;
    const phoneNumber = form.phoneNumber.value;

    const userObj = {
        userName,
        email,
        password,
        gender,
        DOB,
        phoneNumber
    }

    fetch(`${baseUrl}/users`)
        .then((res) => res.json())
        .then((data) => {
            let user = data.filter((el) => el.email == email)
            if(user.length !=0) {
                    alert("User Already exists. Please Login..")
                    window.location.href = "Login.html";
            }else {
                fetch(`${baseUrl}/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userObj)
                })
                .then(() => {
                        alert("Sign Up Succesfully...");
                        form.reset();
                        window.location.href = "login.html";
                }).catch((err) => {
                        alert("Something went Wrong...")
                        console.log(err)
                })
                }
                // console.log(el.email)
        //    })
           
            // console.log()

        }).catch((err) => {
            alert("Something went Wrong while getting data...");
            console.log(err)
        })

    
// }
})





