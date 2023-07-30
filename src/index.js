import analyzer from './analyzer.js';

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
  //para calcular sin espacios y sig. de puntuacion
  const characterNoSpacesCountValue = savedText.replace(/[^\w\s]/gi, '').length;
  //numeros
  const numbers = savedText.match(/\d+/g);
  const numberCountValue = numbers ? numbers.length : 0;
  let numberSumValue = 0;
  if (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      numberSumValue += parseInt(numbers[i], 10);
    }
  }
  //metricas de cada li
  wordCount.textContent = `PALABRAS: ${words.length}`;
  characterCount.textContent = `CARACTERES: ${savedText.length}`;
  characterNoSpacesCount.textContent = `CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACION: ${characterNoSpacesCountValue}`;
  numberCount.textContent = 'NUMEROS: ' + numberCountValue;
  numberSum.textContent = 'SUMA DE NUMEROS: ' + numberSumValue;
  //para calcular la longitud
  if (words.length > 0) {
    let totalWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalWordLength += words[i].length;
    }
    const averageWordLength = totalWordLength / words.length;
    wordLengthAverage.textContent = 'PROMEDIO LONGITUD: ' + averageWordLength.toFixed(2);
  } else {
    wordLengthAverage.textContent = 'PROMEDIO LONGITUD: 0';
  }
  // Función para limpiar el cuadro de texto y reiniciar métricas
  function clearMetrics() {
    userInput.value = '';
    wordCount.textContent = 'PALABRAS: ';
    characterCount.textContent = 'CARACTERES: ';
    characterNoSpacesCount.textContent = 'CARACTERES SIN ESPACIOS Y SIGNOS DE PUNTUACION: ';
    numberCount.textContent = 'NUMEROS: ';
    numberSum.textContent = 'SUMA DE NUMEROS: ';
    wordLengthAverage.textContent = 'PROMEDIO LONGITUD: 0';
  }

  // Evento para limpiar métricas y el cuadro de texto al hacer clic en el botón "LIMPIAR"
  resetButton.addEventListener('click', clearMetrics);
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
/*AAAAconst newWordCount = texto.length;
console.log (si la lograste ahora tienes ${newWordCount} de palabras);
}*/


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