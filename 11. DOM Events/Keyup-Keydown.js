let txt = document.getElementById("txt");

txt.addEventListener('keydown', ()=>{
    let color = Math.floor(Math.random()*5825482).toString(16);
    document.body.style.backgroundColor = `#${color}`;
})

txt.addEventListener('keyup', ()=>{
    let color = Math.floor(Math.random()*5825465).toString(16);
    document.body.style.backgroundColor = `#${color}`;
})