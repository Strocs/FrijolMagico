const adjectives = [
  'creativo',
  'inspirado',
  'divertido',
  'sencillo',
  'original',
  'único',
  'colorido',
  'mágico',
  'artístico',
  'expresivo',
]

const names = [
  'María',
  'Ana',
  'Lucas',
  'Pedro',
  'Diana',
  'Juan',
  'Leticia',
  'Sofía',
  'Gabriela',
  'Tomás',
  'Carlos',
  'Valentina',
  'Diego',
  'Catalina',
  'Felipe',
  'Carolina',
  'Cristóbal',
  'Alejandro',
  'Camila',
  'Martín',
]

const lastNames = [
  'González',
  'Rojas',
  'Parra',
  'Muñoz',
  'Díaz',
  'Sánchez',
  'Pérez',
  'López',
  'García',
  'Martínez',
  'Silva',
  'Pizarro',
  'Valdivia',
  'Soto',
  'Fuentes',
  'Reyes',
  'Muñoz',
  'Sánchez',
  'Paz',
  'Alejandra',
]

export function getRandomName() {
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  return `${randomName} ${randomLastName}`
}

export function getRandomInstagram() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]
  const randomName = names[Math.floor(Math.random() * names.length)]
  return `https://instagram.com/${randomAdjective}_${randomName.toLowerCase()}`
}
