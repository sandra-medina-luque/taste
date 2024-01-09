const readline = require("readline");

function saludar() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Por favor, introduce tu nombre: ", (nombre) => {
        if (nombre.trim() !== "") {
            console.log("¡Hola Mundo!");
        } else {
            console.log("¡Debes ingresar un nombre!");
        }

        rl.close();
    });
}
saludar();