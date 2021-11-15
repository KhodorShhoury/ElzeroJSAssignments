//1

let links = document.querySelectorAll("a");
for (let i =0;i<links.length;i++){
     if (links[i].classList.contains("open")&& links[i].textContent=="Elzero"){
       // links[i].click()
     }else{
       continue
     }
}