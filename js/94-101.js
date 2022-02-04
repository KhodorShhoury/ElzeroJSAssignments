//1


let links=document.querySelectorAll("a");

links.forEach(function(link){
  if(link.classList.contains("open") && link.textContent=="Elzero"){
   // link.click()
  }
})

//2 

var classAdd= document.querySelector(".classes-to-add");
var classRemove= document.querySelector(".classes-to-remove");
var curEle=document.querySelector(".current");
var classesList=document.querySelector(".classes-list h5+div");

//add class 

classAdd.addEventListener("blur",function() {
  if(curEle.classList.contains(classAdd.value)){
  classAdd.value=""
}else{
  curEle.classList.add(classAdd.value);
  showClasses()
}

  classAdd.value="";
})


// remove class

classRemove.addEventListener("blur",function(){
  curEle.classList.remove(classRemove.value);

  classRemove.value="";
  
  classesList.forEach(function(classAdded){
      classAdded.innerHTML == classAdd.value ? classAdded.remove() : classRemove.value=""
  })
})

// function showclass

function showClasses() {
    var classAdded= document.createElement("div");
    classAdded.textContent=classAdd.value;
    classAdded.style.backgroundColor="orange";
    classAdded.style.color="white";
    classAdded.style.display="inline-block";
    classAdded.style.margin="10px";
    classAdded.style.padding="10px 20px";
    classesList.appendChild(classAdded)
}


// }
//3
var myDiv=document.querySelector(".our-element");
var myPara=document.querySelector(".our-element + p");
myPara.remove();
// first child
let first = document.createElement("div");
first.classList.add("start");
first.title="Start-Element";
first.setAttribute("data-value","Start");
myDiv.before(first);
//last child
let last = document.createElement("div");
last.classList.add("end");
last.title="end-Element";
last.setAttribute("data-value","end");
myDiv.after(last)
//4

document.querySelector("div").lastChild.textContent.trim();

//5

addEventListener("click",function(e){
  if(e.target.nodeName = "P" ){
    console.log(e.target.nodeName)
  }else{
    return 0
  }
});