function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

// Función removeItem que usa findArrayIndex para eliminar un elemento del array
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1) // Eliminar el elemento en el índice encontrado
  }
  return array // Retornar el array modificado
}

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
console.log(removeItem([...mainCharacters], 'Luke')) // ['Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan']
console.log(removeItem([...mainCharacters], 'Leia')) // ['Luke', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan']
console.log(removeItem([...mainCharacters], 'Han Solo')) // ['Luke', 'Leia', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan']
console.log(removeItem([...mainCharacters], 'Chewbacca')) // ['Luke', 'Leia', 'Han Solo', 'Rey', 'Anakin', 'Obi-Wan']
console.log(removeItem([...mainCharacters], 'Rey')) // ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Anakin', 'Obi-Wan']
console.log(removeItem([...mainCharacters], 'Anakin')) // ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Obi-Wan']
console.log(removeItem([...mainCharacters], 'Obi-Wan')) // ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin']
console.log(removeItem([...mainCharacters], 'Yoda')) // ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'] (no está en el array, no se elimina nada)
