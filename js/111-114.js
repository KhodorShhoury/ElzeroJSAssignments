//1
let fontType=document.querySelector("#fontType");
let fontTypeOpt=document.querySelectorAll("select option")
let fontColor=document.querySelector("#fontColor");
var testText=document.querySelector(".text");


let fontSize=document.createElement("select");
fontSize.id="fontSize";
for(let i =16;i <= 31; i++){
     let fontSizeOpt=document.createElement("option");
     fontSizeOpt.textContent=`${i}px`;
     fontSizeOpt.value=`${i}px`;
     fontSize.appendChild(fontSizeOpt);
}
fontColor.after(fontSize);



if(window.localStorage.getItem("fontFamily")){
     document.querySelector(`[value='${window.localStorage.fontFamily}']`).selected="select";
     testText.style.fontFamily=window.localStorage.fontFamily;
     
}
if(window.localStorage.getItem("color")){
     document.querySelector(`[value='${window.localStorage.color}']`).selected="select";
     testText.style.color=window.localStorage.color;
     
}
if(window.localStorage.getItem("fontSize")){
     document.querySelector(`[value='${window.localStorage.fontSize}']`).selected="select";
     testText.style.fontSize=window.localStorage.fontSize;
     
}

fontType.onchange=function(e){
     testText.style.fontFamily=this.value;
     window.localStorage.fontFamily=this.value;
}

fontColor.onchange=function(e){
     testText.style.color=this.value;
     window.localStorage.color=this.value;
}

fontSize.onchange=function(e){
     testText.style.fontSize=this.value;
     window.localStorage.fontSize=this.value;
}


//2

let myInputs=document.querySelectorAll(".myInputs");
let country=document.querySelector("[name='country']")

myInputs.forEach(function(input){
     if(window.sessionStorage.getItem(input.getAttribute("type"))){
          input.value=window.sessionStorage.getItem(input.getAttribute("type"))
     }
})



myInputs.forEach(function(input){
     input.addEventListener("blur",()=>{
          window.sessionStorage.setItem(input.getAttribute("type"),input.value)
     })
})

if(window.sessionStorage.getItem(country.getAttribute("name"))){
   country.value= window.sessionStorage.getItem(country.getAttribute("name"))
}

country.onchange=function() {
     window.sessionStorage.setItem(country.getAttribute("name"),country.value);
};
