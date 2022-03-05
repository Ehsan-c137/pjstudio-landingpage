"use strict";

const options = {
   root: null,
   rootMargin: "0px",
   threshold: 0.45,
};

const callback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("observer-active");
         // observer.unobserver(entry.target);
         observer.unobserve(entry.target);
      }
   });
};
let observer = new IntersectionObserver(callback, options);

const observerEl = document.querySelectorAll(".observer");
observerEl.forEach((el) => {
   observer.observe(el);
});

// lazy loading img
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
   const [entry] = entries;

   if (!entry.isIntersecting) return;

   // replace src with data-src
   entry.target.src = entry.target.dataset.src;

   entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
   });
   observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
   root: null,
   threshold: 0,
   rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// validate email
const emailInput = document.querySelector(".footer-input-container input");
const emailContainer = document.querySelector(".footer-input-container");

let regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

emailInput.addEventListener("keypress", function (email) {
   if (regex.test(emailInput.value))
      emailContainer.style.border = "2px solid green";
});
