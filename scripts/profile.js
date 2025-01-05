function logout(){
    let loginData = JSON.parse(localStorage.getItem("loginData"));
    // console.log(loginData)
    // console.log(loginData.email)
     
    document.getElementById("user_login_id").textContent = `${loginData.email}`;
}

logout()
  
