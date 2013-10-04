console.log('\'Allo \'Allo!');
$('ul.navbar-nav li').on('click', function(e) {
    var el = $(e.currentTarget),
        isOpen = el.hasClass('active'),
        target = el.data().target || el.find('a').data().target,
        heading = $(target).prev();
    $('ul.navbar-nav li').removeClass('active');
    isOpen === true ? el.removeClass('active') : el.addClass('active');
    console.log(target, heading);
    //heading.animate({scrollTop: heading.offset().top});
    //window.scrollTo(0, $(target).prev().offset().top);
});