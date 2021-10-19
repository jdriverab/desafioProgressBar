let currentState = 0;
let isNOTInPause = true;
const cicleTime = 500;

/**
 * Funcion para cambiar el color de los cuadrados de la progressBar a negro.
 * @param {number} x Variable de entrada, indica el cuadro de la progressBar que se modificara.
 * @return void
 */
function squareFiller (x) { for(var i=0 ; i < x; i++){ document.getElementById(`square${i+1}`).style.backgroundColor = "black" }};

/**
 * Funcion que realiza el ciclo segun "cicleTime" definido, en ciclo hace llamado de funcion squareFiller
 * 
 */
function cicleFiller () {
    setTimeout(()=> squareFiller(currentState),cicleTime);
    if(isNOTInPause && currentState <= 14){ currentState ++;setTimeout(()=>cicleFiller(),cicleTime)}
}

function restartSquares (){
    for(var i= 0; i <= 14; i++){ document.getElementById(`square${i+1}`).style.backgroundColor = "white" };
    currentState = 0;
    isNOTInPause = false
}

const start = () => { isNOTInPause= true,cicleFiller() };

const pause = () => { isNOTInPause === false ? isNOTInPause = true : isNOTInPause = false };

const restart = () =>{ restartSquares () };