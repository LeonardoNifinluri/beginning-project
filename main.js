// import './style.css'
import './style_page.css'

//This is to import logo
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

//This is to import function
//import { setupCounter } from './counter.js'
// ./helloMsg.js means the helloMsg can be detected
//import defautlMsg, { helloMsg, goodbyeMsg } from './helloMsg.js'
import { teknikMsg } from './teknikMsg.js'

//This is to import jquery
import $ from 'jquery'

$("#app").html(`
    <div>
        <div class="card">
            <h2 id="headerText" class="cardText"></h2>
            <button id="changeTextBtn" class="myBtn"></button>
        </div>
    </div>
`)

//This is the default page of vite
{/* <a href="https://vitejs.dev" target="_blank">
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
    </p> */}

//This is without jquery (vanilla)
//setupCounter(document.querySelector('#counter'))

//This is using jquery
// setupCounter($('#counter'))

//this is using jquery 
// helloMsg($('#greeting_button'), 'Hello World')
// goodbyeMsg($('#goodbye_button'))
// defautlMsg($('#default_button'), 'This is default')

teknikMsg($('#changeTextBtn'), $('#headerText'))
