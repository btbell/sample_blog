$(document).ready(function() {
    $('.js-like-post').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $link.toggleClass('foo').toggleClass('goo');
        $('.js-like-post-count').html('TEST');
    });
});