const dots = document.querySelector(".dots");
const servicesBoxs = document.querySelectorAll("#section-two .all-box .box");

let index = 0;
const setService = function () {
  if (index == 4) {
    index = 0;
  }
  dots.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("active");
  });
  dots.querySelectorAll(".dot")[index].classList.add("active");

  servicesBoxs.forEach(function (box) {
    box.style.opacity = 0;
    servicesBoxs[index].style.opacity = 1;
  });
};

setInterval(function () {
  index += 1;
  setService();
}, 5000);
dots.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    index = Number(e.target.getAttribute("index"));
    setService();
  }
});

const slides = document.querySelectorAll(
  "#section-three .container .all-box .box"
);
const arrowRight = document.querySelector(".arrowright");
const arrowLeft = document.querySelector(".arrowleft");

let counter = 0;
const alterSliders = function () {
  slides.forEach((slide, index) => {
    slide.style.transform = `translate(${(index - counter) * 100}%)`;
  });
};

alterSliders();
console.log(slides);
arrowRight.addEventListener("click", function () {
  counter++;
  if (counter > slides.length - 4) {
    counter = 0;
  }
  alterSliders();
});

arrowLeft.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = slides.length - 4;
  }
  alterSliders();
});

// sections observe

let bodySections = document.querySelectorAll("body section .container");

bodySections.forEach((bodySection) => {
  bodySection.classList.add("section-hidden");
});

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null,
  threshold: 0.15,
};

const observer = new IntersectionObserver(revealSection, options);

bodySections.forEach((section) => {
  observer.observe(section);
});
