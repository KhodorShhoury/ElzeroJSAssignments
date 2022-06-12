//1

//<div id="elzero" class="element" name="js">JavaScript</div>

document.getElementById("elzero");
document.getElementsByClassName("element");
document.querySelector("#elzero");
document.querySelector(".element");
document.querySelector("div");
document.querySelector(`[name='js']`);
document.getElementsByTagName("div");
document.querySelectorAll("#elzero");
document.querySelectorAll(".element");
document.querySelectorAll("[name = 'js']");
document.querySelectorAll("div");
document.getElementsByName("js");
 myEle=document.querySelector(`[name='js']`);
 myEle2=document.getElementsByClassName("element");
 myEle3=document.getElementById("elzero");



 //2
 imgs=document.querySelectorAll("img");

 for (let i = 0;i<imgs.length;i++){
      imgs[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
      imgs[i].alt="Elzero logo"
 }

 //3

 var USD=document.querySelector("input[name='dollar']");
 var result = document.querySelector(".result");
USD.setAttribute("min","0")
 USD.addEventListener("input",function(){
      result.textContent=`${parseFloat(USD.value).toFixed(2)} USD Dollar = ${parseFloat(USD.value * 15.6).toFixed(2) } Egyptian Pound`
 })
 //4

 var firstEl = document.querySelector(".one");
  var lastEl = document.querySelector(".two");
   var lastElTitle = firstEl.title;
   var lastElText = `${firstEl.textContent} ${document.getElementsByTagName("div").length}`;
 
 firstEl.title = lastEl.title;
 lastEl.title = lastElTitle;
 
 firstEl.textContent = lastEl.textContent;
 
 lastEl.textContent = lastElText
  

 //5

 var myImgs= document.querySelectorAll("img");

 for (let i=0 ; i<myImgs.length;i++){
      if(myImgs[i].hasAttribute("alt")===true){
           myImgs[i].alt="old";
      }else{
           myImgs[i].setAttribute("alt","Elzero New")
      }
 }


 //6

 var form = document.forms[1];
 var eleCount=document.querySelector("input[name='elements']");
 var eleText= document.querySelector("input[name='texts']");
 var eleType=document.querySelector("select[name='type']");
 var eleResult=document.querySelector(".results");
eleCount.setAttribute("min","0")
 form.addEventListener("submit",function(e) {
      e.preventDefault();
      document.querySelectorAll(".box").forEach(el => el.remove());
      for(let i =1;i<=eleCount.value;i++){
          var myEle=document.createElement(eleType.value);
          myEle.textContent=eleText.value;
          myEle.className="box";
          myEle.title="Element";
          myEle.id=`id-${i}`;
          myEle.style.color="white";
          myEle.style.backgroundColor="orange";
          myEle.style.display="inline-block";
          myEle.style.padding="10px 20px";
          myEle.style.margin="10px";
          eleResult.appendChild(myEle);
      }
     
 })

 
