'use strict'

const hat = document.getElementById('hat')
const nose = document.getElementById('nose')
const scarf = document.getElementById('scarf')
const mittens = document.getElementById('mittens')
const buttons = document.getElementById('buttons')

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'brown', 'gray', 'black']

addEventListener('click', () => {
  console.log('window was clicked')
  changeSnowman()
})

const changeSnowman = () => {
  const numbers = []
  while(numbers.length < 5) {
    const pick = Math.floor(Math.random()*colors.length)
    if(!numbers.includes(pick)) numbers.push(pick)
  }
  hat.style.fill = colors[numbers[0]]
  nose.style.fill = colors[numbers[1]]
  scarf.style.fill = colors[numbers[2]]
  mittens.style.fill = colors[numbers[3]]
  buttons.style.fill = colors[numbers[4]]
}
