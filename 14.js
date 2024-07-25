function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1
}

// Ejemplos y comprobaciones
console.log(rollDice(6)) // Simula una tirada de un dado de 6 caras
console.log(rollDice(10)) // Simula una tirada de un dado de 10 caras
console.log(rollDice(20)) // Simula una tirada de un dado de 20 caras
