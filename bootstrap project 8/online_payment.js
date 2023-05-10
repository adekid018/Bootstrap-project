import {body_nav_content_array,coursel_item_array} from "./arrays.js"
let coursel_btn_right=document.querySelector('.coursel_btn_right')
let coursel_item=document.querySelector('.coursel_item')
let coursel_btn_left=document.querySelector('.coursel_btn_left')
let coursel_btn_1=document.querySelector(".coursel_btn_1")
let coursel_btn_2=document.querySelector(".coursel_btn_2")
coursel_btn_right.addEventListener('click',()=>{
    coursel_item.scrollLeft += 80
    const screenWidth=coursel_item.scrollLeft
    console.log(screenWidth);
    if(screenWidth>=1030){
        coursel_btn_right.classList.add('disable')
        console.log("yes");
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
    coursel_btn_1.style.backgroundColor="hsl(240, 76.2%, 8.2%)"
    coursel_btn_2.style.backgroundColor="rgba(158, 154, 154,0.3)"
    coursel_btn_1.style.color="white"
    coursel_btn_2.style.color="hsl(240, 76.2%, 8.2%)"    
    console.log("hello");
})

coursel_btn_2.addEventListener('click',()=>{
    coursel_btn_2.style.backgroundColor="hsl(240, 76.2%, 8.2%)"
    coursel_btn_2.style.color="white"
    coursel_btn_1.style.backgroundColor="rgba(158, 154, 154,0.3)"
    coursel_btn_1.style.color="hsl(240, 76.2%, 8.2%)"
    coursel_item.innerHTML=coursel_item_array[1]
    console.log("hello");
})
