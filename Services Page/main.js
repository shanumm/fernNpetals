//parallex effect to main page text

const translate = document.querySelectorAll(".translate-text");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(-${scroll * speed}px)`;
  });
});

// fade effect to second page text

function scrollappear() {
  var introtext = document.querySelectorAll(".intro-text");
  var screenposition = window.innerHeight / 1.2;
  introtext.forEach((element) => {
    var introposition = element.getBoundingClientRect().top;
    if (introposition < screenposition) {
      element.classList.add("intro-text-appear");
    }
  });
}

window.addEventListener("scroll", scrollappear);
