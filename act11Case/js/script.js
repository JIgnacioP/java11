console.log('SELECCIONE UN TOPPING');
console.log('1 - Oreo');
console.log('2 - KitKat');
console.log('3 - Chocolate');
codingres = Number(prompt('Por favor selecciona un topping:'));
switch (codingres) {
case 1:
console.log('Eligio Oreo El costo es $10');
break;
case 2:
console.log('Eligio KitKat. El costo es $15');
break;
case 3:
console.log('Eligio Chocolate. El costo es $20');
break;
default:
console.log('Por favor ingrese una opcion valida.');
}