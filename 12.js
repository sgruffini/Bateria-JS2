function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1 // Si el texto no se encuentra en el array
}

// Ejemplo de array
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// Ejemplos y comprobaciones
console.log(findArrayIndex(mainCharacters, 'Luke')) // 0
console.log(findArrayIndex(mainCharacters, 'Leia')) // 1
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // 2
console.log(findArrayIndex(mainCharacters, 'Chewbacca')) // 3
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4
console.log(findArrayIndex(mainCharacters, 'Anakin')) // 5
console.log(findArrayIndex(mainCharacters, 'Obi-Wan')) // 6
console.log(findArrayIndex(mainCharacters, 'Yoda')) // -1 (no está en el array)
