$(document).ready(function() {

	var $album1 = $(".album1");
	var $album2 = $(".album2");
	var $album3 = $(".album3");
	var $gallerynav = $(".gallerynav")



$(".album1Link").click(function(){
		event.preventDefault();
		if($gallery1.hasClass("show")){
			return;
		} else{
			$gallery1.siblings().removeClass("show");
			$gallery1.addClass("show");
			$gallerynav.addClass("hide");

			}
	});

$(".album2Link").click(function(){
		event.preventDefault();
		if($gallery2.hasClass("show")){
			return;
		} else{
			$gallery2.siblings().removeClass("show");
			$gallery2.addClass("show");
			$gallerynav.addClass("hide");

		}
	});

$(".album3Link").click(function(){
		event.preventDefault();
		if($gallery3.hasClass("show")){
			return;
		} else{
			$gallery3.siblings().removeClass("show");
			$gallery3.addClass("show");
			$gallerynav.addClass("hide");

		}

	});

var $img = $(".gallery-thumbnails");

$img.click(function(){
		if( $(this).hasClass("clickedimg")){
			return;
		} else{
			$(this).siblings().removeClass("clickedimg");
			$(this).siblings().children().removeClass("bigimg");
			$(this).toggleClass("clickedimg");
			$(this).children().addClass("bigimg");
		}

		});

});