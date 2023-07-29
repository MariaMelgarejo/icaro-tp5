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


console.log(" ");
console.log("Ejercicio 3");
console.log(" ");

function generar_caracteres(numero, caracter){
    return caracter.repeat(numero)
}
console.log(generar_caracteres(3 ,"m"))
console.log(generar_caracteres(6 ,"v"))
console.log(generar_caracteres(8 ,"t"))


console.log(" ");
console.log("Ejercicio 4");
console.log(" ");

let numeros = [1, 3, 5, 9, 8];

function sumaArregloForEach(array) {
    let suma = 0;
    array.forEach(numero => {
        suma += numero
    });
    return suma;
}

function sumaArregloFor(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma;
}

function sumaArregloReduce(array) {
    let suma = array.reduce((a, b) => a + b, 0);
    return suma;
}

console.log(sumaArregloForEach(numeros));
console.log(sumaArregloFor(numeros));
console.log(sumaArregloReduce(numeros));


console.log(" ");
console.log("Ejercicio 5");
console.log(" ");



function numeroMayor(numero1, numero2, numero3) {
    if ((numero1 == numero2) && (numero1 == numero3)){ 
         return `Los numeros ${numero1}, ${numero2} y ${numero3} son iguales` 
        
    } else if (numero1 == numero2) { 
        return `Los numeros ${numero1} y ${numero2} son iguales` 
    } else if (numero1 == numero3) { 
       return `Los numeros ${numero1} y ${numero3} son iguales`  
    } else if (numero2 == numero3) { 
        return `Los numeros ${numero2} y ${numero3} son iguales` 
    } else if (numero1 > numero2) { 
        if (numero1 > numero3) { 
            return `El mayor es ${numero1}` 
        } else {
            return `El mayor es ${numero3}` 
        }
    } else if (numero2 > numero3) { 
        return `El mayor es ${numero2}` 
    } else {
        return `El mayor es ${numero3}` 
    }  
}       
    
console.log(numeroMayor(2, 5, 8))
console.log(numeroMayor(12, 5, 8))
console.log(numeroMayor(2, 15, 8))
console.log(numeroMayor(5, 5, 5))
console.log(numeroMayor(7, 3, 7))
console.log(numeroMayor(2, 6, 6))

