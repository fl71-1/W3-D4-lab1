
let element = document.getElementsByClassName("text1")[0]; 
element.style.backgroundColor = "blue"; 
element.style.color="white";


let element2 =document.getElementById("text2")
element2.style.fontWeight="Blob";
element2.classList.add('style-p')
console.log(element2.classList)


const imageElement = document.querySelector('img')
console.log(imageElement.setAttribute('src',"img1.png"))


const list =document.querySelector('#ul1')
for(i=1;i<=3;++i){
    let li1=document.createElement("li")
    let pernt=list.appendChild(li1)
    pernt.style.border="2px solid red"
    pernt.textContent="javasCript"

}
