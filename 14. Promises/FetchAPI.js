console.log(fetch("https://api.github.com/users").then((data)=>{
    let max = data.json();

    max.then((data1)=>{
        data1.map((x)=>{
            console.log(x.avatar_url);
        })
    })
}));
