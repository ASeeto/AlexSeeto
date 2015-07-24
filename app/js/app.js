define(['jquery',
		'underscore',
		'backbone',
		'router',
		'bootstrap',
		'lightbox'
		], 
    function($, _, Backbone, Router){
        var initialize = function(){
	        Router.initialize();
	    }
	    return {
	        initialize: initialize
	    };
	}
);