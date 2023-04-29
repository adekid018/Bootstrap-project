let nav_downs=document.querySelectorAll('.nav-i')
let nav_content=document.querySelector(".dropdown-content")
let title_content=document.querySelector('.title_content')
let body=document.querySelector('body')
let nav_side=document.querySelectorAll(".nav-side")
let offcanvas=document.querySelector('.dropdown-contentnew')
import top_data from "./arrays.js"
const navContentAnim = [
  { transform: "translateY(-300px)" },
  { transform: "translateY(0px)" },
];

function animation (a,outdiv){
/*  
  for(let z=0; z<caret.length; z++){
    if(a!=z && caret[z].classList.contains("fa-rotate-180")){
      caret[z].classList.remove("fa-rotate-180")
      nav_downs[z].classList.remove("border-top","border-success","border-2")
    }
    if(a==z){
      //console.log("there is with rotate"+a)
      caret[a].classList.toggle("fa-rotate-180")
      nav_downs[a].classList.add("border-top","border-success","border-2")
    }
    if(caret[a].classList.contains('fa-rotate-180')){
      //console.log("one contains fa-180");
      //console.log(caret[a].classList.contains('fa-rotate-180').length==1);
      nav_content.animate(navContentAnim, navContentAnimTiming);
      nav_content.classList.remove("d-none")
    }
    else{
      //caret[a].classList.toggle("fa-rotate-180")
      nav_downs[z].classList.remove("border-top","border-success","border-2")
      //nav_content.animate(contentOutgoing,contentOutgoingTiming)
      nav_content.classList.add("d-none")
    }
  */  
    /*
    else{
      //nav_content.classList.remove("d-none")
      console.log("This is none");
    }*/
  //}
}
const navContentAnimTiming = {
  duration: 300,
  iterations: 1,
};

for(let a=0; a<nav_downs.length; a++){
  nav_downs[a].addEventListener('click',(e)=>{

  /*for(let z=0; z<caret.length; z++){
    if(a!=z && caret[z].classList.contains("fa-rotate-180")){
      caret[z].classList.remove("fa-rotate-180")
      nav_downs[z].classList.remove("border-top","border-success","border-2")
    }
    if(a==z){
      //console.log("there is with rotate"+a)
      caret[a].classList.toggle("fa-rotate-180")
      nav_downs[a].classList.add("border-top","border-success","border-2")
    }
    if(caret[a].classList.contains('fa-rotate-180')){
      //console.log("one contains fa-180");
      //console.log(caret[a].classList.contains('fa-rotate-180').length==1);
      nav_content.animate(navContentAnim, navContentAnimTiming);
      nav_content.classList.remove("d-none")
    }
    else{
      //caret[a].classList.toggle("fa-rotate-180")
      nav_downs[z].classList.remove("border-top","border-success","border-2")
      //nav_content.animate(contentOutgoing,contentOutgoingTiming)
      nav_content.classList.add("d-none")
    }
    
    /*
    else{
      //nav_content.classList.remove("d-none")
      console.log("This is none");
    }
  }*/
  animation(a)
  //console.log(nav_content)
    //title.textContent=top_data[a].title
    //console.log(top_data[a].body)
    let outdiv
    if(nav_content.childNodes.length>1){
      while (nav_content.hasChildNodes()) {
        nav_content.removeChild(nav_content.firstChild);
      }
      //console.log("yes");
    }
    else{
      //console.log("no");
    }
    let maindiv=document.createElement('div')
    maindiv.classList.add("col")
    let header1=document.createElement('h1')
    let header1Content=document.createElement('small')
    header1.textContent=top_data[a].header1
    header1Content.textContent=top_data[a].h_c
    maindiv.appendChild(header1)
    maindiv.appendChild(header1Content)
    nav_content.appendChild(maindiv)
      for(let b=0; b<top_data[a].body.length; b++){
        //console.log(top_data[a].body[b][`body${b}`].length)
        console.log(top_data[a].body[b][`body${b}`].length)
        let contentCreator
        let outdiv=document.createElement("div")

        outdiv.classList.add("col")
        
        let header2=document.createElement("h2")
        
        console.log(top_data[a].header1)
        header2.textContent=top_data[a].body[b].header2
        outdiv.appendChild(header2)
        
        console.log(outdiv.contains(header2))
        for(let c=0; c<top_data[a].body[b][`body${b}`].length; c++){
        
        let contentCreator=document.createElement('div')
        contentCreator.classList.add('newspaper')
        let content1=document.createElement("span")
        let content1a=document.createElement("small")
        //console.log(top_data[a].body[b][`body${b}`][c][`content${c}`])
        content1.textContent=top_data[a].body[b][`body${b}`][c][`content${c}`]
        content1a.textContent=top_data[a].body[b][`body${b}`][c][`content${c}a`]
        
       
    
        contentCreator.appendChild(content1)
        contentCreator.appendChild(content1a)
        outdiv.appendChild(contentCreator)
      }
      //ase(top_data,outdiv)
      nav_content.appendChild(outdiv)
      
      //outdiv.appendChild(contentCreator)
      //outdiv.append(contentCreator)
      
    }
    console.log(nav_downs)
    //console.log(outdiv)
      //nav_content.classList.toggle("d-none")
      //nav_content.style.height="1000"
  }) 
}
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
/*


const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});*/
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
     if(b!=a){
  //      console.log("this is b",b);
      caret[b].classList.remove("caret_up")
      navContent[b].classList.remove('show')     
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
  const goBack=document.querySelector(".goBack")
  goBack.addEventListener("click",()=>{
    navContent.forEach((value,index)=>{
      console.log(value.classList.remove("show"))
    })
  })