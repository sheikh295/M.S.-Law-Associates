window.addEventListener('scroll', function() {
    var scrollvalue = scrollY
    if (scrollY >= 50) {
        document.getElementById('menu').classList.remove('max-md:mt-[834px]')
        document.getElementById('menu').classList.add('max-md:mt-[720px]')
    }
    else if (scrollY < 50) {
        document.getElementById('menu').classList.add('max-md:mt-[834px]')
        document.getElementById('menu').classList.remove('max-md:mt-[720px]')
    };

    if (scrollY > 150) {
        document.getElementById('navbar').classList.add("bg-[rgba(48,51,88,0.8)]");
        document.getElementById('navbarinner').classList.remove("bg-[rgba(48,51,88,0.8)]");
    }
    else if (scrollY < 150) {
        document.getElementById('navbar').classList.remove("bg-[rgba(48,51,88,0.8)]");
        document.getElementById('navbarinner').classList.add("bg-[rgba(48,51,88,0.8)]");
    }
});

var navclass = "translate-x-full"
document.getElementById('menubtn').addEventListener("click", function() {
    if (navclass == "translate-x-full"){    
        document.getElementById('menu').classList.remove("translate-x-full");
        document.getElementById('menu').classList.add("translate-x-0");
        navclass = "translate-x-0";
    }
    else{
        document.getElementById('menu').classList.remove("translate-x-0");
        document.getElementById('menu').classList.add("translate-x-full");
        navclass = "translate-x-full";
    }
});