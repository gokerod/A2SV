/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  var sentenceArray = s.split(" ");
  var sentenceMap = new Map();
  var sentence = "";
  sentenceArray.forEach((word) => {
    sentenceMap.set(word.slice(word.length - 1, word.length), word.slice(0, word.length - 1));
  });
  for (var i = 1; i <= sentenceArray.length; i++) {
    sentence += sentenceMap.get(i.toString()) + " ";
  }
  return sentence.slice(0, sentence.length-1);
};
