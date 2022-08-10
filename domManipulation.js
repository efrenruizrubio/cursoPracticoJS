const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const paragraph = document.getElementsByClassName("paragraph");
const paragraphID = document.getElementById("paragraph-id");
const input = document.querySelector("input");

console.log(input.value);

console.log({ h1, p, paragraph, paragraphID, input });

h1.innerHTML = "Hello World <br/> good";
h1.innerText = "Hello World <br/> good";
/* console.log(h1.getAttribute("class"));
h1.setAttribute("class", "red");
console.log(h1.getAttribute("class")); */

h1.classList.add("red");
h1.classList.remove("blue");
//h1.classList.toggle("blue");
//h1.classList.contains("blue");

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");

paragraphID.innerHTML = "";
paragraphID.append(img);
/* paragraphID.replaceWith(img); */
