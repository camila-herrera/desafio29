const { registrar, leer, vaciar } = require("./operaciones");
const operaciones = process.argv.slice(2); 

if (operaciones[0] === "registrar") 
   {const [nombre, edad, animal, color, enfermedad] = operaciones.slice(1);
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.error("Error: Faltan argumentos. Uso: registrar <nombre> <edad> <animal> <color> <enfermedad>");
        process.exit(1);}
    registrar(nombre, edad, animal, color, enfermedad);} 

else if (operaciones[0] === "leer") {leer();} 
else if (operaciones[0] === "vaciar") {vaciar();}
else {console.error("Operación no válida. Usa 'registrar', 'leer' o 'vaciar'.");}
