'use strict';


var productItems = document.querySelectorAll('.products__items');
var productPoint = document.querySelectorAll('.products__point');

var slideNumber = 0;

var changeSlide = function(slides, points) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('products__items--active');
    slides[i].classList.remove('products__items--not-active');
    points[i].classList.add('products__point--active');
  }

  slideNumber += 1;

  if (slideNumber < slides.length) {
    for (var j = 0; j < slides.length; j++) {
      if (!(j === slideNumber)) {
        slides[j].classList.remove('products__items--active');
        slides[j].classList.add('products__items--not-active');
        points[j].classList.remove('products__point--active');
      }
    }
  } else {
    slideNumber = 0;
    for (var j = 0; j < slides.length; j++) {
      if (!(j === slideNumber)) {
        slides[j].classList.remove('products__items--active');
        slides[j].classList.add('products__items--not-active');
        points[j].classList.remove('products__point--active');
      }
    }
  }
  //смена положения пагинации, если номер слайда четный
  if((slideNumber+1) % 2 == 0) {
    points[slideNumber].parentNode.className += ' products__pagination--left';
  } else {
    //удаляем класс для левого положения, если номер слайда не четный
    points[slideNumber].parentNode.classList.remove('products__pagination--left');
  };
}

//запускаем функцию автоматического переключения слайдов без клика
var startSlideAutoChange = setInterval(changeSlide, 5000, productItems, productPoint, slideNumber);


var changeSlideToClick = function() {
  var dataId = event.target.getAttribute('data-id'); //получаем data id нажатой кнопки
  slideNumber = dataId-2; //преобразуем для передачи в функцию по смене слайдов

  changeSlide(productItems, productPoint);
}

for (var i = 0; i < productPoint.length; i++) {
  productPoint[i].addEventListener("click", function () {
    clearInterval(startSlideAutoChange);   //останавливаем автоматическую крутилку
    changeSlideToClick();
  } );
};

/////////////////////////////
/// ПЕРЕКЛЮЧАТЕЛЬ в  features
/////////////////////////////

var featuresItems = document.querySelectorAll('.features__item');
var activeItems = 0;

var toggleFeaturesItems = function(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains('features__item--active')) {
      activeItems = i;
      items[i].classList.remove('features__item--active');
    }
  }

  activeItems +=1;

  if (activeItems < items.length) {
    items[activeItems].classList.add('features__item--active');
  } else {
    activeItems = 0;
     items[activeItems].classList.add('features__item--active');
  }
}

setInterval(toggleFeaturesItems, 4000, featuresItems);
