let searchBtn=document.querySelector("#search-btn");
let searchbar=document.querySelector( ".search-bar-container");
let formbtn=document.querySelector( "#login-btn");
let loginform=document.querySelector( ".login-form-container");
let formclose=document.querySelector( "#form-close");
let menue=document.querySelector( ".menue-btn-div");
let navbar=document.querySelector( "nav");
let vidbtn=document.querySelectorAll(".vid-btn");



window.onscroll=()=>{
    searchBtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
    
}

menue.addEventListener("click",()=>
{
navbar.classList.toggle('fa-times');
    navbar.classList.toggle('active-nav');
    
})

searchBtn.addEventListener("click",()=>
{
    searchBtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
    
})
formbtn.addEventListener("click",()=>
{
    loginform.classList.toggle ('openform');
    
    
})


vidbtn.forEach(btn=>{
    let src=btn.getAttribute('data-src');
    console.log("src is",src);
    btn.addEventListener("click",()=>{
        
        document.querySelector(".video-slider").src=src;
        

    })
    
    
})


