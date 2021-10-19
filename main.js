let currentState = 0
const states = []
const increase = 0.5

function start () {
    squareFiller ()

}

function pause () {

}

function restart (){

    restartSquares ()

}

function squareFiller () {
    for(let i= 0; i < currentState; i++){
        document.getElementById(`square${i+1}`).style.backgroundColor = "black"
    }
}

function restartSquares (){
    for(let i= 0; i <= 14; i++){
        document.getElementById(`square${i+1}`).style.backgroundColor = "white"
    }
}

