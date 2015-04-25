$(document).ready(function(){
  //var submissions = 0;
  var checkMark = '<span class="cross-off"></span>'
  var xMark = '<span class="delete"></span>'


  $('.options-area').prepend('<p class="dotted">Enter your items in the textbox below, then press enter or click add button</p>');
  $('.options-area').prepend('<p class="dotted">Drag to sort</p>');
  $('.options-area').prepend('<p class="dotted">What to buy....?</p>');

  function getItem() {
    $('#add-items').keydown(function (enter) {
      if (enter.keyCode == 13) {
        postItem();
      }
    });
  }

  getItem();

  function postItem() {
    var item = $('#add-items').val();
    var work = '<p class = "full-width no-strikethrough">' + xMark + item + checkMark + '</p>';
  $('#list-area').prepend(work);
  $('#add-items').val('');
  $('#list-area p:first-child')
    .css('opacity' , "0")
    .css("margin-top" , "-20px")
  .animate(
    { opacity: "1"},
    { queue: true, duration: 'slow'}
   )
  .animate(
    {marginTop: "5px"},
    { queue: false, duration: 'slow'}
    );
  }
  
  function crossOff() {
    $('.cross-off').toggle(function () {
      $(this).closest('p').addClass("strikethrough");
      console.log("struckyou")
    }, function() {
      $(this).closest('p').removeClass("active");
    });
  }
  
});
  

/*clears all items on list - reset button*/
$(document).on("click", ".reset", function() {
  $('#list-area').empty();
  //submissions = 0;
});

//cross-off x- delete button
$(document).on("click", ".delete", function() {
  $(this).closest('p').fadeOut(700);
});
//checking off list items
$(document).on("click" , ".cross-off", function() {
  if (!$(this).closest('p').hasClass('strikethrough')) {
    $(this).closest('p').addClass('strikethrough');
    $(this).siblings('.delete').addClass("alt-delete");
    $(this).addClass("alt-cross-off");
  }
  else {
    console.log("imma remove a strikethrough");
    $(this).closest('p').removeClass("strikethrough");
    $(this).siblings(".delete").removeClass("alt-delete");
    $(this).removeClass("alt-cross-off");
  }

});

//sortable list items??
  $('#list-area').sortable({ axis: "y" });