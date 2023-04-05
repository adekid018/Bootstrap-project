let nav_downs=document.querySelectorAll('.nav-i')
let nav_content=document.querySelector(".dropdown-content")
let caret=document.querySelectorAll('.fa-caret-down')
let title_content=document.querySelector('.title_content')
let body=document.querySelector('body')
const top_data=[{
  header1:"Product",
  h_c:"A single platform to accept payments, protect revenue, and control your finances.",
body:[{
header2:"Payments",
body0:
  [{
 content0:"online",
 content0a:"Accept payments on your website and in-app"
  },
  {
    content1:"In-person",
 content1a:"Accept payments with terminals and devices"
  },
  {
  content2:"Cross channel",
 content2a:"Build journeys across sales channels"
  },
  {
    content3:"Adyen for Platforms",
   content3a:"Embed payments into your platform or marketplace"
    }
]},
{
  header2:"enhancement",
body1:[{
    content0:"Risk management",
    content0a:"Detect, prevent, and respond to fraud"
  },
  {
    content1:"Revenue optimization",
    content1a:"Optimize payments for more revenue"
  },
  {
  content2:"Adyen Impact",
    content2a:"Let customers support good causes"
  },
  {
    content3:"Authentication",
    content3a:"Improve the paying experience with smart authentication"
  }

]},{
  header2:"Financial products",
body2:[{
    content0:"Accounts",
    content0a:"Offer business bank accounts to users on your platform"
  },
  {
    content1:"Capital",
    content1a:"Enable fast business financing for your users"
  },
  {
  content2:"Issuing",
    content2a:"Create physical and virtual cards"
  }
]
}],
},
{
header1:"Businesses we serve",
  h_c:"Explore how our platform can unlock growth for your business type.",
body:[{
  header2:"Types",
body0:
  [{
 content0:"Digital businesses",
 content0a:"Software, social, gaming, digital media"
  },
  {
  content1:"Mobility",
  content1a:"Transportation of goods and people"
  },
  {
  content2:"Retail",
  content2a:"Jewelry, apparel, arts, cosmetics, electronics, homeware, grocery"
  },
  {
    content3:"Platforms & Marketplaces",
   content3a:"Connecting buyers and sellers online"
    }
]},
{
body1:[
  {
  content0:"Food & beverage",
  content0a:"Quick service restaurants, restaurant chains, bars"
},
{
  content1:"Hospitality",
  content1a:"Hotels, spas, venues, leisure parks, fitness"
},
{
  content2:"Subscription",
  content2a:"Streaming, subscription boxes, memberships"
}]
},{
header2:"Customers",
body2:
  [{
 content0:"Brands we work with",
 content0a:"See which leading brands are using our products"
  },
  {
  content1:"Case studies",
  content1a:"Find out how businesses have grown with Adyen"
  }
]}
]
},
{
  header1:"About",
  h_c:"With our financial technology platform, we help businesses achieve their ambitions faster.",
body:[{
header2:"Company",
body0:
  [{
 content0:"Our story",
 content0a:"Learn who we are as a company"
  },
  {
    content1:"Social responsibility",
 content1a:"Discover how we're building an ethical business"
  },
  {
  content2:"Careers",
 content2a:"Join our team"
  }
]},{
  body1:[
    {
    content0:"Investor Relations",
    content0a:"See our financial updates and upcoming events"
  },
  {
    content1:"Press & media",
    content1a:"View company news and press materials"
  }]
},{
  header2:"Contact",
body2:
  [{
 content0:"Get in touch",
 content0a:"Ways to reach us and office locations"
  },
  {
  content1:"Partner with us",
 content1a:"Learn how we can help drive your clients' growth"
  },
  {
  content2:"Careers",
 content2a:"Join our team"
  }
]}
]
}]

const navContentAnim = [
  { transform: "translateY(-300px)" },
  { transform: "translateY(0px)" },
];

const navContentAnimTiming = {
  duration: 300,
  iterations: 1,
};

for(let a=0; a<nav_downs.length; a++){
  nav_downs[a].addEventListener('click',(e)=>{

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
    
    /*
    else{
      //nav_content.classList.remove("d-none")
      console.log("This is none");
    }*/
  }
  console.log(nav_content)
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
window.addEventListener('resize',()=>{
if(window.innerWidth<=1200){
    console.log("workimg")
    nav_content.classList.add("d-none")
}
else{
console.log("not working");
nav_content.classList.remove("d-none")
}

})
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