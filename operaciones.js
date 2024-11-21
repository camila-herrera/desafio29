const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const cita = { nombre, edad, animal, color, enfermedad };
    const data = JSON.stringify(cita);
    if (!fs.existsSync('citas.json')) {
        fs.writeFileSync('citas.json', '');}
    fs.appendFileSync('citas.json', data + '\n');
    console.log(`Cita de ${nombre} registrada exitosamente.`);
};

const leer = () => {
    if (!fs.existsSync('citas.json') || fs.readFileSync('citas.json', 'utf-8').trim() === '') {
        console.log("No hay citas registradas.");
        return;}
    const data = fs.readFileSync('citas.json', 'utf-8');
    const citas = data.trim().split('\n').filter(line => line); // Dividir por líneas
    JSON.parse(`[${citas.join(',')}]`).forEach(cita => {
        console.log(cita);
    });
};

const vaciar = () => {
    if (fs.existsSync('citas.json')) {
        fs.writeFileSync('citas.json', "[]");
        console.log("Todas las citas han sido eliminadas.");
    } else {
        console.log("No hay archivo de citas para vaciar.");
    }
};

module.exports = { registrar, leer, vaciar };
