var jokeIn = document.getElementById('joke');
var numOfJokes = document.getElementById('numOfJokes');
let count = 0;

function generateContainers(){

  var outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "container");
  document.body.appendChild( outerDiv );

  count = count + 1;
  console.log(jokeIn);
  var jokeHere = document.createElement("div");
  jokeHere.setAttribute("id", "joke" + count);
  jokeHere.setAttribute("class", "joke");
  outerDiv.appendChild(jokeHere);

  var placeHolder = document.createTextNode("Joke here");
  jokeHere.appendChild(placeHolder);

  var button = document.createElement("button");
  button.setAttribute("onclick", "generateJoke()");
  button.setAttribute("id", "jokeButton" + count);
  button.setAttribute("class", "button");
  outerDiv.appendChild(button);

  var genJoke = document.createTextNode("Generate Joke");
  button.appendChild(genJoke);

}

async function generateJoke(){

  const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
let joke = await jokeResponse.json();



jokeIn.innerHTML = joke.joke;
}
