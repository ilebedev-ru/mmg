'use strict';

function Slider( element ) {
  this.el = document.querySelector( element );
  this.init();
}

Slider.prototype = {
  init: function() {
    this.links = this.el.querySelectorAll( ".products__point" );
    this.wrapper = this.el.querySelector( ".products__slider" );
    this.navigate();
  },
  navigate: function() {

    for( var i = 0; i < this.links.length; ++i ) {
      var link = this.links[i];
      this.slide( link );
    }
  },

  animate: function( slide ) {
    var parent = slide.parentNode;
    var caption = slide.querySelector( ".caption" );
    var captions = parent.querySelectorAll( ".caption" );
    for( var k = 0; k < captions.length; ++k ) {
      var cap = captions[k];
      if( cap !== caption ) {
        cap.classList.remove( "visible" );
      }
    }
    caption.classList.add( "visible" );
  },

  slide: function( element ) {
    var self = this;
    element.addEventListener( "click", function( e ) {
      e.preventDefault();
      var a = this;
      self.setCurrentLink( a );
      var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
      var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );

      self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
      self.animate( currentSlide );

    }, false);
  },
  setCurrentLink: function( link ) {
    var parent = link.parentNode;
    var a = parent.querySelectorAll( "a" );

    link.className = "current";

    for( var j = 0; j < a.length; ++j ) {
      var cur = a[j];
      if( cur !== link ) {
        cur.className = "";
      }
    }
  }
};

document.addEventListener( "DOMContentLoaded", function() {
  var aSlider = new Slider( "#slider" );

});











// var productItems = document.querySelectorAll('.products__items');
// var productPoint = document.querySelectorAll('.products__point');


// for (var i = 0 ; i < productItems.length; i++) {
//   console.log('Цикл:' + i);
//   productPoint[i].addEventListener("click" , function(event) {console.log("Это блять " + i)});
// };


// function removeVH() {

//   console.log("Функция сработала");
//   slide[i].classList.remove('visually-hidden');
// };




      //в момент клика снова проходим по слайдам и удаляем ВХ
      // for (var i = 0 ; i < productItems.length; i++) {
      //   // productItems[i].classList.remove('visually-hidden');

      // }


// productPoint[1].addEventListener( "click" , function() {
//   console.log('i' + productItems[1]);
//   productItems[1].classList.remove('visually-hidden');
// });


// for (var i = 0 ; i < productItems.length; i++) {
//   console.log(productItems[i]);
//   removeVH(productItems, i);
// }




// тут способ с заранее заданной функцией и ее вызовом (не работает - запускается без клика)


// for (var i = 0 ; i < productItems.length; i++) {
//   productPoint[i].addEventListener( "click" , removeVH(productItems, i));
// }









// var productPoint = document.querySelectorAll('products__point');

// for (var i = 0 ; i < productPoint.length; i++) {
//   productPoint[i].addEventListener( "click" , function() {
//     var productItems = document.querySelectorAll('products__items');
//     productItems[i].classList.remove('.visually-hidden');
//   });

// }



// var showSlide = function() {
//   var productItems = document.querySelectorAll('products__items');
//   var productPoint = document.querySelectorAll('products__point');

//   for (var i = 0 ; i < productItems.length; i++) {
//   console.log('1:' + productItems[i]);
//     productPoint[i].addEventListener( "click" , function(){
//       var slides = [];
//       slides[i] = productItems[i];
//       console.log('2:' + productItems[i])
//       slides[i].classList.remove('.visually-hidden');
//     });
//   }
// }

// showSlide();


// var productPagination = document.querySelector('.products__pagination');

// // console.log('1:' + productItems[0]);

// var toggleVHidden = function (slide, i) {
//   slide[i].classList.remove('visually-hidden');
// };


// var showSlide = function (slides, point) {
//   for (var i = 0 ; i < slides.length; i++) {
//     point[i].addEventListener( "click" , function(){
//       slides[i].classList.remove('visually-hidden');
//     });
//   }
// };






// showSlide(productItems, productPoint);



// for (var i = 0 ; i < productItems.length; i++) {
//   productPoint[i].addEventListener( "click" , function(){slide[i].classList.remove('visually-hidden');}); //toggleVHidden(productItems, i)
// };


// var showSlide = function(slides) {
//   console.log(slides[i].classList);
//   slides[i].classList.remove('visually-hidden');
//   // for (var i = 0 ; i < slides.length; i++) {
//   //   if(!slides[i].classList.contains('visually-hidden')) {
//   //     slides[i].classList.add('visually-hidden');
//   //   }
//   // }
// };



// for (var i = 0 ; i < productItems.length; i++) {
//    productPoint[i].addEventListener( "click" , showSlide(productItems));
// };

// for

//допустим сделаем функцию смены слайдов
// var changeSlide = function () {
//   productItems[]
// }


// 1 слайд - 1 кнопка.
//Нажимаем на кнопку - убираем невидимость у текущего слайда, добавляем невидимость всем другим слайдам.
