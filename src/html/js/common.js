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
			layer.open({
				title: false,
				area: ['495px','445px'],
				closeBtn:false,
				type: 2,
				content: 'login.html'
			});
		})
	};
})