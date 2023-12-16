//variaveis
let phrases = [
    "Penso que os pequenos momentos, por fim, são enormes",
    "Que o afeto possa nos afetar todos os dias",
    "Escolha pessoas que escolhem você",
    "A conexão mais forte é aquela que une duas almas",
    "Mais cedo ou mais tarde, chega o coração certo para se encaixar no seu",
    "Você é um desses acontecimentos raros, poéticos, e únicos",
    "Amor é ter o céu e só querer uma estrela",
    "Que bom que no meio de tudo que poderia ter acontecido, a gente se encontrou",
    "Porque nem uma coleção de estrelas teria tanto brilho quanto um sorriso teu",
    "Meu coração escolheu você"
]


const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


function sorte(){
    randomNumber = Math.round(Math.random() * 9)
    let phrase = document.querySelector(".screen2 p").innerHTML = phrases[randomNumber]
}
sorte()
//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event){
    toggleScreen()
}
function handleResetClick(event){
    toggleScreen()
    sorte()
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
 }

 
