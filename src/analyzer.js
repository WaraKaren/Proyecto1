const analyzer = {

  getWordCount: function (text) {
    return text.split(/\s+/).filter(function (aloneWord) {
      return aloneWord !== '';
    }).length;
  },
  getCharacterCount: function (text) {
    return text.length;
  },

  getCharacterCountExcludingSpaces: function (text) {
    return text.replace(/[^\w\s]/gi, '').length;
  },

  getNumbersCount: function (text) {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },

  getNumbersSum: function (text) {
    const numbers = text.match(/\d+/g);
    let numberSumValue = 0;
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        numberSumValue += parseInt(numbers[i], 10);
      }
    }
    return numberSumValue;
  },

  getAverageWordLength: function (text) {
    const words = text.split(/\s+/).filter(function (aloneWord) {
      return aloneWord !== '';
    });
    if (words.length > 0) {
      let totalWordLength = 0;
      for (let i = 0; i < words.length; i++) {
        totalWordLength += words[i].length;
      }
      return totalWordLength / words.length;
    } else {
      return 0;
    }
  },
  /* 
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },*/
};

export default analyzer;
