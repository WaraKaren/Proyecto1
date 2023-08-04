const analyzer = {

  getWordCount(text) {
    return text.split(/\s+/).filter(function (aloneWord) {
      return aloneWord !== '';
    }).length;
  },
  /*getWordCount: function (text) {
    return text.split(/\s+/).filter('=>'(aloneWord) {
      return aloneWord !== '';
    }).length;*/
  getCharacterCount: function (text) {
    return text.length;
  },

  getCharacterCountExcludingSpaces: function (text) {
    return text.replace(/[\s.,!?;:'"(){}<>]/g, '').length;
  },

  getNumberCount: function (text) {
    const numbers = text.match(/-?\b\d+(\.\d+)?\b/g); //esta obteniendo digitos -> buscar una expresion que filtre digitos pero con decimales yq ue no considere texto de por medio, no consideres numeros con texto ej: 6j , 6j5, solo enteros y decimales
    //chat gpt y pedirle que te la explique
    return numbers ? numbers.length : 0;
  },

  getNumberSum: function (text) {
    const numbers = text.match(/[-+]?\b\d+(\.\d+)?\b/g);
    let numberSumValue = 0;
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        numberSumValue += parseFloat(numbers[i]);
      }
    }
    return numberSumValue;
  },

  getAverageWordLength(text) {
    const words = text.split(/\s+/);
    if (words.length > 0) {
      const totalWordLength = words.reduce((total, word) => total + word.length, 0);
      const average = totalWordLength / words.length;
      return Number (average.toFixed(2)); //toFixed(2)
    } else {
      return "0.00";
    }
  },
};

export default analyzer;

/*export {
getWordCount,
getCharacterCount,
getCharacterCountExcludingSpaces,
getNumbersCount,
getNumbersSum,
getAverageWordLength
}*/

/*
  getAverageWordLength: function (text) {
    const words = text.split(/\s+/).filter(function (aloneWord) {
      return aloneWord !== '';
    });
    if (words.length > 0) {
      let totalWordLength = 0;
      for (let i = 0; i < words.length; i++) {
        totalWordLength += words[i].length;
      }
      return totalWordLength / words.length; //toFixed,
    } else {
      return 0;
    }
  },*/