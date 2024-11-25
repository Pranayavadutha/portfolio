 function myMenuFunction()
 {
    var menuBth=document.getElementById("myNavMenu");

    if(menuBth.className==="nav-menu")
    {
        menuBth.className += "responsive";
    }
    else{
        menuBth.className="nav-menu";
    }
 }

 /*---dark mode----*/
 const body=document.querySelector("body");
 toggleSwitch=document.getElementById("toggel-switch");
 toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
 });

 var typingEffect= new Typed(".typedText",{
    strings:["Designer","coder","Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
 });
/*
 const sr=ScrollReval({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,

 });
 sr.reveal(".featured-name", {delay:100});
 sr.reveal(".text-info", {delay:200});
 sr.reveal(".text-btn", {delay:200});
 sr.reveal(".social_icons", {delay:200});
 sr.reveal(".featured-image", {delay:200});

 sr.reveal(".project-box", {interval:200});
 sr.reveal(".top-header", {});

 const srLeft=ScrollReveal({
    origin:"left",
    distance:"80px";
    duration:2000,
    reset:true,
 })

 srLeft.reveal(".about-info", {delay:100});
 srLeft.reveal(".contact-info", {delay:100});

 */