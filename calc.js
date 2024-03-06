let peso = document.getElementById('peso').value
let altura = document.getElementById('altura').value
let btn = document.getElementById('btn')
let result = null


function appear(){
    let item_result = document.getElementById('result')
     document.getElementById('result_span').innerHTML =  ''
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value
    let peso1 = parseFloat(peso.replace(',','.'))
    let altura1 = parseFloat(altura.replace(',' , '.'))
    

    
    
    
    result = (peso1 / (altura1 * altura1)).toFixed(2)


    document.getElementById('result_h3').innerHTML = `IMC: Seu IMC é de ${result}`

    
    if(result<18.5){
        document.getElementById('result_img').src = './img/seta_baixo.svg'
        document.getElementById('result_span').innerHTML =  `OBS: Você está abaixo do peso`
    }
    if((result>=18.5) && (result<25)){
        document.getElementById('result_img').src = './img/certo.svg'
        document.getElementById('result_span').innerHTML = 'OBS: Você está com o peso ideal'
    }
    if(result>= 25 && result<30){
        document.getElementById('result_img').src = './img/seta_cima.svg'
        document.getElementById('result_span').innerHTML = 'OBS: Você está com sobrepeso'
    }
    if(result>=30 && result<35){
        document.getElementById('result_img').src = './img/seta_cima.svg'
        document.getElementById('result_span').innerHTML = 'OBS: Você está com obesidade 1'
    }
    if(result>=35 && result<40){
        document.getElementById('result_img').src = './img/seta_cima.svg'
        document.getElementById('result_span').innerHTML = 'OBS: Você está com obesidade 2'
    }
    if(result>=40){
        document.getElementById('result_img').src = './img/seta_cima.svg'
        document.getElementById('result_span').innerHTML = 'OBS: Você está com obesidade 3'
    }
    item_result.style.display = 'block'

    //conferir se o campo de peso e altura estão preenchidos

    if(peso === '' || altura ===''){
        item_result.style.display = 'none'

    }


   
}
function clear(){
    peso = document.getElementById('peso').value = ''
    altura = document.getElementById('altura').value = ''
    document.getElementById('result').style.display = 'none'
}


addEventListener('keyup', (events)=>{
    if(events.key === 'Enter'){
        btn.click()
    }
    
})
addEventListener('keyup', (events)=>{
    if(events.key === 'ArrowUp'){
        document.getElementById('peso').focus()
    }
    if(events.key === 'ArrowDown'){
        document.getElementById('altura').focus()
    }
    
})
document.getElementById('btn_limpar').addEventListener('click',clear)
document.getElementById('btn').addEventListener('click',appear)
