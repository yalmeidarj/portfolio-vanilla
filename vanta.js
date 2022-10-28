VANTA.NET({
    el: "#animation-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: document.querySelector('.box').offsetHeight,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#7e6e30',
    backgroundColor: '#313131',
    points: 12.00,
    maxDistance: 12.00,
    spacing: 18.00
})

VANTA.NET( {
    el: '#aboutMe',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: document.querySelector('.box').offsetHeight,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#7e6e30',
    backgroundColor: '#313131',
    points: 12.00,
    maxDistance: 12.00,
    spacing: 18.00
});

VANTA.NET( {
    el: '#myWork',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: document.querySelector('.box').offsetHeight,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#7e6e30',
    backgroundColor: '#313131',
    points: 12.00,
    maxDistance: 12.00,
    spacing: 18.00
});

VANTA.NET( {
    el: '#contact',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: document.querySelector('.box').offsetHeight,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#7e6e30',
    backgroundColor: '#313131',
    points: 12.00,
    maxDistance: 12.00,
    spacing: 18.00
});
VANTA.NET( {
    el: '#skills',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: document.querySelector('.box').offsetHeight,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: '#7e6e30',
    backgroundColor: '#313131',
    points: 12.00,
    maxDistance: 12.00,
    spacing: 18.00
});
function scrollToId(eleId) {
  const element = document.getElementById(eleId);
  element.scrollIntoView();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myWorkCard");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Email.send(msg, {
//     Host : "smtp.elasticemail.com",
//     Username : "codeting21@gmail.com",
//     Password : "03122806ydA",
//     To : 'yalmeida.rj@gmail.com',
//     From : "codeting21@gmail.com",
//     Subject : "My Website: ",
//     Body : msg,
// }).then(
//   message => alert(message)
// );