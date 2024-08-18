$('.btn__category').click(function () {
    if(!$(this).hasClass('active')) {
        $('.btn__category').removeClass('active');
        $(this).addClass('active');
        $('.portfolio__cards').fadeOut();
        $('#category-'+$(this).data('category-index')).fadeIn();
    }
});