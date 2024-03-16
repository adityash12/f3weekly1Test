let counting=0;
const count=document.querySelector("#count");
const btnD=document.querySelector("#btnD");
const btnI=document.querySelector("#btnI");
const btnC=document.querySelector("#btnC");

let isError=false;


btnD.addEventListener('click',()=>{
 if(counting===1){
    btnC.style.display='none';
    console.log(counting + 'if 1');

 }

 if(counting<=0 && !isError){
    const error=document.createElement('p');
    error.className='error';
    error.innerText='\'Error :Cannot go below 0\'';
    const newDiv=document.querySelector(".container");
     newDiv.insertAdjacentElement("afterend",error);
     error.style.color='red';
     error.style.marginTop='2em';
     isError=true;  
  
 }
 else if(counting>0){
    counting--;
    count.innerText=counting;
    console.log(counting + 'elseif 1');
 }


 


})
btnI.addEventListener('click',()=>{
 counting++;
 count.innerText=counting;
 if(counting>0){
    btnC.style.display='inline';
 }

 if(isError){
    const errorELement= document.querySelector('.error');
      

    if(errorELement){
    
      errorELement.remove();

    }
    isError=false;

  }
})
btnC.addEventListener('click',()=>{
    counting=0;
    count.innerText=0;
    btnC.style.display='none';
  if(isError){
    const errorELement= document.querySelector('.error');
      

    if(errorELement){
    
      errorELement.remove();

    }
    isError=false;

  }




  

})
