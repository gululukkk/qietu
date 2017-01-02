(function () {
	var $img_list = $('#part2 .pic-box .pic');
	var index = 0;
	var fina_pic_index = $img_list.length - 1;
	var $numbered = $('#part2 .pic-box .numbered');
    $img_list.toggle_pic_display = function(numbered) {
        $(this).eq(numbered).stop(true).fadeIn()
            .siblings('img').stop(true).fadeOut();
		$numbered.text(index+1);
    }
	$('#part2 .left-arrow').click(function() {
		index++;
		if (index > fina_pic_index) {
			index = 0;
		}
        $dotted_list.toggle_dot_style($dotted_list.eq(index));
        $img_list.toggle_pic_display(index);
	});

	$('#part2 .right-arrow').click(function () {
		index--;
		if (index < 0) {
			index = fina_pic_index;
		}$dotted_list.toggle_dot_style($dotted_list.eq(index));
		$img_list.toggle_pic_display(index);
	});
    
    var $dotted_list = $('#part2 .dotted-list .item');
    $dotted_list.toggle_dot_style = function($elem) {
        $elem.css('background','#c0a057')
            .siblings('.item').css('background','#5b5b5b');

    }
    $dotted_list.click(function() {
        $dotted_list.toggle_dot_style($(this));
        var index = $(this).index();
        $img_list.toggle_pic_display(index);
    });
    window.toggle_pic_display = $img_list.toggle_pic_display;
})();

{
    let index = 0;
    $('#part3 .left-arrow').click(function() {
        let $img_list = $(this).siblings('img');
        index++;
        if ( index >= $img_list.length) {
            index = 0;
        }
        
        toggle_pic_display.call($img_list,index);
        
    });
    $('#part3 .right-arrow').click(function() {
        let $img_list = $(this).siblings('img');
        index--
        if ( index < 0) {
            index = $img_list.length - 1;
        }
        
        toggle_pic_display.call($img_list,index);
        
    });


}

{
	Caroursel.init($('.caroursel'));
}
