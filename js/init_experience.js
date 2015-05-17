// Hover Effects for Experience Section
$(function() {
    /** Hover effect for titles */
    $('.xp_item')
    .on("mouseover", function() {
        $(this).siblings().addClass('halfopacity');
    })
  .on("mouseout", function() {
        $(this).siblings().removeClass('halfopacity');
    });
    
    /** Hover effect for previous occupations. */
    $('.emp')
    .on("mouseover", function() {
        $('.detail', this).show();
    })
  .on("mouseout", function() {
        $('.detail', this).hide();
    });
});