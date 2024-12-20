//JavaScript puede acceder y modificar todo HTML
//shante.setAttribute("src", "img/img/Vidas/heart_1.png")
let shante = document.getElementById("shante")
let animation = setInterval(change_image, 50)
let num_image = 0
let x = 0
let y = 0

//let window_width = document.documentElement.clientWidth
//let window_height = document.documentElement.clientHeight

let total_width = document.documentElement.clientWidth - shante.clientWidth
let total_height = document.documentElement.clientHeight - shante.clientHeight

function change_image(){
    num_image = num_image + 1
    let direc
    if(num_image>15){
        num_image = 1
    }
    direc = "img/img/shante/Shante_" + num_image+".png"
    shante.setAttribute("src", direc)
}

document.addEventListener("keydown", move)
function move(event){
    console.log(event.keyCode)

    //When press key D
    if(event.keyCode == 68){
        console.log("Me movere 5 pixeles a la derecha")
        if(x < total_width)
            x = x + 5
    }

    //When press key A
    if(event.keyCode == 65){
        console.log("Me movere 5 pixeles a la izquierda")
        if(x != 0)
            x = x - 5    
    }

    //When press key S
    if(event.keyCode == 83){
        console.log("Me movere 5 pixeles abajo")
        if(y < total_height)
            y = y + 5
    }

    //When press key W
    if(event.keyCode == 87){
        console.log("Me movere 5 pixeles arriba")
        if(y != 0)
            y = y - 5
    }

    shante.style.left = x + "px"
    shante.style.top = y + "px"
}