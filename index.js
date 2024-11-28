// const toggleDrop = document.querySelector(".toggle");
// const toggleDrop2 = document.querySelector(".toggle2");
// const options = document.querySelector(".dropdown-menu2");
// const options2 = document.querySelector(".dropdown-menu");
// const rotate = document.querySelector(".rotate");
// const rotate2 = document.querySelector(".rotate2");
// const toggleSidebar = document.querySelector(".close");
// const sideBar = document.querySelector(".sidebar");

// toggleDrop2.addEventListener("click", ()=> options2.classList.toggle("active"));
// toggleDrop.addEventListener("click", ()=> options.classList.toggle("active"));
// toggleDrop2.addEventListener("click", ()=> rotate.classList.toggle("active"));
// toggleDrop.addEventListener("click", ()=> rotate2.classList.toggle("active"));
// toggleSidebar.addEventListener("click", ()=>sideBar.classList.toggle("active"));

function toggleDropdown1(){
    const toggle = document.querySelector(".dropdown-menu");
    const rotate = document.querySelector(".rotate");
    if(toggle.style.display === "flex"){
         toggle.style.display = "none";
    }else
        toggle.style.display = "flex";
        rotate.classList.toggle("active"); 
}
function toggleDropdown2(){
    const toggle2 = document.querySelector(".dropdown-menu2");
    const rotate2 = document.querySelector(".rotate2");
    if(toggle2.style.display === "block"){
         toggle2.style.display = "none";
    }else
        toggle2.style.display = "block";
        rotate2.classList.toggle("active"); 
}

function toggleDropdown3(){
    const toggle3 = document.querySelector(".sidebar-drop1");
    const rotate = document.querySelector(".rotate");
    if(toggle3.style.display === "inline-flex"){
         toggle3.style.display = "none";
    }else
        toggle3.style.display = "inline-flex";
        rotate.classList.toggle("active"); 
}
function toggleDropdown4(){
    const toggle4 = document.querySelector(".sidebar-drop2");
    const rotate2 = document.querySelector(".rotate2");
    if(toggle4.style.display === "block"){
         toggle4.style.display = "none";
    }else
        toggle4.style.display = "block";
        rotate2.classList.toggle("active"); 
}



function showSidebar(){
    const menuIcon = document.querySelector(".sidebar");
    const blur = document.querySelector(".blur");
    menuIcon.style.display = "block";
    blur.style.display ="block";

}

function hideSidebar(){
    const rotate2 = document.querySelector(".rotate2");
    const closeIcon = document.querySelector(".sidebar");
    const toggle4 = document.querySelector(".sidebar-drop2");
    const blur = document.querySelector(".blur");
    toggle4.style.display = "none";
    rotate2.classList.remove("active");
    closeIcon.style.display = "none";
    blur.style.display ="none";

    const toggle3 = document.querySelector(".sidebar-drop1");
    const rotate = document.querySelector(".rotate");
    toggle3.style.display = "none";
    rotate.classList.remove("active");

}