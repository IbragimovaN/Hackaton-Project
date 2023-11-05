import { Module } from '../core/module'

export class AudioRandomModule extends Module {
  constructor(type = '2', text = 'Случайный аудио') {
    super(type, text)
    this.audioPlaying = false
    this.buttonCreated = false
    this.sounds = [
      { audio: '../../sounds/Bird.mp3', image: '../../img/Bird.png' },
      { audio: '../../sounds/firework.mp3', image: '../../img/firework.png' },
      { audio: '../../sounds/Horn.mp3', image: '../../img/Horn.png' },
      { audio: '../../sounds/brue.mp3', image: '../../img/Brue.png' },
      { audio: '../../sounds/letsgo.mp3', image: '../../img/letsgo.png' },
    ]
  }

  trigger() {
    if (this.audioPlaying) {
      return
    }

    if (!this.buttonCreated) {
      this.createButton()
      this.buttonCreated = true
    }

    this.audioPlaying = true
  }

  createButton() {
    const button = document.createElement('button')
    button.textContent = 'НАЖМИ'
    button.className = 'audio-button'
    document.body.append(button)

    button.addEventListener('click', () => {
      button.style.display = 'none'

      const randomIndex = Math.floor(Math.random() * this.sounds.length)
      const { audio, image } = this.sounds[randomIndex]

      const currentImage = document.createElement('img')
      currentImage.src = image
      currentImage.classList.add('random-image')
      document.body.append(currentImage)

      const currentAudio = new Audio(audio)

      currentAudio.play().catch((error) => {
        console.error(error)
      })

      setTimeout(() => {
        currentAudio.pause()
        currentAudio.currentTime = 0
        currentImage.remove()
        button.style.display = 'block'
        this.audioPlaying = false
      }, 1000)
    })
  }
}
