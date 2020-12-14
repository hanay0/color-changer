// start fixed menu

$('.fixed-menu .fa-cog').click(function() {
    $(this).parent('.fixed-menu').toggleClass('is-visible');
    if($(this).parent('.fixed-menu').hasClass('is-visible')) {
        $(this).parent('.fixed-menu').animate({
            left: 0,
        }, 200);
    } else {
        $(this).parent('.fixed-menu').animate({
            left: '-220px',
        }, 200);
    }
});


// changing colors bar
$('.change-colors li').on('click', function() {

    $('body').attr('data-default-color', $(this).data('color'));

    $('.container').addClass('skin-color');

});