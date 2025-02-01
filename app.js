let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function metodoUno() {
    console.log("El botón fue clicado");
}
function metodoDos() {
    let ciudad = prompt("Escribe el nombre de alguna ciudad de Brasil");
    alert(`Estuve en   ${ciudad}  y me acorde de ti`);
}
function metodoTres() {
    alert("Yo amo JS");
}
function metodoSuma() {
    let valor1 = parseInt(prompt("Ingresa el primer numero"));
    let valor2 = parseInt(prompt("Ingresa el segundo numero"));
    let suma = valor1 + valor2;
    alert(`La suma es: ${suma}`);
}