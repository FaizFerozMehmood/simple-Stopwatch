var getMIN = document.getElementById("minutes")
var getSEC = document.getElementById("seconds")
var getMILLI = document.getElementById("milliS")


var Minutes=0
var seconds=0
var Miliseconds=0

 var Interval;

function start(){
    Interval=setInterval(function(){
        Miliseconds++
        getMILLI.innerHTML=Miliseconds
        if(Miliseconds >= 100){
            seconds++
            getSEC.innerHTML=seconds
            Miliseconds=0
        }
    
        else if (seconds >= 60){
            Minutes++
            getMIN.innerHTML=Minutes
            seconds=0
        }
    
    },10)
document.getElementById("dismiss").disabled=true
}

function stop(){
clearInterval(Interval)
document.getElementById("dismiss").disabled=false 

}


function reset(){
    Minutes=0
    seconds=0
    Miliseconds=0

    getMIN.innerHTML=Minutes
    getSEC.innerHTML=seconds
    getMILLI.innerHTML=Miliseconds
} 