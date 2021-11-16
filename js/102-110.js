//1
// let promptMsg = prompt("Print Number From – To", "Example: 5-20");
// let numbers = promptMsg.split("-").sort((a,b)=>a-b);
// for(let i=parseInt(numbers[0]);i<=parseInt(numbers[1]);i+){
//      console.log(i);
// };

//2

 setTimeout(function popup(){
     let popEle=document.createElement("div");
     let popEleText=document.createElement("h3");
     popEleText.textContent="Welcome";
     let popPara=document.createElement("p");
     popPara.textContent="Welcome To Elzero Web School";
     popEle.appendChild(popEleText);
     popEle.appendChild(popPara);
     let cancel=document.createElement("div");
     cancel.textContent="x";
     cancel.style.cssText="background-color:red;border-radius:50%;width:20px;height:20px;position:absolute;right:-10px;top:-10px;cursor:pointer;color:white;font-weight:bold"
     popEle.style.cssText="padding:20px 100px;width:fit-content;margin:0px auto;border:1px solid black;text-align:center;position:relative";
     popEle.appendChild(cancel);
     document.body.appendChild(popEle);
     cancel.onclick=function(){
          cancel.parentElement.remove();
     } 
}
 ,5000) ;

 //3

 let eleDiv=document.createElement("div");
 eleDiv.textContent="10";
 document.body.appendChild(eleDiv);

  counter=setInterval(count,1000);

 function count(){
      eleDiv.textContent -=1;
      if(eleDiv.textContent=="0"){
           clearInterval(counter);
      }
 }




