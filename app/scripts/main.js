$('ul.navbar-nav li').on('click', function(e) {
    var el = $(e.currentTarget),
        a = $(el.find('a').attr('href'));
    $('ul.navbar-nav li').removeClass('active');
    $('#accordion').removeClass('hidden');
    el.addClass('active')
    a.closest('div').next().height('auto');
    a.closest('div').next().addClass('in');
});