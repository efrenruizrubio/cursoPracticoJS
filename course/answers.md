## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

  Espacios en memoria en donde se puede guardar información (dependiendo de los tipos de datos que soporte el lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  Declarar es cuando se crea una variable con un nombre, mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar y concatenar un string?
  Sumar pasa cuando los tipos de datos son números, mientras que concatenar ocurre cuando, por lo menos, una variable es de tipo string. Por ejemplo: 2 + 2 = 4, "2" + 2 = "22".

- ¿Cuál operador me permite sumar o concatenar?
  El operador '+'.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let nombre = "Efrén";
let apellido = "Ruíz";
let usuario = "efren282";
let edad = 22;
let correo = "efren282@outlook.es";
let esMayorDeEdad = true;
let dineroAhorrado = 0;
let deudas = 30000;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```js
let nombreCompleto = `${nombre} ${apellido}`;
let dineroReal = dineroAhorrado - deudas;
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
  Las funciones permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en un futuro.

- ¿Cuándo me sirve usar una función en mi código?
  Cuando se necesite ejecutar un bloque de código por repetidas ocasiones que se pueden encapsular para reutilizarlo a futuro.
  También sirve para ordenar y mejorar la legibilidad del código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  Los parámetros son las variables que una función recibe cuando se crea, mientras que los argumentos son las variables que una función recibe cuando se ejecuta.

### 2️⃣ Convierte el siguiente código en una función, pero cambiando, cuando sea necesario, las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log(
	"Mi nombre es " +
		completeName +
		", pero prefiero que me digas " +
		nickname +
		".",
);
```

```js
let name = "Juan David";
let lastname = "Castro Gallego";
let nickname = "juandc";

const fullName = (name, lastName, nickName) => {
	console.log(
		`Mi nombre es ${name} ${lastName}, pero prefiero que me digas ${nickName}`,
	);
};
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
  Son la forma en que se ejecuta un bloque de código u otro dependiendo de alguna condición o validación.
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  if (else y else if), Switch()
  El condicional if permite hacer validaciones distintas, si es lo que se busca, en cada validación o condicional. En cambio, en el switch todos los casos se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?
  Sí, las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales;

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
	case "Free":
		console.log("Solo puedes tomar los cursos gratis");
		break;
	case "Basic":
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
		break;
	case "Expert":
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
		break;
	case "ExpertPlus":
		console.log(
			"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
		);
		break;
}
```

```js
if (tipoDeSuscripcion === "Free")
	console.log("Solo puedes tomar los cursos gratis");
else if (tipoDeSuscripcion === "Basic")
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
else if (tipoDeSuscripcion === "Expert")
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
else if (tipoDeSuscripcion === "ExpertPlus")
	console.log(
		"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
	);
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
const tipoSuscripcion = (tipoDeSuscripcion) => {
	if (tipoDeSuscripcion === "Free") {
		console.log("Solo puedes tomar los cursos gratis");
		return;
	}
	if (tipoDeSuscripcion === "Basic") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
		return;
	}
	if (tipoDeSuscripcion === "Expert") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
		return;
	}
	if (tipoDeSuscripcion === "ExpertPlus") {
		console.log(
			"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
		);
		return;
	}
	console.warning("Tipo de suscripción no válida");
};

tipoSuscripcion("Free");
```

### Bonus:

```js
const tiposDeSuscripciones = {
	free: "Solo puedes tomar los cursos gratis",
	basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
	expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
	expertPlus:
		"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

const suscripcion = (tipo) => {
	return tiposDeSuscripciones[tipo] || "Tipo de suscripción no válida";
};
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
  La forma en la que se ejecuta un bloque de código hasta que una condición sea verdadera o se cumpla.
- ¿Qué tipos de ciclos existen en JavaScript?
  for, while, do while
- ¿Qué es un ciclo infinito y por qué es un problema?
  Cuando la validación de una condición nunca se cumple, y termina dañando la aplicación (por ejemplo, cuando el navegador ya no puede más de tanto ejecutar ese bloque de código)
- ¿Puedo mezclar ciclos y condicionales?
  Sí, aunque los ciclos poseen una condición de detención, se pueden agregar más condicionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
	console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
	console.log("El valor de i es: " + i);
}
```

```js
let i = 0;

while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}

let i = 10;

while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
let respuesta;

while (respuesta !== 4) {
	let pregunta = prompt("¿Cuánto es 2 + 2?");
	respuesta = pregunta;
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
  Es una lista de elementos.
- ¿Qué es un objeto?
  Es una lista de elementos, pero cada elemento tiene una llave o nombre clave.
- ¿Cuándo es mejor usar objetos o arrays?
  Arrays cuando lo que se hace en un elemento es lo mismo que en todos los demás.
  Objetos cuando los nombres de cada elemento son importantes para el algoritmo.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  Sí, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
const primerElemento = (array) => {
	console.log(array[0]);
};

primerElemento([1, 2, 3, 4, 5]);
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
const elementos = (array) => {
	array.forEach((element) => {
		console.log(element);
	});
};

elementos([1, 2, 3, 4, 5]);
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
const objetos = (obj) => {
	for (let key in obj) {
		console.log(`${key}: ${obj[key]}`);
	}
};

objetos({
	name: "Efrén",
	age: 25,
	interests: ["programming", "videogames", "music"],
});
```
