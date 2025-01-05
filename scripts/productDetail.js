let cont = document.getElementById("container");
let addInfo = document.getElementById("addinfo-container");
let review = document.getElementById("review-container");
document.getElementById("addinfo").addEventListener("click", function(){
  addInfo.style.display = "block";
  review.style.display = "none";
})
document.getElementById("review").addEventListener("click", function(){
    addInfo.style.display = "none";
   review.style.display = "grid";
})