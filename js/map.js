    ymaps.ready(init);

    function init() {
      // Создание карты.    
      const myMap = new ymaps.Map("map", {
        center: [43.236254, 76.945710],
        zoom: 14
      });
      myMap.geoObjects.add(new ymaps.Placemark([43.236254, 76.945710], {
        iconCaption: 'Алматы'
      }, {
        preset: 'islands#blueCircleDotIconWithCaption'
      }));
      myMap.behaviors.disable('scrollZoom');
    }