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
