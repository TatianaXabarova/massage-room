/*particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 4500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value":3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 600,
          "size": 60,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
*/



gsap.from(".title", {delay: 0.5, duration: 2, x: 100, opacity:0, stagger: 1})
gsap.from("#myVideo", {delay: 1, duration: 2, x: 100, opacity:0, stagger: 1})


//gsap.from(".stat", {delay: 3, duration: 2, x: 100, opacity:0,  easy: "custom"})


gsap.from(".heading", {delay: 0.5, duration: 2, x: 100, opacity:0, stagger: 1})
gsap.from(".text", {delay: 0.5, duration: 2, x: 100, opacity:0, stagger: 1})

gsap.from(".nav", {delay: 1, duration: 2, y: 100, opacity:0})

const next = document.querySelector("#next");
const back = document.querySelector("#back");

const photos = ['https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/IMG-20211109-WA0015.jpg?v=1654974771509', 'https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/IMG-20211109-WA0014.jpg?v=1654974758202', 'https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/IMG-20211109-WA0042.jpg?v=1654974842227', 'https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/IMG-20211109-WA0043.jpg?v=1654974871166', 'https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/IMG-20211109-WA0029.jpg?v=1654974822054', 'https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/IMG-20211109-WA0028.jpg?v=1654974809027', 'https://cdn.glitch.global/28b10aa6-d803-4dcf-a54a-b84585dff530/PHOTO-2022-06-12-12-33-13.jpg?v=1655066234477'];

let i = 0;

next.addEventListener('click',  () =>  {
i++;  
if (i > photos.length-1) {
  i=0;
}
document.querySelector("#pictures").src = photos[i];

})

back.addEventListener('click', () => {
  i--;
  if (i < 0) {
    i=photos.length-1;
  }
  document.querySelector("#pictures").src = photos[i];
})

