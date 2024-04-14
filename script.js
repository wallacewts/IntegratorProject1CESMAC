function menuShow() {
  const menuMobile = document.querySelector(".menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");

    document.querySelector(".icon").src = "./imgs/menu_black.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./imgs/close.svg";
  }
}

function menuHide() {
  document.querySelector(".icon").src = "./imgs/menu_black.svg";
  document.querySelector(".menu").classList.remove("open");
}
