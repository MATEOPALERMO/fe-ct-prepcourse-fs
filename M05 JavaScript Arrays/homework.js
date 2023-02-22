/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
return array.shift();

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop()
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map( (num) => {return num + 1} );
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
      array.push(elemento); // agrega el elemento al final del array
      return array; // retorna el array con el nuevo elemento agregado
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento); // agrega el elemento al principio del array
   return array; // retorna el array con el nuevo elemento agregado
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
      return palabras.join(' '); // une las palabras con un espacio en blanco y retorna la frase
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  if(array.includes(elemento)){
   return true;
  } else {
   return false;
  }

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
      let sum = 0;
      for (let i = 0; i < arrayOfNums.length; i++) {
        sum += arrayOfNums[i];
      }
      return sum;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
      let max = arrayOfNums[0]; // inicia la variable "max" con el primer número del array
      for (let i = 1; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] > max) {
          max = arrayOfNums[i];
        }
      }
      returnmax;
    }

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
      if (arguments.length === 0) {
        return 0; // si no se pasan argumentos, retorna 0
      }
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i]; // multiplica cada argumento por el producto acumulado
      }
      return producto;
    
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
      let contador = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 18) {
          contador++;
        }
      }
      return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
      if (numeroDeDia === 1 || numeroDeDia === 7) {
        return "Es fin de semana"; //  el número de día corresponde a sábado o domingo
      } else {
        return "Es dia laboral"; // en caso contrario, retorna "Es dia laboral"
      }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

      let numComoString = num.toString(); // convertir el número a string
      if (numComoString[0] === "9") {
        return true; // si el primer caracter del string es "9", retorna true
      } else {
        return false; // en caso contrario, retorna false
      }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
      for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[0]) { // ! es porque NO es ==
          return false; // si algún elemento es diferente al primer elemento, retorna false
        }
      }
      return true; // si todos los elementos son iguales, retorna true
    }

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
      let tabla = [];
      for (let i = 0; i <= 10; i++) {
        tabla.push(i * 6);
      }
      return tabla;
    }

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
      let mayoresACien = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 100) {
          mayoresACien.push(array[i]);
        }
      }
      return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
      let resultado = 0;
      for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
          continue; // si el índice es par, se salta a la siguiente iteración del ciclo
        }
        resultado += i;
      }
      return resultado;
    }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
