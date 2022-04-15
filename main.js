let section = document.querySelector(".skills");
let spans = document.querySelectorAll("span.progress");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.prog;
    });
  }
};
