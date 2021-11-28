function showzirmajmoee() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "block";
}
 function hidezirmajmoee() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "none";
}
function showzirmajmoee2() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "block";
    document.getElementById("style-of-zirmenu-of-tamirat2").style.display = "block";
}
function hidezirmajmoee2() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "none";
    document.getElementById("style-of-zirmenu-of-tamirat2").style.display = "none";
}
function showzirmajmoee3() {
    document.getElementById("style-of-zirmenu-of-tamirat3").style.display = "block";
}
 function hidezirmajmoee3() {
    document.getElementById("style-of-zirmenu-of-tamirat3").style.display = "none";
}
function showzirmajmoee4() {
    document.getElementById("style-of-zirmenu-of-tamirat4").style.display = "block";
}
 function hidezirmajmoee4() {
    document.getElementById("style-of-zirmenu-of-tamirat4").style.display = "none";
}
function displaynonefirstbrandpic() {
    document.getElementById("display-first-brand-pic").style.display = "none";
}
function dispalymenuitems() {
    document.getElementById("display-of-menu-icon").style.display = "none";
    document.getElementById("display-of-menu-zarbdar").style.display = "block";
    document.getElementById("style-of-all-menu-mo").style.display = "block";
}
function bardispalymenuitems() {
    document.getElementById("display-of-menu-icon").style.display = "block";
    document.getElementById("display-of-menu-zarbdar").style.display = "none";
    document.getElementById("style-of-all-menu-mo").style.display = "none";
}



var wqwq = 0;
var wqwq1 = 0;
var wqwq2 = 0;
var wqwq3 = 0;
var wqwq4 = 0;


function ChangeAlamatOfMenu() {
    if (wqwq == 0){
        document.getElementById("style-x-in-menu-mo").style.display = "block";    
        document.getElementById("display-of-all-menu-in-mo").style.display = "block";    
        document.getElementById("style-hamberger-in-menu-mo").style.display = "none";   
        document.getElementById("slider").style.display = "none"; 
        document.getElementById('style-of-all-menu').style.height = "100%";
        wqwq ++;
    }

    else{
        document.getElementById("style-x-in-menu-mo").style.display = "none";    
        document.getElementById("display-of-all-menu-in-mo").style.display = "none";    
        document.getElementById("style-hamberger-in-menu-mo").style.display = "block";   
        document.getElementById("slider").style.display = "block";  
        document.getElementById('style-of-all-menu').style.height = "auto";
        wqwq --; 
    }
    // console.log(wqwq);
};


function displayOfZirMenuInMo1() {
    if (wqwq1 == 0){
        document.getElementById("display-of-zir-menu-in-mo1").style.display = "block";    
        wqwq1 ++;
    }

    else{
        document.getElementById("display-of-zir-menu-in-mo1").style.display = "none";    
        wqwq1 --; 
    }
    console.log(wqwq);
};

function displayOfZirMenuInMo2() {
    if (wqwq2 == 0){
        document.getElementById("display-of-zir-menu-in-mo3").style.display = "none";    
        document.getElementById("display-of-zir-menu-in-mo4").style.display = "none";    


        document.getElementById("display-of-zir-menu-in-mo2").style.display = "block";    
        wqwq2 ++;
    }

    else{
        document.getElementById("display-of-zir-menu-in-mo2").style.display = "none";    
        wqwq2 --; 
    }
    console.log(wqwq);
};

function displayOfZirMenuInMo3() {
    if (wqwq3 == 0){
        document.getElementById("display-of-zir-menu-in-mo2").style.display = "none";    
        document.getElementById("display-of-zir-menu-in-mo4").style.display = "none";    


        document.getElementById("display-of-zir-menu-in-mo3").style.display = "block";    
        wqwq3 ++;
    }

    else{
        document.getElementById("display-of-zir-menu-in-mo3").style.display = "none";    
        wqwq3 --; 
    }
    console.log(wqwq);
};

function displayOfZirMenuInMo4() {
    if (wqwq4 == 0){
        document.getElementById("display-of-zir-menu-in-mo2").style.display = "none";    
        document.getElementById("display-of-zir-menu-in-mo3").style.display = "none";    


        document.getElementById("display-of-zir-menu-in-mo4").style.display = "block";    
        wqwq4 ++;
    }

    else{
        document.getElementById("display-of-zir-menu-in-mo4").style.display = "none";    
        wqwq4 --; 
    }
    console.log(wqwq);
};


var slide = document.getElementsByClassName('slide')
// var dot = document.getElementsByClassName('dot')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var n = 0;
var i;


function disno() {
    for(i = 0 ; i<slide.length ; i++){
        slide[i].style.display = 'none';
    }
}

next.addEventListener('click' , function(e) {
    e.preventDefault();
    n++;
    if(n > slide.length - 1){
        n = 0;
    }
    disno();
    slide[n].style.display = 'block';
})

prev.addEventListener('click' , function(e) {
    e.preventDefault();
    n--;
    if(n < 0){
        n = slide.length - 1;
    }
    disno();
    slide[n].style.display = 'block';
})



setInterval(function(){
    n++;
    if(n > slide.length - 1){
        n = 0;
    }
    disno();
    slide[n].style.display = 'block';
},5000)

function hide_menu_desktop() {
    document.getElementById("hidemenudesktop").style.animationName = 'hide-menu-desktop';
    document.getElementById("show-menu-button").style.animationName = 'show-menu-button';
    document.getElementById("show-menu-button").style.right = '0%';
    document.getElementById("hidemenudesktop").style.left = '100%';
}

function show_menu_desktop() {
    document.getElementById("hidemenudesktop").style.animationName = 'show-menu-desktop';
    document.getElementById("show-menu-button").style.animationName = 'hide-menu-button';
    document.getElementById("show-menu-button").style.right = '100%';
    document.getElementById("hidemenudesktop").style.left = '0%';
}
// function show_menu_desktop() {
//     document.getElementById("hidemenudesktop").style.animationName = 'show-menu-desktop';
//     document.getElementById("hidemenudesktop").style.opacity = '1';
// }