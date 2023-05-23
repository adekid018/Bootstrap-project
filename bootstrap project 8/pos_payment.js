import { navigatiobBarMethod,goBackMethod,sideBarClosebtn} from "./index.js"
import { posPaymentNavContent } from "./arrays.js"
const nav_link=document.querySelectorAll('.nav-link')
const goBack=document.querySelectorAll(".goBack")
const btn_close=document.querySelectorAll(".btn-close-new")
const body_nav=document.querySelectorAll(".body_nav")
const pos_nav_content=document.querySelector(".pos_nav_content")
const body_nav_dropdown=document.querySelector(".body_nav_drop")

for(let a=0; a<nav_link.length; a++){

    nav_link[a].addEventListener('click',()=>{navigatiobBarMethod(a)},false)
  
  }

  for(let a=0; a<goBack.length; a++){
  
    goBack[a].addEventListener("click",()=>{goBackMethod()},false)
  
  }
  
  for(let a=0; a<btn_close.length; a++){
  
    btn_close[a].addEventListener("click",()=>{sideBarClosebtn()},false)
  }
  
const bodyNavContentBorder=(a)=>{
    pos_nav_content.innerHTML=posPaymentNavContent[a]
    //pos_nav_content.innerHTML="<h1>hello</h1>"
    //console.log(pos_nav_content);
    console.log("working");
      body_nav[a].classList.add("border-bottom","border-4","border-success")
      //removing border
      for(let b=0; b<body_nav.length; b++){
        if(b!=a){
          body_nav[b].classList.remove("border-bottom","border-4","border-success")
        }
      }
  }
  for(let a=0; a<body_nav.length; a++){
  
    body_nav[a].addEventListener('click',()=>{
      bodyNavContentBorder(a)
    }),false
  
  }