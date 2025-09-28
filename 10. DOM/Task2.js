let btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    let name = document.getElementById("name");
    let password = document.getElementById("pass");
    let qualification = document.getElementById("quaf");

    let table = document.createElement("table");

    table.innerHTML = `<table>
        <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Qualifiaction</th>
        </tr>
        <tr>
            <td>${name.value}</td>
            <td>${password.value}</td>
            <td>${qualification.value}</td>
        </tr>
    </table>`
    table.style.border = "1px soliod black";
    table.setAttribute("cellspacing","10px");
    table.setAttribute("cellpadding","10px");
    table.setAttribute("border", "1px");
    document.body.appendChild(table);
})