import {body_nav_content_array,coursel_item_array,contact_dropdown} from "./arrays.js"
let phone_number=document.querySelector('.phone_number')
let error_msg=document.querySelector('.error_msg')
let error_msg1=document.querySelectorAll('.error_msg_new')

/*
phone_number.addEventListener('keyup',(event)=>{
    const re=/^(0{1})?[1-9]{3}-?[0-9]{3}-?[0-9]{4}$/g
    const result=re.test(event.target.value)
    if(!result){
        event.target.style.boxShadow="inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
        event.target.style.borderColor="#FF0000"
        error_msg.classList.remove("d-none")
    }
    else{
      event.target.style.boxShadow="inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px green"
      event.target.style.borderColor="green"
      error_msg.classList.add("d-none")
      console.log("true");
    }
    console.log(result);
})
*/
const showError=(event,id)=>{
  event.target.style.boxShadow="inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
  event.target.style.borderColor="#FF0000"
  error_msg1[id].classList.remove("d-none")
}
const showSuccess=(event,id)=>{
  event.target.style.boxShadow="inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px green"
  event.target.style.borderColor="green"
  error_msg1[id].classList.add("d-none")
}
const showNormal=(event,id)=>{
  event.target.style.boxShadow=""
  event.target.style.borderColor=""
  error_msg1[id].classList.add("d-none")
}
const phoneNumberRegex=(event,id)=>{
  phone_number.addEventListener('keyup',(event)=>{
    const re=/^(0{1})?[1-9]{1}[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/g
    const result=re.test(event.target.value)
    console.log(result);
    if(!result){
      return showError(event,id)
    }
    else{
      return showSuccess(event,id)
    }
    //return result
  })
}
const newForm=document.querySelector("#form")

form.addEventListener("focus",(event) => {
  
  form.addEventListener("keyup",(event)=>{
    let id=event.target.id.charAt(event.target.id.length-1)
    console.log(id);
    console.log(event.target.id.charAt(event.target.id.length-1))
    if(event.target.value==""){      
      showError(event,id)
    }
    else if(id==3){
      console.log("no 3");
      phoneNumberRegex(event,id)      
    }
  else{
    showSuccess(event,id)
  }  
  })

  form.addEventListener('change',(event)=>{
    let id=event.target.id.charAt(event.target.id.length-1)
    console.log(event.target.value);
    if(event.target.value==0){
      console.log("this is zero");
     return showError(event,id)
    }
    else{
      console.log("working not zero");
      showSuccess(event,id)
    }
    
  })
  },
  true
);

form.addEventListener(
  "blur",
  (event) => {
    let id=event.target.id.charAt(event.target.id.length-1)
    showNormal(event,id)
    //event.target.style.background = "";
  },
  true
);
const business_location=document.querySelector(".business_location")
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    data.forEach(element => {
      //console.log(element.name);
      business_location.innerHTML+=`<option value=${element.name}>${element.name}</option>`
    });
    //console.log(data.name)
  })
  .catch(error => console.error(error))

 const hidden_select=document.querySelector('#hidden_select')
 const hidden_select1=document.querySelector('#hidden_select1')
const payment_solution=document.querySelector(".payment_solution")
const hidden_label=document.querySelectorAll('.hidden_label')
payment_solution.addEventListener("change",(event)=>{
  console.log(event.target.value);
  if(event.target.value==0){
    hidden_select.classList.add("d-none")
  }
  if(event.target.value==1){
    hidden_label[0].textContent="Ecommerce platform"
    hidden_select.classList.remove("d-none")
    hidden_select.innerHTML=contact_dropdown[0]  
    hidden_select1.classList.add("d-none")
  }
  if(event.target.value==2){
    hidden_label[0].textContent="POS Software"
    hidden_select.classList.remove("d-none")
    hidden_select.innerHTML=contact_dropdown[1]  
    hidden_select1.classList.add("d-none")
  }
  if(event.target.value==3){
    hidden_label[0].textContent="Ecommerce platform"
    hidden_label[1].textContent="POS Software"
    hidden_select.classList.remove("d-none")
    hidden_select.innerHTML=contact_dropdown[0]  
    hidden_select1.innerHTML=contact_dropdown[1]  
    hidden_select1.classList.remove("d-none")
  }
  if(event.target.value==0){
    hidden_select.classList.add("d-none")
    hidden_select1.classList.add("d-none")
  }
console.log(event.target.value);
})