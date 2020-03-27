function generateContainers(event){
  event.preventDefault();
  let numOfJokes = document.getElementById('numOfJokes').value;
  let container = document.querySelector(".megaContainer");
  container.innerHTML = "";
  for ( let i = 0; i < numOfJokes; i++) {
    let outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "container");
    container.appendChild(outerDiv );

    let jokeHere = document.createElement("div");
    jokeHere.setAttribute("id", "joke" + i);
    jokeHere.setAttribute("class", "joke");
    outerDiv.appendChild(jokeHere);


    let button = document.createElement("button");
    button.setAttribute("onclick", "generateJoke('joke" + i + "')");
    button.setAttribute("id", "jokeButton" + i);
    button.setAttribute("class", "button");
    outerDiv.appendChild(button);

    let genJoke = document.createTextNode("Generate Joke");
    button.appendChild(genJoke);
    generateJoke("joke" + i);
  }
}

async function generateJoke(id) {
  let jokeElement = document.getElementById(id);
  jokeElement.innerHTML = "Loading Joke...";

  const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  let joke = await jokeResponse.json();

  jokeElement.innerHTML = joke.joke;
}
