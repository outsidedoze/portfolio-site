$(document).ready(function() {
  var baseZIndex = 1;

  

  
  $('.finder-window').on('transitionend', function() {
    var display = $(this).css('display');

    if (display === 'block') {
      var highestZIndex = baseZIndex;
      $('.finder-window').each(function() {
        var currentZIndex = parseInt($(this).css('z-index'), 10);
        if (currentZIndex > highestZIndex) {
          highestZIndex = currentZIndex;
        }
      });
      $(this).css('z-index', highestZIndex + 1);
    }
  });

  $('.finder-window-link').on('click', function() {
    $('.finder-window').not($(this).closest('.finder-window')).css('z-index', baseZIndex);
    var highestZIndex = baseZIndex;
    $('.finder-window').each(function() {
      var currentZIndex = parseInt($(this).css('z-index'), 10);
      if (currentZIndex > highestZIndex) {
        highestZIndex = currentZIndex;
      }
    });
    $(this).closest('.finder-window').css('z-index', highestZIndex + 1);
  });

  // Function to make finder-window draggable
  $('.finder-window').draggable();
  $('.portfolio-icon').draggable();

  // Function to handle click on close-button
  $('.close-button').click(function(event) {
    event.stopPropagation();
    var lastSelectedWindow = $(this).closest('.finder-window');
    lastSelectedWindow.fadeOut('fast');
  });

  // Function to handle click on portfolio-icon
  $('.portfolio-icon').click(function() {
    $('.finder-window').not('.first-window').fadeOut('fast');
    $('.first-window').fadeIn('fast').css('z-index', 2);
  });

  // Function to handle click on lm-branding-button
  $('.lm-branding-button').click(function() {
  var highestZIndex = baseZIndex;
  $('.finder-window').each(function() {
    var currentZIndex = parseInt($(this).css('z-index'), 10);
    if (currentZIndex > highestZIndex) {
      highestZIndex = currentZIndex;
    }
  });
    $('.finder-window').not('.landmade-branding').css('z-index', baseZIndex);
    $('.landmade-branding').fadeIn('fast').css('z-index', highestZIndex + 2);
   
    // Randomize the position of .landmade-branding within .drag-container
    var container = $('.drag-container');
    var containerWidth = container.width();
    var containerHeight = container.height();
    var brandingWidth = $('.landmade-branding').outerWidth(true);
    var brandingHeight = $('.landmade-branding').outerHeight(true);
    var maxX = containerWidth - brandingWidth;
    var maxY = containerHeight - brandingHeight;
    var randomX = Math.floor(Math.random() * (maxX + 1));
    var randomY = Math.floor(Math.random() * (maxY + 1));
    $('.landmade-branding').css({
      left: randomX + 'px',
      top: randomY + 'px'
    });
  });

  // Function to handle click on for-me-button
  $('.for-me-button').click(function() {
    $('.finder-step-2 .finder-columns').children().css('display', 'none');
    $('.finder-step-3').children().css('display', 'none');
    $('.finder-step-2 .for-me').css('display', 'block');
    $('.finder-step-2 .for-others').css('display', 'none');
    $(this).css({
      'background-color': '#788B6C',
      'color': '#FEFFF5'
    });
    $('.for-others-button').css({
      'background-color': 'transparent',
      'color': '#788B6C'
    });
    $('.for-me .finder-text, .for-others .finder-text').css({
      'color': 'Your Desired Color'
    });
  });

  // Function to handle click on for-others-button
  $('.for-others-button').click(function() {
    $('.finder-step-2 .finder-columns').children().css('display', 'none');
    $('.finder-step-3').children().css('display', 'none');
    $('.finder-step-2 .for-me').css('display', 'none');
    $('.finder-step-2 .for-others').css('display', 'block');
    $(this).css({
      'background-color': '#788B6C',
      'color': '#FEFFF5'
    });
    $('.for-me-button').css({
      'background-color': 'transparent',
      'color': '#788B6C'
    });
    // $('.for-me .finder-text, .for-others .finder-text').css({
    //   'color': '#FEFFF5'
    // });
  });

//   // Function to handle click on landmade-button
//   $('.landmade-button').click(function() {
//     $('.finder-step-3 .landmade-content-column').css('display', 'block');
//     $(this).css({
//       'background-color': '#788B6C',
//       'color': '#FEFFF5'
//     });
//     $('.landmade-button').not(this).css({
//       'background-color': 'transparent',
//       'color': '#788B6C'
//     });
//     $('.landmade-content-column .finder-text').css({
//       'color': '#FEFFF5'
//     });
//     $('.landmade-button .link-white').css({
//         'color': '#FEFFF5'
//       });
//   });
  
//   // Function to handle click on gs-button
//   $('.gs-button').click(function() {
//     $('.finder-step-3 .gs-content-column').css('display', 'block');
//     $(this).css({
//       'background-color': '#788B6C',
//       'color': '#FEFFF5'
//     });
//     $('.gs-button').not(this).css({
//       'background-color': 'transparent',
//       'color': '#788B6C'
//     });
//     $('.gs-content-column .finder-text').css({
//       'color': '#FEFFF5'
//     });
//     $('.gs-button .link-white').css({
//         'color': '#FEFFF5'
//       });
//   });

// Function to handle click on landmade-button
$('.landmade-button').click(function() {
    var clickedContentColumn = $(this).parent().find('.landmade-content-column');
  
    // Hide other subclasses of .finder-step-3
    $('.finder-step-3 .landmade-content-column').not(clickedContentColumn).css('display', 'none');
  
    clickedContentColumn.css('display', 'block'); // Show current subclass
  
    $(this).css({
      'background-color': '#788B6C',
      'color': '#FEFFF5'
    });
  
    $('.landmade-button').not(this).css({
      'background-color': 'transparent',
      'color': '#788B6C'
    });
  
    $('.landmade-content-column .finder-text').css({
      'color': '#FEFFF5'
    });
  
    $('.landmade-button .link-white').css({
      'color': '#FEFFF5'
    });
  });
  
  // Function to handle click on gs-button
$('.gs-button').click(function() {
    var clickedContentColumn = $(this).parent().find('.gs-content-column');
  
    // Hide other subclasses of .finder-step-3
    $('.finder-step-3 .gs-content-column').not(clickedContentColumn).css('display', 'none');
  
    clickedContentColumn.css('display', 'block'); // Show current subclass
  
    $(this).css({
      'background-color': '#788B6C',
      'color': '#FEFFF5'
    });
  
    $('.gs-button').not(this).css({
      'background-color': 'transparent',
      'color': '#788B6C'
    });
  
    $('.gs-content-column .finder-text').css({
      'color': '#FEFFF5'
    });
  
    $('.gs-button .link-white').css({
      'color': '#FEFFF5'
    });
  });
  

  // Function to handle click on lm-website-button
  $('.lm-website-button').click(function() {
    var highestZIndex = baseZIndex;
    $('.finder-window').each(function() {
      var currentZIndex = parseInt($(this).css('z-index'), 10);
      if (currentZIndex > highestZIndex) {
        highestZIndex = currentZIndex;
      }
    });
  
    $('.finder-window').not('.landmade-website').css('z-index', baseZIndex);
    $('.landmade-website').fadeIn('fast').css('z-index', highestZIndex + 2);
    
   
  
      // Randomize the position of .landmade-branding within .drag-container
      var container = $('.drag-container');
      var containerWidth = container.width();
      var containerHeight = container.height();
      var brandingWidth = $('.landmade-website').outerWidth(true);
      var brandingHeight = $('.landmade-website').outerHeight(true);
      var maxX = containerWidth - brandingWidth;
      var maxY = containerHeight - brandingHeight;
      var randomX = Math.floor(Math.random() * (maxX + 1));
      var randomY = Math.floor(Math.random() * (maxY + 1));
      $('.landmade-website').css({
        left: randomX + 'px',
        top: randomY + 'px'
      });
    });

    // Function to handle click on lm-website-button
  $('.lm-photoshoot-button').click(function() {
    var highestZIndex = baseZIndex;
    $('.finder-window').each(function() {
      var currentZIndex = parseInt($(this).css('z-index'), 10);
      if (currentZIndex > highestZIndex) {
        highestZIndex = currentZIndex;
      }
    });
  
    $('.finder-window').not('.lm-photoshoot').css('z-index', baseZIndex);
    $('.lm-photoshoot').fadeIn('fast').css('z-index', highestZIndex + 2);
    
   
  
      // Randomize the position of .landmade-branding within .drag-container
      var container = $('.drag-container');
      var containerWidth = container.width();
      var containerHeight = container.height();
      var brandingWidth = $('.lm-photoshoot').outerWidth(true);
      var brandingHeight = $('.lm-photoshoot').outerHeight(true);
      var maxX = containerWidth - brandingWidth;
      var maxY = containerHeight - brandingHeight;
      var randomX = Math.floor(Math.random() * (maxX + 1));
      var randomY = Math.floor(Math.random() * (maxY + 1));
      $('.lm-photoshoot').css({
        left: randomX + 'px',
        top: randomY + 'px'
      });
    });

     // Function to handle click on lm-summary-button
  $('.lm-summary-button').click(function() {
    var highestZIndex = baseZIndex;
    $('.finder-window').each(function() {
      var currentZIndex = parseInt($(this).css('z-index'), 10);
      if (currentZIndex > highestZIndex) {
        highestZIndex = currentZIndex;
      }
    });
  
    $('.finder-window').not('.lm-summary').css('z-index', baseZIndex);
    $('.lm-summary').fadeIn('fast').css('z-index', highestZIndex + 2);
    
   
  
      // Randomize the position of .landmade-branding within .drag-container
      var container = $('.drag-container');
      var containerWidth = container.width();
      var containerHeight = container.height();
      var brandingWidth = $('.lm-summary').outerWidth(true);
      var brandingHeight = $('.lm-summary').outerHeight(true);
      var maxX = containerWidth - brandingWidth;
      var maxY = containerHeight - brandingHeight;
      var randomX = Math.floor(Math.random() * (maxX + 1));
      var randomY = Math.floor(Math.random() * (maxY + 1));
      $('.lm-summary').css({
        left: randomX + 'px',
        top: randomY + 'px'
      });
    });



    

});




