// JavaScript
console.log('Hello world!');

document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for menu links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop - 50, // You can adjust the offset as needed
              behavior: 'smooth'
          });
      });
  });
});

// mapの表示
var map = L.map('map').setView([33.672293326486994, 130.44982208243596], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 //アイコン定義
 const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' });　
  L.marker([33.672293326486994, 130.44982208243596],{ icon: whiteIcon }).addTo(map).bindPopup('ここだよ！！').openPopup();
  
  circle.bindPopup("半径1kmの範囲");

  // スライドショー
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });