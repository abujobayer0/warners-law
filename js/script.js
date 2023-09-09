
function initializeSwipers() {
    const width = window.innerWidth;
    console.log(width);
    
    var slidesPerViewValue = width < 700 ? 1 :width < 1024 ? 2 :width < 1440 ? 3: 4;
    var slidesPerViewValueBlog = width < 700 ? 1 :width < 1024 ? 2 :3;
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: slidesPerViewValue,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".first-button-next",
        prevEl: ".first-button-prev",
      },
    });
  
    var swiper2 = new Swiper(".practiceSwiper", {
      slidesPerView: slidesPerViewValue,
      spaceBetween: 30,
      centeredSlides: false,
      navigation: {
        nextEl: ".practice-button-next",
        prevEl: ".practice-button-prev",
      },
    });
  
    var swiper3 = new Swiper(".partnerSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".partner-button-next",
        prevEl: ".partner-button-prev",
      }, initialSlide: 1,
      loop:true
    });
    var swiper5 = new Swiper(".assosiateSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".assosiate-button-next",
        prevEl: ".assosiate-button-prev",
      }, initialSlide: 1,
      loop:true
    });
  
    var swiper4 = new Swiper(".blogSwiper", {
      slidesPerView: slidesPerViewValueBlog,
      spaceBetween: 30,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev",
      }, initialSlide: 0,
    });
  
  }
  

  initializeSwipers();
  

  window.addEventListener('resize', initializeSwipers);