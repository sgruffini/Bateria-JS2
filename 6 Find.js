// 6.1 Dado el siguiente array, usa .find() para encontrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43]

const number100 = numbers.find((number) => number === 100)

console.log(number100)

// 6.2 Dado el siguiente array, usa .find() para encontrar la película del año 2010.
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
]

const movie2010 = movies.find((movie) => movie.date === 2010)

console.log(movie2010)

// 6.3 Dado el siguiente javascript, usa .find() para encontrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'.
// Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
]
const mutations = [
  {
    name: 'Porompompero',
    description:
      'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  },
  {
    name: 'Fly me to the moon',
    description: 'Permite volar, solo y exclusivamente a la luna'
  },
  {
    name: 'Andando que es gerundio',
    description: 'Invoca a un señor mayor como Personal Trainer'
  }
]

const alien = aliens.find((alien) => alien.name === 'Cucushumushu')
const mutation = mutations.find((mutation) => mutation.name === 'Porompompero')

const fusedAlien = { ...alien, mutation: { ...mutation } }

console.log(fusedAlien)
// Devuelve  ALIEN ---  name: 'Cucushumushu', planet: 'Marte', age: 503021, Y LUEGO LA MUTACION mutation: { name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor' } }