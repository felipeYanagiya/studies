'use strict'

const binarySearch = (array, item, left, right) => {
  console.log(left, 'left')
  console.log(right, 'right')

  const half = left + (right - left)/2;
//  console.log(array[half], 'arr half')
//  console.log(half, 'half')
//  console.log(item, 'item')
  if (left > right) return false
  if (array[half] === item) return true

  if (item < array[half]) {
    return binarySearch(array, item, left, half - 1)
  } else {
    return binarySearch(array, item, half + 1, right)
  }

}

const a = [ -1, 0, 1, 3, 4, 5, 7, 15 ];
a.sort((a, b) => a - b);

console.log(binarySearch(a, 2, 0, a.length - 1))
