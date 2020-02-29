import './hello.scss'

export class Hello {
  buttonClass = 'hello-button'
  textClass = 'hello-text'

  render() {
    const button = document.createElement('button')
    button.innerHTML = 'clickmenow'
    button.classList.add(this.buttonClass)
    const body = document.querySelector('body')
    button.onclick = () => {
      const text = document.createElement('p')
      text.innerHTML = 'I added a thang'
      text.classList.add(this.textClass)
      body.appendChild(text)
    }

    body.appendChild(button)
  }
}
