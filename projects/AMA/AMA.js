$('.item').click(function() {
	var item = $(this);
	var content = item.find('.item-content');
	var lightbox = '<div class="lightbox"><div class="lightbox-inner">' + content + '</div></div>';

	item.addClass('has-been-clicked');
	
	$('body').append(lightbox);
});

// Closing a lightbox
$('.lightbox').remove();
