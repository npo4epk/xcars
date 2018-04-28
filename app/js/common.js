
"use strict";
var MapYandex = undefined;

$(document).ready(function() {

    $('#work-brands-list').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: ['<div class="owl-prev">&lt;</div>', '<div class="owl-next">&gt;</div>'],
        responsive: {
            0: {
                items: 1
            },
            680: {
                items: 2
            },
            1010: {
                items: 3
            },
            1290: {
                items: 3
            },
            1300: {
                items: 3
            },
            1301: {
                items: 4
            },
            1600: {
                items: 4
            },
            1601: {
                autoplay: false,
                items: 5
            }
        }
    });

    MapYandex = (function () {

        var $mapYandex = undefined,
            $mapYandexPlacemark = undefined;

        function __initMap() {
            var $map = $('#map');
            if($map.length) {
                $mapYandex = new ymaps.Map("map", {
                    center: [53.933211, 27.633014],
                    zoom: 16,
                    controls: []
                });
                $mapYandexPlacemark = new ymaps.Placemark($mapYandex.getCenter(), {
                    hintContent: "Ул. Кедышко, 26Б, ком.306",
                    balloonContent: "Ул. Кедышко, 26Б, ком.306"
                }, {
                    iconLayout: "default#image"
                });
                $mapYandex.behaviors.disable("scrollZoom");
                $mapYandex.geoObjects.add($mapYandexPlacemark);
            }
        }

        return {
            init : function () {
                __initMap();
            }
        };

    }());

    $('#header-burger-btn').click(function (event) {

        event.preventDefault();

        var
            $this           = $(event.target),
            $body           = $('body'),
            $header         = $($body).find('.header'),
            $header_block   = $($header).find('.header-block'),
            $header_wrapper = $($header_block).find('.header-wrapper'),
            $header_burger  = $($header_wrapper).find('.header-burger'),
            $header_menu    = $($header_wrapper).find('.header-menu'),
            $header_tel     = $($header_wrapper).find('.header-tel');

        $header_burger
            .append('<div class="header-burger-menu" id="header-burger-menu"></div>')
            .find('#header-burger-menu')
            .append('<div class="header-burger-container"></div>')
            .find('.header-burger-container')
            .append('<a href="#" class="header-burger__close" id="header-burger-close">')
            .append('<div class="container"></div>')
            .find('.container')
            .append($header_tel.clone())
            .append($header_menu.clone());

        $header_burger
            .find('#header-burger-close')
            .bind('click', {'$body': $body, '$header_burger': $header_burger}, function(event){

                event.preventDefault();

                var
                    $this          = $(event.target),
                    $body          = event.data.$body,
                    $header_burger = event.data.$header_burger;

                $header_burger
                    .find('#header-burger-menu')
                    .fadeOut('slow', function () {
                        $body.removeClass('body-hidden');
                        $(this).detach();
                    });
            });

        $body
            .addClass('body-hidden');

        $header_burger
            .find('#header-burger-menu')
            .fadeIn('slow');

    });

    $('#header-call-link').click(function (event) {

        event.preventDefault();

        var
            $this = $(event.target),
            $data_scroll = $($this).attr('data-scroll');

        $('html,body')
            .animate({scrollTop: $("#" + $data_scroll).offset().top}, 'slow');
    })

    $('.content-carousel__list').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        dotData: true,
        dotsContainer : '.content-preview',
        dotsData: true
    });
    
});
