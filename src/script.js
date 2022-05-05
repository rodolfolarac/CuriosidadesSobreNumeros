import { apiNumber } from './models/apiNumber.js'


const btnNumber = document.querySelector('.btn__number')







/**Funcão de resgate do input  */
btnNumber.addEventListener('click',async ()=>{
    const inputValue = document.querySelector('.input__number').value
    
    
    let itsANumber = apiNumber.verificaInput(inputValue);
    console.log(itsANumber)

    if(itsANumber){
        const text = await apiNumber.getNumber(inputValue)
        console.log(text)
        apiNumber.printText(text);

    }
})

