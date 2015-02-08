'use strict'

module.exports = partition

function partition(arr, pred, lo, hi) {
  var n = arr.length
  lo = typeof lo === 'number' ? lo|0 : 0
  hi = typeof hi === 'number' ? hi|0 : n
  var ptr = lo
  for(var i=lo; i<hi; ++i) {
    var x = arr[i]
    if(pred(x)) {
      arr[i]   = arr[ptr]
      arr[ptr] = x
      ptr      += 1
    }
  }
  return ptr
}