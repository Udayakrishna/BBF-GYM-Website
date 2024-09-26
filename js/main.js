import aos from "https://esm.sh/aos";
var movementStrength = 25;

const hero = document.getElementById("section-hero");

hero.addEventListener("mousemove", (e) => {
  const div = document.createElement("div");
  div.classList.add("hero-section-mouseClick");
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
  const box = document.getElementById("section-hero");
  box.appendChild(div);
  setTimeout(() => {
    box.removeChild(div);
    div.remove();
  }, 200);
});

$(document).ready(function () {
  // Back to top button functionality
  $(window).scroll(function () {
      // Show or hide the button based on scroll position
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow'); // Show button
      } else {
          $('.back-to-top').fadeOut('slow'); // Hide button
      }
  });

  $('.back-to-top').click(function () {
      // Smooth scroll back to top
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false; // Prevent default action
  });

  // Sticky Navbar functionality
  $(window).scroll(function () {
      // Add or remove sticky class based on scroll position
      if ($(this).scrollTop() > 0) {
          $('.navbar').addClass('nav-sticky'); // Add sticky class
      } else {
          $('.navbar').removeClass('nav-sticky'); // Remove sticky class
      }
  });

  // Smooth scrolling on navbar links
  $(".navbar-nav a").on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault(); // Prevent default anchor click behavior

          // Smooth scroll to the target section
          $('html, body').animate({
              scrollTop: $(this.hash).offset().top - 45 // Offset for sticky navbar
          }, 1500, 'easeInOutExpo');

          // Update the active class in the navbar
          if ($(this).parents('.navbar-nav').length) {
              $('.navbar-nav .active').removeClass('active'); // Remove active class from current
              $(this).closest('a').addClass('active'); // Add active class to clicked link
          }
      }
  });
});
