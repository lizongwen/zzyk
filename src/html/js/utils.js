var utils = {
	handleScrollHeader: function (callback) {
		var timer = 0
		var beforeScrollTop = window.pageYOffset
		callback = callback || function () { }
		window.addEventListener(
			'scroll',
			event => {
				clearTimeout(timer)
				timer = setTimeout(() => {
					var direction = 'up'
					const afterScrollTop = window.pageYOffset
					const delta = afterScrollTop - beforeScrollTop
					if (delta === 0) {
						return false
					}
					direction = delta > 0 ? 'down' : 'up'
					callback({ direction, currentTop: afterScrollTop })
					beforeScrollTop = afterScrollTop
				}, 10)
			},
			false
		)
	}
}

