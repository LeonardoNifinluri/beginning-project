//best practice using const
//export means the helloMsg is able to be imported
const helloMsg = (element, msg) => {
    let isClicked = false
    element.text( isClicked ? 'Unclick Me' : 'Click Me')
    element.click(() =>{
        alert(msg + ' ' + (isClicked ? 'Unclicked' : 'Clicked'))
        isClicked = !isClicked
        element.text( isClicked ? 'Unclick Me' : 'Click Me')
    })
}

const goodbyeMsg = (element) => {
    element.text('Good Bye')
    element.click(() => {
        alert('So long my friend')
    })
}

const defautlMsg = (element, msg) => {
    element.text('Default')
    element.click(() => {
        alert(msg)
    })
}

export default defautlMsg
export {helloMsg, goodbyeMsg}