const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", function () {
    jokeEl.textContent = "Loading...";

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            jokeEl.textContent = data.value;
        })
        .catch(error => {
            jokeEl.textContent = "Failed to load joke.";
            console.error(error);
        });
});