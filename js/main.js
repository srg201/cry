const burger = document.querySelector(".burger");
const header = document.querySelector(".header--adaptive");
const cross = document.querySelector(".header-cross");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  header.classList.toggle("header--adaptive--active");
});

cross.addEventListener('click', () => {
    burger.classList.remove("burger--active");
    header.classList.remove("header--adaptive--active");
})

const full = new fullpage("#fullpage", {
  licenseKey: "YOUR_KEY_HERE",
  slidesNavigation: true,
});

if(window.innerWidth <= 1024) {
  fullpage_api.destroy();
}