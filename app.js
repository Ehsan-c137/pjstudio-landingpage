"use strict";
// TODO change the width of .phone to 80rem when lazyImg loaded

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

   console.log(entry.target);
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
