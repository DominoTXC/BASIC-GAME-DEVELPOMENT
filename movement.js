let Avatar
let topM = 450
let leftM = 10

// ********NASŁUCHIWANIE PRZYCISKÓW******** \\

document.addEventListener('keydown', function(event) {
    key = event.key
    AvatarMovement(key)
})

// ********ŁADOWANIE GRY******** \\

function GameStart(){
    AvatarLook()
    GameAreaLoad()
}

// ********DISPLAY AWATARA******** \\

function AvatarLook(){
    document.getElementById("GameArea").innerHTML +=`
    <span id="GameAvatar"></span>
    `
    document.getElementById("GameAvatar").style.display = "block"
    document.getElementById("GameAvatar").style.width = "50px"
    document.getElementById("GameAvatar").style.height = "50px"
    document.getElementById("GameAvatar").style.backgroundColor = "red"
    document.getElementById("GameAvatar").style.position = "absolute"
    document.getElementById("GameAvatar").style.left = `${leftM}px`
    document.getElementById("GameAvatar").style.top = `${topM}px`
}

// ********MOVEMENT AVATARA DO POPRAWY******** \\

// chyba ze robimy powolniejsza giere to mozna zostawic / malo dynamiczny ten movement

function AvatarMovement(key){
    if(key=="w" || key=="W"){
        console.log("w")
        topM -= 5
        if (topM < 0) topM = 0
        document.getElementById("GameAvatar").style.top = `${topM}px`
    }
    if(key=="s" || key=="S"){
        console.log("s")
        topM += 5
        //dodac blokade
        document.getElementById("GameAvatar").style.top = `${topM}px`
    }
    if(key=="a" || key=="A"){
        console.log("a")
        leftM -= 5
        if(leftM < 0) leftM = 0
        document.getElementById("GameAvatar").style.left = `${leftM}px`
    }
    if(key=="d" || key=="D"){
        console.log("d")
        leftM += 5
        //dodac blokade
        document.getElementById("GameAvatar").style.left = `${leftM}px`
    }
}

// ********ŁADOWANIE ARENY******** \\

function GameAreaLoad(){
    document.body.style.backgroundColor = "green"
}
