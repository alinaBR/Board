const board = document.querySelector('#board')
const colors = ['#2ecc71', '#74c3c', '#e67e22', '#8e44ad', '#3498db']
const SQUARES_NUMBER = 500
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () =>
    setColor(square))

  square.addEventListener('mouseleave', () =>
    removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxshadow = `0 0 2px ${color}`, 0 0 10px ${ color }

}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxshadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Match.floor(Match.random() * colors.length)
  return colors[index]
}