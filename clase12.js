/* Definir una función llamada imprimirNumeros que reciba como parámetro un número
e imprima en consola todos los números desde el 1 hastsa el número del parámetro. */

function imprimirNumeros(numero) {
	for (i = 1; i <= numero; i++) {
		console.log(i)
	}
}

/* Definir una función llamada imprimirOtrosNumeros que reciba dos parámetros: un
número desde y un número hasta. En el caso que el número desde sea menor al
número hasta, debe imprimir en consola todos los números que están entre el primer
parámetro y el segundo. */

function imprimirOtrosNumeros(numeroDesde, numeroHasta) {
	for (i = numeroDesde; i <=numeroHasta; i++) {
		console.log(i)
	}
}