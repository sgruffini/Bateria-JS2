// 7.1 Sumar todas las notas de los exámenes usando .reduce()
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0)
console.log(totalScore)

// 7.2 Sumar todas las notas de los exámenes aprobados usando .reduce()
const passingScore = 5
const totalPassingScore = exams
  .filter((exam) => exam.score >= passingScore)
  .reduce((acc, exam) => acc + exam.score, 0)
console.log(totalPassingScore)

// 7.3 Calcular la media de las notas de todos los exámenes usando .reduce()
const totalScores = exams.reduce((acc, exam) => acc + exam.score, 0)
const averageScore = totalScores / exams.length
console.log(averageScore)
