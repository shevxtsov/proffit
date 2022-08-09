const items = [
    {
        id: 1,
        coord: [55.840907, 49.020724],
        title: "ТЦ «Мебельград»",
        address: "4-ый этаж, ул. Рахимова, д. 8",
        phone: "+7-965-587-12-23",
        clock: "10:00 — 20:00, без выходных, без обеда"
    },
    {
        id: 2,
        coord: [55.765685, 49.125769],
        title: "ТЦ «ЦДМ»",
        address: "3-й эт., ул. Г. Тукая, д. 115",
        phone: "+7-960-055-66-82",
        clock: "10:00 — 20:00, без выходных, без обеда"
    },
    {
        id: 3,
        coord: [55.782152, 49.106710],
        title: "ТЦ «Мебельный базар»",
        address: "3-й эт., ул. Нариманова, д. 44",
        phone: "+7-963-120-79-92",
        clock: "10:00 — 19:00, без выходных, без обеда"
    },
    {
        id: 4,
        coord: [55.826043, 49.148832],
        title: "ТЦ «Савиново»",
        address: "5-й эт., пр. Ямашева, д. 93",
        phone: "+7-960-055-66-83",
        clock: "10:00 — 20:00, без выходных, без обеда"
    }
];

ymaps.ready(function () {
  const map = new ymaps.Map('map', {
    center: [55.826043, 49.148832],
    zoom: 11,
    controls: [],
  });

  var imgMarker = 'images/map-marker.png',
  imgMarkerActive = 'images/map-marker-active.png',
  imgLayout = 'default#image',
  imgSize = [40, 56],
  imgOffset = [-5, -38];

  const markers = new ymaps.GeoObjectCollection();

  items.forEach(n => {
    const marker = new ymaps.Placemark(n.coord, { itemId: n.id }, { iconLayout: imgLayout, iconImageHref: imgMarker, iconImageSize: imgSize, iconImageOffset: imgOffset });
    // markerHover(marker);
    marker.events.add('click', onMarkerClick);
    markers.add(marker);
  });

  map.geoObjects.add(markers);


  function onMarkerClick(e) {
    const
      marker = e.get('target'),
      id = marker.properties.get('itemId');

    document.querySelectorAll('[data-id]').forEach(n => {
      n.classList.toggle('is-active', +n.dataset.id === id);
    });

    markers.each(n => n === marker
      ? n.options.set('iconImageHref', imgMarkerActive)
      : n.options.set('iconImageHref', imgMarker)
    );
  }

});


document.querySelector('.address-block').innerHTML = items
    .map(n => `<div data-id="${n.id}" class="address-block__item">
          <h5 class="address-block__name">${n.title}</h5>
          <p>Адрес: ${n.address}</p>
          <p>Телефон: ${n.phone}</p>
          <p>Время работы: ${n.clock}</p>
        </div>`).join('');


    // .map(n => `<div data-id="${n.id}" class="address-block__item">
    //     <div class="address-block__content">
    //         <h5 data-id="${n.id}" class="address-block__name">${n.title}</h5>
    //         <p>Адрес: ${n.address}</p>
    //         <p>Телефон: ${n.phone}</p>
    //         <p>Время работы: ${n.clock}</p>
    //         </div>
    //     </div>`).join('');


