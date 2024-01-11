$('.popup-single').magnificPopup({
  type: 'image',
  gallery: { enabled: true },
  mainClass: 'mfp-fade',
  removalDelay: 300,
  closeBtnInside: true,
});

$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: { enabled: true },
  mainClass: 'mfp-fade',
  removalDelay: 300,
});

$('.popup-text').magnificPopup({
  type: 'inline',
  mainClass: 'mfp-fade',
});
$('.inline-wrap__close').on('click', function (e) { 
  e.preventDefault();
  $.magnificPopup.close();
});


$('.popup-iframe').magnificPopup({
  type: 'iframe',
  disableOn: 500, 
  mainClass: 'mfp-fade',
  removalDelay: 200,
  fixedContentPos: false
});


