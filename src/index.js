//DOM interaccion con el asuario o plano de la casa
//import'* as analyzer from './analyzer.js
import analyzer from './analyzer.js';

/*import { getWordCount, getCharacterCount, getCharacterCountExcludingSpaces, getNumbersCount, getNumbersSum, getAverageWordLength
}from './analyzer.js';*/
//texarea
const userInput = document.querySelector('textarea');
//li
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
//boton
const resetButton = document.getElementById("reset-button");
//funcion para textarea utilizando la variable que le asignamos anteriormente userInput
userInput.addEventListener('keyup', function () {
  const savedText = userInput.value;
  //split(/\s+/\) hara la separacion por palabras en savedText
  const words = savedText.split(/\s+/).filter(function (aloneWord) {
    return aloneWord !== '';
    /*a el metodo filter se le da un funcion de !== diferencias
        en espacios si tiene espacio es falso por que igual a vacio''
        todo esto de almacena en la const words*/
  });
  /*para calcular sin espacios y sig. de puntuacion utilizando el metodo split
  se pide a split que separe solo texto sin lo que se pide en los() y con
  con join haremos que se junten para que despues .length cuente letra por letra*/
  // const characterNoSpacesCountValue = savedText.split(/[\s.,!?;:'"(){}<>]/).join('').length;
 
  //NUMEROS
  /*    `\d` representa cualquiser digito de 0al9
         `+` indica que los digitos pueden aparecer mas de una vez*/
  const numbers = savedText.match(/\d+/g);

  //para el conteo de cuantos numero existe
  // ? expre. tenrnaria para ver si numbers tiene contenido
  //const numberCountEnd = numbers ? numbers.length : 0;

  //suma de los numeros
  let numberSumValue = 0;
  //si numbers tiene numeros se incia con el bucle for
  if (numbers) {
    //la condicion es i sea menor que la longitud de numbers se incrementara 1
    for (let i = 0; i < numbers.length; i++) {
      //falta
      numberSumValue += parseInt(numbers[i], 10);
    }
  }
  //metricas de cada li
  wordCount.textContent = `PALABRAS: ${analyzer.getWordCount(savedText)}`;

  characterCount.textContent = `TODOS LOS CARACTERES: ${analyzer.getCharacterCount(savedText)}`;
  characterNoSpacesCount.textContent = `CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACION: ${analyzer.getCharacterCountExcludingSpaces(savedText)}`;
  numberCount.textContent = `NUMEROS: ${analyzer.getNumberCount(savedText)}`;
  numberSum.textContent = `SUMA DE NUMEROS: ${numberSumValue}`;
  //para calcular la longitud
  if (words.length > 0) {
    let totalWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalWordLength += words[i].length;
    }
    const averageWordLength = totalWordLength / words.length;
    //toFixed(2) indica el numero de decimales que se mostrara en este caso 2 decimales
    wordLengthAverage.textContent = 'PROMEDIO LONGITUD: ' + averageWordLength.toFixed(2);
  } else {
    wordLengthAverage.textContent = 'PROMEDIO LONGITUD: 0';
  }
  //para limpiar el cuadro de texto y reiniciar métricas
  function deleteMetrics() {
    //userinput con cadena vacia
    userInput.value = '';
    wordCount.textContent = 'PALABRAS: 0';
    characterCount.textContent = 'TODOS LOS CARACTERES: 0';
    characterNoSpacesCount.textContent = 'CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACION: 0';
    numberCount.textContent = 'NUMEROS: 0';
    numberSum.textContent = 'SUMA DE NUMEROS: 0';
    wordLengthAverage.textContent = 'PROMEDIO LONGITUD: 0';
  }

  //llamamos a deleteMetrics
  resetButton.addEventListener('click', deleteMetrics);
});




/*function updateWordCount(){
  const textarea = document.querySelector('textarea[name="user-input"]');

  const text = textarea.value;
  const wordCount = analyzer.getWordCount(text);
  const wordCountElement = document.querySelector('[data-testid="word-count"]');
  wordCountElement.textContent = `PALABRAS: ${wordCount}`;

}
const textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('keyup', updateWordCount);*/





/*document es el permiso para acceder a HTML
///AAAquerySelector puede acceder a un elemento por su etiqueta en este caso <textarea>*/
//AAAAconst userInput = document.querySelector('textarea');
//con addEventListener se asigana una acion luego de obtner una respuesta
//AAAAuserInput.addEventListener('keyup', () => {
/* en texto almacenare los datos que se obtienen con
.value obtiene los valores ingrasador por el ususrio*/
//AAAAconst texto = userInput.value;
/*ahora que se sabe que texto contiene la informacion de datos ingresados
podemos trabajar con las li*/

//varibles declaradas de las li
/*en este caso para que querySelector seleccione el que queremos y que no
seleccione el primero que se le aparesca es que se utiliza los corchetes[]
especificando que se busca un textare que tenga name=user-input*/
/*AAAAconst wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
//para acceder a un elemto por id se utiliza getElementById
//reset-button es el id del boton que se utilizo en html
const VarParaLimpiar = document.getElementById("reset-button");*/