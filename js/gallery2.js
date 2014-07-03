$(document).ready(function() {

var $gallerynav = $(".gallery-nav")
var $bigpic = $("bigpic")

	  var showPage = function(event) {
      event.preventDefault();

      var $contentDiv = $("." + $(this).attr("rel"));

      console.log($contentDiv);
      
      if($contentDiv.hasClass("show")) {
        return;
      } else {
		$contentDiv.siblings().removeClass("show");
		$contentDiv.addClass("show");
		$gallerynav.addClass("hide");
      }

  }
  // when clicking on nav link
  // show related page in left column
  $(".gallery-nav a").click(showPage);


$("li img").click(function() {
    $(this).toggleClass("magnify");
    $(this).parent("li").siblings().children().toggleClass("hide");
});

// $("gallery li img").click( function() {
//     $( this ).addClass( "magnify" );
//      $(this).siblings().children().removeClass("show");
// }, .click(function() {
//     $( this ).closest("gallery li img").removeClass( "magnify" );
//     $(this).siblings().children().addClass("show");
// });

});



