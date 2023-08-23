// make the progress in skills section increase when user reach th section.
let section = document.querySelector(".skills");
let spans = document.querySelectorAll("span.progress");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.prog;
    });
  }
};

// countdown
let days = document.querySelector(".latest .container h4#days");
let hours = document.querySelector(".latest .container h4#hours");
let minutes = document.querySelector(".latest .container h4#minutes");
let seconds = document.querySelector(".latest .container h4#seconds");

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let Ndays = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let Nhours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let Nmin = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let Nsec = Math.floor((dateDiff % (1000 * 60)) / 1000);
  days.innerHTML = Ndays;
  hours.innerHTML = Nhours;
  minutes.innerHTML = Nmin;
  seconds.innerHTML = Nsec;
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);
