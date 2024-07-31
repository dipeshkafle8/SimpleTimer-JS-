const input=document.querySelector("#num");
const progress=document.querySelector('progress');
const start=document.getElementById('start');
const pause=document.getElementById('pause');
const reset=document.getElementById('reset');
const span=document.querySelector("#display");
let currTime=0;
let maxTime=0;
let IntervalId;
let minutes;
let sec=59;
let isnewStart=true;

function initializeValues(){
    if(isnewStart){
     currTime=0;
    
     maxTime=parseFloat(input.value);
    // console.log(maxTime);
     minutes=parseInt(maxTime);
    maxTime=maxTime*60;
    sec=60;
    if(maxTime%60!=0){
        sec=maxTime%60;
    }else{
        minutes=minutes-1;
    }

    progress.value=0;
    progress.setAttribute('max',maxTime);
    isnewStart=false;
}
}


function displayRemainingTime(){        
    if(sec==0){
        minutes=minutes-1;
        sec=59;
    }
    sec=sec-1;
    span.innerText=`${minutes}:${sec}`;    

}




function increaseCounter(){    
        currTime++;     
        progress.value=progress.value+1;
        displayRemainingTime();
        if(currTime==maxTime){
           clearInterval(IntervalId);
           isnewStart=true;
        }      
}


start.addEventListener('click',()=>{
    initializeValues();
   IntervalId=setInterval(increaseCounter,1000)
   
})

pause.addEventListener("click",()=>{
    clearInterval(IntervalId);
     isnewStart=false;
})
