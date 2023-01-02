"use strict";
const monthlyAmt = document.querySelectorAll(".month");
const annuallyAmt = document.querySelectorAll(".annual");
const allCards = document.querySelectorAll(".card");
const toggle = document.querySelector(".toggle")
const switchFunc = function(){
  document.querySelector(".dot").style.marginLeft = 0;
  monthlyAmt.forEach((ele) => (ele.style.display = "none"));
  annuallyAmt.forEach((ele) => (ele.style.display = "block"));
  toggle.addEventListener('click', function(){
    document.querySelector(".dot").style.marginLeft = 'auto';
    monthlyAmt.forEach((ele) => (ele.style.display = "block"));
    annuallyAmt.forEach((ele) => (ele.style.display = "none"));
    toggle.addEventListener('click', function(){
      switchFunc()
    })
  })
}
toggle.addEventListener("click", function () {switchFunc()});
allCards.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    if (e.target.tagName === "H4") {
      allCards.forEach(function(ele){
        ele.classList.remove("card--active");
        ele.classList.remove("gradient");
      })
      e.target.parentElement.classList.add("card--active");
      e.target.parentElement.classList.add("gradient");
    }
  });
});
