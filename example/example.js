var partition = require('../partition')
var array = [1, 0, -1, 10, -5, 6, -8, -7]

var split = partition(array, function(x) {
  return x < 0
})

console.log('partition @', split)
console.log(array)
console.log('<0   ~', array.slice(0, split))
console.log('>=0  ~', array.slice(split))