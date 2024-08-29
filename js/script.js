// BANNER NAME
// function replaceName() {
//     let name = prompt("Siapakah nama anda?", "");
//     document.getElementById("name").innerHTML = name;
//   }
  
//   replaceName();
  
//   document.getElementById("gantiNama").addEventListener("click", function () {
//     replaceName();
//   });

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

// FORM MESSAGE
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // DATE
    var current = new Date();
    var currentTime = current.toLocaleTimeString();

    // FORM VALUE
    var fname = document.getElementById('fname').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById('message').value;

    // DISPLAY OUTPUT
    document.getElementById('oname').textContent = fname;
    document.getElementById('odob').textContent = dob;
    document.getElementById('ogender').textContent = gender;
    document.getElementById('omessage').textContent = message;
    document.getElementById('otime').textContent = currentTime;
});