require.config({
    paths: {
        jquery:         'lib/jquery/dist/jquery',
        underscore:     'lib/underscore-amd/underscore',
        backbone:       'lib/backbone-amd/backbone',
        bootstrap:      'lib/bootstrap/dist/js/bootstrap',
        templates:      '../templates'
    },
    shim : {
        'bootstrap'     : { "deps" :['jquery'] }
    }
});

require(['app',], function(App){
    App.initialize();
});