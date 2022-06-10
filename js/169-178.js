//2
console.log("##############################")
let myRequest = new XMLHttpRequest();

myRequest.open("GET","js/articles.json");
myRequest.send();
myRequest.onloadend = function(){
  if(this.readyState == 4 && this.status == 200){
    console.log(this.responseText)
    
      console.log("Data Loaded")
      console.log("#".repeat(80))


      //3

      let mainData = JSON.parse(myRequest.responseText);

      for(let obj of mainData){
        obj.category = "All"
      }
      console.log(mainData)

      let updatedData = JSON.stringify(mainData)
    
      console.log(updatedData)
  }
}

//4

let myJsonObj = new XMLHttpRequest();
myJsonObj.open("GET","js/articles.json");
myJsonObj.send()

myJsonObj.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){


    let dataDiv = document.createElement("div");
    dataDiv.id = "data";

  let myJsonObjParsed = JSON.parse(myJsonObj.responseText);

  // with document method
    for(let jsObj of myJsonObjParsed){
      let objDiv = document.createElement("div");
      let title = document.createElement("h2");
      let articleNum = document.createElement("p");
      let author = document.createElement("p");
      let category = document.createElement("p");

      title.textContent = jsObj.title;
      articleNum.textContent = jsObj.Body;
      author.textContent = "Author: " + jsObj.author;
      category.textContent = "Category: " + jsObj.category;

      objDiv.appendChild(title)
      objDiv.appendChild(articleNum)
      objDiv.appendChild(author)
      objDiv.appendChild(category)
      dataDiv.appendChild(objDiv);
      document.body.appendChild(dataDiv);
    }
  }
}