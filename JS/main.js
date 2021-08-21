window.addEventListener("scroll" , function(){
    if(this.scrollY > 100){
        this.document.querySelector(".navbar-image").style.display ="block";
        this.document.querySelector(".navbar").classList.add("stick");
        this.document.querySelector(".menu-icon").classList.add("stick");
        this.document.querySelector(".up").classList.add("active");
    }
    else {
        this.document.querySelector(".navbar-image").style.display ="none";
        this.document.querySelector(".navbar").classList.remove("stick");
        this.document.querySelector(".menu-icon").classList.remove("stick");
        this.document.querySelector(".up").classList.remove("active");


    }
});
// Toggle Side Menu
//#region 

let menu = document.querySelector(".fa-bars");
let sideMenuContainer = document.getElementById("side-menu-container");
let sideMenu = document.querySelector(".side-menu");
let closeBtn = document.querySelector(".icon");
let body = document.querySelector("body");
menu.addEventListener("click" , function(){
    sideMenuContainer.style.visibility ="visible";
    sideMenu.style.left ="0";

});

closeBtn.addEventListener("click", function(){
    sideMenuContainer.style.visibility ="hidden";
    sideMenu.style.left ="-400px";

});

// Close menu when click outside

window.addEventListener("click" , function(e){
    if ( e.target == sideMenuContainer ) {
        sideMenuContainer.style.visibility ="hidden";
        sideMenu.style.left ="-400px";

    }
})

//#endregion

// Back to top 
//#region 
    var up = document.querySelector(".up");
    up.addEventListener("click" , function(){
        scrollTo({
           top : 0,
           behavior: 'smooth' 
        });
    });

//#endregion
// Header Carousel
//#region 

var slideIndex = 0;
HeaderImage();
function HeaderImage(){
    var i;
    // get array of images
  var images = document.querySelectorAll(".image");
  // get array of dots
  var dots = document.getElementsByClassName("dot");

    for ( i=0; i < images.length; i++){
        // initially set the display to none for every image
        images[i].style.display ="none";
    }
    // increase by 1
    slideIndex++;

    if ( slideIndex > images.length){
        slideIndex =1;

    }

   

    images[slideIndex -1].style.display ="block";

    // change image every 3.5 seconds
    setTimeout(HeaderImage , 4000);
}
//#endregion

// Shop Carousel 
//#region 
var shopIndex =-1;
var timer;
function shopImage(i){
  
   
    var images = document.querySelectorAll(".image-shop");
    var dots = document.getElementsByClassName("dot");


    for (i=0; i<images.length; i++){
        images[i].style.display="none";
    }
    
    if (shopIndex >= (images.length -1)){
        shopIndex = -1;
    }

    for (i =0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active" ,"");

    }

    images[++shopIndex].style.display="block";
    dots[shopIndex ].className +=" active";
    setTimeout(shopImage , 4500); 

   
   
}








window.addEventListener("onload" , shopImage(shopIndex));

//#endregion


// Product Carousel 
//#region 

var productIndex = -1;
function productImage(i){
   

    var images = document.querySelectorAll(".product-shop");
    var dots = document.getElementsByClassName("product-dot");

    for (i=0; i<images.length; i++){
        images[i].style.display="none";
    }
    


    // if ( productIndex >= 0){
    //     images[productIndex].style.display = "none";
    // }

    if ( productIndex >= (images.length -1)){
        productIndex = -1;
    }


    for (i =0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active" ,"");

    }


    images[++productIndex].style.display="block";
    dots[productIndex ].className +=" active";

    setTimeout(productImage , 4500)
}

window.addEventListener("onload" , productImage(productIndex));


//#endregion

// Checkout Carousel 

//#region 

var checkoutIndex = -1;
function checkoutImage(i){
   

    var images = document.querySelectorAll(".checkout-image");
    var dots = document.getElementsByClassName("checkout-dot");

    for (i=0; i<images.length; i++){
        images[i].style.display="none";
    }
    


    // if ( productIndex >= 0){
    //     images[productIndex].style.display = "none";
    // }

    if ( checkoutIndex >= (images.length -1)){
        checkoutIndex = -1;
    }


    for (i =0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active" ,"");

    }


    images[++checkoutIndex].style.display="block";
    dots[checkoutIndex ].className +=" active";

    setTimeout(checkoutImage , 4500)
}

window.addEventListener("onload" , checkoutImage(checkoutIndex));

//#endregion


// Animation 
//#region 

window.addEventListener("scroll" , animation);

function animation(){
    var animations = document.querySelectorAll(".scale , .rotate , .opacity , .slide-left , .slide-right , .slide-up");

    for ( var i =0; i<animations.length; i++){
        var widnowHeight = window.innerHeight;
        var revealTop = animations[i].getBoundingClientRect().top;
        var startPoint = 10;

        if ( revealTop < widnowHeight - startPoint ){
            animations[i].classList.add("active");
        }

        else {
            animations[i].classList.remove("active");
        }
    }
}