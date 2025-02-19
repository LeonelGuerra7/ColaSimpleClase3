class Cola {
    constructor(maxSize = 8) {
        this.items = [];
        this.maxSize = maxSize;
    }

    enqueue(elemento) {
        if (this.isFull()) {
            return "La cola está llena";
        }
        this.items.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    frente() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return this.items.length >= this.maxSize;
    }

    mostrar() {
        console.log(this.items);
    }

    espacioDisponible() {
        return this.maxSize - this.items.length;
    }
}

// Inicializar una cola vacía con un tamaño máximo de 8
let miCola = new Cola(8);
console.log("Cola inicializada:");
miCola.mostrar();

// Clientes predefinidos
const clientes = ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5", "Cliente 6", "Cliente 7", "Cliente 8"];

// Agregar clientes predefinidos a la cola
clientes.forEach(cliente => {
    let resultado = miCola.enqueue(cliente);
    if (resultado) {
        console.log(resultado);
    } else {
        console.log(`Cliente "${cliente}" agregado a la cola.`);
    }
    miCola.mostrar();
    console.log("Primer elemento en la cola:", miCola.frente());
    console.log(`Espacio disponible en la cola: ${miCola.espacioDisponible()}`);
});

// Atender a los clientes en la cola
for (let i = 0; i < 8; i++) {
    atenderCliente();
}

function atenderCliente() {
    let clienteAtendido = miCola.dequeue();
    if (clienteAtendido !== "La cola está vacía") {
        console.log(`Atendiendo a: ${clienteAtendido}`);
    } else {
        console.log(clienteAtendido);
    }
    miCola.mostrar();
    console.log("Primer elemento en la cola:", miCola.frente());
    console.log(`Espacio disponible en la cola: ${miCola.espacioDisponible()}`);
}