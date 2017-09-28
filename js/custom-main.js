//Ripple Effect
var ripple = function (element, options) {
    this.$element = $(element);
    this.options = options;

}

ripple.prototype.init = function () {
    var $element = this.$element;
    var options = this.options;
    this.$element.click(function (e) {
        $element.css({
            'position': 'relative',
            'overflow': 'hidden'
        });
        if ($element.find('.rpl-efct').length == 0) {
            $('<span class="rpl-efct"></span>').appendTo($element);
        }

        var ink = $element.find('.rpl-efct');
        ink.css('animation', '');

        ink.css({
            'background': options.color
        });

        if (!ink.height() && !ink.width()) {
            d = Math.max($element.height(), $element.width());
            ink.css({
                'height': d,
                'width': d
            });
        }

        var x = e.pageX - $element.offset().left - ink.width() / 2;
        var y = e.pageY - $element.offset().top - ink.height() / 2;


        ink.css({
            'top': y + 'px',
            'left': x + 'px',
            'animation': 'ripple' + ' ' + options.time + ' ' + 'ease-in'
        });
    });
}

$.fn.ripple = function (option) {
    return this.each(function () {
        var options = $.extend({}, $.fn.ripple.default, option);
        var a = new ripple(this, options);
        a.init();
    })
}

$.fn.ripple.default = {
    color: 'rgba(255,255,255,.5)',
    time: '0.6s'
}

//Accordian Menu
var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.inr-link');
    // Evento
    links.on('click', {
        el: this.el,
        multiple: this.multiple
    }, this.dropdown)
}

Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
        $el.find('.left-submenu').not($next).slideUp().parent().removeClass('open');
    };
}
var accordion = new Accordion($('.accordion-innr'), false);


$('#text-importer').click(function(){
    $('.post-opt-block').hide();
    $('.txt-post-block.post-opt-block').show();
});
$('#img-importer').click(function(){
    $('.post-opt-block').hide();
    $('.img-post-block.post-opt-block').show();
});
$('#video-importer').click(function(){
    $('.post-opt-block').hide();
    $('.video-post-block.post-opt-block').show();
});