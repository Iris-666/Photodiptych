
let slides, dots;
let slideIndex = 1;
projectCount = 30;
let slideContainer;
let name = ["Qiran Xie", "Victoria Cheng","Anita Luo","Denny Wang","Shuyu","Silas Sui","Junzhe Chen","Angie Uytingco","Calvin Lin","Chynna Dorado","icci","Katy Wang","Yuke Zhang (Alina)","Maile Lynn","Wanyu Chen","Lein","Han Zhang","Natalya","Shahd Mounir Moustafa","Sixian Yu","Emily Cui","Nuo Xu","Victoria Chen","Tania Hartanto","Torico","Chenhan Xu","Azaliia Abdullina","Tansholpan Zhanabekova","Shuer Gu","Alex Wu"];

let sectionBtn;

function disappear(){
  console.log("disappear")
  sectionBtn.style.display = "none";
}

window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){
    if(i < 19){
        slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img/img${i+1}.png" class="img" style="width:90%">`+`<div class="text">${name[i]}</div>`+`</div>`
    }else{
        slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img/img${i+1}.png" class="img" style="width:42%">`+`<div class="text">${name[i]}</div>`+`</div>`
    }
  }
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  showSlides(slideIndex);
  sectionBtn = document.getElementById("dropdown");

  setInterval(() => {
    plusSlides(1);
  }, 5000);
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";

}

document.addEventListener("keydown", (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  console.log(keyName);
  if(keyName == "a"){
    plusSlides(-1);
  }else if(keyName == "b"){
    plusSlides(1);
  }
})