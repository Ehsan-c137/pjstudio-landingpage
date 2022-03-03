"use strict";

const options = {
   root: null,
   rootMargin: "0px",
   threshold: 0.25,
};

const callback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.className == "container") {
         console.log(entry);
      }
   });
};
let observer = new IntersectionObserver(callback, options);
