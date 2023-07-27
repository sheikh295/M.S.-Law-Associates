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

var pic = "picture 1"
document.getElementById('m1arrowleft').addEventListener("click", function (){
    if (pic == "picture 1") {
        console.log('pic 1')
        document.getElementById('mainbg1').classList.add('hidden')
        document.getElementById('mainbg2').classList.remove('hidden')
        document.getElementById('m1content1').classList.add('hidden')
        document.getElementById('m1content2').classList.remove('hidden')
        pic = "picture 2";
    }

    else {
        console.log('pic 2')
        document.getElementById('mainbg1').classList.remove('hidden')
        document.getElementById('mainbg2').classList.add('hidden')
        document.getElementById('m1content1').classList.remove('hidden')
        document.getElementById('m1content2').classList.add('hidden')
        pic = "picture 1";
    }
})
document.getElementById('m1arrowright').addEventListener("click", function (){
        if (pic == "picture 1") {
            console.log('pic 1')
            document.getElementById('mainbg1').classList.add('hidden')
            document.getElementById('mainbg2').classList.remove('hidden')
            document.getElementById('m1content1').classList.add('hidden')
            document.getElementById('m1content2').classList.remove('hidden')
            pic = "picture 2";
        }
    
        else {
            console.log('pic 2')
            document.getElementById('mainbg1').classList.remove('hidden')
            document.getElementById('mainbg2').classList.add('hidden')
            document.getElementById('m1content1').classList.remove('hidden')
            document.getElementById('m1content2').classList.add('hidden')
            pic = "picture 1";
        }
})

setInterval(mainslideshow, 6000)

function mainslideshow() {
    if (pic == "picture 1") {
        console.log('pic 1')
        document.getElementById('mainbg1').classList.add('invisible')
        document.getElementById('mainbg1').classList.add('opacity-60')
        document.getElementById('mainbg2').classList.remove('invisible')
        document.getElementById('mainbg2').classList.remove('opacity-60')
        document.getElementById('m1content1').classList.add('hidden')
        document.getElementById('m1content1').classList.add('translate-y-10')
        document.getElementById('m1content2').classList.remove('hidden')
        document.getElementById('m1content2').classList.remove('translate-y-10')
        pic = "picture 2";
    }

    else {
        console.log('pic 2')
        document.getElementById('mainbg1').classList.remove('invisible')
        document.getElementById('mainbg1').classList.remove('opacity-60')
        document.getElementById('mainbg2').classList.add('invisible')
        document.getElementById('mainbg2').classList.add('opacity-60')
        document.getElementById('m1content1').classList.remove('hidden')
        document.getElementById('m1content1').classList.remove('translate-y-10')
        document.getElementById('m1content2').classList.add('hidden')
        document.getElementById('m1content2').classList.add('translate-y-10')
        pic = "picture 1";
    }
}