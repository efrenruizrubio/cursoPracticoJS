const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

h1.innerText = "Hello World <br/> good";

const btnOnClick = () => {
	result.innerText = "Resultado: " + (+input1.value + +input2.value);
};
