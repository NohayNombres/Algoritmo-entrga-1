
/*
 * Determinar si número es primo en JavaScript
*/
 const isPrime = number => {
	// Instrucciones del parametro a recibir, no puede ser un dato diferente a un numero entero positivo mayor que 1

    if(typeof number != 'number'){
        throw TypeError('El argumento debe ser un numero')
    }
    if(!Number.isInteger(number)){
        throw TypeError('El argumento debe ser un numero entero')
    }

    if(number <= 1){
        throw TypeError('El argumento debe ser un entero mayor que 1 ')
    }
   
    // if(number == 2 ) return true;


for (let index = 2; index <= Math.floor(Math.sqrt(number)); index++) {
    if( number % index == 0){
        return false
    }
    

}


	return true
    
}

const testNumbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 89, 51, 3, 5268, 7, 1478];

testNumbers.forEach(number => {

    isPrimeNumber = isPrime(number)

    try
	{console.log("¿%d es primo? %s", number, isPrimeNumber);}
    catch(e){
        console.log(e)
    }
});
