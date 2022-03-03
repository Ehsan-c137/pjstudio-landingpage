"use strict";

const options = {
   root: null,
   rootMargin: "0px",
   threshold: 0.25,
};

const callback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("observer-active");
         console.log(entry.target);
         // observer.unobserver(entry.target);
      }
   });
};
let observer = new IntersectionObserver(callback, options);

const observerEl = document.querySelectorAll(".observer");
observerEl.forEach((el) => {
   observer.observe(el);
});
