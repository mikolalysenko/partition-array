'use strict'

var tape = require('tape')
var partition = require('../partition')

tape('partition-array', function(t) {

  function verifyPartition(array, pred) {
    var origArray = array.slice()
    origArray.sort()
    for(var lo=0; lo<=array.length; ++lo) {
      for(var hi=lo; hi<=array.length; ++hi) {
        var copy = array.slice()
        var mid = partition(copy, pred, lo, hi)
        t.same(copy.slice(0, lo), array.slice(0, lo))
        t.same(copy.slice(hi), array.slice(hi))
        for(var i=lo; i<mid; ++i) {
          t.ok(pred(copy[i]))
        }
        for(var i=mid; i<hi; ++i) {
          t.ok(!pred(copy[i]))
        }
        copy.sort()
        t.same(copy, origArray)
      }
    }
  }

  t.equals(partition([], function() {return true}), 0)

  verifyPartition([1, 0, -1, 10, -5, 6, -8, -7], function(x) { return x<0 })
  verifyPartition([1,2,3,4,5,6,7,8,9], function() {return true})
  verifyPartition([1,2,3,4,5,6,7,8,9], function() {return false})

  t.end()
})