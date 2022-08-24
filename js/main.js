//ESTRUCTURA FOR
alert('¡Contemos del 0 al 9!');
for (let i = 0; i <= 9; i++) {
    alert(i);
}

//ESTRUCTURA WHILE
let datoIngresado = prompt('Ingrese un dato aleatorio, o bien, ingrese la palabra CHAU').toUpperCase();

while (datoIngresado != 'CHAU') {
    alert('Ingresaste: ' + datoIngresado);
    datoIngresado = prompt('Ahora ingresa otro dato: ');
}

if (datoIngresado == 'CHAU') {
    alert('¡Nos vemos! :D');
}
