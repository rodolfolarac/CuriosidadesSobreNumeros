export class apiNumber {
    static spanInfo = document.querySelector('.number__info')
    



    static async getNumber(number){
        let url = `http://numbersapi.com/${number}/trivia`;
        // console.log(url)
        const response = await fetch(url).then((r)=>{
            return r.text()
               }).then((data)=> data)
        // console.log(response)
        // const data = await JSON.parse(response)
        // console.log(data)
        return response
        
    }

    static verificaInput(resultado) {

        let value = parseInt(resultado)
        console.log(value)
        if  (!value) {
            console.log('true')
            this.spanInfo.classList.add('alert')
            this.spanInfo.innerText = '';
            this.spanInfo.innerText = 'Escreva um número válido!!!'
            return false;
        }else {
            console.log('false')
            this.spanInfo.classList.remove('alert')
            this.spanInfo.innerText = '';
            return true;
                

            
            


    }
}


static printText(text) {
    this.spanInfo.innerText=''
    this.spanInfo.innerText = text
}

    
}