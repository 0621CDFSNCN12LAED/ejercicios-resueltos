const secretWord = "secretomisterioso";
let estadoSecreto = 0;

input.addEventListener("keypress", (event) => {
  const key = event.key;
  console.log(key);
  if (key === secretWord[estadoSecreto]) {
    estadoSecreto++;
  } else {
    estadoSecreto = 0;
  }

  if (estadoSecreto == secretWord.length) {
    alert("BOOM, Secret");
    estadoSecreto = 0;
  }
});
