import './heading.scss'

export class Heading {
  render() {
    const heading = document.createElement('h1')
    heading.innerHTML = 'Buenos dias!'
    document.querySelector('body').appendChild(heading)
  }
}
