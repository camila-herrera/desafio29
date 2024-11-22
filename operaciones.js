const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const cita = { nombre, edad, animal, color, enfermedad }; 
    const data = JSON.stringify(cita);
    fs.appendFileSync('citas.json', data + '\n'); 
    console.log(`Cita de ${nombre} registrada exitosamente.`);
};

const leer = () => {
    const data = fs.readFileSync('citas.json', 'utf-8');
    const citas = data.trim().split('\n').filter(line => line); 
    citas.forEach(cita => console.log(JSON.parse(cita))); 
};

const vaciar = () => {
    fs.writeFileSync('citas.json', "");
    console.log("Todas las citas han sido eliminadas.");
};

module.exports = { registrar, leer, vaciar };
