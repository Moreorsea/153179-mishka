ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [59.93863106, 30.32305450],
      zoom: 20
  });

  myPlacemark = new ymaps.Placemark([59.93863106, 30.32305450], {
    hintContent: 'Москва!',
    balloonContent: 'Столица России'
  });

  myMap.geoObjects.add(myPlacemark);
}
