let txt = document.getElementById("txt");
let play = document.getElementById("btn");

play.addEventListener('click', ()=>{
    talk(txt.value);
})

function talk(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}