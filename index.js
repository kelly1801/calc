/* defines the dom objects into variables*/
let lector = document.getElementById('lector')
let button = Array.from(document.getElementsByClassName('btn-calc'))
let operators = Array.from(document.getElementsByClassName('btn-calc-operator'))




/* go trought each button to add the event and the cases */
button.map( btn => {
    
    btn.addEventListener('click', (e) => {
        if (lector.innerText === '0') {
            lector.innerText = lector.innerText.slice(0,-1)
          }
          

        switch (e.target.innerText) {
        case 'C':
            lector.innerText = '';
            break

            case 'backspace':

            /*just deletes the last digit if there is any*/
            if(lector.innerText){   
            lector.innerText = lector.innerText.slice(0,-1);
            }    
            break
           /*the eval function make the calculations */
            case '=':
                /*the try function render if there isn't any error otherwise will render the cath part */
                try{
            lector.innerText = eval(lector.innerText);
                } catch{
                    lector.innerText = 'Syntax Error!'
                }

            break
            

        default:
            lector.innerText += e.target.innerText;
        }
    })
})

/*is the same that before just that i added a diferent class for the operators becauses the styles were different */
operators.map( opt => {
    opt.addEventListener('click', (e) => {
   switch (e.target.innerText) {
       
   
       default:
           lector.innerText += e.target.innerText;
   }  
       
       
    })
})
