require.config({
    paths: {
        jquery:         'lib/jquery/dist/jquery',
        underscore:     'lib/underscore-amd/underscore',
        backbone:       'lib/backbone-amd/backbone',
        bootstrap:      'lib/bootstrap/dist/js/bootstrap',
        templates:      '../templates',
        lightbox:       'lib/ekko-lightbox.min'
    },
    shim : {
        'bootstrap' : { "deps" :['jquery'] },
        'lightbox' : { "deps" :['jquery', 'bootstrap']}
    }
});

require(['app',], function(App){
    App.initialize();
});