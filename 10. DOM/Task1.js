let btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    let name = document.getElementById("name");
    let text = document.getElementById("txt");

    text.innerText = `My Name Is ${name.value}`;
    text.style.color = "red";
})