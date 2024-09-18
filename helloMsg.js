//best practice using const
//export means the helloMsg is able to be imported
const helloMsg = (element, msg) => {
    element.text('Click Me')
    element.click(() =>{
        alert(msg)
        element.text('Clicked')
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