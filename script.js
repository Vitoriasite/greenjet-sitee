$(document).ready(function(){
   $('#mobile_btn').on('click',function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');

   }); 

   //Secção ativa do navbar
   const sections= $('section');
   const navItems= $('.navitem');

   $(window).on('scroll', function() {
      const header = $('header');
      const scrollPosition= $(window).scrollTop() - header.outerHeight();

      if(scrollPosition<=0){
         header.css('box-shadow','none')
      }else{
         header.css('box-shadow','5px 2px 5px rgba(0, 0, 0, 0.1)')
      }

      let activeSectionIndex = 0;

      sections.each(function(i){
         const section = $(this);
         const sectionTop= section.offset().top - 96;
         const sectionBottom= sectionTop+ section.outerHeight();

         if(scrollPosition>=sectionTop && scrollPosition<sectionBottom){
            activeSectionIndex = i;
            return false;
         }

      })
      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
   });

   //Animações dos items

   ScrollReveal().reveal('#cta',{
      origin:'left',duration:1000,
      distance:'20%'
   });

   ScrollReveal().reveal('#tutorial',{
      origin:'bottom',duration:1000,
      distance:'20%'
   });

   ScrollReveal().reveal('.feedback',{
      origin:'right',duration:1000,
      distance:'20%'
   })


   ScrollReveal().reveal('#text',{
      origin:'bottom',duration:1000,
      distance:'20%'
   })

   ScrollReveal().reveal('.about-text',{
      origin:'bottom',duration:1000,
      distance:'20%'
   })
});


