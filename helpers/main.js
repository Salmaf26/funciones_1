//declarar funcion
const calcularEdad = (edad, nombre) => {
    console.log(edad,nombre);
}

//llamar funcion
calcularEdad(1,2);


// llamar funcion
//let respuesta = calcularEdad (17,'carlos');
//console.log(respuesta);

const sumar = (num1,num2, callback) => {
    let resultado = num1 + num2;
    callback(resultado);
}

sumar(10,15, (x) =>{
    console.log (`El resultado es :${x}` );
});


//promesa

const miPromesa = new Promise ((resolve, reject) =>{

    setTimeout ( () =>{
    console.log('hola despues de 2s')
    
   }, 2000);
})


