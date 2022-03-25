const word = document.querySelector(".word");
const button = document.querySelector("button");
const result = document.querySelector(".result");
function getWord() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
      "X-RapidAPI-Key": "5caf141545msha2d29df358a627bp166d7djsna9e79f47d35b",
    },
  };

  fetch(
    `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word.value}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      const definition = data.definition;
      console.log(definition);
      result.innerHTML = definition;
    });
}

button.addEventListener("click", getWord);
