//1
console.log("##############################")
let myRequest = new XMLHttpRequest();

myRequest.open("GET","js/articles.json");
myRequest.send();
myRequest.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    console.log(myRequest.responseText)
    myRequest.onloadend = function() {
      console.log("Data Loaded")
    }
  }
}


//2

let mainData = JSON.parse(myRequest.responseText);

console.log(mainData);
