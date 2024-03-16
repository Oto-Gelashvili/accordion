var liImg = document.querySelectorAll("li img");
var liContent = document.querySelectorAll(".li-content");
var imgAmount = document.querySelectorAll("li img").length;
// create for loop to iterate over every img and content
for (let i = 0; i < imgAmount ; i++) {
    liImg[i].addEventListener("click", function() {
        // when img is click,its src will change depending on src value and content will appear/dissapear
        if (liImg[i].getAttribute("src") == "assets/images/icon-minus.svg") {
            liImg[i].setAttribute("src", "assets/images/icon-plus.svg");
            liContent[i].classList.add("hidden");
        } else {
            liImg[i].setAttribute("src", "assets/images/icon-minus.svg");
            liContent[i].classList.remove("hidden");

        }
        // create another loop,that will iterate while [i] is fixed,and will help us to close/revert every img/content that isnt [i].
        for (let j = 0; j < imgAmount ; j++){
        if(j !== i){
            liContent[j].classList.add("hidden");
            liImg[j].setAttribute("src", "assets/images/icon-plus.svg");
        }
        }
    })
};