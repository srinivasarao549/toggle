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
		
		if (typeof specifiedPath === 'string') {
			return toggle(specifiedPath, paths);
		} else {
			// Otherwise we assume it is a Function.
			return (specifiedPath || noop)();
		}
	}

	if (!context.toggle) {
		context.toggle = toggle;
	}
})(this);
