let meusLinks = document.querySelector(".links div")
let background = document.querySelector(".menu")

function showMenu() {
if (meusLinks.style.transform === "translateX(-500px)") {
  meusLinks.style.transform = "translateX(0)";
  background.style.backgroundColor = "var(--purple)"
} else {
  meusLinks.style.transform = "translateX(-500px)";
  background.style.backgroundColor = "var(--cor-segundaria)"
}
}