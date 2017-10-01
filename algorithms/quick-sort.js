const swap = (array, a, b) => {
  const tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
}

const partition = (arr, l, r) => {
  const pivot = arr[r]
  let i = l - 1
  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) {
      i++
      swap(arr, i, j)
    }
  }

  if (arr[r] < arr[i + 1]) {
    swap(arr, i + 1, r)
  }

  return i + 1
}

const quickSort = (array, l, r) => {
  if (l < r) {
    const pivot = partition(array, l, r);
    quickSort(array, l, pivot - 1);
    quickSort(array, pivot + 1, r);
  }

  return array
}

const sort = (array) => quickSort(array, 0, array.length - 1)

const a = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
console.log(sort(a))
