$('li').on('click', 'button', function(event) {
  var btn = $(event.target);
  btn.addClass('flat-btn');
});

//Grabbing elements in the DOM <div class="box box1"></div>
//Grabbing elements in the DOM <div class="box box2"></div>

// Grabs both boxes $('.box'); 
// Grabs just the first box $('.box1'); 

// Chaining $('.box').html('Hello World').addClass('animated').css('margin-left, 25px');
