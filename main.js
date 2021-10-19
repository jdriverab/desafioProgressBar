let currentState = 0;
let isNOTInPause = true;

function squareFiller (x) { for(var i=0 ; i < x; i++){ document.getElementById(`square${i+1}`).style.backgroundColor = "black" }}

function restartSquares (){
    for(var i= 0; i <= 14; i++){
        document.getElementById(`square${i+1}`).style.backgroundColor = "white"
    }
    currentState = 0
}

const start = () => {
    isNOTInPause= true
    if(currentState <= 14){
        let intervalID = setInterval(()=>{
            if(isNOTInPause){     
                squareFiller(currentState)
                currentState ++
                if(currentState === 14) {clearInterval(intervalID)}
            }   
        },500)
        console.log(currentState)
    } 
    console.log(currentState)
}

const pause = () => { isNOTInPause === false ? isNOTInPause = true : isNOTInPause = false }

const restart = () =>{ restartSquares () }

