function initializeSwipers() {
    const width = window.innerWidth;
    console.log(width);
    
    var slidesPerViewValue = width < 700 ? 1 : 4;
    var slidesPerViewValueBlog = width < 700 ? 1 : 3;
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: slidesPerViewValue,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    var swiper2 = new Swiper(".practiceSwiper", {
      slidesPerView: slidesPerViewValue,
      spaceBetween: 30,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    var swiper3 = new Swiper(".partnerSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    var swiper4 = new Swiper(".blogSwiper", {
      slidesPerView: slidesPerViewValueBlog,
      spaceBetween: 30,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  
  // Call the function initially
  initializeSwipers();
  
  // Add an event listener for window resize
  window.addEventListener('resize', initializeSwipers);