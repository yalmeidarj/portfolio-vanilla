VANTA.NET({
  el: "#animation-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: document.querySelector(".box").offsetHeight,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#7e6e30",
  backgroundColor: "#313131",
  points: 12.0,
  maxDistance: 12.0,
  spacing: 18.0,
});

VANTA.NET({
  el: "#aboutMe",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: document.querySelector(".box").offsetHeight,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#7e6e30",
  backgroundColor: "#313131",
  points: 12.0,
  maxDistance: 12.0,
  spacing: 18.0,
});

function scrollToId(eleId) {
  const element = document.getElementById(eleId);
  element.scrollIntoView();
}
