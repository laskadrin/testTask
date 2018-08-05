$('.dropdown-trigger').dropdown({
    coverTrigger: false
});
function dashboard() { 
    document.getElementById("dashboard").style.display="flex";
    document.getElementById("other").style.display="none";  
    } 
function other() { 
    document.getElementById("dashboard").style.display="none"; 
    document.getElementById("other").style.display="flex"; 
}

  