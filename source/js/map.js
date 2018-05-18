ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [59.93863106, 30.32305450],
      zoom: 10
  });

  myPlacemark = new ymaps.Placemark([59.93863106, 30.32305450], {
    hintContent: 'Питер',
    balloonContent: 'Вторая столица России'
  });

  myMap.geoObjects.add(myPlacemark);
}

var carts = document.querySelectorAll('.catalog-item__price-link');
var popup = document.querySelector('.product-card');
var popupAdd = popup.querySelector('.button--vary');

var showPopupHandler = function (e) {
e.preventDefault();
popup.classList.add('product-card--show');
};

var closePopupHandler = function () {
popup.classList.remove('product-card--show');
};

[].forEach.call(carts, function (item) {
item.addEventListener('click', showPopupHandler);
});

popupAdd.addEventListener('click', closePopupHandler);
