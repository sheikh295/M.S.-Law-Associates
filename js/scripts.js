window.addEventListener('scroll', function() {
    if (scrollY > 150) {
        document.getElementById('navbar').classList.add("bg-[rgba(48,51,88,0.8)]");
        document.getElementById('navbarinner').classList.remove("bg-[rgba(48,51,88,0.8)]");
    }
    else if (scrollY < 150) {
        document.getElementById('navbar').classList.remove("bg-[rgba(48,51,88,0.8)]");
        document.getElementById('navbarinner').classList.add("bg-[rgba(48,51,88,0.8)]");
    }
});