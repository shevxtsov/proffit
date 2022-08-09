ymaps.ready(function(){
    if ($('div').is('#map')) {
      var imgMarker = 'images/map-marker.png',
        imgMarkerActive = 'images/map-marker-active.png',
        imgLayout = 'default#image',
        imgSize = [40, 56],
        imgOffset = [-5, -38];

        
      
      var myMap = new ymaps.Map("map", {
        center: [55.840907, 49.020724],
        zoom: 10,
        controls: ['zoomControl']
      });
      
      function markerHover(marker){
        marker.events
            .add('mouseenter', function (e) {
                // Ссылку на объект, вызвавший событие,
                // можно получить из поля 'target'.
                e.get('target').options.set('iconImageHref', imgMarkerActive);
            })
            .add('mouseleave', function (e) {
                e.get('target').options.set('iconImageHref', imgMarker);
            });
        }

      var myPlacemark = new ymaps.Placemark([52.779265, 46.728007]);

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'ТЦ «Мебельград», ул. Рахимова, д. 8'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: imgLayout,
            // Своё изображение иконки метки.
            iconImageHref: imgMarker,
            // Размеры метки.
            iconImageSize: imgSize,
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: imgOffset
        });

        myPlacemark2 = new ymaps.Placemark([55.765685, 49.125769], {
            balloonContent: 'ТЦ «ЦДМ», ул. Г. Тукая, д. 115'
        }, {
            iconLayout: imgLayout,
            iconImageHref: imgMarker,
            iconImageSize: imgSize,
            iconImageOffset: imgOffset
        });       

        myPlacemark3 = new ymaps.Placemark([55.782152, 49.106710], {
            balloonContent: 'ТЦ «Мебельный базар», ул. Нариманова, д. 44'
        }, {
            iconLayout: imgLayout,
            iconImageHref: imgMarker,
            iconImageSize: imgSize,
            iconImageOffset: imgOffset
        });
        
        myPlacemark4 = new ymaps.Placemark([55.826043, 49.148832], {
            balloonContent: 'ТЦ «Савиново», пр. Ямашева, д. 93'
        }, {
            iconLayout: imgLayout,
            iconImageHref: imgMarker,
            iconImageSize: imgSize,
            iconImageOffset: imgOffset
        });


        markerHover(myPlacemark);
        markerHover(myPlacemark2);
        markerHover(myPlacemark3);
        markerHover(myPlacemark4);


      myMap.geoObjects.add(myPlacemark);
      myMap.geoObjects.add(myPlacemark2);
      myMap.geoObjects.add(myPlacemark3);
      myMap.geoObjects.add(myPlacemark4);
  
    };
  });