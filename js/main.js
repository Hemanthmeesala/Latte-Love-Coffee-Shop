// Change Background Header
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop-50,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
// Scroll Reveal Animation
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  // reset:true //Animation repeat
})
sr.reveal(`.home__data,.products__data,.steps__content,.footer__container`)
sr.reveal(`.home__img`,{origin:'bottom'})
sr.reveal(`.products__card`,{inteval:100})
sr.reveal(`.about__img .testimonial_img`,{origin:'right'})
sr.reveal(`.about__data .testimonial_data`,{origin:'left'})



// Contact Us Modal

let modal = document.getElementById("myModal");
// Get the Button that opens the modal
let btn = document.getElementById("myBtn");
// Get the Span Element That Closes The Modal
var span = document.getElementsByClassName("close")[0];

// When The User Click the Button Modal will Open
btn.onclick = function () {
  modal.style.display = "inline-block";
};

// When User Click on Span (x) close the Modal
span.onclick = function () {
  modal.style.display = "none";
};
// When User Click anywhere outside of the modal,close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
