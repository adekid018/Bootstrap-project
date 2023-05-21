import {coursel_item_array} from "./arrays.js"
import { navigatiobBarMethod,goBackMethod,sideBarClosebtn} from "./index.js"
let coursel_btn_right=document.querySelector('.coursel_btn_right')
let coursel_item=document.querySelector('.coursel_item')
let coursel_btn_left=document.querySelector('.coursel_btn_left')
let coursel_btn_1=document.querySelector(".coursel_btn_1")
let coursel_btn_2=document.querySelector(".coursel_btn_2")
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
coursel_btn_right.addEventListener('click',()=>{
    coursel_item.scrollLeft += 80
    const screenWidth=coursel_item.scrollLeft
    console.log(`this is ${screenWidth}`);
    console.log(`this is d body size ${window.innerWidth}`);
    if(screenWidth>=1030){
        coursel_btn_right.classList.add('disable')
        //console.log("yes greater than 1030");
        coursel_btn_right.setAttribute("disabled","true")
    }
    //console.log(coursel_item.scrollWidth);
})
coursel_btn_left.addEventListener('click',()=>{
    coursel_item.scrollLeft -= 80
    console.log(coursel_item.scrollWidth);
})
coursel_btn_1.addEventListener('click',()=>{
    coursel_item.innerHTML=coursel_item_array[0]
    coursel_btn_1.classList.add("active")
    coursel_btn_2.classList.remove("active")
    coursel_btn_2.classList.add("inActive")
    coursel_btn_1.classList.remove("inActive")
    /*coursel_btn_1.style.backgroundColor="hsl(240, 76.2%, 8.2%)"
    coursel_btn_2.style.backgroundColor="rgba(158, 154, 154,0.3)"
    coursel_btn_1.style.color="white"
    coursel_btn_2.style.color="hsl(240, 76.2%, 8.2%)"    
    console.log("hello");*/
})

coursel_btn_2.addEventListener('click',()=>{
    /*coursel_btn_2.style.backgroundColor="hsl(240, 76.2%, 8.2%)"
    coursel_btn_2.style.color="white"
    coursel_btn_1.style.backgroundColor="rgba(158, 154, 154,0.3)"
    coursel_btn_1.style.color="hsl(240, 76.2%, 8.2%)"*/
    coursel_btn_2.classList.add("active")
    coursel_btn_1.classList.remove("active")
    coursel_btn_1.classList.add("inActive")
    coursel_btn_2.classList.remove("inActive")
    coursel_item.innerHTML=coursel_item_array[1]
    console.log("hello");
})
/*import {coursel_item_array} from "./arrays.js"
import { navigatiobBarMethod } from "./index.js"
let coursel_btn_right=document.querySelector('.coursel_btn_right')
let coursel_item=document.querySelector('.coursel_item')
let coursel_btn_left=document.querySelector('.coursel_btn_left')
let coursel_btn_1=document.querySelector(".coursel_btn_1")
let coursel_btn_2=document.querySelector(".coursel_btn_2")



coursel_btn_right.addEventListener('click',()=>{
    coursel_item.scrollLeft += 80
    const screenWidth=coursel_item.scrollLeft
    console.log(`this is ${screenWidth}`);
    console.log(`this is d body size ${window.innerWidth}`);
    if(screenWidth>=1030){
        coursel_btn_right.classList.add('disable')
        coursel_btn_right.setAttribute("disabled","true")
    }
})

coursel_btn_left.addEventListener('click',()=>{
    coursel_item.scrollLeft -= 80
    console.log(coursel_item.scrollWidth);
})

coursel_btn_1.addEventListener('click',()=>{
    coursel_item.innerHTML=coursel_item_array[0]
    coursel_btn_1.classList.add("active")
    coursel_btn_2.classList.remove("active")
    coursel_btn_2.classList.add("inActive")
    coursel_btn_1.classList.remove("inActive")
    
})

coursel_btn_2.addEventListener('click',()=>{
    coursel_btn_2.classList.add("active")
    coursel_btn_1.classList.remove("active")
    coursel_btn_1.classList.add("inActive")
    coursel_btn_2.classList.remove("inActive")
    coursel_item.innerHTML=coursel_item_array[1]
    console.log("hello");
})

 */