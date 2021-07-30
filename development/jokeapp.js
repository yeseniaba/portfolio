document.addEventListener("click", function (event) {

  if (!event.target.matches("#button")) return;


  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => renderJoke(data))
    .catch(() => renderError());
});

function renderJoke(data) {

  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  const error = document.getElementById("error");


  error.innerHTML = "";
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
}

function renderError() {
  const error = document.getElementById("error");
  error.innerHTML = "Sorry! I forgot to pay the bill. Try again later!";
}


