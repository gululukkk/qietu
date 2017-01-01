(function () {
	var $img_list = $('#part2 .pic-box .pic');
	var index = 0;
	var fina_pic_index = $img_list.length - 1;
	var $numbered = $('#part2 .pic-box .numbered');
    $img_list.toggle_pic_display = function(numbered) {
        $(this).eq(numbered).stop(true).fadeIn()
            .siblings('img').stop('img').stop(true).fadeOut();
		$numbered.text(index+1);
    }
	$('#part2 .left-arrow').click(function() {
		index++;
		if (index > fina_pic_index) {
			index = 0;
		}
        $img_list.toggle_pic_display(index);
	});

	$('#part2 .right-arrow').click(function () {
		index--;
		if (index < 0) {
			index = fina_pic_index;
		}
		$img_list.toggle_pic_display(index);
	});
    
    var $dotted_list = $('#part2 .dotted-list .item');
    $dotted_list.click(function() {
        $(this).css('background','#c0a057')
            .siblings('.item').css('background','#5b5b5b');
        var index = $(this).index();
    	$img_list.toggle_pic_display(index);
    });
})();
