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


 var input = document.querySelector("input");
 result = document.querySelector(".result");

   
 input.addEventListener("input",()=>{
result.innerHTML= `${parseFloat(input.value).toFixed(2)} USD Dollar = ${parseFloat(input.value * 15.6).toFixed(2)} Egyptian Pound`
 });

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

  var elsCount = document.getElementsByName("elements")[0];
  var form = document.forms;
  var type = document.querySelector("select");
  var text = document.getElementsByName("texts")[0];
  var results = document.querySelector(".results");
 
 elsCount.setAttribute("min", "0");
 
 form[1].onsubmit = function (el) {
     el.preventDefault();
     document.querySelectorAll(".box").forEach(el => el.remove());
 
     for (let i = 1; i <= elsCount.value; i++) {
         let myEl = document.createElement(type.value);
         let myelText = document.createTextNode(text.value);
         
         myEl.className = "box";
         myEl.title = "element";
         myEl.id = `id-${i}`;
 
         myEl.style.display = "inline-block";
         myEl.style.padding = "10px";
         myEl.style.color = "#fff";
         myEl.style.textAlign = "center";
         myEl.style.width = "150px";
         myEl.style.margin = "20px";
         myEl.style.backgroundColor = "red";
         
         myEl.appendChild(myelText);
         results.appendChild(myEl)
     }
 };

 
 
