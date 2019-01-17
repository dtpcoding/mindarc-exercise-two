// Exercise two scripts
$(document).ready(function(){
    
    $('.accordion--open .accordion__content').show();

    $('.accordion__trigger').click(function(){
        var accordionContent = $(this).next('.accordion__content');
        $(this).parent().toggleClass('accordion--open');
        accordionContent.slideToggle('fast');
        accordionContent.parent().siblings().children('.accordion__content').slideUp('fast');
        accordionContent.parent().siblings('.accordion__row').removeClass('accordion--open');
    });

});