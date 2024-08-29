// BANNER NAME
// function replaceName() {
//     let name = prompt("Siapakah nama anda?", "");
//     document.getElementById("name").innerHTML = name;
//   }
  
//   replaceName();
  
//   document.getElementById("gantiNama").addEventListener("click", function () {
//     replaceName();
//   });


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});

// BANNER IMAGE  
const slides = document.querySelector('.banner-img');
        const slideCount = document.querySelectorAll('.cover').length;
        let currentIndex = 0;

        function moveToNextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            const offset = -currentIndex * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        setInterval(moveToNextSlide, 3000);