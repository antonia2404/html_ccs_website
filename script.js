const navToggleBtn = document.querySelector("#navToggleBtn");
const nav = document.querySelector("nav.navigation");
const navLinks = document.querySelectorAll("nav .nav-link");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the 'active' class from all links
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // Add the 'active' class to the clicked link
    link.classList.add("active");

    // Close the navigation menu
    nav.classList.remove("active");
  });
});

// **TESTIMONIALS**
// Access the testimonials
let testSlide = document.querySelectorAll(".testItem");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Add click event to the indicators
function switchTest(currentTest) {
  currentTest.classList.add("active");
  var testId = currentTest.getAttribute("attr");
  if (testId > counter) {
    testSlide[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = testId;
    testSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (testId == counter) {
    return;
  } else {
    testSlide[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = testId;
    testSlide[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}

// Add and remove active class from the indicators
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

// Code for auto sliding
function slideNext() {
  testSlide[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= testSlide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  testSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}
function autoSliding() {
  deleteInterval = setInterval(timer, 2000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over the indicators
const container = document.querySelector(".indicators");
container.addEventListener("mouseover", pause);
function pause() {
  clearInterval(deleteInterval);
}

// Resume sliding when mouse is out of the indicators
container.addEventListener("mouseout", autoSliding);

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Slick Carousel
  $(".hero-carousel").slick({
    autoplay: true,
    autoplaySpeed: 5000, // Adjust as needed
    arrows: false,
    dots: true,
    fade: true,
  });
});
