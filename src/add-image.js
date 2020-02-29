import pressF from './f2e.jpg'

export function addImage() {
  const img = document.createElement('img')
  img.src = pressF
  img.alt = 'Press F to pay respects'
  img.width = 600
  const body = document.querySelector('body')
  body.appendChild(img)
}
