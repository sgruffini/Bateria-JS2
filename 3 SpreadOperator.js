//3.1 Copiar un array usando Spread Operato
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList]

console.log(pointsListCopy)

//3.2 Copiar un objeto usando Spread Operator
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

const toyCopy = { ...toy }

console.log(toyCopy)
// 3.3 Juntar dos arrays usando Spread Operator
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsList2 = [54, 87, 99, 65, 32]

const combinedPointsList = [...pointsList1, ...pointsList2]

console.log(combinedPointsList)
//3.4 Fusionar dos objetos usando Spread Operator
const toyx = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyxUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const mergedToy = { ...toyx, ...toyxUpdate }

console.log(mergedToy)
//3.5   Copiar un array eliminando la posición 2 usando Spread Operator
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]

console.log(colorsCopy)
