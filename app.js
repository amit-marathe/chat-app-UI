document.getElementById("three").addEventListener("click",function(){
    document.querySelector(".status").style.display = "initial";
    document.getElementById("right-main").style.display = "none";
});

// document.querySelector("input").addEventListener("click",function(){
//     document.getElementById("right-main").style.display = "initial";
// });

document.querySelector(".name1").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-1.png";
    document.querySelector(".dets h2").textContent = "Susannah Halliday";
    document.querySelector(".dets p").textContent = "online 8 min ago";
    document.querySelector(".sender1").style.display = "initial";
    document.querySelector(".sender2").style.display = "initial";
    document.querySelector(".sender3").style.display = "initial";
    document.getElementById("r-center2").style.display = "none";
    document.getElementById("r-center3").style.display = "none";
    document.getElementById("r-center5").style.display = "none";
});

document.querySelector(".name2").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-2.png";
    document.querySelector(".dets h2").textContent = "Kush Gibson";
    document.querySelector(".dets p").textContent = "online few min ago";
    document.querySelector(".sender3").style.display = "none";
    document.querySelector(".sender1").style.display = "none";
    document.querySelector(".sender2").style.display = "none";
    document.getElementById("r-center2").style.display = "initial";
    document.getElementById("r-center3").style.display = "none";
    document.getElementById("r-center5").style.display = "none";
});

document.querySelector(".name3").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-3.png";
    document.querySelector(".dets h2").textContent = "Timothy Ryan";
    document.querySelector(".dets p").textContent = "online 1 hour ago";
    document.querySelector(".sender1").style.display = "none";
    document.querySelector(".sender2").style.display = "none";
    document.querySelector(".sender3").style.display = "none";
    document.getElementById("r-center2").style.display = "none";
    document.getElementById("r-center3").style.display = "initial";
    document.getElementById("r-center5").style.display = "none";
});

document.querySelector(".name4").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-4.png";
    document.querySelector(".dets h2").textContent = "Damon Mccarty";
    document.querySelector(".dets p").textContent = "online 20 mins ago";
    document.querySelector(".sender3").style.display = "none";
    document.querySelector(".sender1").style.display = "none";
    document.querySelector(".sender2").style.display = "none";
    document.getElementById("r-center2").style.display = "none";
    document.getElementById("r-center2").style.display = "initial";
    document.getElementById("r-center3").style.display = "none";
    document.getElementById("r-center5").style.display = "none";
});

document.querySelector(".name5").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-5.png";
    document.querySelector(".dets h2").textContent = "Bethan Webb";
    document.querySelector(".dets p").textContent = "online 5 hour ago";
    document.querySelector(".sender3").style.display = "none";
    document.querySelector(".sender1").style.display = "none";
    document.querySelector(".sender2").style.display = "none";
    document.getElementById("r-center2").style.display = "none";
    document.getElementById("r-center3").style.display = "none";
    document.getElementById("r-center5").style.display = "initial";
});

document.querySelector(".name6").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-6.png";
    document.querySelector(".dets h2").textContent = "Camron Barry";
    document.querySelector(".dets p").textContent = "online 1 day ago";
    document.querySelector(".sender3").style.display = "none";
    document.querySelector(".sender1").style.display = "none";
    document.querySelector(".sender2").style.display = "none";
    document.getElementById("r-center2").style.display = "none";
    document.getElementById("r-center2").style.display = "initial";
    document.getElementById("r-center3").style.display = "none";
    document.getElementById("r-center5").style.display = "none";
});

document.querySelector(".name7").addEventListener("click",function(){
    document.querySelector(".status").style.display = "none";
    document.getElementById("right-main").style.display = "initial";
    document.getElementById("pic1").src= "./img/pic-7.png";
    document.querySelector(".dets h2").textContent = "Barbara Dejesus";
    document.querySelector(".dets p").textContent = "online 2 hour ago";
    document.querySelector(".sender3").style.display = "initial";
    document.querySelector(".sender1").style.display = "initial";
    document.querySelector(".sender2").style.display = "initial";
    document.getElementById("r-center2").style.display = "none";
    document.getElementById("r-center3").style.display = "none";
    document.getElementById("r-center5").style.display = "none";
});

function view(x){
    if(x.matches){
        
        document.querySelector(".name1").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        });

        document.querySelector(".name2").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        document.getElementById("r-center2").style.display = "initial";
        });

        document.querySelector(".name3").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        });

        document.querySelector(".name4").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        document.getElementById("r-center2").style.display = "initial";
        });

        document.querySelector(".name5").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        });

        document.querySelector(".name6").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        document.getElementById("r-center2").style.display = "initial";
        });

        document.querySelector(".name7").addEventListener("click", function(){
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "initial";
        document.getElementById("right-main").style.display = "initial";
        });

        document.getElementById("three").addEventListener("click", function(){
        document.getElementById("left").style.display = "initial";
        document.getElementById("right").style.display = "none";
        });   
    }
    else{}
}

var x = window.matchMedia("(max-width: 360px)");
view(x);
