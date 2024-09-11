
let element = document.getElementsByClassName("text1")[0]; 
element.style.backgroundColor = "blue"; 
element.style.color="white";


let element2 =document.getElementById("text2")
element2.style.fontSize="Blob";
element2.classList.add('style-p')
console.log(element2.classList)


const imageElement = document.querySelector('img')
console.log(imageElement.setAttribute('src',"img1.png"))
