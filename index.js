const input=document.querySelector("#num");
const progress=document.querySelector('progress');
const start=document.getElementById('start');
const pause=document.getElementById('pause');
const reset=document.getElementById('reset');
const span=document.querySelector("#display");

let currTime;
let maxTime;
let IntervalId;
let minutes;
let sec;
let isnewStart=true;


//function for initializing values
function initializeValues(){      
 if(isnewStart){
     currTime=0;    
     maxTime=parseFloat(input.value);    
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


//to handle remaining time to display
function displayRemainingTime(){        
    if(sec==0){
        minutes=minutes-1;
        sec=59;
    }
    sec=sec-1;
    span.innerText=`${minutes}:${sec}`;   

}

//to keep count of increase in progress
function increaseCounter(){    
        currTime++;     
        progress.value=progress.value+1;
        displayRemainingTime();
        if(currTime==maxTime){
           clearInterval(IntervalId);
           input.value="";
           isnewStart=true;
        }      
}


//Event listeners
start.addEventListener('click',()=>{
    if(input.value.trim()=="" || input.value.trim()==0){
        alert("Please enter valid value");
    }
    else{
    initializeValues();
   IntervalId=setInterval(increaseCounter,1000)
    }   
})

pause.addEventListener("click",()=>{
    clearInterval(IntervalId);
     isnewStart=false;
})

reset.addEventListener("click",()=>{
    clearInterval(IntervalId);
    progress.value=0;
    input.value="";
    progress.removeAttribute(progress.max);
    span.innerText="";

})
