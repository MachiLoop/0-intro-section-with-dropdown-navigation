// const drop = document.querySelectorAll("ul[class*='dropdown']");
// console.log(drop);

// const dropdown = document.querySelectorAll(".dropdown-btn");
// console.log(dropdown);

const header = document.querySelector("header");
console.log(header);

const nav = document.querySelector(".main-nav");
console.log(nav);

const mobileNavToggle = (e) => {
  if (e.target.classList.contains("mobile-menu__btn")) {
    e.preventDefault();
    let visibility = e.target.getAttribute("aria-expanded");
    // NOTE WRAP IN A FUNCTION
    if (visibility === "false") {
      e.target.setAttribute("aria-expanded", true);
      nav.setAttribute("data-visible", true);
    } else {
      e.target.setAttribute("aria-expanded", false);
      nav.setAttribute("data-visible", false);
    }
    //END NOTE WRAP IN A FUNCTION
  }
};

const dropdownToggle = (e) => {
  if (!e.target.closest(".dropdown-btn")) return;
  e.preventDefault();

  let dropdown = e.target.closest(".dropdown-btn");
  let dropdownVisibility = dropdown.getAttribute("aria-expanded");
  let dropdownMenu = dropdown.parentElement.querySelector(
    "ul[class*= 'dropdown']"
  );
  // NOTE WRAP IN A FUNCTION
  if (dropdownVisibility === "false") {
    dropdown.setAttribute("aria-expanded", true);
    dropdownMenu.setAttribute("data-visible", true);
  } else {
    dropdown.setAttribute("aria-expanded", false);
    dropdownMenu.setAttribute("data-visible", false);
  }
  // END NOTE WRAP IN A FUNCTION
};

header.addEventListener("click", (e) => {
  mobileNavToggle(e);
  dropdownToggle(e);
});
