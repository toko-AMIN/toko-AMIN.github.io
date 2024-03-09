let text = document.getElementById('text');
let gerbangKiri = document.getElementById('gerbang-kiri');
let gerbangKanan = document.getElementById('gerbang-kanan');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  
  text.style.marginTop = value * -0.5 + 'px';
  gerbangKiri.style.left = value * -0.9 + 'px';
  gerbangKanan.style.left = value * 0.9 + 'px';
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Close all accordions
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }

    // Toggle the clicked accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
