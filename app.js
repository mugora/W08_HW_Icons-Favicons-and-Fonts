let menu=document.getElementById("menu");
let hb=document.getElementById("menuButton");

hb.addEventListener("click",function (){
    if(menu.style.display==="block") {
        hb.innerHTML="<i class=\"fa-solid fa-angle-down\"></i>";
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
        hb.innerHTML="<i class=\"fa-solid fa-angle-down\"></i>";
    }
});

window.addEventListener("resize", function(){
    if(window.matchMedia("(max-width: 600px)").matches)
    {
        menu.style.display="none";
        hb.innerHTML="<i class=\"fa-solid fa-angle-down\"></i>";
    }
});