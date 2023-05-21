import { navigatiobBarMethod,goBackMethod,sideBarClosebtn} from "./index.js"
const nav_link=document.querySelectorAll('.nav-link')
const goBack=document.querySelectorAll(".goBack")
const btn_close=document.querySelectorAll(".btn-close-new")

for(let a=0; a<nav_link.length; a++){

    nav_link[a].addEventListener('click',()=>{navigatiobBarMethod(a)},false)
  
  }
  
  
  for(let a=0; a<goBack.length; a++){
  
    goBack[a].addEventListener("click",()=>{goBackMethod()},false)
  
  }
  
  for(let a=0; a<btn_close.length; a++){
  
    btn_close[a].addEventListener("click",()=>{sideBarClosebtn()},false)
  
  }
  