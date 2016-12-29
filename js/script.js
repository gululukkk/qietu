(function () {
	var $img_list = $('#part2 .pic-box .pic');
	var index = 0;
	var fina_pic_index = $img_list.length - 1;
	var $numbered = $('#part2 .pic-box .numbered');
	$('#part2 .left-arrow').click(function() {
		index++;
		if (index > fina_pic_index) {
			index = 0;
		}
		$numbered.text(index);
		$img_list.eq(index).stop(true).fadeIn().siblings('img').stop(true).fadeOut();
	});

	$('#part2 .right-arrow').click(function () {
		index--;
		if (index < 0) {
			index = fina_pic_index;
		}
		$numbered.text(index);
		$img_list.eq(index).stop(true).fadeIn().siblings('img').stop(true).fadeOut();
	});
})();