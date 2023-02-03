const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "lZerQjiecLaY10R88TbQjg==wzdfK8MeXDE3MSHD";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
  contentType: "application/json",
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  } catch (error) {
    jokeEl.innerText = "An error occurred.Please try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

btnEl.addEventListener("click", getJoke);
