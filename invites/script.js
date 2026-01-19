
// Loader: hide after 1.5 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("invite-loader").classList.add("hide");
  }, 1500); // 1.5 seconds forced animation
});

const card = document.getElementById("card");
const websiteBtn = document.getElementById("websiteBtn");
let userInteracted = false;

function flipCard() {
  userInteracted = true;
  card.classList.toggle("is-flipped");
  websiteBtn.classList.add("show");
}

card.addEventListener("click", flipCard);

// Auto flip after 7 seconds if untouched
setTimeout(() => {
  if (!userInteracted) {
    card.classList.add("is-flipped");
    websiteBtn.classList.add("show");
  }
}, 7000);

