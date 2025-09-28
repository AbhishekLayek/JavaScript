let form = document.getElementById("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();   // Used To Prevent The By Default Submission Of Form Data

    let name = document.getElementById("name");
    let data = document.getElementById("data");

    data.innerText = `${name.value}`;
})