$(function() {
  $('#nav').affix({
	offset: {top: 50 }
  });	

  $('body').scrollspy({ target: '#nav' })

  $('.scroll-top').click(function(){
	$('body,html').animate({scrollTop:0},1000);
  });

  $('#nav .navbar-nav li>a').click(function(){
	var link = $(this).attr('href');
	var posi = $(link).offset().top;
	$('body,html').animate({scrollTop:posi},700);
  });
  $('.owf-icon').each(function() {
	var tt = $(this).children('a').attr('title');
    $(this).tooltip({
	  placement: 'top auto',
	  title: tt
	});
  });
  $('.btn-popover').each(function() {
    $(this).popover({
	  placement: 'bottom auto'
	});
	$(this).on('click',function(){
	  $('.btn-popover').not($(this)).popover('hide');
	});
  });
});