function map(words, func) {
      var arr = [];
  words.forEach(function(word) {
    arr.push(func(word));
  });
  console.log(arr);
};


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});