particlesJS("particles-js", {
    particles: {
        number: {
            value: 200, // Parçacık sayısını artır
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff1500"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff1500",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
});

// Technoblade'in vefat tarihi (30 Haziran 2022 UTC)
const technoTime = new Date('2022-06-30T00:00:00Z').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = now - technoTime;

    // Zaman hesaplamaları
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Sayıları animasyonlu güncelleme
    updateNumberWithAnimation('years', years);
    updateNumberWithAnimation('days', days);
    updateNumberWithAnimation('hours', hours);
    updateNumberWithAnimation('minutes', minutes);
    updateNumberWithAnimation('seconds', seconds);
}

function updateNumberWithAnimation(elementId, newValue) {
    const element = document.getElementById(elementId);
    const currentValue = parseInt(element.textContent);
    
    if (currentValue !== newValue) {
        element.classList.add('animate__animated', 'animate__fadeOutDown');
        
        setTimeout(() => {
            element.textContent = newValue;
            element.classList.remove('animate__fadeOutDown');
            element.classList.add('animate__fadeInUp');
            
            setTimeout(() => {
                element.classList.remove('animate__animated', 'animate__fadeInUp');
            }, 500);
        }, 500);
    }
}

// Sayacı her saniye güncelle
setInterval(updateTimer, 1000);

// Sayfa yüklendiğinde ilk güncellemeyi yap
updateTimer();

// Hover efektleri için
document.querySelectorAll('.time-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'translateY(-5px)';
    });
    
    box.addEventListener('mouseout', () => {
        box.style.transform = 'translateY(0)';
    });
});