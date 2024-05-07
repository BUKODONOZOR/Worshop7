class Usuario {
    constructor(nombre, email, clave) {
        this.nombre = nombre;
        this.email = email;
        this.puntosAcumulados = 0;
        this.clave = clave;
    }

    acumularPuntos(puntos) {
        this.puntosAcumulados += puntos;
        console.log(`Se han acumulado ${puntos} puntos. Total de puntos acumulados: ${this.puntosAcumulados}`);
    }

    canjearPuntos(puntos) {
        if (this.puntosAcumulados >= puntos) {
            this.puntosAcumulados -= puntos;
            console.log(`Se han canjeado ${puntos} puntos. Total de puntos restantes: ${this.puntosAcumulados}`);
        } else {
            console.log("No tienes puntos suficientes para realizar el canje.");
        }
    }
}

// Ejemplo de uso
const usuario1 = new Usuario("Juan", "juan@example.com", "contraseña123");
console.log(usuario1); // Mostrará los datos del usuario recién creado

usuario1.acumularPuntos(50); // Acumular 50 puntos
usuario1.acumularPuntos(30); // Acumular 30 puntos más
usuario1.canjearPuntos(70); // Intentar canjear 70 puntos
usuario1.canjearPuntos(40); // Canjear 40 puntos
