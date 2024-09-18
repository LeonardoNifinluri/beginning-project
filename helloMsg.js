//best practice using const
//export means the helloMsg is able to be imported
const helloMsg = (element, msg) => {
    element.innerHTML = 'Click Me'
    element.addEventListener('click', () => alert(msg))
}

const goodbyeMsg = (element) => {
    element.innerHTML = 'Goodbye'
    element.addEventListener('click', () => alert('So Long, My Friend'))
}

const defautlMsg = (element, msg) => {
    element.innerHTML = 'This is default'
    element.addEventListener('click', () => alert(msg))
}

export default defautlMsg
export {helloMsg, goodbyeMsg}