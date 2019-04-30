$(function () {
	window.onload = () => {
		PageContentHeight = document.getElementById('app').clientHeight;
		htmlHeight = document.body.clientHeight;
		finalPx = PageContentHeight - htmlHeight - 345;
		utils.handleScrollHeader(resp => {
			if (resp.currentTop > 300) {
				$("#adBanner").show()
			} else {
				$("#adBanner").hide()
			}
			if (resp.currentTop > finalPx) {
				$("#adBanner").css('position', "absolute")
			}
			if (resp.currentTop < finalPx) {
				$("#adBanner").css('position', "fixed")

			}
		});
		window.addEventListener(
			"resize",
			event => {
				clearTimeout(timer);
				var timer = setTimeout(() => {
					htmlHeight = document.body.clientHeight;
				}, 10);
			},
			false
		);
		$("#closeAdbanner").on('click', function () {
			$(this).parents('#adBanner').remove()
		})
		$("#login").on('click', function () {
			location.href='login.html'
			// layer.open({
			// 	title: false,
			// 	area: ['495px','439px'],
			// 	skin:'login-dialog',
			// 	closeBtn:0,
			// 	type: 2,
			// 	content: 'login.html'
			// });
		});
		$("#register").on('click', function () {
			location.href='register.html'
			// layer.open({
			// 	title: false,
			// 	area: ['495px','550px'],
			// 	skin:'register-dialog',
			// 	closeBtn:0,
			// 	type: 2,
			// 	content: 'register.html'
			// });
		})
	};
})