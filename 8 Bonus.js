const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]

// Filtrar videojuegos por el género 'RPG'
const rpgGames = videogames.filter((game) => game.genders.includes('RPG'))

// Calcular la media de las puntuaciones de los videojuegos filtrados
const totalScore = rpgGames.reduce((acc, game) => acc + game.score, 0)
const averageScore = totalScore / rpgGames.length

console.log(rpgGames)
console.log(averageScore)
