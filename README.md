partition-array
===============
Linear time in place array partitioning.  Similar to `Array.filter`, but faster as it does not make a copy.

# Example

```javascript
var partition = require('partition-array')
var array = [1, 0, -1, 10, -5, 6, -8, -7]

var split = partition(array, function(x) {
  return x < 0
})

console.log('partition @', split)
console.log(array)
console.log('<0   ~', array.slice(0, split))
console.log('>=0  ~', array.slice(split))
```

Output:

```
partition @ 4
[ -1, -5, -8, -7, 0, 6, 1, 10 ]
<0   ~ [ -1, -5, -8, -7 ]
>=0  ~ [ 0, 6, 1, 10 ]
```

# Install

```
npm install partition-array
```

# API

#### `var split = require('partition-array')(array, pred[, lo, hi])`
Partitions the array into two contiguous regions based on predicate.

* `array` is the array which is to be partitioned
* `pred` is the predicate which is being tested
* `lo` is an optional parameter denoting the start of the subarray to partition (default `0`)
* `hi` is an optional parameter denoting the end of the subarray to partition (default `array.length`)

**Returns** The point at which the array was split.  For elements in the array before index `mid`, `pred` is true; for elements after `mid` `pred` is false.

# License
(c) 2015 Mikola Lysenko. MIT License