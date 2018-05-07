$(document).ready(function(){

  var product = $(".product-nav");

  var posters = $(".posters");
  var measures = $(".measures");
  var stickers = $(".stickers");

  product.on('click', function(){

      if($(this).attr('data') === "poster") {
        adjustClasses($(this));
        $('.posters').removeClass("hidden");
      }
      else if($(this).attr('data') === 'measure') {
        adjustClasses($(this));
        $('.measures').removeClass("hidden");
      }
      else if ($(this).attr('data') === 'sticker') {
        adjustClasses($(this));
        $('.stickers').removeClass("hidden");
      }
  })
});

function adjustClasses(target) {
  $('.products').addClass("hidden");
  $('.product-nav').removeClass('active');

  $(target).addClass('active');
}
