var home = document.getElementById('lli1');
var about = document.getElementById('lli2');
var projects = document.getElementById('lli3');
var contact = document.getElementById('lli4');
var time = document.getElementById('lli5');
var home_container = document.getElementById('home_container');
var about_container = document.getElementById('about_container');
var porjects_container = document.getElementById('projects_container');
var contact_container = document.getElementById('contact_container');
var time_container = document.getElementById('time_container');




addclass1();

function addclass1(){
    home.classList.add("decoration");
    try{

        console.log("hii");
        
        
        about.classList.remove("decoration");
        projects.classList.remove("decoration");
        contact.classList.remove("decoration");
        time.classList.remove("decoration");
        about_container.classList.add("hidding");
        contact_container.classList.add("hidding");
        time_container.classList.add("hidding");
        home_container.classList.remove("hidding");
        porjects_container.classList.add("hidding");


    }
    catch{

    }
}
function addclass2(){
    about.classList.add("decoration");
    try{
        
        home.classList.remove("decoration");
        projects.classList.remove("decoration");
        contact.classList.remove("decoration");
        time.classList.remove("decoration");
        about_container.classList.remove("hidding");
        contact_container.classList.add("hidding");
        time_container.classList.add("hidding");
        home_container.classList.add("hidding");
        porjects_container.classList.add("hidding");
        console.log("hii");

    }
    catch{

    }
}
function addclass3(){
    projects.classList.add("decoration");
    try{
        
        home.classList.remove("decoration");
        about.classList.remove("decoration");
        contact.classList.remove("decoration");
        time.classList.remove("decoration");
        about_container.classList.add("hidding");
        porjects_container.classList.remove("hidding");
        contact_container.classList.add("hidding");
        time_container.classList.add("hidding");
        home_container.classList.add("hidding");
        console.log("hii");

    }
    catch{

    }
}
function addclass4(){
    contact.classList.add("decoration");
    try{
        
        home.classList.remove("decoration");
        about.classList.remove("decoration");
        projects.classList.remove("decoration");
        time.classList.remove("decoration");
        about_container.classList.add("hidding");
        porjects_container.classList.add("hidding");
        contact_container.classList.remove("hidding");
        time_container.classList.add("hidding");
        home_container.classList.add("hidding");
        console.log("hii");

    }
    catch{

    }
}
function addclass5(){
    time.classList.add("decoration");
    try{
        
        home.classList.remove("decoration");
        projects.classList.remove("decoration");
        contact.classList.remove("decoration");
        about.classList.remove("decoration");
        about_container.classList.add("hidding");
        porjects_container.classList.add("hidding");
        contact_container.classList.add("hidding");
        time_container.classList.remove("hidding");
        home_container.classList.add("hidding");
        console.log("hii");
    }
    catch{

    }
}

