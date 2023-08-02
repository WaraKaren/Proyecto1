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

  getNumbersCount: function (text) {
    const numbers = text.match(/\d+/g);
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