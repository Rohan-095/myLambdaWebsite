document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card, .hero");
  cards.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  var reveal = function () {
    cards.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
});
