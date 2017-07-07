document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items

  const addFavorite = (event) => {
    event.preventDefault();
    const favEl = document.querySelector(".favorite-input");
    const fav = favEl.value;
    favEl.value = "";

    const favList = document.getElementById("sf-places");
    const favLi = document.createElement("li");
    favLi.textContent = fav;
    favList.appendChild(favLi);
  };

  const formEl = document.querySelector(".list-container form");
  formEl.addEventListener("submit", addFavorite);

  // adding new photos

  const photoForm = document.querySelector(".photo-form-container");

  const togglePhotoForm = (event) => {
    photoForm.classList.remove("hidden");
  };

  const addPhoto = (event) => {
    event.preventDefault();
    const photoList = document.querySelector(".dog-photos");
    const photoLi = document.createElement("li");
    const photoTag = document.createElement("img");
    const photoURL = document.querySelector(".photo-url-input");
    photoTag.src = photoURL;
    photoLi.appendChild(photoTag);
    photoList.appendChild(photoLi);
  };

  const toggleButton = document.querySelector(".photo-show-button");
  toggleButton.addEventListener("click", togglePhotoForm);

  photoForm.addEventListener("submit", addPhoto);
});
