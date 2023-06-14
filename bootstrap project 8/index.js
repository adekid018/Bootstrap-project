import {indexNavContent} from "./arrays.js"


let nav_link_container=document.querySelectorAll(".nav-item")
const navContent=document.querySelectorAll('.nav-content')
const navbar_toggler=document.querySelector('.sidebar')
const nav_link=document.querySelectorAll('.nav-link')
let caret=document.querySelectorAll('.fa-caret-down')
const goBack=document.querySelectorAll(".goBack")
const btn_close=document.querySelectorAll(".btn-close-new")
const body_nav=document.querySelectorAll(".body_nav")
const body_nav_content=document.querySelector(".body_nav_content")
const body_nav_dropdown=document.querySelector(".body_nav_drop")


const navigatiobBarMethod=(a)=>{
    if(!nav_link_container[a].classList.contains("collapsed")){
      caret[a].classList.remove("caret_down")
      caret[a].classList.add("caret_up")
    }
    else{
      caret[a].classList.add("caret_down")
    }
  
    for(let b=0; b<navContent.length; b++){
      console.log(nav_link[b]);
      navbar_toggler.classList.add("z-1")
     if(b!=a){
  //      console.log("this is b",b);
      caret[b].classList.remove("caret_up")
      navContent[b].classList.remove('show')
      nav_link[b].classList.remove("z-1")
      }
      if(navbar_toggler.classList.contains('show')){
        console.log("yes it contains show"); 
      }
    }
}
for(let a=0; a<nav_link.length; a++){

  nav_link[a].addEventListener('click',()=>{navigatiobBarMethod(a)},false)

}

  
  const goBackMethod=()=>{
    console.log("go back");
      navContent.forEach((value,index)=>{
        value.classList.remove('show')
      })
  }

  for(let a=0; a<goBack.length; a++){

    goBack[a].addEventListener("click",()=>{goBackMethod()},false)

  }
   const sideBarClosebtn=()=>{
    navbar_toggler.toggleAttribute("show")
    navbar_toggler.removeAttribute("role")
    navbar_toggler.classList.remove('show')
    navbar_toggler.removeAttribute("aria-modal")
    navContent.forEach((value,index)=>{
      value.classList.remove('show')
    })  
   }
  
  for(let a=0; a<btn_close.length; a++){

  btn_close[a].addEventListener("click",()=>{sideBarClosebtn()},false)

}

//body nav eg digital business, omnichannel


const bodyNavContentBorder=(a)=>{
  body_nav_content.innerHTML=indexNavContent[a]
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
//this was commented beczuse it was affecting other page

    /*body_nav_dropdown.addEventListener("change",(event)=>{
      bodyNavDropdownContent(event)
  },false)
  const bodyNavDropdownContent=(event)=>{
    body_nav_content.innerHTML=indexNavContent[event.target.value]
   // events.target.classList.add("border-left")
  }   
  */ 
  
export {navigatiobBarMethod,bodyNavContentBorder,goBackMethod,sideBarClosebtn}
