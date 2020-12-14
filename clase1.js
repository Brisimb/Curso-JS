let nombre = "Brian", apellido = "Gonzalez"
let nombreEnMayusculas = nombre.toUpperCase()
let apellidoEnMinusculas = apellido.toLowerCase();
let primeraLetraDelNombre = nombre.charAt(0);
let cantidadDeLetrasDelNombre = nombre.length;
let nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
let str = nombre.substr(1,3);
console.log(nombreEnMayusculas, apellidoEnMinusculas,primeraLetraDelNombre,cantidadDeLetrasDelNombre, nombreCompleto, str);
//deafio: mostrar la ultima letra del nombre
let ultimaLetraDelNombre = nombre.charAt(nombre.length-1);
console.log(`La ultima letra del nombre es: ${ultimaLetraDelNombre}`);