$JSView.controller = {
	viewA: function(e) {
		$JSView.dataView({},e)
	},
	viewB: function(e) {
		$JSView.dataView({},e)	
	},
	viewC: function(e) {
		$JSView.dataView({},e)
	},
	modalA: function(e) {
		$JSView.dataView({},e)	
	},
	viewGuess: function(e) {
		$JSView.dataView({
			'title': 'Bienvenid@'
		},e)
		$JSView.initSlide('#slide', {
            responsive: true,
            indicators: true
        });
	},
	menu: function(e){
		$JSView.dataView({},e)
	}
}
