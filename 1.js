// Definir la arrow function con parámetros por defecto
const sum = (a = 10, b = 5) => {
  console.log(a + b)
}

// Ejecutar la función sin pasar ningún parámetro
sum() // 15

// Ejecutar la función pasando un solo parámetro
sum(20) // 25

// Ejecutar la función pasando dos parámetros
sum(20, 30) // 50
