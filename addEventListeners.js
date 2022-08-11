const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

h1.innerText = "Hello World <br/> good";

/* const addValues = (e) => {
	e.preventDefault();
	result.innerText = "Resultado: " + (+input1.value + +input2.value);
}; */

/* form.addEventListener("submit", addValues); */

btn.addEventListener("click", () => {
	result.innerText = "Resultado: " + (+input1.value + +input2.value);
});

result.addEventListener("mouseover", () => {
	result.style.backgroundColor = "red";
	result.style.color = "white";
});

result.addEventListener("mouseout", () => {
	result.style.backgroundColor = "white";
	result.style.color = "black";
});
