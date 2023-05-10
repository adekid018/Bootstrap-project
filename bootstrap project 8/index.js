import {body_nav_content_array} from "./arrays.js"

/*window.addEventListener('resize',()=>{
if(window.innerWidth>=1200){
    //console.log(nav_content)
    //nav_lists.classList.remove("")
   // nav_content.classList.add("d-none")   
}
else{
  //console.log(nav_side);
  //console.log(lessthan1000())
//console.log("not working");
//nav_content.classList.remove("d-none")
}

})

*/



let nav_link_container=document.querySelectorAll(".nav-item")
const navContent=document.querySelectorAll('.nav-content')
const navbar_toggler=document.querySelector('.sidebar')
const nav_link=document.querySelectorAll('.nav-link')
let caret=document.querySelectorAll('.fa-caret-down')
console.log(typeof nav_link);
for(let a=0; a<nav_link.length; a++){
  nav_link[a].addEventListener('click',()=>{
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

        /*navbar_toggler.classList.remove('show')
        navbar_toggler.removeAttribute('aria-modal')
        navbar_toggler.removeAttribute('role')*/
        //navbar_toggler.setAttribute("aria-modal",false)
      }
    }
      console.log('this is '+nav_link[a].textContent);
    })
  }
  const goBack=document.querySelectorAll(".goBack")
  for(let a=0; a<goBack.length; a++){
    goBack[a].addEventListener("click",()=>{
      console.log("go back");
     /* for(let a=0; a<navContent.length; a++){
        navContent[a].classList.remove("show")
      } */
      navContent.forEach((value,index)=>{
        value.classList.remove('show')
        //console.log(value.classList.remove("show"))
      })
    })
  }
  const btn_close=document.querySelectorAll(".btn-close-new")
  for(let a=0; a<btn_close.length; a++){
  btn_close[a].addEventListener("click",()=>{
    navbar_toggler.toggleAttribute("show")
    navbar_toggler.removeAttribute("role")
    navbar_toggler.classList.remove('show')
    navbar_toggler.removeAttribute("aria-modal")
    navContent.forEach((value,index)=>{
      
      value.classList.remove('show')
      console.log("deleting btn");
      //console.log(value.classList.remove("show"))
    })
  })
}

//body nav eg digital business, omnichannel
const body_nav=document.querySelectorAll(".body_nav")
const body_nav_content=document.querySelector(".body_nav_content")

for(let a=0; a<body_nav.length; a++){
  body_nav[a].addEventListener('click',()=>{
    body_nav_content.innerHTML=body_nav_content_array[a]
    body_nav[a].classList.add("border-bottom","border-4","border-success")
    //removing border
    for(let b=0; b<body_nav.length; b++){
      if(b!=a){
        body_nav[b].classList.remove("border-bottom","border-4","border-success")
      }
    }
  })
}
const body_nav_dropdown=document.querySelector(".body_nav_drop")
    body_nav_dropdown.addEventListener("change",(events)=>{
      body_nav_content.innerHTML=body_nav_content_array[events.target.value]
      events.target.classList.add("border-left")
      })
    
    

