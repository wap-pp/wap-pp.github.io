require.config({
	paths: {
		jquery: '../../tools/jquery',
		easing: '.../../tools/jquery/easing'
	}
});

require(['a', 'b', 'c'], function(){
	c();
});
