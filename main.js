import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//./helloMsg.js means the helloMsg can be detected
import defautlMsg, { helloMsg, goodbyeMsg } from './helloMsg.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="greeting_button" type="button"></button>
    </div>
    <div class="card">
      <button id="goodbye_button" type="button"></button>
    </div>
    <div class="card">
      <button id="default_button" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
helloMsg(document.querySelector('#greeting_button'), 'Hello World')
goodbyeMsg(document.querySelector('#goodbye_button'))
defautlMsg(document.querySelector('#default_button'), 'This is default')
