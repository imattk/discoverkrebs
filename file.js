// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 2, stagger: 1.25 });
// tl.to(".slider", { y: "-100%", duration: 1, delay: 1});
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.25");
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
function lock(orientation){
  screen.orientation.lock(orientation);
}

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-200%",
    ease: Expo.easeInOut
  })

  TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".circle1", 1, {
    delay: 2.4,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".circle2", 1, {
    delay: 2.6,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  })
  TweenMax.from(".projects", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".menu-links ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  }, 0.08)

  TweenMax.from(".scrolldown", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".text .title", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.from(".text p", 1, {
    delay: 3.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.from(".watchnow", 1, {
    delay: 3.4,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".media ul li", 1, {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  }, 0.08)

 
  TweenMax.from('.logo-about', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom('.menu-links-about ul li', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut
  }, 0.08)


  TweenMax.from('.cart-about', 1, {
    delay: 1.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.to('.border-bottom-about', 1, {
    delay: 1.4,
    width: '100%',
    ease: Expo.easeInOut
  })

  TweenMax.from('.subtitle-about', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.to('.title-about', 1, {
    delay: 2.2,
    width: '100%',
    ease: Expo.easeInOut
  })

  TweenMax.from('.descript-about', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from('.readmore-about', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.to('.slider-about', 1, {
    delay: 3,
    opacity: 1,
    ease: Expo.easeInOut
  })

  TweenMax.to('.img-1-about', 1, {
    delay: 2.2,
    width: '450px',
    ease: Expo.easeInOut
  })

  TweenMax.to('.img-2-about', 1, {
    delay: 2.2,
    width: '300px',
    
    ease: Expo.easeInOut
  })

  TweenMax.to('.img-3-about', 1, {
    delay: 2.2,
    width: '350px',
    x: 550,
    ease: Expo.easeInOut
  })

  TweenMax.to('.first-about', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
  })

  TweenMax.to('.second-about', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
  })

  TweenMax.to('.third-about', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
  })

  TweenMax.from('.phone-img', 1, {
    delay: 1.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })
  TweenMax.from('.phone-pic', 1, {
    delay: 1.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })
  TweenMax.from('.laptop-img', 1, {
    delay: 1.2,
    opacity: 0,
    x: -200,
    ease: Expo.easeInOut
  })
  TweenMax.from('.laptop-pic', 1, {
    delay: 1.2,
    opacity: 0,
    x: -200,
    ease: Expo.easeInOut
  })
  TweenMax.staggerFrom(".menu-links-contact ul li", 1, {
    delay: 1.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  }, 0.08)

  TweenMax.from(".contact-logo", 1, {
    delay: 1.6,
    opacity: 0,
    y: -200,
    ease: Expo.easeInOut
  })
  TweenMax.from('.down-arrow', 1, {
    delay: 1.2,
    opacity: 0,
    y: -200,
    ease: Expo.easeInOut
  })


  //projects section 
  let slider = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true
  })
  
  slider.on('slideChange', function () {
    TweenMax.to('.slide-text span', .2, {
      y: '-100px',
    })
    TweenMax.to('.slide-number span', .2, {
      x: '-100px',
    })
    TweenMax.to('.slide-button span', .2, {
      y: '-5100px',
    })
    TweenMax.to('.swiper-slide-active', .5, {
      scale: .85
    })
  })
  
  slider.on('slideChangeTransitionEnd', function () {
  
    TweenMax.to('.slide-text span', .2, {
      y: 0,
      delay: .5
    })
    TweenMax.to('.slide-text span', 0, {
      y: '100px',
    })
  
    TweenMax.to('.slide-number span', .2, {
      x: 0,
      delay: .7
    })
    TweenMax.to('.slide-number span', 0, {
      x: '100px',
    })
    TweenMax.to('.slide-button span', .2, {
      y: 0,
      delay: .2
    })
    TweenMax.to('.slide-button span', 0, {
      y: '1000px',
    })
    TweenMax.to('.swiper-slide-active', .5, {
      scale: 1,
      ease: Power4.easeOut,
    })
  
    TweenMax.to('.swiper-slide-active .slide-text', 0, {
      autoAlpha: 1
    })
    TweenMax.to('.swiper-slide-active .slide-number', 0, {
      autoAlpha: 1
    })
    TweenMax.to('.swiper-slide-active .slide-button', 0, {
      autoAlpha: 1
    })
  
    TweenMax.to('.swiper-slide-next .slide-text', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-text', 0, {
      autoAlpha: 0
    })
    
  
    TweenMax.to('.swiper-slide-next .slide-number', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-number', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-next .slide-button', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-button', 0, {
      autoAlpha: 0
    })
  
  })
  
  TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
  })
  
  TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-next .slide-button', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-button', 0, {
    autoAlpha: 0
  })
  
  
  TweenMax.to('.swiper-slide', 0, {
    scale: .85,
  })
  
  TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
  })
  TweenMax.from('.slide-img', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })
  TweenMax.from('.slide-text', 1, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })
  TweenMax.from('.slide-number', 1, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })
  TweenMax.from('.slide-button', 1, {
    delay: 1.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })
  
  const sendMessage = document.getElementsByClassName(".send-btn")

  sendMessage.addEventListener('click', ()=>{
    Swal.fire({
      title: 'Thanks for Contacting me.',
      text: 'I will reply as soon as I can.',
      icon: 'success',
      confirmButtonText: 'Done'
    })
   
  })
