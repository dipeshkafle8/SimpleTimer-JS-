const input=document.querySelector("#num");
const progress=document.querySelector('progress');
const start=document.getElementById('start');
const pause=document.getElementById('pause');
const reset=document.getElementById('reset');
const span=document.querySelector("#display");
//span.innerHTML="Hello";
let flag=false;
input.addEventListener('change',()=>{
    progress.setAttribute('max',input.value*60);
    progress.setAttribute('value',0);
    flag=false;
})
let interval;

start.addEventListener('click',()=>{
    // console.log(typeof input.value);
    if(input.value==0 || input.value==undefined)
        alert('Please enter time before starting');
    let num;
    if(flag==false){
     num=input.value*60;
    }else{
        num=input.value;
    }
    // console.log(typeof num);
    let min=input.value-1;
    let sec=60;
  interval=setInterval(function(){    
       progress.value=progress.value+1;       
       if(progress.value==progress.max){
        clearInterval(interval);
        
       }   
        if(progress.value%60==0){
            min=min-1;
            sec=60;
        }
        sec=sec-1; 
      
       span.innerHTML=`${min}:${sec}`;
    },1000)
})

reset.addEventListener('click',()=>{
    input.value=0;
    progress.value=0;
    progress.max=0;
    span.innerHTML="";
    clearInterval(interval);
})
pause.addEventListener('click',()=>{
    clearInterval(interval);
    flag=true;
})
