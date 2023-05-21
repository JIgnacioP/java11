console.log('SELECCIONE UN TOPPING');
console.log('1 - Oreo');
console.log('2 - KitKat');
console.log('3 - Chocolate');
codingres = Number(prompt('Por favor selecciona un topping:'));
if(codingres == 1) {
    console.log('Eligio Oreo El costo es $10');
    } else if (codingres == 2){ 
        console.log('Eligio KitKat. El costo es $15');
    } else if(codingres == 3) {
        console.log('Eligio Chocolate. El costo es $20');
    } else{
        console.log('Por favor ingrese una opcion valida.');    
     }
        
