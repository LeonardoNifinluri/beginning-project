const teknikMsg = (element1, element2) => {
    //element1 is button
    //element2 is header/textview

    let counter = 1;
    let message = [
        "PERHATIAN!!!",
        "TEKNIK",
        "MANTAP MENTONK",
        "WE ARE THE CHAMPION",
        "BRAVO BRAVO BRAVO!!!",
        "KEEP ON FIGHTING TILL THE END",
        "NOW AND FOREVER!",
        "YEAH!",
        "YEAH!"
    ];
    const n = message.length

    //initialize the text of the element
    element1.text(message[1])
    element2.text(message[0])
    
    //create the logic of the button
    element1.click(() => {
        counter = counter % n
        if(counter >= 6){
            element2.text('NOW AND FOREVER!')
            element1.text('YEAH!')
            counter++
        }else{
            element2.text(message[counter])
            element1.text(message[++counter])
        }
    })
}

export {teknikMsg}