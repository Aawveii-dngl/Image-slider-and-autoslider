var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

//Slide
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  console.log(slideIndex);
  x[slideIndex - 1].style.display = "block"; //It simply shows the image dynamically and -1 is done because it is in array form and first image is 0 and if you are confused just put the 1 value in each
}
//Auto scroll
// var slideIndex = 1;
// showDivs(slideIndex);

// setInterval(Indexincr, 1000);

// function Indexincr() {
//   showDivs((slideIndex += 1));
// }

// function showDivs(n) {
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   for (let i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }
