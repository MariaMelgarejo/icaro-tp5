console.log(" ");
console.log("Ejercicio 1");
console.log(" ");

const array1 = ["Juan", "Dani"]
const array2= ["Leo", "Monica", "Juliana"]
function concatenarArrays(array1,array2){
    const array3 = array1.concat(array2);
    return array3
}

console.log(concatenarArrays(array1,array2))


console.log(" ");
console.log("Ejercicio 2");
console.log(" ");

function esVocal(caracter){
    const vocales = ["a", "e", "i", "o", "u"]
    return vocales.includes(caracter.toLowerCase());
    
}
console.log(esVocal("f"))
console.log(esVocal("e"))
console.log(esVocal("E"))


   
