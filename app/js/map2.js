// Группы объектов
var groups = [
        {
            name: "Казань",
            // style: "images/map-marker.png",
            
            items: [
                {   
                    id: 1,
                    center: [55.840907, 49.020724],
                    name: "ТЦ «Мебельград»",
                    address: "4-ый этаж, ул. Рахимова, д. 8",
                    phone: "+7-965-587-12-23",
                    clock: "10:00 — 20:00, без выходных, без обеда"
                },
                {
                    id: 2,
                    center: [55.765685, 49.125769],
                    name: "ТЦ «ЦДМ»",
                    address: "3-й эт., ул. Г. Тукая, д. 115",
                    phone: "+7-960-055-66-82",
                    clock: "10:00 — 20:00, без выходных, без обеда"
                },
                {
                    id: 3,
                    center: [55.782152, 49.106710],
                    name: "ТЦ «Мебельный базар»",
                    address: "3-й эт., ул. Нариманова, д. 44",
                    phone: "+7-963-120-79-92",
                    clock: "10:00 — 19:00, без выходных, без обеда"
                },
                {
                    id: 4,
                    center: [55.826043, 49.148832],
                    name: "ТЦ «Савиново»",
                    address: "5-й эт., пр. Ямашева, д. 93",
                    phone: "+7-960-055-66-83",
                    clock: "10:00 — 20:00, без выходных, без обеда"
                }
            ]}
    ];
    

ymaps.ready(init);

function init() {
    var imgMarker = 'images/map-marker.png',
        imgMarkerActive = 'images/map-marker-active.png',
        imgLayout = 'default#image',
        imgSize = [40, 56],
        imgOffset = [-5, -38];

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [55.840907, 49.020724],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Контейнер для меню.
        menu = $('<div class="address-box"></div>');
        
    for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
    }

    function createMenuGroup (group) {
        // Пункт меню.
        var menuItem = $('<div class="address-block-responsive"></div>'),
        // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, { iconImageHref: imgMarker }),
        // Контейнер для подменю.
            submenu = $('<div class="address-block"></div>');

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(collection);
        // Добавляем подменю.
        menuItem
            .append(submenu)
            // Добавляем пункт в меню.
            .appendTo(menu)
            // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
            .find('h5')
            .bind('click', function () {
                if (collection.getParent()) {
                    myMap.geoObjects.remove(collection);
                   /*  submenu.hide(); */
                } else {
                    myMap.geoObjects.add(collection);
           /*          submenu.show(); */
                }
            });
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
    }

    function createSubMenu (item, collection, submenu) { 
        // Пункт подменю.
        var submenuItem = $(`<div class="address-block__item">
                <h5 data-id="${item.id}">${item.name}</h5>
                <p>Адрес: ${item.address}</p>
                <p>Телефон: ${item.phone}</p>
                <p>Время работы: ${item.clock}</p>
            </div>`),
        // Создаем метку.
            placemark = new ymaps.Placemark(item.center, { itemId: item.id }, { iconLayout: imgLayout, iconImageHref: imgMarker, iconImageSize: imgSize, iconImageOffset: imgOffset });

        // Добавляем метку в коллекцию.
        collection.add(placemark);
        

        // Добавляем пункт в подменю.
        submenuItem
            .appendTo(submenu)
            // При клике по пункту подменю открываем/закрываем баллун у метки.
            .find('h5')
            .bind('click', function (e) {
                // console.log(e.target);
                title = e.target;

                var previousTitleActive = $('.address-block__item.is-active');
                previousTitleActive.removeClass('is-active');
                title.parentNode.classList.add("is-active");

                var id = placemark.properties.get('itemId');
                var idTitle = title.getAttribute('data-id');
                console.log(id+ ' and ' + idTitle);

                // if (id == idTitle) {

                //     placemark.options.set('iconImageHref', imgMarkerActive);
                // }
            

                collection.each(placemark => idTitle == id
                    ? placemark.options.set('iconImageHref', imgMarkerActive)
                    : placemark.options.set('iconImageHref', imgMarker)
                  );

                // var markersActive = placemark.options.set('iconImageHref', imgMarkerActive);
                // markersActive = placemark.options.set('iconImageHref', imgMarker);

                
                // placemark.options.set('iconImageHref', imgMarkerActive);

                // setTimeout(() => {
                //     placemark.options.set('iconImageHref', imgMarker);
                // }, 2000)

                // if (placemark.options.set('iconImageHref', imgMarker)) {
                //     // placemark.balloon.open();
                //     // placemark.get('target').options.set('iconImageHref', imgMarkerActive);
                //     // placemark.options.set('preset', 'islands#redIcon');
                //     placemark.options.set('iconImageHref', imgMarkerActive);
                //     // console.log($(this).closest('.address-block__item'));
                //     // submenuItem.toggleClass('is-active');
                // } else {
                //     submenuItem.removeClass('is-active');
                //     placemark.balloon.close();
                //     placemark.options.set('iconImageHref', imgMarker);
                //     $(this).closest('.address-block__item').removeClass('is-active');
                // }
                return false;
            });

        // submenuItem
        //     .appendTo(submenu)
        //     .find('a')
        //     .bind('click', function () {
        //         $(this).each(plam => plam === placemark
        //             ? plam.options.set('iconImageHref', item.imgMarkerActive)
        //             : plam.options.set('iconImageHref', item.imgMarker)
        //         );
        //     });
    }

    // Добавляем меню в тэг BODY.
    menu.appendTo($('#map-address'));
    // Выставляем масштаб карты чтобы были видны все группы.
    myMap.setBounds(myMap.geoObjects.getBounds());
}