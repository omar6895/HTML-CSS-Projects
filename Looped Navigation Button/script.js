function toggleOptions() {
  var button = document.querySelector(".navigation-button");
  button.classList.toggle("clicked");
}

function selectOption(option) {
  alert("You selected " + option);
}
