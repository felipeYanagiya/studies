const merge = (array, left, middle, right) => {
  const leftSize = middle - left + 1
  const rightSize = right - middle
  let leftArray = []
  let rightArray = []

  for (let i = 0; i < leftSize; i++)
    leftArray[i] = array[left + i]
  for (let j = 0; j < rightSize; j++)
    rightArray[j] = array[middle + 1 + j]

  i = 0
  j = 0
  let k = left;

  while (i < leftSize && j < rightSize) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i]
      i++
    } else {
      array[k] = rightArray[j]
      j++
    }
    k++
  }

  while (i < leftSize) {
    array[k] = leftArray[i]
    i++
    k++
  }

  while (j < rightSize) {
    array[k] = rightArray[j]
    j++
    k++
  }
}

const mergeSort = (array, left, right) => {
  if (left < right) {
    let middle = Math.floor((left+right)/2)
    mergeSort(array, left, middle)
    mergeSort(array, middle + 1, right)
    merge(array, left, middle, right)
  }

  return array
}

const sort = (array) => mergeSort(array, 0, array.length - 1);
const a = [1, 4, 7, 3, -1, 0, 5, 15]
console.log(sort(a), 'result')
