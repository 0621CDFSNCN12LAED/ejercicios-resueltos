const body = document.querySelector("body");
const mainElement = document.querySelector("main");
const subtitleElement = document.querySelector(".subtitulo");
const moviesLinkElement = document.querySelector("a");
const pElements = document.querySelectorAll("p");

let userName = prompt("Ingrese su nombre");
if (!userName) {
    userName = "Invitado";
}

subtitleElement.innerHTML += userName;

subtitleElement.style = {
    textTransform: "uppercase",
    color: "white",
    padding: "20px",
};

moviesLinkElement.style.color = "#E51B3E";

if (confirm("¿Desea colocar un fondo de pantalla?")) {
    body.classList.add("fondo");
}

pElements.forEach((element, i) => {
    if (i % 2 == 0) {
        element.classList.add("destacadoPar");
    } else {
        element.classList.add("destacadoImpar");
    }
});

//Al final
mainElement.style.display = "initial";
