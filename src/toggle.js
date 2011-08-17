(function toggleLib (context) {

	function noop () {
		return;
	}

	function toggle (expression, paths) {
		
		var specifiedPath;

		if (paths[expression]) {	
			specifiedPath = paths[expression]; 
		} else {
			if (paths['default']) {
				specifiedPath =  paths['default'];
			}
		}
		
		return (specifiedPath || noop)();
	}

	if (!context.toggle) {
		context.toggle = toggle;
	}
})(this);
