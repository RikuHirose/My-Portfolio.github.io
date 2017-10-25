// ページ内リンク、スムーススクロール
$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing" );
		return false;
	});
});

// progress

$(function() {
  var $win = $(window),
      $progress = $('.add'),
      progress = '.progress',
      skill = '.skill';


  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
      if ( value > 1450 ) {
          $('.html').animate({width:'65%'},2000);
          $('.css').animate({width:'65%'},2000);
          $('.js').animate({width:'20%'},2000);
          $('.ruby').animate({width:'40%'},2000);
          $('.wordpress').animate({width:'15%'},2000);
      } else {
      }
  });
});


// navのbackgroundcolor 変える
$(function() {
  var $win = $(window),
      $nav = $('.nav'),
      animationClass = 'nav-link-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 790 ) {
      $nav.addClass(animationClass);
    } else {
      $nav.removeClass(animationClass);
    }
  });
});

// contact display none
$(function() {
  var $win = $(window),
      $nav = $('.nav'),
      animationClass = 'nav-none';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 2300 ) {
      $nav.addClass(animationClass);
    } else {
      $nav.removeClass(animationClass);
    }
  });
});


