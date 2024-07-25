function swap(array, index1, index2) {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
  return array
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

// Ejemplos y comprobaciones
console.log(swap(fantasticFour, 0, 3)) // ['La cosa', 'Mr. Fantástico', 'La mujer invisible', 'La antorcha humana']
console.log(swap(fantasticFour, 1, 2)) // ['La cosa', 'La mujer invisible', 'Mr. Fantástico', 'La antorcha humana']
console.log(swap(fantasticFour, 0, 1)) // ['Mr. Fantástico', 'La antorcha humana', 'La mujer invisible', 'La cosa']
