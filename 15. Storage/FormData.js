let form = document.getElementById("form");

form.addEventListener('submit', ()=>{

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    store(name, email, password);
})

function store(name, email, password){
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Data Saved In Localstorage Successfully!");
}