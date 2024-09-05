document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".header h1", {
        duration: 1, y: -20, opacity: 0, ease: "power1.out"
    });
    gsap.from(".header p", {
        duration: 1, y: 20, opacity: 0, delay: 0.5, ease: "power1.out"
    });

    $(".btn-primary").hover(function () {
        $(this).css("background-color", "#0056b3");
    }, function () {
        $(this).css("background-color", "#007bff");
    });

    particlesJS('header', {
        particles: {
            number: {
                value: 150, density: {
                    enable: true, value_area: 800
                }
            }, color: {
                value: "#000000"
            }, shape: {
                type: "circle", stroke: {
                    width: 0, color: "#000000"
                }
            }, opacity: {
                value: 0.5, random: true
            }, size: {
                value: 3, random: true
            }, line_linked: {
                enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1
            }, move: {
                enable: true, speed: 5, direction: "none", random: true, out_mode: "out", bounce: true
            }
        }, retina_detect: true
    });
});

if (typeof VANTA !== 'undefined') VANTA.WAVES({
    el: "section",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x4a89c9,
    shininess: 30.00,
    waveHeight: 10.00,
    waveSpeed: 0.7,
    zoom: 0.9
});

