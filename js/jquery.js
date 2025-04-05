// Show on click
$('#btn-show').click(function () {
    $('#target-box').show();
});

// Hide on click
$('#btn-hide').click(function () {
    $('#target-box').hide();
});

// Fade In dclick
$('#btn-fadein').dblclick(function () {
    $('#target-box').fadeIn();
});

// Fade Out dclick
$('#btn-fadeout').dblclick(function () {
    $('#target-box').fadeOut();
});

// Slide Up 
$('#target-box').mouseenter(function () {
    $('#target-box').slideUp(800);
});

// Slide Down 
$('#target-box').mouseenter(function () {
    $('#target-box').slideDown();
});

// Animate 
$('#btn-animate').mouseleave(function () {
    $('#target-box').animate({
        width: '+=50px',
        height: '+=20px',
        opacity: 0.6
    }, 400).animate({
        width: '-=50px',
        height: '-=20px',
        opacity: 1
    }, 400);
});
