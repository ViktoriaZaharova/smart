// $('.main-slider').slick({
//
// });

$('.menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});

$('.links-search').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $(this).siblings('.form-search__header').fadeIn();
});

$('.overlay').click(function () {
    $('.form-search__header').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn-burger').click(function () {
    // $('.overlay').fadeIn();
    $(this).toggleClass('click');
   $('.mobile-menu').toggleClass('open');
   $('.mobile-menu .menu').toggleClass('active');
});

$(window).on('load resize', function() {
    if ($(window).width() > 576) {
        $('.main-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            fade: true
        });
    } else {
        $(".main-slider.slick-initialized").slick("unslick");
    }
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});



// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// Инициализация карты
ymaps.ready(init);

function init() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [56.892227, 40.799369],
        zoom: 14
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [56.892227, 40.799369], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '<div class="pic-points"> <div class="pic-points__title">Пункты выдачи:</div><div class="pic-points__address"><p>Проезд Складской 7.</p><p>Тел: 89068058367 Звонить в рабочие дни с 10:00 до 16:00 часов</p></div></div>',

        }, {
            iconImageHref: 'img/marker.png',  // картинка иконки
            iconImageSize: [23, 29],                                      // размеры картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}