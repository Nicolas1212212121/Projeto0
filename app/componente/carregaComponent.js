function carregar(cmenu, ccarousel, cflooter, ccard){
    nenu(cmenu)
    carousel(ccarousel)
    flooter(cflooter)
    
}

function nenu(caminho){
    fetch(caminho)
    .then((response)=>response.text())
    .then((html)=>{
        document.getElementById("menu").innerHTML=html;
    })
}
function carousel(caminho){
    fetch(caminho)
    .then((reponse) => reponse.text())
    .then((html)=>{ 
       document.getElementById("carousel").innerHTML = html;
        }) 
}
function flooter(caminho){
    fetch(caminho)
    .then((response)=>response.text())
    .then((html)=>{
        document.getElementById("flooter").innerHTML=html;
    })
}


