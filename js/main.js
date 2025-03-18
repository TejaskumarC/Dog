(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


document.addEventListener('DOMContentLoaded', () => {
  const defaultCursor = document.getElementById('default-cursor');
  const pointerCursor = document.getElementById('pointer-cursor');
  let isCursorHidden = true;

  // Update cursor position on mouse move
  document.addEventListener('mousemove', (e) => {
    if (isCursorHidden) {
      defaultCursor.classList.remove('hidden-cursor');
      isCursorHidden = false;
    }
    defaultCursor.style.left = `${e.clientX}px`;
    defaultCursor.style.top = `${e.clientY}px`;
    pointerCursor.style.left = `${e.clientX}px`;
    pointerCursor.style.top = `${e.clientY}px`;
  });

  // Hide cursors when leaving the window
  document.addEventListener('mouseleave', () => {
    defaultCursor.classList.add('hidden-cursor');
    pointerCursor.classList.add('hidden-cursor');
    isCursorHidden = true;
  });

  // Switch to pointer cursor on hover (hide default cursor)
  const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]');
  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      defaultCursor.classList.add('hidden-cursor'); // Hide default cursor
      pointerCursor.classList.remove('hidden-cursor'); // Show pointer cursor
    });
    element.addEventListener('mouseleave', () => {
      defaultCursor.classList.remove('hidden-cursor'); // Show default cursor
      pointerCursor.classList.add('hidden-cursor'); // Hide pointer cursor
    });
  });

  // Optional: Add a "click" effect
  document.addEventListener('mousedown', () => {
    pointerCursor.style.transform = 'scale(0.8)';
  });
  document.addEventListener('mouseup', () => {
    pointerCursor.style.transform = 'scale(1)';
  });
});
