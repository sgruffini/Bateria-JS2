//2.1 Destructuring objeto game
const game = {
  title: 'The last of us 2',
  genre: ['action', 'zombie', 'survival'],
  year: 2020
}

const { title, genre, year } = game

console.log(title)
console.log(genre)
console.log(year)

//2.2 destructuring array fruits
const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//2.3 destructuring de la funcion animalFunction
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}

const { namex, race } = animalFunction()

console.log(namex)
console.log(race)

//2.4 Destructuring objeto Car
const car = { namer: 'Mazda 6', itv: [2015, 2011, 2020] }

const { namer, itv } = car
const [itv1, itv2, itv3] = itv

console.log(namer)
console.log(itv)
console.log(itv1)
console.log(itv2)
console.log(itv3)
