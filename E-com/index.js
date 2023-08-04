var navbarItems = document.getElementsByClassName("navbar-item");
for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", function() {
    var currentActive = document.getElementsByClassName("active");
    if (currentActive.length > 0) {
      currentActive[0].classList.remove("active");
    }
    this.classList.add("active");
  });
}
let a = document.getElementById('price')
